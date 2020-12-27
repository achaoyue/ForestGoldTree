class MainScene2 extends eui.Component implements eui.UIComponent {
	bgUtil: BgSceneUtil;
	worldX: number;
	worldY: number;

	originx: number;
	originy: number;

	dx: number;
	dy: number;

	element = [];

	public constructor() {
		super();
		this.bgUtil = new BgSceneUtil();
		this.bgUtil.ang = Math.PI / 4;
		this.bgUtil.moveSpeed = 2;
		this.addEventListener(egret.Event.ENTER_FRAME, this.onFrame, this);

		this.worldX = 1280;
		this.worldY = 2272;
		this.dx = 0;
		this.dy = 0;
		this.width = 1280;
		this.height = 2272;
		this.originx = -(this.width - 640) / 2;
		this.originy = -(this.height - 1136) / 2;

		for (let i = 0; i < 300; i++) {

			let img = new MyImg();
			img.texture = RES.getRes("egret_icon_png");
			img.ox = Math.random() * 1280 + this.worldX;
			img.oy = Math.random() * 2272 + this.worldY;
			this.element.push(img);
			this.justEle(img);
			this.localToGlobal()
		}

	}

	public justEle(img: MyImg) {
		img.x = img.ox - this.worldX;
		img.y = img.oy - this.worldY;
		let p: egret.Point = this.localToGlobal(img.x, img.y);
		img.x = p.x;
		img.y = p.y;
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);

	}

	private init(): void {
		NetTool.get("http://localhost:8080/data/test/bgList?offset=0&pageSize=10").then(e => {
			console.log(e);
			// this.element.forEach(e => {
			// 	this.parent.removeChild(e);
			// });

			// this.element.forEach(e => {
			// 	this.parent.addChild(e);
			// })
		})
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.element.forEach(e => {
				this.parent.addChild(e);
			})
	}

	public onFrame(): void {
		//背景移动量计算
		this.dx = this.dx + Math.cos(this.bgUtil.ang) * this.bgUtil.moveSpeed;
		this.dy = this.dy + Math.sin(this.bgUtil.ang) * this.bgUtil.moveSpeed;
		//背景移动
		this.x = this.originx + this.dx;
		this.y = this.originy + this.dy;

		this.element.forEach(e => {
			this.justEle(e);
		})

		//重新布局
		if (!(Math.abs(this.dx) < 320 && Math.abs(this.dy) < 1136 / 2 - 100)) {
			console.log("重新布局")
			this.worldX = this.worldX - this.dx;
			this.worldY = this.worldY - this.dy;
			this.dx = 0;
			this.dy = 0;
			this.init();
		}


	}



}