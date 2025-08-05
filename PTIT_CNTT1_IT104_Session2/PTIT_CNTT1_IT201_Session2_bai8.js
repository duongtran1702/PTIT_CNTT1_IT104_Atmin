const displayUserInfor = (data) => {
    const { name, age, location, contact = {}, job = {} } = data;
    const { city, country } = location;
    const { email = 'unknown', phone = 'unknown' } = contact;
    const { title = 'unknown', company = 'unknown' } = job;

    console.log(
        `${name} is ${age} years old, lives in  ${city},  ${country}, works as  ${title} at  ${company}, and can be contacted via  ${email} or  ${phone}.`
    );
};
displayUserInfor({
    name: 'Anna',
    age: 30,
    location: { city: 'Da Nang', country: 'Vietnam' },
});
displayUserInfor({
    name: 'John',
    age: 25,
    location: { city: 'Hanoi', country: 'Vietnam' },
    contact: { email: 'john@example.com', phone: '0123456789' },
    job: { title: 'Developer', company: 'Tech Corp' },
});
