const { Tray, Menu, nativeImage } = require('electron')
const System = require("./System");
const path = require("path");

class TraySystem extends System {

    menu;
    tray;

    constructor() {
        super()
    }

    async init() {
        // console.log(this.instance, '인스턴스 상속')
        // if(icon) nativeImage.createFromDataURL(icon)
        let icon = nativeImage.createFromPath(path.join(__dirname, '..', 'assets', 'img', 'icon_ring.png'))
        console.log(icon, '아이콘 사이즈')
        this.tray = new Tray(icon)
        this.menu = Menu.buildFromTemplate([
            {
                label: "DevTools",
                click: () => {
                    // console.log(this)
                    this.instance.webContents.openDevTools({ mode: 'detach', activate: true })
                }
            }
        ])

        this.tray.setToolTip('Application Tray.')
        this.tray.setContextMenu(this.menu)
    }

}

module.exports = TraySystem