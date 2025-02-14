import express from 'express';
import parseYaml from '../parser_module/yamlParser.js';

const SERVER_A_YAML_URL = "http://127.0.0.1:8000/yaml/py";

const router = express.Router();

router.get("/js", (req, res) => {
    res.send({ data: parseYaml() });
});

router.get("/py", async (req, res) => {
    const response = await fetch(SERVER_A_YAML_URL);
    const result = await response.json();

    res.send({ data: result.data });
});

export default router;
