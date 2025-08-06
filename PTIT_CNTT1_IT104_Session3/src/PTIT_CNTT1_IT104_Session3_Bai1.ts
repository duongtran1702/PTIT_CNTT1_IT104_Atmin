let namePerson: string = 'Atmin';
const age: number = 19;
const job: string = 'Dev';
const displayInfor = (name: string, age: number, job: string = 'unknown') => {
    console.log('name: ', name);
    console.log('age: ', age);
    console.log('job: ', job);
};
displayInfor(namePerson, age, job);
