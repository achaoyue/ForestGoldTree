class LayerMamager {
	private static instance:LayerMamager;
	uiLayerMap = {};
	private constructor() {
		this.regist("GameLayer",new GameLayer());
		this.regist("OptionLayer",new OptionLayer());
	}

	public static getInstance(){
		if(this.instance == null){
			this.instance = new LayerMamager();
		} 
		return LayerMamager.instance;
	}

	public regist(key:string, layer:egret.DisplayObjectContainer):void{
		this.uiLayerMap[key] = layer;
	}

	public get(key:string):egret.DisplayObjectContainer{
		return this.uiLayerMap[key];
	}
}