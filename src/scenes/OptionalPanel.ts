class OptionalPanel extends eui.Component implements  eui.UIComponent {
	public addEleBtn:eui.Button;
	public msgBtn:eui.Button;
	public leaveBtn:eui.Button;


	public selectElement:SelectElement;
	public sendTextScenes:SendTextScenes;
	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void{
		super.partAdded(partName,instance);

	}


	protected childrenCreated():void{
		super.childrenCreated();
		this.addEleBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.addEleBtnClick,this);
		this.msgBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.msgBtnClick,this);
		this.leaveBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.leaveBtnClick,this);
	}
	

	public addEleBtnClick(event:egret.TouchEvent){
		console.log("addEleBtnClick")
		this.selectElement.visible = true;
		LayerMamager.getInstance().get("PopUpLayer").visible = true;
	}


	public msgBtnClick(event:egret.TouchEvent){
		console.log("msgBtnClick")
		this.sendTextScenes.visible = true;
        LayerMamager.getInstance().get("PopUpLayer").visible = true;
	}


	public leaveBtnClick(event:egret.TouchEvent){

	}

}