const { BrowserWindow } = require('electron')
const path = require('path')


class System {

    static #Win;
    instance

    static get Shared() {
        if(System.#Win) {
            return System.#Win
        }

        System.#Win = new System();
        return System.#Win
    }

    constructor() {
        if(System.#Win) {
            return System.#Win
        }
        System.#Win = this;
    }

    createWin(opt = {}) {
        let options = {
            resizable: true,
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: true,
                webviewTag: true,
                webSecurity: false,
                preload: path.join(__dirname, '../preload/index.js'),
            },
            ...opt,
        }

        this.instance = new BrowserWindow(options)

        return this;
    }

    showView(channel, type) {

        if(type === 'file') {
            this.instance?.loadFile(channel)
        }
        if(type === 'url') {
            this.instance?.loadURL(channel)
        }

        return this;
    }


    get Instance() {
        return this.instance
    }

}

module.exports = System



