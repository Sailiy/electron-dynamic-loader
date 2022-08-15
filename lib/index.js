const path=require("path")

const Module = require('module');
const nodeModulePaths = Module._nodeModulePaths;
Module._nodeModulePaths = (from) => {
    return nodeModulePaths(from).concat(Module.globalPaths);
};
const modulePath=path.resolve(__dirname,"../../")
Module.globalPaths.push(modulePath)

function dynamicLoad (moduleName) {
    console.log('动态加载module:' + moduleName)
    return require(moduleName)
}

module.exports=dynamicLoad
