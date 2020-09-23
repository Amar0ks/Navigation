const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
//const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");
let win;

function createWindow() {
  win = new BrowserWindow({
    width: 2000,
    height: 800,
    minHeight: 600,
    minWidth: 1100,
    frame: true,
    webPreferences: {
      // wichtig für rquire!!
      // add Node functionalities in all my HTML pages
      nodeIntegration: true,
    },
  });

  win.loadURL(
    url.format({
      pathname: path.join(__dirname, "index.html"),
      protocol: "file:",
      slashes: true,
    })
  );
  //Dev Tools
  win.webContents.openDevTools();

  win.on("closed", () => {
    win = null;
  });
}
app.on("ready", createWindow);
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});
