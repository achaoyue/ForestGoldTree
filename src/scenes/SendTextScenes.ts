class SendTextScenes extends eui.Component implements  eui.UIComponent {
	public inputText:eui.TextInput;
	public sendBut:eui.Button;
	public closeBtn:eui.Image;


	public constructor() {
		super();
		this.visible = false;
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		this.sendBut.addEventListener(egret.TouchEvent.TOUCH_TAP,this.sendMsg,this);
		this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.close,this);
	}

	public sendMsg(){
		let event = new egret.Event("sendMsg");
		event.data = this.inputText.text;
		this.parent.dispatchEvent(event);
		this.visible = false;
		this.close();
	}
	
	public close(){
		this.visible = false;
		LayerMamager.getInstance().get("PopUpLayer").visible = false;
	}
}