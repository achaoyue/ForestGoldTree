class MyImg extends eui.Component{
	id:number;
	ox:number;
	oy:number;
	texture:egret.Texture;

	img:eui.Image;
	public constructor() {
		super();
	}

	protected childrenCreated(): void {
		

		super.childrenCreated();
		var img = new eui.Image();
		img.width = 70;
		img.height = 70;
		img.texture = this.texture;
		img.anchorOffsetX = this.width/2;
		img.anchorOffsetY = this.height/2;
		this.addChild(img);
		this.img = img;

	}

	public say(msg:string){
		let msgComponent = new TextMessage();
		this.addChild(msgComponent);
		msgComponent.anchorOffsetX = msgComponent.width /2;
		msgComponent.setText(msg);
		// let tw = egret.Tween.get(msgComponent, { loop: false });
		// tw.wait(300).to({ y: -200, alpha:0}, 2000, egret.Ease.backIn).call(()=>{
		// 	this.removeChild(msgComponent);
		// })
		TweenMax.to(msgComponent,5,{ y: -200, alpha:0,ease: Cubic.easeOut})
	}
}