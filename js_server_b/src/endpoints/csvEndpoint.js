import express from 'express';
import parseCsv from '../parser_module/csvParser.js';

const SERVER_A_CSV_URL = "http://127.0.0.1:8000/csv/py";

const router = express.Router();

router.get("/js", (req, res) => {
    res.send({ data: parseCsv() });
});

router.get("/py", async (req, res) => {
    const response = await fetch(SERVER_A_CSV_URL);
    const result = await response.json();

    res.send({ data: result.data });
});

export default router;
