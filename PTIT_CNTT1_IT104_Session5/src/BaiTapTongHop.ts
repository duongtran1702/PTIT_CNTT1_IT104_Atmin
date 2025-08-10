class Animal {
    private name: string;
    protected age: number;
    public species: string;

    constructor(name: string, age: number, species: string) {
        this.age = age;
        this.name = name;
        this.species = species;
    }

    speak(): void {
        console.log('Sound of animals');
    }

    show(): void {
        console.log(`${this.name} - ${this.age} - ${this.species}`);
    }

    getName(): string {
        return this.name;
    }

    setName(input: string) {
        this.name = input;
    }

    getAge(): number {
        return this.age;
    }

    setAge(input: number) {
        this.age = input;
    }
}

class Dog extends Animal {
    public breed: string;

    constructor(name: string, age: number, species: string, breed: string) {
        super(name, age, species);
        this.breed = breed;
    }

    speak(): void {
        console.log('Sound: Woof');
    }

    show(): void {
        console.log(
            `${this.getName()} - ${this.age} - ${this.species} - ${this.breed}`
        );
    }
}

class Cat extends Animal {
    public breed: string;

    constructor(name: string, age: number, species: string, breed: string) {
        super(name, age, species);
        this.breed = breed;
    }

    speak(): void {
        console.log('Sound: Meow');
    }

    show(): void {
        console.log(
            `${this.getName()} - ${this.age} - ${this.species} - ${this.breed}`
        );
    }
}

class Rabbit extends Animal {
    public breed: string;

    constructor(name: string, age: number, species: string, breed: string) {
        super(name, age, species);
        this.breed = breed;
    }

    speak(): void {
        console.log('Sound: Squeak');
    }

    show(): void {
        console.log(
            `${this.getName()} - ${this.age} - ${this.species} - ${this.breed}`
        );
    }
}

const animals: Animal[] = [
    new Dog('Buddy', 3, 'Dog', 'Golden Retriever'),
    new Cat('Kitty', 2, 'Cat', 'Siamese'),
    new Rabbit('Bunny', 1, 'Rabbit', 'Mini Lop'),
];

animals.forEach((a) => {
    a.show();
    a.speak();
});
