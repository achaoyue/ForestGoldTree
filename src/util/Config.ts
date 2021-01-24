// TypeScript file

class Config{

    public static getConfig(){
        return Config.DEV;
    }

    static DEV={
        httpUrl:"http://192.168.3.21:8081",
        wsUrl:"ws://192.168.3.21:8081/websocket/"
    }
    static ONLINE = {
        httpUrl:"http://lelefans.top:8081",
        wsUrl:"ws://lelefans.top:8081/websocket/"
    }
}