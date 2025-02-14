class Person {
    constructor(name, weight, hobbies, fileType) {
        this.name = name;
        this.weight = weight;
        this.hobbies = hobbies;
        this.fileType = fileType;
        this.language = 'javascipt/Node';
    }
    greet() {
        return `Hello, my name is ${this.name} and I weigh ${this.weight} kg. and my hobbies are ${this.hobbies.join(', ')}`;
    }
}

export default Person;