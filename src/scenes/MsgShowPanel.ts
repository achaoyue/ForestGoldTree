class MsgShowPanel extends eui.Component implements  eui.UIComponent {
	public label:eui.Label;
	public closeBtn:eui.Image;


	public constructor() {
		super();
		this.horizontalCenter = 0;
		this.verticalCenter = 0;
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.close,this);
	}
	
	public close(){
		if(this.parent){
			this.parent.removeChild(this);
		}
		LayerMamager.getInstance().get("PopUpLayer").visible = false;
	}
}