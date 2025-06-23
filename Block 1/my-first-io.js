import fs from 'fs'

function countOccurence(path, target) {
    return fs.readFileSync(path).toString().split(target).length - 1
}

console.log(countOccurence(process.argv[2], '\n'))
