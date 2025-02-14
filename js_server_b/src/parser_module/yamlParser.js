import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';
import Person from "./person.js";
import yaml from "yaml";

const YAMLPATH = "../../../data/person.yaml";

const parseYaml = () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filePath = path.join(__dirname, YAMLPATH);
    const yamlText = fs.readFileSync(filePath, "utf-8");

    const personData = yaml.parse(yamlText);

    return new Person(personData.name, personData.weight, personData.hobbies, "yaml");
}

export default parseYaml;