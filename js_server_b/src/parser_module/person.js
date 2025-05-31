class Person {
    constructor(name, weight, hobbies, fileType) {
        this.name = name;
        if (typeof weight === 'string' && !isNaN(value)) {
            this.weight = parseFloat(weight);
        }
        else if (typeof weight === 'number') {
            this.weight = parseFloat(weight);
        } else {
            throw new Error('Weight must be a number or a string that can be converted to a number');
        }
        this.hobbies = hobbies;
        this.fileType = fileType;
        this.language = 'javascipt/Node';
    }
    greet() {
        return `Hello, my name is ${this.name} and I weigh ${this.weight} kg. and my hobbies are ${this.hobbies.join(', ')}`;
    }
}

export default Person;