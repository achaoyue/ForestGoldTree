class MainScene extends eui.Component implements  eui.UIComponent {
	bgUtil:BgSceneUtil;
	react:eui.Rect;

	worldX: number;
	worldY: number;

	originx: number;
	originy: number;

	dx: number;
	dy: number;

	public constructor() {
		super();
		


		this.worldX = 0;
		this.worldY = 0;
		this.dx = 0;
		this.dy = 0;
		this.width = 1280+640;
		this.height = 2425;
		this.originx = -(this.width - 640) / 2;
		this.originy = -(this.height - 1136) / 2;
		this.worldX = this.originx;
		this.worldY = this.originy;

		this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.click,this);
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
		
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		this.react = new eui.Rect();
		this.react.x = 0;
		this.react.y = 0;
		this.react.width = 1300
		this.react.height = 2000;
		this.react.fillColor = 0xF0ADAD
		// this.react.alpha = 1;
		// this.react.percentWidth=100;
		// this.react.percentHeight = 100;
		// this.addChild(this.react);
	}

	public onFrame():void{
		
	}

	public click(){
		console.log("click");
	}
	
}