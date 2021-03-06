//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class Main extends eui.UILayer {
    private msgScene:SendTextScenes


    protected createChildren(): void {
        super.createChildren();

        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin
        })

        egret.lifecycle.onPause = () => {
            // egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }

        //inject the custom material parser
        //?????????????????????????????????
        let assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());


        this.runGame().catch(e => {
            console.log(e);
        })
    }

    private async runGame() {
        await this.loadResource()
        this.createGameScene();
        const result = await RES.getResAsync("description_json")
        // this.startAnimation(result);
        await platform.login();
        const userInfo = await platform.getUserInfo();
        console.log(userInfo);

    }

    private async loadResource() {
        try {
            const loadingView = new LoadingUI();
            this.stage.addChild(loadingView);
            await RES.loadConfig("resource/default.res.json", "resource/");
            await this.loadTheme();
            await RES.loadGroup("preload", 0, loadingView);
            this.stage.removeChild(loadingView);
        }
        catch (e) {
            console.error(e);
        }
    }

    private loadTheme() {
        return new Promise((resolve, reject) => {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //??????????????????????????????,??????????????????????????????????????????????????????
            let theme = new eui.Theme("resource/default.thm.json", this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, () => {
                resolve();
            }, this);

        })
    }

    private textfield: egret.TextField;
protected test(){
    let main = new MainScene();
    this.addChild(main);
}

    /**
     * ??????????????????
     * Create scene interface
     */
    protected createGameScene(): void {
        
        // if(1==1){
        //     this.test();
        //     return;
        // }

        let gameLayer = new GameLayer();
        this.addChild(gameLayer);

        let optionLayer = new OptionLayer();
        this.addChild(optionLayer);
        LayerMamager.getInstance().regist("OptionLayer",optionLayer);

        let popUpLayer = new PopUpLayer();
        this.addChild(popUpLayer)
        LayerMamager.getInstance().regist("PopUpLayer",popUpLayer);

    
        let mainScene =  new MainScene2();
        mainScene.x = 0;
        mainScene.y = 0;
        gameLayer.addChild(mainScene);

        let select = new SelectElement(mainScene);
        select.y = 300;
        popUpLayer.addChild(select);


        let optionPanel = new OptionalPanel();
        optionPanel.selectElement = select;
        optionPanel.mainScene = mainScene;
        optionLayer.addChild(optionPanel);

        let leavePanel = new LeaveMessagePanel();
        leavePanel.mainScene = mainScene;
        optionPanel.leavePanel = leavePanel;
        popUpLayer.addChild(leavePanel);


        this.msgScene = new SendTextScenes();
        this.msgScene.x = 30;
        this.msgScene.y = 300;
        optionPanel.sendTextScenes = this.msgScene;
        popUpLayer.addChild(this.msgScene);

        popUpLayer.addEventListener("sendMsg",mainScene.msgListener,mainScene);
    }
    /**
     * ??????name?????????????????????Bitmap?????????name???????????????resources/resource.json????????????????????????
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    private createBitmapByName(name: string): egret.Bitmap {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }

}
