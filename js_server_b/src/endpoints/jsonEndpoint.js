import express from 'express';
import parseJson from '../parser_module/jsonParser.js';

const SERVER_A_JSON_URL = "http://127.0.0.1:8000/json/py";

const router = express.Router();

router.get("/js", (req, res) => {
    res.send({ data: parseJson() });
});

router.get("/py", async (req, res) => {
    const response = await fetch(SERVER_A_JSON_URL);
    const result = await response.json();

    res.send({ data: result.data });
});


export default router;
