import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';
import Person from "./person.js";

const CSVPATH = "../../../data/person.csv";

const parseCsv = () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filePath = path.join(__dirname, CSVPATH);
    const csvText = fs.readFileSync(filePath, "utf-8");

    const personData = {};

    const [headerLine, ...lines] = csvText.trim().split("\n");
    const headers = headerLine.split(",").map(header => header.trim());
    const data = lines.map(line => {
        const values = line.split(",");
        const entry = {};
        headers.forEach((header, index) => {
            let value = values[index].trim();
            if (typeof value === "string" && value.includes(";")) {
                const valueList = value.split(";").map(listItem => {
                    listItem = listItem.trim()
                    if (!isNaN(listItem)) {
                        listItem = parseFloat(listItem);
                    }
                    return listItem;
                });
                value = valueList;
            } else if (!isNaN(value)) {
                value = parseFloat(value);
            }
            entry[header] = value;
            personData[header] = value;
        });
        return new Person(entry.name, entry.weight, entry.hobbies, "csv");
    });

    //return data;

    return new Person(personData.name, personData.weight, personData.hobbies, "csv");
};

export default parseCsv;