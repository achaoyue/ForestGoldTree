class SelectElement extends eui.Component implements  eui.UIComponent {
public tree1Img:eui.Image;
public grassImg:eui.Image;
public tree2Img:eui.Image;
public tree3Img:eui.Image;
public houseImg:eui.Image;
public closeBtn:eui.Image;



	map = {};
	selected = null;
	mainScene:MainScene2;
	public constructor(mainScene) {
		super();
		this.mainScene = mainScene;
		this.visible =false;
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		this.tree1Img.addEventListener(egret.TouchEvent.TOUCH_TAP,this.click,this);
		this.grassImg.addEventListener(egret.TouchEvent.TOUCH_TAP,this.click,this);
		this.tree2Img.addEventListener(egret.TouchEvent.TOUCH_TAP,this.click,this);
		this.tree3Img.addEventListener(egret.TouchEvent.TOUCH_TAP,this.click,this);
		this.houseImg.addEventListener(egret.TouchEvent.TOUCH_TAP,this.click,this);
		this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.close,this);

		this.mainScene.parent.addEventListener(egret.TouchEvent.TOUCH_TAP,this.listList,this);
	}

	public click(e:egret.Event){
		if(this.tree1Img == e.target){
			this.selected = "tree1_png";
		}else if(this.tree2Img == e.target){
			this.selected = "tree2_png";
		}else if(this.tree3Img == e.target){
			this.selected = "tree3_png";
		}else if(this.grassImg == e.target){
			this.selected = "grass_png";
		}else if(this.houseImg == e.target){
			this.selected = "house1_png";
		}
	}

	public listList(e:egret.TouchEvent){
		event.stopPropagation();
		event.preventDefault();
		let point = this.mainScene.globalToLocal(e.stageX,e.stageY);
		let param = {
			url:this.selected,
			worldX:Math.round(this.mainScene.worldX + point.x),
			worldY:Math.round(this.mainScene.worldY+ point.y),
			deleted:0
		};
		console.log(param);

		if(this.selected == null){
			return;
		}
		
		NetTool.get("http://192.168.3.21:8080/data/test/saveBgList?",param).then((ag:any) => {
			console.log(ag);
			this.visible = false;
			
			let img = new MyImg();
				img.id = ag.id;
				img.texture = RES.getRes(ag.url);
				img.ox = ag.worldX
				img.oy = ag.worldY
				this.mainScene.justEle(img);
				this.mainScene.idMap[img.id] = img;
				this.mainScene.parent.addChild(img);
		})
	}
	

	public close(){
		this.visible = false;
		LayerMamager.getInstance().get("PopUpLayer").visible = false;
	}
}