const electron = require('electron')
// Module to control application life.
const app = electron.app;
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow


/******************Splash Screen*****************/
var splashWindow;

function createSplashWindow () {
  // Create the browser window.
  splashWindow = new BrowserWindow({
    "width": 500,
    "height": 370,
    resizable : false,
    frame : false
  });

  // and load the index.html of the app.
  splashWindow.loadURL('file://' + __dirname + '/client/views/independent_pages/splash.html')

  // Open the DevTools.
  //splashWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  splashWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    splashWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createSplashWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

setTimeout(function(){
  splashWindow.hide();
  setTimeout(function(){
    createWindow();
  },1000)
},5000);

/*****************************Main Window*******************************/
var mainWindow;

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    "min-width": 800,
    "min-height": 600,
    resizable : false
  });

  // and load the index.html of the app.
  mainWindow.loadURL('file://' + __dirname + '/index.html')

  // Open the DevTools.
  //mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
    splashWindow = null
    app.quit()
  })
}
