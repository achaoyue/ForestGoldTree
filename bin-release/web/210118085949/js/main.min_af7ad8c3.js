var extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},__extends=function(e,t){function n(){this.constructor=e}extendStatics(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},__assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;r>n;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},__rest=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},__decorate=function(e,t,n,r){var i,o=arguments.length,a=3>o?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(3>o?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},__param=function(e,t){return function(n,r){t(n,r,e)}},__metadata=function(e,t){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(e,t):void 0},__awaiter=function(e,t,n,r){function i(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,o){function a(e){try{c(r.next(e))}catch(t){o(t)}}function s(e){try{c(r["throw"](e))}catch(t){o(t)}}function c(e){e.done?n(e.value):i(e.value).then(a,s)}c((r=r.apply(e,t||[])).next())})},__generator=function(e,t){function n(e){return function(t){return r([e,t])}}function r(n){if(i)throw new TypeError("Generator is already executing.");for(;c;)try{if(i=1,o&&(a=2&n[0]?o["return"]:n[0]?o["throw"]||((a=o["return"])&&a.call(o),0):o.next)&&!(a=a.call(o,n[1])).done)return a;switch(o=0,a&&(n=[2&n[0],a.value]),n[0]){case 0:case 1:a=n;break;case 4:return c.label++,{value:n[1],done:!1};case 5:c.label++,o=n[1],n=[0];continue;case 7:n=c.ops.pop(),c.trys.pop();continue;default:if(a=c.trys,!(a=a.length>0&&a[a.length-1])&&(6===n[0]||2===n[0])){c=0;continue}if(3===n[0]&&(!a||n[1]>a[0]&&n[1]<a[3])){c.label=n[1];break}if(6===n[0]&&c.label<a[1]){c.label=a[1],a=n;break}if(a&&c.label<a[2]){c.label=a[2],c.ops.push(n);break}a[2]&&c.ops.pop(),c.trys.pop();continue}n=t.call(e,c)}catch(r){n=[6,r],o=0}finally{i=a=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var i,o,a,s,c={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return s={next:n(0),"throw":n(1),"return":n(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s},__exportStar=function(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||__createBinding(t,e,n)},__createBinding=Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]},__values=function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},__read=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,o=n.call(e),a=[];try{for(;(void 0===t||t-->0)&&!(r=o.next()).done;)a.push(r.value)}catch(s){i={error:s}}finally{try{r&&!r.done&&(n=o["return"])&&n.call(o)}finally{if(i)throw i.error}}return a},__spread=function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(__read(arguments[t]));return e},__spreadArrays=function(){for(var e=0,t=0,n=arguments.length;n>t;t++)e+=arguments[t].length;for(var r=Array(e),i=0,t=0;n>t;t++)for(var o=arguments[t],a=0,s=o.length;s>a;a++,i++)r[i]=o[a];return r},__await=function(e){return this instanceof __await?(this.v=e,this):new __await(e)},__asyncGenerator=function(e,t,n){function r(e){d[e]&&(l[e]=function(t){return new Promise(function(n,r){u.push([e,t,n,r])>1||i(e,t)})})}function i(e,t){try{o(d[e](t))}catch(n){c(u[0][3],n)}}function o(e){e.value instanceof __await?Promise.resolve(e.value.v).then(a,s):c(u[0][2],e)}function a(e){i("next",e)}function s(e){i("throw",e)}function c(e,t){e(t),u.shift(),u.length&&i(u[0][0],u[0][1])}if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var l,d=n.apply(e,t||[]),u=[];return l={},r("next"),r("throw"),r("return"),l[Symbol.asyncIterator]=function(){return this},l},__asyncDelegator=function(e){function t(t,i){n[t]=e[t]?function(n){return(r=!r)?{value:__await(e[t](n)),done:"return"===t}:i?i(n):n}:i}var n,r;return n={},t("next"),t("throw",function(e){throw e}),t("return"),n[Symbol.iterator]=function(){return this},n},__asyncValues=function(e){function t(t){r[t]=e[t]&&function(r){return new Promise(function(i,o){r=e[t](r),n(i,o,r.done,r.value)})}}function n(e,t,n,r){Promise.resolve(r).then(function(t){e({value:t,done:n})},t)}if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,i=e[Symbol.asyncIterator];return i?i.call(e):(e="function"==typeof __values?__values(e):e[Symbol.iterator](),r={},t("next"),t("throw"),t("return"),r[Symbol.asyncIterator]=function(){return this},r)},__makeTemplateObject=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e["default"]=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&__createBinding(t,e,n);return __setModuleDefault(t,e),t},__importDefault=function(e){return e&&e.__esModule?e:{"default":e}},__classPrivateFieldGet=function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)},__classPrivateFieldSet=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n},__reflect=function(e,t,n){e.__class__=t,n?n.push(t):n=[t],e.__types__=e.__types__?n.concat(e.__types__):n};!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(r,i,function(t){return e[t]}.bind(null,i));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){n(1),n(2),n(3),n(4),n(5),n(6),n(7),n(8),n(9),n(10),n(11),n(12),n(13),n(14),n(15),n(16),n(17),n(18),n(19),n(20);var r=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.createChildren=function(){e.prototype.createChildren.call(this),egret.lifecycle.addLifecycleListener(function(e){}),egret.lifecycle.onPause=function(){},egret.lifecycle.onResume=function(){egret.ticker.resume()};var t=new AssetAdapter;egret.registerImplementation("eui.IAssetAdapter",t),egret.registerImplementation("eui.IThemeAdapter",new ThemeAdapter),this.runGame()["catch"](function(e){console.log(e)})},t.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){var e,t;return __generator(this,function(n){switch(n.label){case 0:return[4,this.loadResource()];case 1:return n.sent(),this.createGameScene(),[4,RES.getResAsync("description_json")];case 2:return e=n.sent(),[4,platform.login()];case 3:return n.sent(),[4,platform.getUserInfo()];case 4:return t=n.sent(),console.log(t),[2]}})})},t.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var e,t;return __generator(this,function(n){switch(n.label){case 0:return n.trys.push([0,4,,5]),e=new LoadingUI,this.stage.addChild(e),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return n.sent(),[4,this.loadTheme()];case 2:return n.sent(),[4,RES.loadGroup("preload",0,e)];case 3:return n.sent(),this.stage.removeChild(e),[3,5];case 4:return t=n.sent(),console.error(t),[3,5];case 5:return[2]}})})},t.prototype.loadTheme=function(){var e=this;return new Promise(function(t,n){var r=new eui.Theme("resource/default.thm.json",e.stage);r.addEventListener(eui.UIEvent.COMPLETE,function(){t()},e)})},t.prototype.test=function(){var e=new MainScene;this.addChild(e)},t.prototype.createGameScene=function(){var e=new GameLayer;this.addChild(e);var t=new OptionLayer;this.addChild(t),LayerMamager.getInstance().regist("OptionLayer",t);var n=new PopUpLayer;this.addChild(n),LayerMamager.getInstance().regist("PopUpLayer",n);var r=new MainScene2;r.x=0,r.y=0,e.addChild(r);var i=new SelectElement(r);i.y=300,n.addChild(i);var o=new OptionalPanel;o.selectElement=i,t.addChild(o);var a=new LeaveMessagePanel;a.mainScene=r,o.leavePanel=a,n.addChild(a),this.msgScene=new SendTextScenes,this.msgScene.x=30,this.msgScene.y=300,o.sendTextScenes=this.msgScene,n.addChild(this.msgScene),n.addEventListener("sendMsg",r.msgListener,r)},t.prototype.createBitmapByName=function(e){var t=new egret.Bitmap,n=RES.getRes(e);return t.texture=n,t},t}(eui.UILayer);window.Main=r,__reflect(r.prototype,"Main",[])},function(e,t){var n=function(){function e(){}return e.prototype.getAsset=function(e,t,n){function r(r){t.call(n,r,e)}if(RES.hasRes(e)){var i=RES.getRes(e);i?r(i):RES.getResAsync(e,r,this)}else RES.getResByUrl(e,r,this,RES.ResourceItem.TYPE_IMAGE)},e}();window.AssetAdapter=n,__reflect(n.prototype,"AssetAdapter",["eui.IAssetAdapter"])},function(e,t){var n=function(e){function t(){var t=e.call(this)||this;return t.createView(),t}return __extends(t,e),t.prototype.createView=function(){this.textField=new egret.TextField,this.addChild(this.textField),this.textField.y=300,this.textField.width=480,this.textField.height=100,this.textField.textAlign="center"},t.prototype.onProgress=function(e,t){this.textField.text="Loading..."+e+"/"+t},t}(egret.Sprite);window.LoadingUI=n,__reflect(n.prototype,"LoadingUI",["RES.PromiseTaskReporter"])},function(e,t){var n=function(){function e(){}return e.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,{nickName:"username"}]})})},e.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2]})})},e}();window.DebugPlatform=n,__reflect(n.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new n)},function(e,t){var n=function(){function e(){}return e.prototype.getTheme=function(e,t,n,r){function i(e){t.call(r,e)}function o(t){t.resItem.url==e&&(RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,o,null),n.call(r))}var a=this;if("undefined"!=typeof generateEUI)egret.callLater(function(){t.call(r,generateEUI)},this);else if("undefined"!=typeof generateEUI2)RES.getResByUrl("resource/gameEui.json",function(e,n){window.JSONParseClass.setData(e),egret.callLater(function(){t.call(r,generateEUI2)},a)},this,RES.ResourceItem.TYPE_JSON);else if("undefined"!=typeof generateJSON)if(e.indexOf(".exml")>-1){var s=e.split("/");s.pop();var c=s.join("/")+"_EUI.json";generateJSON.paths[e]?egret.callLater(function(){t.call(r,generateJSON.paths[e])},this):RES.getResByUrl(c,function(n){window.JSONParseClass.setData(n),egret.callLater(function(){t.call(r,generateJSON.paths[e])},a)},this,RES.ResourceItem.TYPE_JSON)}else egret.callLater(function(){t.call(r,generateJSON)},this);else RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,o,null),RES.getResByUrl(e,i,this,RES.ResourceItem.TYPE_TEXT)},e}();window.ThemeAdapter=n,__reflect(n.prototype,"ThemeAdapter",["eui.IThemeAdapter"])},function(e,t){var n=function(e){function t(){var t=e.call(this)||this;return t.touchEnabled=!0,t.percentWidth=100,t.percentHeight=100,t}return __extends(t,e),t}(eui.UILayer);window.GameLayer=n,__reflect(n.prototype,"GameLayer",[])},function(e,t){var n=function(){function e(){this.uiLayerMap={},this.regist("GameLayer",new GameLayer),this.regist("OptionLayer",new OptionLayer)}return e.getInstance=function(){return null==this.instance&&(this.instance=new e),e.instance},e.prototype.regist=function(e,t){this.uiLayerMap[e]=t},e.prototype.get=function(e){return this.uiLayerMap[e]},e}();window.LayerMamager=n,__reflect(n.prototype,"LayerMamager",[])},function(e,t){var n=function(e){function t(){return e.call(this)||this}return __extends(t,e),t}(egret.DisplayObjectContainer);window.OptionLayer=n,__reflect(n.prototype,"OptionLayer",[])},function(e,t){var n=function(e){function t(){var t=e.call(this)||this;return t.visible=!1,t}return __extends(t,e),t}(eui.UILayer);window.PopUpLayer=n,__reflect(n.prototype,"PopUpLayer",[])},function(e,t){var n=function(e){function t(){var t=e.call(this)||this;return t.visible=!1,t.horizontalCenter=0,t.verticalCenter=0,t}return __extends(t,e),t.prototype.partAdded=function(t,n){e.prototype.partAdded.call(this,t,n)},t.prototype.childrenCreated=function(){e.prototype.childrenCreated.call(this),this.subBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.submit,this),this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.close,this)},t.prototype.submit=function(){var e=this;console.log(this.inputText.text);var t={url:"msg_png",worldX:Math.round(this.mainScene.worldX-this.mainScene.x+320),worldY:Math.round(this.mainScene.worldY-this.mainScene.y+568),deleted:0,text:this.inputText.text};console.log(t),NetTool.get("http://lelefans.top:8081/data/test/saveBgList?",t).then(function(t){console.log(t),e.visible=!1;var n=new MyImg;n.id=t.id,n.texture=RES.getRes(t.url),n.ox=t.worldX,n.oy=t.worldY,n.text=t.text,e.mainScene.justEle(n),e.mainScene.idMap[n.id]=n,e.mainScene.parent.addChild(n)}),this.close()},t.prototype.close=function(){this.inputText.text="",this.visible=!1,LayerMamager.getInstance().get("PopUpLayer").visible=!1},t}(eui.Component);window.LeaveMessagePanel=n,__reflect(n.prototype,"LeaveMessagePanel",["eui.UIComponent"])},function(e,t){var n=function(e){function t(){var t=e.call(this)||this;return t.horizontalCenter=0,t.verticalCenter=0,t}return __extends(t,e),t.prototype.partAdded=function(t,n){e.prototype.partAdded.call(this,t,n)},t.prototype.childrenCreated=function(){e.prototype.childrenCreated.call(this),this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.close,this)},t.prototype.close=function(){this.parent&&this.parent.removeChild(this),LayerMamager.getInstance().get("PopUpLayer").visible=!1},t}(eui.Component);window.MsgShowPanel=n,__reflect(n.prototype,"MsgShowPanel",["eui.UIComponent"])},function(e,t){var n=function(e){function t(){return e.call(this)||this}return __extends(t,e),t.prototype.partAdded=function(t,n){e.prototype.partAdded.call(this,t,n)},t.prototype.childrenCreated=function(){e.prototype.childrenCreated.call(this),this.addEleBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.addEleBtnClick,this),this.msgBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.msgBtnClick,this),this.leaveBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.leaveBtnClick,this)},t.prototype.addEleBtnClick=function(e){this.selectElement.visible=!0,LayerMamager.getInstance().get("PopUpLayer").visible=!0},t.prototype.msgBtnClick=function(e){this.sendTextScenes.visible=!0,LayerMamager.getInstance().get("PopUpLayer").visible=!0},t.prototype.leaveBtnClick=function(e){console.log("leaveBtnClick"),this.leavePanel.visible=!0,LayerMamager.getInstance().get("PopUpLayer").visible=!0},t}(eui.Component);window.OptionalPanel=n,__reflect(n.prototype,"OptionalPanel",["eui.UIComponent"])},function(e,t){var n=function(e){function t(t){var n=e.call(this)||this;return n.map={},n.selected=null,n.mainScene=t,n.visible=!1,n}return __extends(t,e),t.prototype.partAdded=function(t,n){e.prototype.partAdded.call(this,t,n)},t.prototype.childrenCreated=function(){e.prototype.childrenCreated.call(this),this.tree1Img.addEventListener(egret.TouchEvent.TOUCH_TAP,this.click,this),this.grassImg.addEventListener(egret.TouchEvent.TOUCH_TAP,this.click,this),this.tree2Img.addEventListener(egret.TouchEvent.TOUCH_TAP,this.click,this),this.tree3Img.addEventListener(egret.TouchEvent.TOUCH_TAP,this.click,this),this.houseImg.addEventListener(egret.TouchEvent.TOUCH_TAP,this.click,this),this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.close,this),this.mainScene.parent.addEventListener(egret.TouchEvent.TOUCH_TAP,this.listList,this)},t.prototype.click=function(e){this.tree1Img==e.target?this.selected="tree1_png":this.tree2Img==e.target?this.selected="tree2_png":this.tree3Img==e.target?this.selected="tree3_png":this.grassImg==e.target?this.selected="grass_png":this.houseImg==e.target&&(this.selected="house1_png")},t.prototype.listList=function(e){var t=this;event.stopPropagation(),event.preventDefault();var n=this.mainScene.globalToLocal(e.stageX,e.stageY),r={url:this.selected,worldX:Math.round(this.mainScene.worldX+n.x),worldY:Math.round(this.mainScene.worldY+n.y),deleted:0};console.log(r),null!=this.selected&&NetTool.get("http://lelefans.top:8081/data/test/saveBgList?",r).then(function(e){console.log(e),t.visible=!1;var n=new MyImg;n.id=e.id,n.texture=RES.getRes(e.url),n.ox=e.worldX,n.oy=e.worldY,t.mainScene.justEle(n),t.mainScene.idMap[n.id]=n,t.mainScene.parent.addChild(n)})},t.prototype.close=function(){this.visible=!1,LayerMamager.getInstance().get("PopUpLayer").visible=!1},t}(eui.Component);window.SelectElement=n,__reflect(n.prototype,"SelectElement",["eui.UIComponent"])},function(e,t){var n=function(e){function t(){var t=e.call(this)||this;return t.visible=!1,t}return __extends(t,e),t.prototype.partAdded=function(t,n){e.prototype.partAdded.call(this,t,n)},t.prototype.childrenCreated=function(){e.prototype.childrenCreated.call(this),this.sendBut.addEventListener(egret.TouchEvent.TOUCH_TAP,this.sendMsg,this),this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.close,this)},t.prototype.sendMsg=function(){var e=new egret.Event("sendMsg");e.data=this.inputText.text,this.parent.dispatchEvent(e),this.visible=!1,this.close()},t.prototype.close=function(){this.visible=!1,LayerMamager.getInstance().get("PopUpLayer").visible=!1},t}(eui.Component);window.SendTextScenes=n,__reflect(n.prototype,"SendTextScenes",["eui.UIComponent"])},function(e,t){var n=function(e){function t(){return e.call(this)||this}return __extends(t,e),t.prototype.partAdded=function(t,n){e.prototype.partAdded.call(this,t,n)},t.prototype.childrenCreated=function(){e.prototype.childrenCreated.call(this)},t.prototype.setText=function(e){this.msgLabel.text=e},t}(eui.Component);window.TextMessage=n,__reflect(n.prototype,"TextMessage",["eui.UIComponent"])},function(e,t){var n=function(){function e(){}return e.prototype.move=function(e){e.x=e.x+Math.cos(this.ang)*this.moveSpeed,e.y=e.y+Math.sin(this.ang)*this.moveSpeed},e}();window.BgSceneUtil=n,__reflect(n.prototype,"BgSceneUtil",[])},function(e,t){var n=function(){function e(){}return e.post=function(e,t){return new Promise(function(n,r){var i;i=new egret.HttpRequest,i.responseType=egret.HttpResponseType.TEXT,i.addEventListener(egret.Event.COMPLETE,function(e){n(JSON.parse(e.currentTarget.response))},this),i.addEventListener(egret.IOErrorEvent.IO_ERROR,function(e){r(e)},this),i.open(e,egret.HttpMethod.POST),i.setRequestHeader("Content-type","application/x-www-form-urlencoded"),i.send(t)})},e.get=function(t,n){return t+=e.toGetParam(n),new Promise(function(e,n){var r;r=new egret.HttpRequest,r.responseType=egret.HttpResponseType.TEXT,r.addEventListener(egret.Event.COMPLETE,function(t){e(JSON.parse(t.currentTarget.response))},this),r.addEventListener(egret.IOErrorEvent.IO_ERROR,function(e){n(e)},this),r.open(t,egret.HttpMethod.GET),r.setRequestHeader("Content-type","application/x-www-form-urlencoded"),r.send()})},e.toGetParam=function(e){if(!e)return"";var t="";for(var n in e){var r=e[n];t+=n+"="+encodeURIComponent(r)+"&"}return t},e}();window.NetTool=n,__reflect(n.prototype,"NetTool",[])},function(e,t){var n=function(e){function t(){var t=e.call(this)||this;return t.worldX=0,t.worldY=0,t.dx=0,t.dy=0,t.width=1920,t.height=2425,t.originx=-(t.width-640)/2,t.originy=-(t.height-1136)/2,t.worldX=t.originx,t.worldY=t.originy,t.addEventListener(egret.TouchEvent.TOUCH_TAP,t.click,t),t}return __extends(t,e),t.prototype.partAdded=function(t,n){e.prototype.partAdded.call(this,t,n)},t.prototype.childrenCreated=function(){e.prototype.childrenCreated.call(this),this.react=new eui.Rect,this.react.x=0,this.react.y=0,this.react.width=1300,this.react.height=2e3,this.react.fillColor=15773101},t.prototype.onFrame=function(){},t.prototype.click=function(){console.log("click")},t}(eui.Component);window.MainScene=n,__reflect(n.prototype,"MainScene",["eui.UIComponent"])},function(e,t){var n=function(e){function t(){var t=e.call(this)||this;t.idMap={},t.newMap={},t.players={},t.lastSendTime=0;var n=RES.getRes("Back_01_png"),r=RES.getRes("Joystick_03_png");t.joyStick=new joyStick.JoyStickComponent(joyStick.joyStickType.TYPE_EIGHT,n,r),t.joyStick.width=200,t.joyStick.height=200,t.joyStick.x=20,t.joyStick.y=900,t.joyStick.zIndex=1e12,t.joyStick.scaleX=.5,t.joyStick.scaleY=.5,t.joyStick.zIndex=1e8,t.joyStick.addEventListener(egret.TouchEvent.TOUCH_BEGIN,function(e){e.stopPropagation(),e.preventDefault()},t),t.joyStick.addEventListener(joyStick.joyStickEvent.EVENT_JOY_CHANGE,function(e){e.stopPropagation(),e.preventDefault(),t.bgUtil.ang=(-e.data.angle+180)/180*Math.PI,t.bgUtil.power=e.data.power,t.player.rotation=-e.data.angle+90,t.bgUtil.dirX=e.data.x,t.bgUtil.dirY=e.data.y},t),t.joyStick.addEventListener(joyStick.joyStickEvent.EVENT_JOY_END,function(e){e.stopPropagation(),e.preventDefault(),t.bgUtil.power=0},t),t.bgUtil=new BgSceneUtil,t.bgUtil.ang=Math.PI/4,t.bgUtil.moveSpeed=10,t.bgUtil.power=0,t.addEventListener(egret.Event.ENTER_FRAME,t.onFrame,t),t.worldX=0,t.worldY=0,t.dx=0,t.dy=0,t.width=1920,t.height=3408,t.originx=-(t.width-640)/2,t.originy=-(t.height-1136)/2,t.worldX=t.originx,t.worldY=t.originy;var i=egret.localStorage.getItem("locationParam");null==i&&(i=JSON.stringify({worldX:-640,worldY:-1136,stageX:0,stageY:0}));var o=JSON.parse(i);return t.worldX=o.stageX||0,t.worldY=o.stageY||0,t.init(t.worldX,t.worldY),t.initWebsocket(),t.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){console.log("adsfasdf")},t),t}return __extends(t,e),t.prototype.justEle=function(e){e.x=e.ox-this.worldX,e.y=e.oy-this.worldY;var t=this.localToGlobal(e.x,e.y);e.x=t.x,e.y=t.y},t.prototype.partAdded=function(t,n){e.prototype.partAdded.call(this,t,n)},t.prototype.init=function(e,t){var n=this,r={startx:e,starty:t,endx:e+this.width,endy:t+this.height,pageSize:700};NetTool.get("http://lelefans.top:8081/data/test/bgList?",r).then(function(e){var t=e;for(var r in t){var i=t[r];if(n.idMap[i.id])n.newMap[i.id]=n.idMap[i.id];else{var o=new MyImg;o.id=i.id,o.texture=RES.getRes(i.url),o.ox=i.worldX,o.oy=i.worldY,o.text=i.text,n.justEle(o),n.newMap[o.id]=o}}for(var a in n.idMap)try{n.newMap[a]||(n.parent.removeChild(n.idMap[a]),n.idMap[a]=void 0)}catch(t){console.log("老元素移除失败")}n.idMap=n.newMap,n.newMap={};for(var a in n.idMap)n.parent.addChild(n.idMap[a])})},t.prototype.initWebsocket=function(){this.socket=new egret.WebSocket,this.socket.type=egret.WebSocket.TYPE_STRING,this.socket.addEventListener(egret.ProgressEvent.SOCKET_DATA,this.onReceiveMessage,this),this.socket.addEventListener(egret.Event.CONNECT,this.onSocketOpen,this),this.socket.addEventListener(egret.Event.CLOSE,this.onSocketClose,this),this.socket.addEventListener(egret.IOErrorEvent.IO_ERROR,this.onSocketError,this);var e=egret.localStorage.getItem("locationParam");null==e&&(e=JSON.stringify({worldX:-640,worldY:-1136}));var t=JSON.parse(e);this.socket.connectByUrl("ws://lelefans.top:8081/websocket/"+t.worldX+"/"+t.worldY)},t.prototype.onReceiveMessage=function(){var e=this.socket.readUTF(),t=JSON.parse(e),n=this.players[t.id];if(2==t.type||1==t.type){if(null==n){var r=RES.getRes("turtle2_png"),i=new MyImg;i.width=70,i.height=70,i.texture=r,i.showText=!0,i.x=(this.parent.width-i.width)/2,i.y=(this.parent.height-i.height)/2,i.anchorOffsetX=i.width/2,n=i,this.players[t.id]=i,this.parent.addChild(i)}n.img.rotation=180*Math.atan2(t.dirX,-t.dirY)/Math.PI,n.id=t.id,n.ox=t.targetX+this.width/2,n.oy=t.targetY+this.height/2}else if(3==t.type){if(null==n)return;n.say(t.text)}else 4==t.type&&null!=n&&n.parent&&n.parent.removeChild(n)},t.prototype.onSocketOpen=function(){console.log("connect"),this.socket.flush()},t.prototype.onSocketClose=function(){console.log("close")},t.prototype.onSocketError=function(){console.log("close")},t.prototype.sendMsg=function(e){this.socket.writeUTF(JSON.stringify(e))},t.prototype.childrenCreated=function(){e.prototype.childrenCreated.call(this);var t=RES.getRes("turtle2_png"),n=new eui.Image(t);n.width=70,n.height=70,n.x=(this.parent.width-n.width)/2,n.y=(this.parent.height-n.height)/2,n.anchorOffsetX=n.width/2,n.anchorOffsetY=n.height/2,this.player=n,this.react=new eui.Rect,this.react.fillColor=9029020,this.react.width=this.parent.width,this.react.height=this.parent.height,this.parent.addChild(this.react),LayerMamager.getInstance().get("OptionLayer").addChild(this.joyStick)},t.prototype.onFrame=function(){this.dx=this.dx+Math.cos(this.bgUtil.ang)*this.bgUtil.moveSpeed*this.bgUtil.power,this.dy=this.dy+Math.sin(this.bgUtil.ang)*this.bgUtil.moveSpeed*this.bgUtil.power,this.x=this.originx+this.dx,this.y=this.originy+this.dy;for(var e in this.idMap)this.justEle(this.idMap[e]);for(var e in this.newMap)this.justEle(this.newMap[e]);for(var e in this.players)this.justEle(this.players[e]);var t={type:2,dirX:Math.round(this.bgUtil.dirX),dirY:Math.round(this.bgUtil.dirY),targetX:Math.round(this.worldX-this.dx),targetY:Math.round(this.worldY-this.dy)},n=(new Date).getTime();if(n-this.lastSendTime>20&&this.bgUtil.power>0){this.sendMsg(t),this.lastSendTime=n;var r={worldX:Math.round(this.worldX-this.x+320-this.width/2),worldY:Math.round(this.worldY-this.y+568-this.height/2),stageX:this.worldX-this.dx,stageY:this.worldY-this.dy};egret.localStorage.setItem("locationParam",JSON.stringify(r))}Math.abs(this.dx)<320&&Math.abs(this.dy)<468||(this.worldX=this.worldX-this.dx,this.worldY=this.worldY-this.dy,this.dx=0,this.dy=0,this.init(this.worldX,this.worldY))},t.prototype.msgListener=function(e){var t={id:111,type:3,text:e.data};this.sendMsg(t)},t}(eui.Component);window.MainScene2=n,__reflect(n.prototype,"MainScene2",["eui.UIComponent"])},function(e,t){var n=function(e){function t(){var t=e.call(this)||this;return t.showText=!0,t.addEventListener(egret.TouchEvent.TOUCH_TAP,t.click,t),t}return __extends(t,e),t.prototype.childrenCreated=function(){var t=this;e.prototype.childrenCreated.call(this);var n=new eui.Image;if(n.width=70,n.height=70,n.texture=this.texture,n.anchorOffsetX=this.width/2,n.anchorOffsetY=this.height/2,n.x=this.width/2,n.y=this.height/2,this.addChild(n),this.img=n,this.showText){var r=new eui.Label;r.text=this.ox+"-"+this.oy,r.textColor=0,r.size=12,r.percentWidth=100,r.textAlign="center",r.y=this.height,r.addEventListener(egret.Event.ENTER_FRAME,function(){r.text=t.ox+"-"+t.oy},this),this.addChild(r)}},t.prototype.say=function(e){var t=this,n=new TextMessage;this.addChild(n),n.anchorOffsetX=n.width/2,n.x=this.width/2,n.setText(e);var r=egret.Tween.get(n,{loop:!1});r.wait(300).to({y:-200,alpha:0},5e3,egret.Ease.backIn).call(function(){t.removeChild(n)})},t.prototype.click=function(e){if(e.stopPropagation(),e.preventDefault(),console.log("aaaaa"),null!=this.text){var t=new MsgShowPanel;LayerMamager.getInstance().get("PopUpLayer").addChild(t),t.label.text=this.text,LayerMamager.getInstance().get("PopUpLayer").visible=!0}},t}(eui.Component);window.MyImg=n,__reflect(n.prototype,"MyImg",[])},function(e,t){var n=function(e){function t(){return e.call(this)||this}return __extends(t,e),t}(eui.Rect);window.MyRect=n,__reflect(n.prototype,"MyRect",[])}]);