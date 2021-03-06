/// <reference path="../../libs/joyStick/joyStick.d.ts" />

class MainScene2 extends eui.Component implements eui.UIComponent {
	react:eui.Rect;
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
		this.joyStick.zIndex = 100000000;
		this.joyStick.addEventListener(egret.TouchEvent.TOUCH_BEGIN,(e)=>{
			e.stopPropagation();
			e.preventDefault();
		},this);
		this.joyStick.addEventListener(joyStick.joyStickEvent.EVENT_JOY_CHANGE, (e: egret.Event) => {
        	e.stopPropagation();
			e.preventDefault();
			this.bgUtil.ang = (-e.data.angle+180)/180*Math.PI;
			this.bgUtil.power = e.data.power;
			this.player.rotation = -e.data.angle+90;
			this.bgUtil.dirX = e.data.x;
			this.bgUtil.dirY = e.data.y;
        }, this);
		this.joyStick.addEventListener(joyStick.joyStickEvent.EVENT_JOY_END, (e: egret.Event) => {
			e.stopPropagation();
			e.preventDefault();
			this.bgUtil.power = 0;
        }, this);

		this.bgUtil = new BgSceneUtil();
		this.bgUtil.ang = Math.PI / 4;
		this.bgUtil.moveSpeed = 10;
		this.bgUtil.power = 0;
		this.addEventListener(egret.Event.ENTER_FRAME, this.onFrame, this);

		this.dx = 0;
		this.dy = 0;
		this.width = 1280+640;
		this.height = 2272+1136;
		this.originx = -(this.width - 640) / 2;
		this.originy = -(this.height - 1136) / 2;
		this.worldX = this.originx;
		this.worldY = this.originy;

		let positionParamStr = egret.localStorage.getItem("locationParam");
		if(positionParamStr == null){
			positionParamStr = JSON.stringify({
				worldX:-640,
				worldY:-1136,
				stageX:0,
				stageY:0
			});
		}
		let positionParam = JSON.parse(positionParamStr);
		this.worldX = positionParam.stageX || 0;
		this.worldY = positionParam.stageY || 0;

		this.init(this.worldX,this.worldY);

		this.initWebsocket();

