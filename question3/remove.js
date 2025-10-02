// Student name: Breno Lopes Mafra
// Student ID: 101485572

const fs = require("fs")
const path = require("path")

const dirPath = path.join(__dirname, "Logs")

function removeLogs() {
    if (fs.existsSync(dirPath)) {
        const files = fs.readdirSync(dirPath)
        for (let file of files) {
            console.log("deleting file: " + file)
            fs.unlinkSync(path.join(dirPath, file))
        }
        fs.rmdirSync(dirPath)
    }
}

module.exports = removeLogs
