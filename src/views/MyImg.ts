class MyImg extends eui.Component{
	id:number;
	ox:number;
	oy:number;
	texture:egret.Texture;
	text:string;

	img:eui.Image;
	showText:boolean = false;
	public constructor() {
		super();
		this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.click,this);
	}

	protected childrenCreated(): void {
		

		super.childrenCreated();
		var img = new eui.Image();
		img.width = 70;
		img.height = 70;
		img.texture = this.texture;
		img.anchorOffsetX = this.width/2;
		img.anchorOffsetY = this.height/2;
		img.x = this.width/2;
		img.y = this.height/2;
		this.addChild(img);
		this.img = img;


		
		if(this.showText){
			let text = new eui.Label();
			text.text = this.ox+"-"+this.oy;
			text.textColor=0x0;
			text.size = 12;
			text.percentWidth = 100;
			text.textAlign = "center"
			text.y = this.height;
			text.addEventListener(egret.Event.ENTER_FRAME,()=>{
				text.text = this.ox+"-"+this.oy;
				// text.text = this.id+""
			},this);
			this.addChild(text);
		}

	}

	public say(msg:string){
		let msgComponent = new TextMessage();
		this.addChild(msgComponent);
		msgComponent.anchorOffsetX = msgComponent.width /2;
		msgComponent.x = this.width/2;
		msgComponent.setText(msg);
		let tw = egret.Tween.get(msgComponent, { loop: false });
		tw.wait(300).to({ y: -200, alpha:0}, 5000, egret.Ease.backIn).call(()=>{
			this.removeChild(msgComponent);
		})
		// TweenMax.to(msgComponent,5,{ y: -200, alpha:0,ease: Cubic.easeOut})
	}

	public click(event:egret.TouchEvent){
		event.stopPropagation();
		event.preventDefault();
		console.log("aaaaa")
		if(this.text == null){
			return;
		}
		let panel = new MsgShowPanel();
		LayerMamager.getInstance().get("PopUpLayer").addChild(panel);
		panel.label.text = this.text;
		LayerMamager.getInstance().get("PopUpLayer").visible = true;
	}
}