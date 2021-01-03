class MyImg extends eui.Component{
	id:number;
	ox:number;
	oy:number;
	texture:egret.Texture;

	textfield:egret.TextField;
	img:eui.Image;
	public constructor() {
		super();
		this.addEventListener(egret.Event.ENTER_FRAME, this.onFrame, this);
	}

	protected childrenCreated(): void {
		

		super.childrenCreated();
		var img = new eui.Image();
		img.width = 70;
		img.height = 70;
		img.texture = this.texture;
		this.addChild(img);
		this.img = img;

		let textfield = new egret.TextField();
        this.addChild(textfield);
        textfield.alpha = 1;
        textfield.width = 172;
        textfield.textAlign = egret.HorizontalAlign.LEFT;
        textfield.size = 24;
        textfield.textColor = 0x000000;
        textfield.x = 0;
        textfield.y = 0;
		textfield.text = this.x+"-"+this.y;
		this.textfield = textfield;
		this.addChild(textfield);
	}

	private onFrame(){
	
		if(this.textfield){
			this.textfield.text =this.id+","+ parseInt((this.ox)+"")+"-"+parseInt(this.oy+"");
		}
	}

}