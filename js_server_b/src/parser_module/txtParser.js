import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';
import Person from "./person.js";

const TEXTPATH = "../../../data/person.txt";

const parseText = () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filePath = path.join(__dirname, TEXTPATH);
    const text = fs.readFileSync(filePath, "utf-8");

    const variables = text.split("\n");

    const personData = {};

    variables.forEach(variable => {
        const data = variable.split("=");
        const dataKey = data[0].trim();
        let dataValue = data[1].trim();
        if (dataValue.startsWith(':')) {
            const dataValueList = dataValue.slice(1).split(",");
            dataValueList.forEach((value, index) => {
                value = value.trim();
                if (isNaN(value)) {
                    dataValueList[index] = value;
                } else {
                    dataValueList[index] = parseFloat(value);
                }
            });
            dataValue = dataValueList;
        } else if (!isNaN(dataValue)) {
            dataValue = parseFloat(dataValue);
        }
        personData[dataKey] = dataValue;
    });

    return new Person(personData.name, personData.weight, personData.hobbies, "txt");
};

export default parseText;