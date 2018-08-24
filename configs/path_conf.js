const fs = require("fs");
const path = require("path")

global.cerberus = {
    routes: {},
    utils: {},
    filters: {},
    controllers: {},
    services: {},
    models: {},
    dbPool: {},
}


setGlobal(cerberus.routes, path.join(base_dir, "routes"))
setGlobal(cerberus.utils, path.join(base_dir, "utils"))
setGlobal(cerberus.filters, path.join(base_dir, "filters"))
setGlobal(cerberus.controllers, path.join(base_dir, "controllers"))
setGlobal(cerberus.services, path.join(base_dir, "services"));
setGlobal(cerberus.models, path.join(base_dir, "models"))

function setGlobal(param, filePath) {
    fs.readdirSync(filePath).filter(file => {
        return (file.indexOf(".") !== 0) && (file !== path.basename(module.filename));
    }).forEach(file => {
        var filename = file.slice(0, file.indexOf("."));
        param[filename] = path.join(filePath, filename);
    });
}