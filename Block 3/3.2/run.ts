import express from "express";
import { config } from "./config.ts";

const app = express();

app.get("/weather/:zip", async (request, response) => {
    try {
        const data = await fetch(`https://app-prod-ws.meteoswiss-app.ch/v1/plzDetail?plz=${request.params.zip}00`);
        const result = await data.json();
        response.status(200).send(result.currentWeather.temperature);
    } catch (error) {
        response.status(500).send({ error: "Error loading Data:", details: error.message });
    }
});

app.listen(config.port, () => {
    console.log("Listening on Port:", config.port);
});
