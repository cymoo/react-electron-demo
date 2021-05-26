const { app, BrowserWindow, ipcMain, session } = require('electron')
const os = require('os')
const path = require('path')
const { addGlobalMenu } = require('./globalmenu')

const isDev = process.env.NODE_ENV === 'development'

// Create the browser window.
const createWindow = async () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      // preload: path.join(__dirname, 'preload.js'),
    },
  })

  // Load the index.html of the app.
  await mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../../build/index.html')}`
  )

  // Open the DevTools.
  if (isDev) {
    mainWindow.webContents.openDevTools({ mode: 'detach' })
  }
}

// Add react devtools extension.
// https://www.electronjs.org/docs/tutorial/devtools-extension
const addExtensionManually = async () => {
  const devToolsPath = path.join(
    os.homedir(),
    '/Library/Application Support/Microsoft Edge/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/4.13.4_0'
  )
  await session.defaultSession.loadExtension(devToolsPath)
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(async () => {
  createWindow()
  if (isDev) await addExtensionManually()
  addGlobalMenu()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// an ipc test
ipcMain.handle('open-daydream', async (event) => {
  await new BrowserWindow().loadURL('https://daydream.site')
})

// TODO: add some configs for security
// https://www.electronjs.org/docs/tutorial/security
