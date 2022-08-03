const path=require("path")
const modulePath=path.resolve(__dirname,"../../")
require('module').globalPaths.push(modulePath)

function dynamicLoad (moduleName) {
    console.log('动态加载module:' + moduleName)
    return require(moduleName)
}

module.exports=dynamicLoad
