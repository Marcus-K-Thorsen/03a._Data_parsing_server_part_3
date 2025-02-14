import express from 'express';
import parseTxt from '../parser_module/txtParser.js';

const SERVER_A_TXT_URL = "http://127.0.0.1:8000/txt/py";

const router = express.Router();

router.get("/js", (req, res) => {
    res.send({ data: parseTxt() });
});


router.get("/py", async (req, res) => {
    const response = await fetch(SERVER_A_TXT_URL);
    const result = await response.json();

    res.send({ data: result.data });
});


export default router;
