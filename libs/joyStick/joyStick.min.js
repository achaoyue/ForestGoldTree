"use strict";
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var joyStick;
(function (joyStick_1) {
    var joyStickEvent = (function () {
        function joyStickEvent() {
        }
        /** 摇杆按下开始接受事件时候派发 */
        joyStickEvent.EVENT_JOY_START = "event_joy_start";
        /** 触摸抬起后出发摇杆本次摇杆事件结束 */
        joyStickEvent.EVENT_JOY_END = "event_joy_end";
        /** 摇杆角度改变时候派发 */
        joyStickEvent.EVENT_JOY_CHANGE = "event_joy_change";
        /** 初始化摇杆完成后触发 */
        joyStickEvent.EVENT_INIT_COMPLETE = "event_init_complete";
        return joyStickEvent;
    }());
    joyStick_1.joyStickEvent = joyStickEvent;
    __reflect(joyStickEvent.prototype, "joyStick.joyStickEvent");
    var joyStickType = (function () {
        function joyStickType() {
        }
        /** 四方位 */
        joyStickType.TYPE_FOUR = 4;
        /** 八方为 */
        joyStickType.TYPE_EIGHT = 8;
        return joyStickType;
    }());
    joyStick_1.joyStickType = joyStickType;
    __reflect(joyStickType.prototype, "joyStick.joyStickType");
    var JoyStickComponent = (function (_super) {
        __extends(JoyStickComponent, _super);
        /**
         * 初始化摇杆参数
         * @param type 方向为定义在 joyStickType类下 目前仅实现八方为
         * @param joyBg 摇杆背景纹理(可选)
         * @param joyStick 摇杆纹理(可选)
         * @param skin //皮肤文件(可选)如果用exml必须满足 有_joybg和_joyStick两个eui.image控件
         */
        function JoyStickComponent(type, joyBg, joyStick, skin) {
            var _this = _super.call(this) || this;
            _this._minAlpha = 0.4;
            _this._maxAlpha = 0.7;
            _this._angle = 0; //当前角度
            _this._bgRadius = 0; //背景半径
            _this._joyRadius = 0; //摇杆的半径
            _this._touchID = 0;
            _this._isSkinFlag = false;
            _this._type = type;
            if (skin) {
                _this._isSkinFlag = true;
                _this.once(egret.Event.COMPLETE, function () {
                    _this._isSkinFlag = false;
                    _this.childrenCreated();
                }, _this);
            }
            else {
                if (joyBg && joyStick) {
                    _this._joybg = new eui.Image(joyBg);
                    _this._joyStick = new eui.Image(joyStick);
                }
            }
            return _this;
        }
        JoyStickComponent.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            if (this._isSkinFlag)
                return;
            //初始化设置一些数据
            if (!this._joybg.parent)
                this.addChild(this._joybg);
            if (!this._joyStick.parent)
                this.addChild(this._joyStick);
            this.width = this._joybg.width;
            this.height = this._joybg.height;
            //初始化半径
            this._bgRadius = this._joybg.texture.textureWidth / 2;
            this._joyRadius = this._joyStick.texture.textureWidth / 2;
            this._joyStick.anchorOffsetX = this._joyStick.texture.textureWidth / 2;
            this._joyStick.anchorOffsetY = this._joyStick.texture.textureHeight / 2;
            this._initJoyPoint = new egret.Point(this.width / 2, this.height / 2);
            this._joyStick.x = this._initJoyPoint.x;
            this._joyStick.y = this._initJoyPoint.y;
            this.alpha = this._minAlpha;
            this.touchEnabled = true;
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
            this.dispatchEvent(new egret.Event(joyStickEvent.EVENT_INIT_COMPLETE));
        };
        JoyStickComponent.prototype.onTouchBegin = function (e) {
            var _this = this;
            if (this._touchID != 0) {
                return;
            }
            if (this._touchID == 0) {
                this._touchID = e.touchPointID;
            }
            this.showJoy(function () {
                _this._mouseX = e.stageX;
                _this._mouseY = e.stageY;
                _this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, _this.onTouchMove, _this);
                _this.stage.addEventListener(egret.TouchEvent.TOUCH_END, _this.onTouchEnd, _this);
                _this.dispatchEvent(new egret.Event(joyStickEvent.EVENT_JOY_START));
            });
        };
        JoyStickComponent.prototype.onTouchMove = function (e) {
            if (e.touchPointID != this._touchID)
                return;
            var moveX = e.stageX - this._mouseX;
            var moveY = e.stageY - this._mouseY;
            //本次移动亮
            var cx = this._joyStick.x;
            var cy = this._joyStick.y;
            moveX = cx + moveX;
            moveY = cy + moveY;
            //计算当前位置的点的角度要减去初始位置
            var rx = moveX - this._initJoyPoint.x;
            var ry = this._initJoyPoint.y - moveY;
            var atan = rx == 0 ? 0 : ry / rx;
            var radian = Math.atan(atan);
            var quadrant;
            //计算象限
            if (rx < 0) {
                if (ry >= 0) {
                    this._angle = radian / Math.PI * 180 + 180;
                    quadrant = 2;
                }
                else {
                    this._angle = radian / Math.PI * 180 + 180;
                    quadrant = 3;
                }
            }
            else {
                //x有半轴
                if (ry >= 0) {
                    this._angle = radian / Math.PI * 180;
                    quadrant = 1;
                }
                else {
                    this._angle = radian / Math.PI * 180 + 360;
                    quadrant = 4;
                }
            }
            //这里区分方向类别
            if (this._type == joyStickType.TYPE_FOUR) {
                //四方向
                if (this._angle >= 0 && this._angle < 45) {
                    this._angle = 0;
                }
                else if (this._angle >= 45 && this._angle < 90) {
                    this._angle = 90;
                }
                else if (this._angle >= 90 && this._angle < 135) {
                    this._angle = 90;
                }
                else if (this._angle >= 135 && this._angle < 180) {
                    this._angle = 180;
                }
                else if (this._angle >= 180 && this._angle < 225) {
                    this._angle = 180;
                }
                else if (this._angle >= 225 && this._angle < 270) {
                    this._angle = 270;
                }
                else if (this._angle >= 270 && this._angle < 315) {
                    this._angle = 270;
                }
                else if (this._angle >= 315 && this._angle < 360) {
                    this._angle = 0;
                }
                //根据角度重新赋值
            }
            var disance = Math.sqrt(rx * rx + ry * ry) + this._joyRadius;
            var power = disance;
            if (disance > this._bgRadius) {
                disance = this._bgRadius - this._joyRadius;
                moveX = Math.abs(Math.cos(radian) * disance);
                moveY = Math.abs(Math.sin(radian) * disance);
                switch (quadrant) {
                    case 1:
                        moveX += this._initJoyPoint.x;
                        moveY = this._initJoyPoint.y - moveY;
                        break;
                    case 2:
                        moveX = this._initJoyPoint.x - moveX;
                        moveY = this._initJoyPoint.y - moveY;
                        break;
                    case 3:
                        moveX = this._initJoyPoint.x - moveX;
                        moveY += this._initJoyPoint.y;
                        break;
                    case 4:
                        moveX += this._initJoyPoint.x;
                        moveY += this._initJoyPoint.y;
                        break;
                }
            }
            this._joyStick.x = moveX;
            this._joyStick.y = moveY;
            this._mouseX = e.stageX;
            this._mouseY = e.stageY;
            try {
                this.dispatchEventWith(joyStickEvent.EVENT_JOY_CHANGE, false, {
                    angle: this._angle,
                    y: -ry,
                    x: rx,
                    power: (power - this._joyRadius) / (this._bgRadius - this._joyRadius)
                });
            }
            catch (e) {
                console.log("摇杆错误", e);
            }
        };
        JoyStickComponent.prototype.onTouchEnd = function (e) {
            var _this = this;
            if (e.touchPointID != this._touchID)
                return;
            this._touchID = 0;
            this.endJoy(function () {
                _this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, _this.onTouchMove, _this);
                _this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, _this.onTouchEnd, _this);
                _this.dispatchEvent(new egret.Event(joyStickEvent.EVENT_JOY_END));
            });
        };
        JoyStickComponent.prototype.showJoy = function (callBack) {
            egret.Tween.get(this).to({ alpha: this._maxAlpha }, 100).call(function () {
                callBack();
            }, this);
        };
        JoyStickComponent.prototype.endJoy = function (callBack) {
            var _this = this;
            egret.Tween.get(this._joyStick).to({ x: this._initJoyPoint.x, y: this._initJoyPoint.y }, 100).call(function () {
                egret.Tween.get(_this).to({ alpha: _this._minAlpha }, 100).call(function () {
                    callBack();
                }, _this);
            }, this);
        };
        /**
         * 获取当前角度信息
         */
        JoyStickComponent.prototype.getAngle = function () {
            return this._angle;
        };
        JoyStickComponent.prototype.destroy = function () {
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
            egret.Tween.removeTweens(this);
            egret.Tween.removeTweens(this._joyStick);
        };
        return JoyStickComponent;
    }(eui.Component));
    joyStick_1.JoyStickComponent = JoyStickComponent;
    __reflect(JoyStickComponent.prototype, "joyStick.JoyStickComponent");
    window.joyStick = joyStick_1;
})(joyStick || (joyStick = {}));