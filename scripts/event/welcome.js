hexo.on('ready', () => {
    const { version } = require('../../package.json')
    const logo = `
Ｎ　　　Ｎ　　　ｉ
ＮＮ　　Ｎ
ＮＮ　　Ｎ　　ｉｉ　　　ｖ　　　ｖ　　　ｅｅｅ　　　　ｏｏｏ　　　ｕ　　　ｕ　　　ｓｓｓ
Ｎ　Ｎ　Ｎ　　　ｉ　　　ｖ　　　ｖ　　ｅ　　　ｅ　　ｏ　　　ｏ　　ｕ　　　ｕ　　ｓ　　　ｓ
Ｎ　Ｎ　Ｎ　　　ｉ　　　ｖ　　　ｖ　　ｅ　　　ｅ　　ｏ　　　ｏ　　ｕ　　　ｕ　　ｓ
Ｎ　　ＮＮ　　　ｉ　　　　ｖ　ｖ　　　ｅｅｅｅｅ　　ｏ　　　ｏ　　ｕ　　　ｕ　　　ｓｓｓ
Ｎ　　ＮＮ　　　ｉ　　　　ｖ　ｖ　　　ｅ　　　　　　ｏ　　　ｏ　　ｕ　　　ｕ　　　　　　ｓ
Ｎ　　　Ｎ　　　ｉ　　　　　ｖ　　　　ｅ　　　ｅ　　ｏ　　　ｏ　　ｕ　　　ｕ　　ｓ　　　ｓ
Ｎ　　　Ｎ　　ｉｉｉ　　　　ｖ　　　　　ｅｅｅ　　　　ｏｏｏ　　　　ｕｕｕｕ　　　ｓｓｓ


    `.replace(/#/g, '●')
    const message = `
  \x1b[38;5;45m=====================[ Hexo Theme - Niveous ]=====================\x1b[0m
  \x1b[38;5;45m${logo}\x1b[0m
                         \x1b[38;5;45m version: ${version}\x1b[0m
  \x1b[38;5;45m===================================================================\x1b[0m
         \x1b[38;5;45mGitHub: https://github.com/Linux-qitong/hexo-theme-niveous\x1b[0m
  `
    hexo.log.info(message)
})
