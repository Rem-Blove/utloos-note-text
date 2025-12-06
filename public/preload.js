/** @type {import('utools-api-types')} */
window.exports = {
  note: {
    mode: 'none',
    args: {
      // 插件入口（自动调用）
      enter: () => {
        const ubWindow = utools.createBrowserWindow('index.html', {
          width: 600,
          height: 500,
          transparent: true,
          frame: false,
          webPreferences: {
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
