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

	joyStick: joyStick.JoyStickComponent;

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
        
			this.bgUtil.ang = -e.data.angle/180*Math.PI;
			this.bgUtil.power = e.data.power;

        }, this);

		this.bgUtil = new BgSceneUtil();
		this.bgUtil.ang = Math.PI / 4;
		this.bgUtil.moveSpeed = 10;
		this.bgUtil.power = 0.5;
		this.addEventListener(egret.Event.ENTER_FRAME, this.onFrame, this);

		this.worldX = 1280;
		this.worldY = 2572;
		this.dx = 0;
		this.dy = 0;
		this.width = 1280;
		this.height = 2272;
		this.originx = -(this.width - 640) / 2;
		this.originy = -(this.height - 1136) / 2;

		this.init(this.worldX,this.worldY);

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
		NetTool.get("http://192.168.3.21:8080/data/test/bgList?offset=0&pageSize=10").then(ag => {
			let e:any = ag;
			console.log(e,worldX,worldY);

			//todo 删除出界的老元素
			for(let key in this.idMap){
				try{
					this.parent.removeChild(this.idMap[key]);
					this.idMap[key] = undefined;
				}catch(e){
					console.log("老元素移除失败");
				}
			}

			//添加新元素
			for(let i in e){
				let ele = e[i];
				if(this.idMap[ele.id]){
					continue;
				}
				let img = new MyImg();
				img.id = ele.id;
				img.texture = RES.getRes(ele.url);
				img.ox = ele.worldX
				img.oy = ele.worldY
				this.justEle(img);
				this.idMap[img.id] = img;
				this.parent.addChild(img);
			}
			this.parent.addChild(this.joyStick);
		})
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		
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

		//重新布局
		if (!(Math.abs(this.dx) < 320 && Math.abs(this.dy) < 1136 / 2 - 100)) {
			console.log("重新布局")
			this.worldX = this.worldX - this.dx;
			this.worldY = this.worldY - this.dy;
			this.dx = 0;
			this.dy = 0;
			this.init(this.worldX,this.worldY);
		}


	}



}