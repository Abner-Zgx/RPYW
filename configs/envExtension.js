var extension = {
    PROJECT_ROOT: "/" + process.env.PROJECT,
    PROJECT_URL: "http://localhost:" + process.env.PORT,
    MYSQL_URL: process.env.DATABASE + "://root:root@localhost:3306/" + process.env.PROJECT

}

for (key in extension) {
    process.env[key] = extension[key];
}

module.exports = extension;