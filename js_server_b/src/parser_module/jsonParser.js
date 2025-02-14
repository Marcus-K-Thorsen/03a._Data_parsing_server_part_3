import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';
import Person from "./person.js";

const JSONPATH = "../../../data/person.json";

const parseJson = () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filePath = path.join(__dirname, JSONPATH);
    const jsonText = fs.readFileSync(filePath, "utf-8");

    const personData = JSON.parse(jsonText);

    return new Person(personData.name, personData.weight, personData.hobbies, "json");
}

export default parseJson;