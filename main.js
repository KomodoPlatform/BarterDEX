const electron = require('electron'),
  app = electron.app,
  BrowserWindow = electron.BrowserWindow,
  path = require('path'),
  url = require('url'),
  os = require('os'),
  spawn = require('child_process').spawn,
  exec = require('child_process').exec,
  { Menu } = require('electron'),
  portscanner = require('portscanner'),
  osPlatform = os.platform(),
  fixPath = require('fix-path'),
  ipc = require('electron').ipcMain,
  fs = require('fs-extra'),
  mkdirp = require('mkdirp'),
  killmm = require('./ipc/killmm');
  
var shepherd = require('./ipc/shepherd-ipc'),
  MNZdICOIcon;

const package_json = fs.readJsonSync(path.join(__dirname, 'package.json'));

app.setName(package_json.name);
app.setVersion(package_json.version);

if (osPlatform === 'linux') {
  process.env.ELECTRON_RUN_AS_NODE = true;
  MNZdICOIcon = path.join(__dirname, '/assets/icons/barterdex/128x128.png');
}
if (os.platform() === 'win32') {
  MNZdICOIcon = path.join(__dirname, '/assets/icons/barterdex/barterdex.ico');
}


let closeAppAfterLoading = false;

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow(status) {
  require(path.join(__dirname, 'private/mainmenu'));

  // initialise window
  mainWindow = new BrowserWindow({ // dirty hack to prevent main window flash on quit
    width: closeAppAfterLoading ? 1 : 1280,
    height: closeAppAfterLoading ? 1 : 800,
    //titleBarStyle: 'customButtonsOnHover',
    //frame: false
    icon: MNZdICOIcon
  });

  const staticMenu = Menu.buildFromTemplate([ // if static
    { role: 'copy' },
    { type: 'separator' },
    { role: 'selectall' },
  ]);

  const editMenu = Menu.buildFromTemplate([ // if editable
    { role: 'undo' },
    { role: 'redo' },
    { type: 'separator' },
    { role: 'cut' },
    { role: 'copy' },
    { role: 'paste' },
    { type: 'separator' },
    { role: 'selectall' },
  ]);

  // and load the index.html of the app.
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'gui/index.html'),
    protocol: 'file:',
    slashes: true
  }))

  mainWindow.webContents.on('context-menu', (e, params) => { // context-menu returns params
    const { selectionText, isEditable } = params; // params obj
    if (isEditable) {
      editMenu.popup(mainWindow);
    } else if (selectionText && selectionText.trim() !== '') {
      staticMenu.popup(mainWindow);
    }
  });

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
    killmm(true, true);
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  //if (process.platform !== 'darwin') {
  killmm(true, true);
  //}
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) { createWindow() }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
