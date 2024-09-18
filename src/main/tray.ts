import { BrowserWindow, Menu, nativeImage, Tray } from "electron";
import path from "node:path";

const createTray = (window: BrowserWindow) => {
  const appIcon = path.join(__dirname, "resources", "menuTemplate.png");
  let icon = nativeImage.createFromPath(appIcon);

  const tray = new Tray(icon);

  const menu = Menu.buildFromTemplate([
    {
      label: "Dev Clients",
      enabled: false,
    },
    { type: "separator" },
    {
      label: "Abrir",
      click: () => {
        window.show();
      },
    },
  ]);

  tray.setToolTip("Dev Clients");

  tray.setContextMenu(menu);
};

export default createTray;
