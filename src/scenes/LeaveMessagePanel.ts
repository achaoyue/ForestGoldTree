class LeaveMessagePanel extends eui.Component implements  eui.UIComponent {

	public subBtn:eui.Button;
public inputText:eui.EditableText;
public closeBtn:eui.Image;


	mainScene:MainScene2;
	public constructor() {
		super();
		this.visible = false;
		this.horizontalCenter=0;
		this.verticalCenter = 0;
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		this.subBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.submit,this);
		this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.close,this);
	}

	public submit(){
		console.log(this.inputText.text);

		let param = {
			url:"msg_png",
			worldX:Math.round(this.mainScene.worldX-this.mainScene.x + 320),
			worldY:Math.round(this.mainScene.worldY-this.mainScene.y + 1136/2),
			deleted:0,
			text:this.inputText.text
		};
		console.log(param)

		NetTool.get("http://lelefans.top:8081/data/test/saveBgList?",param).then((ag:any) => {
			console.log(ag);
			this.visible = false;
			
			let img = new MyImg();
				img.id = ag.id;
				img.texture = RES.getRes(ag.url);
				img.ox = ag.worldX
				img.oy = ag.worldY
				img.text = ag.text
				this.mainScene.justEle(img);
				this.mainScene.idMap[img.id] = img;
				this.mainScene.parent.addChild(img);
		})

		this.close();
	}

	public close(){
		this.inputText.text = "";
		this.visible = false;
		LayerMamager.getInstance().get("PopUpLayer").visible = false;
	}
	
}