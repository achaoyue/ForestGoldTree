declare module joyStick {
    class joyStickEvent {
        /** 摇杆按下开始接受事件时候派发 */
        static EVENT_JOY_START: string;
        /** 触摸抬起后出发摇杆本次摇杆事件结束 */
        static EVENT_JOY_END: string;
        /** 摇杆角度改变时候派发 */
        static EVENT_JOY_CHANGE: string;
        /** 初始化摇杆完成后触发 */
        static EVENT_INIT_COMPLETE: string;
    }
    class joyStickType {
        /** 四方位 */
        static TYPE_FOUR: number;
        /** 八方为 */
        static TYPE_EIGHT: number;
    }
    class JoyStickComponent extends eui.Component {
        private _joybg;
        private _joyStick;
        private _minAlpha;
        private _maxAlpha;
        private _angle;
        private _bgRadius;
        private _joyRadius;
        private _mouseX;
        private _mouseY;
        private _initJoyPoint;
        private _type;
        private _touchID;
        private _isSkinFlag;
        /**
         * 初始化摇杆参数
         * @param type 方向为定义在 joyStickType类下 目前仅实现八方为
         * @param joyBg 摇杆背景纹理(可选)
         * @param joyStick 摇杆纹理(可选)
         * @param skin //皮肤文件(可选)如果用exml必须满足 有_joybg和_joyStick两个eui.image控件
         */
        constructor(type: number, joyBg?: egret.Texture, joyStick?: egret.Texture, skin?: any);
        childrenCreated(): void;
        private onTouchBegin(e);
        private onTouchMove(e);
        private onTouchEnd(e);
        showJoy(callBack: () => void): void;
        endJoy(callBack: () => void): void;
        /**
         * 获取当前角度信息
         */
        getAngle(): number;
        destroy(): void;
    }
}
