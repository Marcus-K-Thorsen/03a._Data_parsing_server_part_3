import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';
import Person from "./person.js";
import { XMLParser } from "fast-xml-parser";

const XMLPATH = "../../../data/person.xml";

const parseXml = () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filePath = path.join(__dirname, XMLPATH);
    const xmlText = fs.readFileSync(filePath, "utf-8");

    const parser = new XMLParser({
        ignoreAttributes: false,
        attributeNamePrefix: '',
    });
    const parsedPersonData = parser.parse(xmlText).person;

    return new Person(parsedPersonData.name, parsedPersonData.weight, parsedPersonData.hobbies.hobby, "xml");
};

export default parseXml;