function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      // Security: Keep contextIsolation: true and nodeIntegration: false
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js') 
    }
  });

  // Point this to your Angular 'dist' folder
  // Angular 20 usually builds to dist/project-name/browser/index.html
  const appPath = path.join(__dirname, '../dist/your-app-name/browser/index.html');
  mainWindow.loadFile(appPath);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// Lifecycle Hooks
app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});


