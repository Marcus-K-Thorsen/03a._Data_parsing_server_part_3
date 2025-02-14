import express from 'express';
import parseXml from '../parser_module/xmlParser.js';

const SERVER_A_XML_URL = "http://127.0.0.1:8000/xml/py";

const router = express.Router();

router.get("/js", (req, res) => {
    res.send({ data: parseXml() });
});

router.get("/py", async (req, res) => {
    const response = await fetch(SERVER_A_XML_URL);
    const result = await response.json();

    res.send({ data: result.data });
});

export default router;
