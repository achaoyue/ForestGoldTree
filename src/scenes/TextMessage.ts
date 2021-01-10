class TextMessage extends eui.Component implements  eui.UIComponent {
	public msgLabel:eui.Label;


	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
	}

	public setText(text:string){
		// console.log(this.msgLabel);
		this.msgLabel.text = text;
	}
	
}