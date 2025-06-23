import fs from 'fs'
import express from 'express'
import { config } from './config.js'

const app = express()

// Einen Endpunkt /now, der die aktuelle Zeit zurück gibt.
app.get('/now', (request, response) => {
    response.send(new Date().toLocaleString('de-CH'))
})

// Einen Endpunkt /zli, der den Benutzer auf die ZLI Webseite https://www.zli.ch weiterleitet.
app.get('/zli', (request, response) => {
    response.redirect('https://www.zli.ch')
})

// Einen Endpunkt /name, der aus einer Liste von mindestens 20 Namen einen auswählt und zurückgibt.
app.get('/name', (request, response) => {
    response.send(config.names[Math.floor(Math.random() * config.names.length)])
})

// Einen Endpunkt /html, der statisches HTML aus einer Datei vom Server zurück gibt.
app.get('/html', (request, response) => {
    response.send(fs.readFileSync('./test.html').toString())
})

// Einen Endpunkt /image, der ein Bild zurückgibt, welches im Browser angezeigt wird.
app.get('/image', (request, response) => {
    response.set('Content-Type', 'image/png')
    response.send(fs.readFileSync('./ds3.png'))
})

// Einen Endpunkt /teapot, der den Status 418 zurück gibt.
app.get('/teapot', (request, response) => {
    response.status(418).send()
})

// Einen Endpunkt /user-agent, der den Browser aus dem Request ausliest und zurück gibt.
app.get('/user-agent', (request, response) => {
    response.send(request.headers['user-agent'])
})

// Einen Endpunkt /secret, der immer den Status 403 zurück gibt.
app.get('/secret', (request, response) => {
    response.status(403).send()
})

// Einen Endpunkt /xml, der eine statische XML Datei vom Server zurück gibt.
app.get('/xml', (request, response) => {
    response.send(fs.readFileSync('./test.xml').toString())
})

// Einen Endpunkt /me, der ein JSON Objekt zurück gibt mit den Properties Vor- und Nachname, Alter, Wohnort und Augenfarbe.
app.get('/me', (request, response) => {
    response.send(JSON.parse(fs.readFileSync('./test.json')))
})

app.listen(config.port, () => {
    console.log("Listening on Port:", config.port)
})
