const { Tray } = require('electron');
const { resolve } = require('path');

const iconPath = resolve(__dirname, '../', 'assets', 'clock.png')

function createTray() {

  const tray = new Tray(iconPath)
  tray.setToolTip('Time Remaining')
  return tray

}

module.exports = createTray()