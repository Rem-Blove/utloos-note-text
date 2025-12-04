/** @type {import('utools-api-types')} */
window.exports = {
  note: {
    mode: 'none',
    args: {
      enter: () => {
        const ubWindow = utools.createBrowserWindow('index.html', {
          width: 600,
          height: 500,
          shadow: false,
          frame: false,
          transparent: true,
          thickFrame: false,
          hasShadow: false,
          webPreferences: {
            zoomFactor: 1.0,
            devTools: true,
          },
        }, () => {
          if (utools.isDev()) {
            ubWindow.webContents.openDevTools({ mode: 'detach' })
          }
        })
      },
    },
  },
}
