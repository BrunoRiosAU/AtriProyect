const { error } = require("console");
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

function writeData(archive, obj) {
    const data = readData(archive);
    data.user.push(obj);
    json = JSON.stringify(data);
    fs.writeFile(archive, json, (error) => {
        if(error){
            return false;
        }
        return true;
    })

}

module.exports = { readData, writeData };

