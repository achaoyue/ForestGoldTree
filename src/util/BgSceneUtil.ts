/**
 * 背景移动方法
 */

class BgSceneUtil  {
    moveSpeed:number;
    ang:number;
    power:number;
    dirX:number;
    dirY:number;
	
    public move(obj:eui.Component):void{
        obj.x = obj.x + Math.cos(this.ang)*this.moveSpeed;
        obj.y = obj.y + Math.sin(this.ang)*this.moveSpeed;
    }
	
}