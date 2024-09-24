import path from "node:path";
import {BrowserWindow} from "electron";

class System {

    static #Win;

    static get Shared() {
        if(System.#Win) {
            return System.#Win
        }

        System.#Win = new System();
        return System.#Win
    }

    constructor() {

    }

    createWindow = (url, opt = {}) => {
        let options = {
            resizable: true,
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: true,
                webviewTag: true,
                webSecurity: false,
                preload: path.join(__dirname, './preload/index.js'),
                devTools: true,
            },
            ...opt,
        }

    }

}


