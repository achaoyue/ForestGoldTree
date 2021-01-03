class MainScene2 extends eui.Component implements eui.UIComponent {
	react : MyRect;
	bgUtil: BgSceneUtil;
	worldX: number;
	worldY: number;

	originx: number;
	originy: number;

	dx: number;
	dy: number;

	idMap = {};
	newMap = {};
	

	joyStick: joyStick.JoyStickComponent;
	socket : egret.WebSocket;

	player : eui.Image;
	players  = {};
	lastSendTime:number = 0;

	public constructor() {
		super();

		var bg = RES.getRes("Back_01_png");
        var joyTexture = RES.getRes("Joystick_03_png");
		this.joyStick = new joyStick.JoyStickComponent(joyStick.joyStickType.TYPE_EIGHT,bg,joyTexture)
		this.joyStick.width = 200;
		this.joyStick.height = 200;
		this.joyStick.x = 20;
		this.joyStick.y = 900
		this.joyStick.zIndex = 1000000000000
		this.joyStick.scaleX=0.5;
		this.joyStick.scaleY = 0.5;
		this.joyStick.addEventListener(joyStick.joyStickEvent.EVENT_JOY_CHANGE, (e: egret.Event) => {
        
			this.bgUtil.ang = (-e.data.angle+180)/180*Math.PI;
			this.bgUtil.power = e.data.power;
			this.player.rotation = -e.data.angle+90;
			this.bgUtil.dirX = e.data.x;
			this.bgUtil.dirY = e.data.y;
        }, this);
		this.joyStick.addEventListener(joyStick.joyStickEvent.EVENT_JOY_END, (e: egret.Event) => {
			this.bgUtil.power = 0;
        }, this);

		this.bgUtil = new BgSceneUtil();
		this.bgUtil.ang = Math.PI / 4;
		this.bgUtil.moveSpeed = 10;
		this.bgUtil.power = 0;
		this.addEventListener(egret.Event.ENTER_FRAME, this.onFrame, this);

		this.worldX = 0;
		this.worldY = 0;
		this.dx = 0;
		this.dy = 0;
		this.width = 1280+640;
		this.height = 2272+1136;
		this.originx = -(this.width - 640) / 2;
		this.originy = -(this.height - 1136) / 2;
		this.worldX = this.originx;
		this.worldY = this.originy;

		this.init(this.worldX,this.worldY);

		this.initWebsocket();

	}

	public justEle(img: any) {
		img.x = img.ox - this.worldX;
		img.y = img.oy - this.worldY;
		let p: egret.Point = this.localToGlobal(img.x, img.y);
		img.x = p.x;
		img.y = p.y;
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}

	private init(worldX:number,worldY:number): void {
		let param = {
			startx:worldX,
			starty:worldY,
			endx:worldX+this.width,
			endy:worldY+this.height,
			pageSize:200
		};
		NetTool.get("http://192.168.3.21:8080/data/test/bgList?",param).then(ag => {
			let e:any = ag;
			// console.log(e,worldX,worldY);

			for(let i in e){
				let ele = e[i];
				if(this.idMap[ele.id]){
					this.newMap[ele.id] = this.idMap[ele.id]
					continue;
				}
				let img = new MyImg();
				img.id = ele.id;
				img.texture = RES.getRes(ele.url);
				img.ox = ele.worldX
				img.oy = ele.worldY
				this.justEle(img);
				this.newMap[img.id] = img;
			}
			for(let key in this.idMap){
				try{
					if(!this.newMap[key]){
						this.parent.removeChild(this.idMap[key]);
						this.idMap[key] = undefined;
					}
				}catch(e){
					console.log("老元素移除失败");
				}
			}
			this.idMap = this.newMap;
			this.newMap = {};

			for(let key in this.idMap){
				this.parent.addChild(this.idMap[key]);
			}

			this.parent.addChild(this.joyStick);
			// this.parent.addChild(this.player);
		})
	}

	private initWebsocket() {
		this.socket = new egret.WebSocket();
		this.socket.type = egret.WebSocket.TYPE_STRING;
		//添加收到数据侦听，收到数据会调用此方法
		this.socket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
		//添加链接打开侦听，连接成功会调用此方法
		this.socket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
		//添加链接关闭侦听，手动关闭或者服务器关闭连接会调用此方法
		this.socket.addEventListener(egret.Event.CLOSE, this.onSocketClose, this);
		//添加异常侦听，出现异常会调用此方法
		this.socket.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketError, this);
		//连接服务器
		this.socket.connectByUrl("ws://192.168.3.21:8080/websocket")
	}

	public onReceiveMessage():void{
		let msg = this.socket.readUTF();
		// console.log(msg);
		let jsonMsg = JSON.parse(msg);
		let player = this.players[jsonMsg.id];
		if(jsonMsg.type == 2){
			if(player == null){
				var p = RES.getRes("turtle2_png");
				var img = new MyImg();
				img.width = 70;
				img.height = 70;
				img.texture = p;
				img.x = (this.parent.width - img.width) /2;
				img.y = (this.parent.height - img.height)/2;
				img.anchorOffsetX = img.width/2;
				img.anchorOffsetY = img.height/2;
				
				player = img;
				this.players[jsonMsg.id] = img;
				this.parent.addChild(img);
			}
			player.rotation = Math.atan2(jsonMsg.dirX,-jsonMsg.dirY)*180/Math.PI
			// console.log((Math.atan2(jsonMsg.dirX,-jsonMsg.dirY)*180/Math.PI+360)%360)
			player.id = jsonMsg.id;
			player.ox = jsonMsg.targetX;
			player.oy = jsonMsg.targetY;
			player.ox = jsonMsg.targetX+this.width/2;
			player.oy = jsonMsg.targetY+this.height/2;
			
		}else if(jsonMsg.type == 4){
			if(player != null && player.parent){
				player.parent.removeChild(player);
			}
		}
	}

	public onSocketOpen():void{
		console.log("connect")
		this.socket.flush();
	}
	public onSocketClose():void{
		console.log("close")
	}
	public onSocketError():void{
		console.log("close")
	}
	private sendMsg(msg:any) {
		this.socket.writeUTF(JSON.stringify(msg));
	}

	protected childrenCreated(): void {
		super.childrenCreated();
		var p = RES.getRes("turtle2_png");
		var img = new eui.Image(p);
		img.width = 70;
		img.height = 70;
		img.x = (this.parent.width - img.width) /2;
		img.y = (this.parent.height - img.height)/2;
		img.anchorOffsetX = img.width/2;
		img.anchorOffsetY = img.height/2;
		this.player = img;
	}

	public onFrame(): void {
		//背景移动量计算
		this.dx = this.dx + Math.cos(this.bgUtil.ang) * this.bgUtil.moveSpeed * this.bgUtil.power;
		this.dy = this.dy + Math.sin(this.bgUtil.ang) * this.bgUtil.moveSpeed * this.bgUtil.power;
		//背景移动
		this.x = this.originx + this.dx;
		this.y = this.originy + this.dy;

		//元素移动
		for(let key in this.idMap){
			this.justEle(this.idMap[key]);
		}
		//元素移动
		for(let key in this.newMap){
			this.justEle(this.newMap[key]);
		}

		for(let key in this.players){
			this.justEle(this.players[key]);
		}

		let movdCmd = {
 			"type": 2,
  			"dirX": this.bgUtil.dirX,
  			"dirY": this.bgUtil.dirY,
  			"targetX": this.worldX-this.dx,
  			"targetY": this.worldY-this.dy,
  			"id": 0
		}
		let now = new Date().getTime();
		if(now - this.lastSendTime > 200 && this.bgUtil.power>0){
			this.sendMsg(movdCmd);
			this.lastSendTime = now;
		}

		//重新布局
		if (!(Math.abs(this.dx) < 320 && Math.abs(this.dy) < 1136 / 2 - 100)) {
			// console.log("重新布局")
			this.worldX = this.worldX - this.dx;
			this.worldY = this.worldY - this.dy;
			this.dx = 0;
			this.dy = 0;
			this.init(this.worldX,this.worldY);
		}


	}



}