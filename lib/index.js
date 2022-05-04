function dynamicLoad (moduleName) {
    console.log('动态加载module:' + moduleName)
    return require(moduleName)
}

module.exports=dynamicLoad