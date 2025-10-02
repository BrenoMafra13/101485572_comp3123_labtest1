// Student name: Breno Lopes Mafra
// Student ID: 101485572

const fs = require("fs")
const path = require("path")

const dirPath = path.join(__dirname, "Logs")

function createLogs() {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath)
    }

    process.chdir(dirPath)

    for (let i = 0; i < 10; i++) {
        let fileName = `log${i}.txt`
        fs.writeFileSync(fileName, `Breno Lopes Mafra log number #${i}`)
        console.log(fileName)
    }
}

module.exports = createLogs
