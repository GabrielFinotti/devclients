import { app, shell, BrowserWindow, ipcMain } from "electron";
import path from "node:path";
import { electronApp, optimizer, is } from "@electron-toolkit/utils";
import { createFileRoute, createURLRoute } from "electron-router-dom";

function createWindow(): void {
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 770,
    show: false,
    autoHideMenuBar: false,
    ...(process.platform === "linux"
      ? {
          icon: path.join(__dirname, "../../build/icon.png"),
        }
      : process.platform === "win32" && {
          icon: path.join(__dirname, "resources", "icon.png"),
        }),
    webPreferences: {
      preload: path.join(__dirname, "../preload/index.js"),
      sandbox: false,
    },
  });

  if (process.platform === "darwin") {
    const iconPath = path.resolve(__dirname, "resources", "icon.png");
    app.dock.setIcon(iconPath);
  }

  mainWindow.on("ready-to-show", () => {
    mainWindow.show();
  });

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url);
    return { action: "deny" };
  });

  const devServerURL = createURLRoute(
    process.env["ELECTRON_RENDERER_URL"]!,
    "main"
  );

  const fileRoute = createFileRoute(
    path.join(__dirname, "../renderer/src/Routes.tsx"),
    "main"
  );

  if (is.dev && process.env["ELECTRON_RENDERER_URL"]) {
    mainWindow.loadURL(devServerURL);
  } else {
    mainWindow.loadFile(...fileRoute);
  }
}

app.whenReady().then(() => {
  electronApp.setAppUserModelId("com.electron");

  app.on("browser-window-created", (_, window) => {
    optimizer.watchWindowShortcuts(window);
  });

  ipcMain.on("ping", () => console.log("pong"));

  createWindow();

  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
