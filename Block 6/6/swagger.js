import swaggerAutogen from 'swagger-autogen'
import config from './config.js'

const doc = {
    info: {
        title: 'Bibliothek API',
        description: 'API zur Verwaltung von Büchern und Ausleihen'
    },
    host: `localhost:${config.port}`,
    schemes: ['http'],
    tags: [
        {
            name: 'Book',
            description: 'Operationen zu Büchern'
        },
        {
            name: 'Lend',
            description: 'Operationen zu Ausleihen'
        }
    ]
}

const outputFile = './swagger.json'
const endpointsFiles = ['./app.js']

swaggerAutogen(outputFile, endpointsFiles, doc)
