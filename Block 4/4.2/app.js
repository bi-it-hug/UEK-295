import express from 'express'
import { DateTime } from 'luxon'
import { config } from './config.js'

const app = express()

app.use(express.urlencoded())
app.use(express.json())

// Einen Endpunkt GET /now, der die aktuelle Zeit zurück gibt. Per Parameter ?tz= kann die Zeitzone ausgewählt werden (z.B. "Europe/Zurich").
app.get('/now', (request, response) => {
    const timezone = DateTime.now().setZone(request.query.tz)
    response.send(timezone.toISO())
})

// Einen Endpunkt POST /names, welcher der Namensliste einen Eintrag hinzufügt. Der Name wird per Form mitgegeben
app.post('/names', (request, response) => {
    const { name } = request.body
    config.names.push(name)
    response.send(`Name "${name}" erfolgreich hinzugefügt!`)
    console.log(config.names)
})

// Einen Endpunkt DELETE /names, der den Eintrag aus der Namensliste entfernt und dann 204 zurück gibt. Der Name wird per Query mitgegeben
app.delete('/names', (request, response) => {
    const name = request.query.name
    config.names.splice(config.names.indexOf(name), 1)
    response.sendStatus(204)
})

// Einen Endpunkt GET /secret2, der den Header "Authorization" ausliest und 200 zurück gibt, wenn im Header "Basic aGFja2VyOjEyMzQ=" steht und ansonsten 401 zurück gibt
app.get('/secret', (request, response) => {
    if (request.headers.authorization === 'Basic aGFja2VyOjEyMzQ=') {
        response.sendStatus(200)
    } else {
        response.sendStatus(401)
    }
})

// Einen Endpunkt PATCH /me, der ein JSON Objekt entgegennimmt und die Werte, die mitgegeben wurden, im bisherigen me-Objekt überschreiben
app.patch('/me', (request, response) => {
    Object.assign(config.me, request.body)
    response.send(config.me)
})

// Einen Endpunkt GET /chuck, welcher einen zufälligen Witz von der Chuck Norris API abfragt. Im Text wird "Chuck Norris" dann durch den Wert ersetzt, der per Query Paramter ?name= mitegegeben wurde
app.get('/chuck', async (request, response) => {
    const object = await fetch('https://api.chucknorris.io/jokes/random')
    const joke = await object.json()

    const customJoke = joke.value
        .replace(/Chuck/g, request.query.firstName)
        .replace(/Norris/g, request.query.lastName)

    response.send(customJoke)
})

app.listen(config.port, () => {
    console.log("Listening on Port:", config.port)
})
