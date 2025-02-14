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
    const personData = {};

    Object.entries(parsedPersonData).forEach(([key, value]) => {
        if (key === 'hobbies') {
            personData[key] = value.hobby.map(item => item.trim());
        } else if (typeof value === 'string' && !isNaN(value)) {
            personData[key] = parseFloat(value);
        } else {
            personData[key] = value;
        }
    });

    return new Person(personData.name, personData.weight, personData.hobbies, "xml");
};

export default parseXml;