		this.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
			console.log("adsfasdf")
	},this);
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

	public init(worldX:number,worldY:number): void {
		let param = {
			startx:worldX,
			starty:worldY,
			endx:worldX+this.width,
			endy:worldY+this.height,
			pageSize:700
		};
		NetTool.get(Config.getConfig().httpUrl+"/data/test/bgList?",param).then(ag => {
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
				img.text = ele.text;
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
					console.log("?????????????????????");
				}
			}
			this.idMap = this.newMap;
			this.newMap = {};

			for(let key in this.idMap){
				this.parent.addChild(this.idMap[key]);
			}
		})
	}

	private initWebsocket() {
		this.socket = new egret.WebSocket();
		this.socket.type = egret.WebSocket.TYPE_STRING;
		//?????????????????????????????????????????????????????????
		this.socket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
		//?????????????????????????????????????????????????????????
		this.socket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
		//????????????????????????????????????????????????????????????????????????????????????
		this.socket.addEventListener(egret.Event.CLOSE, this.onSocketClose, this);
		//???????????????????????????????????????????????????
		this.socket.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketError, this);
		let positionParamStr = egret.localStorage.getItem("locationParam");
		if(positionParamStr == null){
			positionParamStr = JSON.stringify({
				worldX:-640,
				worldY:-1136
			});
		}
		let positionParam = JSON.parse(positionParamStr);
		//???????????????
		this.socket.connectByUrl(Config.getConfig().wsUrl+positionParam.worldX+"/"+positionParam.worldY);
	}

	public onReceiveMessage():void{
		let msg = this.socket.readUTF();
		let jsonMsg = JSON.parse(msg);
		let player:MyImg = this.players[jsonMsg.id];
		if(jsonMsg.type == 2 || jsonMsg.type == 1){
			if(player == null){
				var p = RES.getRes(jsonMsg.pic);
				var img = new MyImg();
				img.width = 70;
				img.height = 70;
				img.texture = p;
				img.showText = true;
				img.x = (this.parent.width - img.width) /2;
				img.y = (this.parent.height - img.height)/2;
				img.anchorOffsetX = img.width/2;
				
				player = img;
				player.id = jsonMsg.id;
				player.ox = jsonMsg.targetX+this.width/2;
				player.oy = jsonMsg.targetY+this.height/2;

				if(!this.checkRect(player)){
					return;
				}
				this.players[jsonMsg.id] = img;
				this.justEle(img)
				this.parent.addChild(img);
			}
			player.img.rotation = Math.atan2(jsonMsg.dirX,-jsonMsg.dirY)*180/Math.PI
			// console.log((Math.atan2(jsonMsg.dirX,-jsonMsg.dirY)*180/Math.PI+360)%360)
			player.id = jsonMsg.id;
			player.ox = jsonMsg.targetX+this.width/2;
			player.oy = jsonMsg.targetY+this.height/2;
			
			
		}else if(jsonMsg.type == 3){
			if(player == null){
				return;
			}
			player.say(jsonMsg.text);
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

	private checkRect(msg:any){
		let worldX = this.format(Math.round(this.worldX-this.dx + this.width/2));
		let worldY = this.format(Math.round(this.worldY-this.dy + this.height/2));
		let maxX = worldX + 320*3 - 10;
		let minX = worldX - 320*2 + 10;
		let maxY = worldY + 320*4 - 10;
		let minY = worldY - 320*3 + 10;
		if(!(msg.ox > minX && msg.ox<maxX && msg.oy>minY && msg.oy<maxY)){
			console.log(msg.id,msg.ox,msg.oy,minX,maxX,minY,maxY)
			return false;
		}
		return true;
	}

	private format(x){
		if(x<0){
			x = x - 320;
		}
		return Math.floor(x/320)*320;
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

		this.react = new eui.Rect();
		this.react.fillColor = 0x89c59c
		this.react.width=this.parent.width;
		this.react.height = this.parent.height;
		// this.parent.addChild(this.react);

		LayerMamager.getInstance().get("OptionLayer").addChild(this.joyStick);
		// this.parent.addChild(this.joyStick);
	}

// public onFrame(): void {
// 	let start = new Date().getTime();
// 	this.onFrame2();
// 	if(window.xx ==1){
// 		console.log(new Date().getTime() - start)
// 	}

// }
	public onFrame(): void {
		//?????????????????????
		this.dx = this.dx + Math.cos(this.bgUtil.ang) * this.bgUtil.moveSpeed * this.bgUtil.power;
		this.dy = this.dy + Math.sin(this.bgUtil.ang) * this.bgUtil.moveSpeed * this.bgUtil.power;
		//????????????
		this.x = this.originx + this.dx;
		this.y = this.originy + this.dy;

		//????????????
		for(let key in this.idMap){
			this.justEle(this.idMap[key]);
		}
		//????????????
		for(let key in this.newMap){
			this.justEle(this.newMap[key]);
		}

		for(let key in this.players){
			this.justEle(this.players[key]);
			if(!this.checkRect(this.players[key])){
				console.log("out of range",this.players[key].id)
				this.players[key].parent && this.players[key].parent.removeChild(this.players[key])
				delete this.players[key] 
			}
		}

		let movdCmd = {
 			"type": 2,
			"dirX": Math.round(this.bgUtil.dirX),
			"dirY": Math.round(this.bgUtil.dirY),
			  "targetX": Math.round(this.worldX-this.dx),
			  "targetY": Math.round(this.worldY-this.dy)
		}
		let now = new Date().getTime();
		if(now - this.lastSendTime > 20 && this.bgUtil.power>0){
			this.sendMsg(movdCmd);
			this.lastSendTime = now;
			let param = {
				worldX:Math.round(this.worldX-this.x + 320 - this.width/2),
				worldY:Math.round(this.worldY-this.y + 1136/2 - this.height/2),
				stageX:this.worldX-this.dx,
				stageY:this.worldY-this.dy
			};
			egret.localStorage.setItem("locationParam",JSON.stringify(param));
		}

		//????????????
		if (!(Math.abs(this.dx) < 320 && Math.abs(this.dy) < 1136 / 2 - 100)) {
			// console.log("????????????")
			this.worldX = this.worldX - this.dx;
			this.worldY = this.worldY - this.dy;
			this.dx = 0;
			this.dy = 0;
			this.init(this.worldX,this.worldY);
		}


	}

	public msgListener(event:egret.Event){
		let msg = {
			id:111,
			type:3,
			text:event.data
		}
		this.sendMsg(msg);
	}

	public fire(){
		let msg = {
			type:5,
		}
		this.sendMsg(msg);
	}


}