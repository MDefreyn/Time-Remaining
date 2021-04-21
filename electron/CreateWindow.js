const { BrowserWindow } = require("electron")

function createWindow() {

  const win = new BrowserWindow({
    width: 250,
    height: 300,
    show: false,
    frame: false,
    resizable: false,
    fullscreenable: false, //impedir que seja maximizado.
    //fullscreen: true iniciar em Full Screen
    skipTaskbar: true,
  })
  win.loadFile('index.html')
  win.on('blur', () => win.hide())
  return win

}

module.exports = createWindow()

// verificar
// electron-builder
// electron-updater