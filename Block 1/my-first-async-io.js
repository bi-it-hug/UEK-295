import { promises as fs } from 'fs'

async function countOccurence(path, target) {
    const file =  await fs.readFile(path, 'utf-8')
    return file.toString().split(target).length - 1
}

countOccurence(process.argv[2], '\n').then(console.log)
