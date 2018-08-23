const fs = require("fs");
const path = require("path")


global.cerberus = {
    route: {},
    utility: {}
}


setGlobal(cerberus.route, path.join(base_dir, "route"))
setGlobal(cerberus.utility, path.join(base_dir, "utility"))

function setGlobal(param, filePath) {
    fs.readdirSync(filePath).filter(file => {
        return (file.indexOf(".") !== 0) && (file !== path.basename(module.filename));
    }).forEach(file => {
        var filename = file.slice(0, file.indexOf("."));
        param[filename] = path.join(filePath, filename);
    });
}