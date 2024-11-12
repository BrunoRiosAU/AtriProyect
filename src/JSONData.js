const fs = require("fs");


function readData(archive) {
    let data = ""
    try {
        data = fs.readFileSync(archive);
    } catch (error) {
        console.error(error);
    }
    const dataJSON = JSON.parse(data);
    return dataJSON;
}

module.exports = readData;

