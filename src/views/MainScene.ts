class MainScene extends eui.Component implements  eui.UIComponent {
	bgUtil:BgSceneUtil;
	public constructor() {
		super();
		this.bgUtil = new BgSceneUtil();
		this.bgUtil.ang = Math.PI/4;
		this.bgUtil.moveSpeed = 10;
		this.addEventListener(egret.Event.ENTER_FRAME,this.onFrame,this);

		this.width = 1000;
		this.height = 1000;
		let img = new eui.Image();
		img.texture = RES.getRes("egret_icon_png");
		let width = img.texture.textureWidth;
		let height = img.texture.textureHeight;

		for(let i = 0;i<1000;){
			for(let j = 0;j<1000;){
				let img = new eui.Image();
				img.texture = RES.getRes("egret_icon_png");
				img.x = i;
				img.y = j;
				this.addChild(img);
				j+=img.height;
			}
			i+=width;
		}
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
		
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
	}

	public onFrame():void{
		this.bgUtil.move(this);
	}


	
}