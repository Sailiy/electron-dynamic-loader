# electron-dynamic-loader

---
electron在使用webpack打包后，动态加载js的过程下，require会被webpack替换
导致不能require到包，使用这个程序会安装在nodemodules文件下，打包会被忽略