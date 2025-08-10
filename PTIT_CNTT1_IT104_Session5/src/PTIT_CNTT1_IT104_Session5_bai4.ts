class Vehicle1 {
    public name: string;
    protected year: number;
    private company: string;
    public readonly id: string;

    constructor(id: string, name: string, year: number, company: string) {
        this.name = name;
        this.year = year;
        this.company = company;
        this.id = id;
    }

    display() {
        console.log(
            `${this.id} - ${this.name} - ${this.company} - ${this.year}`
        );
    }
}

const v3 = new Vehicle1('1', 'Yamaha', 2025, 'ABC Corp');
v3.display();
