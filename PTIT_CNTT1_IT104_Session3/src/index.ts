const student: Student = {
    id: 1,
    name: 'Atmin',
    age: 20,
};

interface Subject {
    subjectName: string;
    point: number;
    credit: number;
}
interface Student {
    id: number;
    name: string;
    age: number;
    scores?: Subject[];
}
const listStudent: Student[] = [
    {
        id: 1,
        name: 'Atmin',
        age: 20,
        scores: [
            {
                subjectName: 'React',
                point: 20,
                credit: 6,
            },
        ],
    },
    {
        id: 2,
        name: 'Mynato',
        age: 19,
    },
];
