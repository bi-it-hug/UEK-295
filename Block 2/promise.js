import fs from 'fs/promises'

const config = {
    file: './example.txt',
    delay: 10,
}

async function readFile(filepath) {
    try {
        const data = await fs.readFile(filepath)

        console.clear()
        console.info(data.toString())

    } catch (err) {
        console.error(err)

    }
}

setInterval(() => { readFile(config.file) }, config.delay)
