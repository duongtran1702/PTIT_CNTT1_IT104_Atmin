const getStudentSummary = (student) => {
    const { name, age, listSubject } = student;
    const sum = listSubject.reduce((point, tmp) => point + tmp.score, 0);
    const avgScore = sum / listSubject.length;

    let classify = '';
    if (avgScore >= 8.5) classify += 'Học sinh giỏi';
    else if (avgScore >= 7) classify += 'Học sinh khá';
    else if (avgScore >= 5) classify += 'Học sinh trung bình';
    else classify += 'Học sinh yếu';

    // let bestSub = listSubject[0];
    // let weakestSub = listSubject[0];
    // listSubject.forEach((tmp) => {
    //     if (bestSub.score < tmp.score) bestSub = tmp;
    //     if (weakestSub.score > tmp.score) weakestSub = tmp;
    // });

    const bestSub = listSubject.reduce((max, tmp) =>
        tmp.score > max.score ? tmp : max
    );
    const weakestSub = listSubject.reduce((min, tmp) =>
        tmp.score < min.score ? tmp : min
    );

    console.log(`${name} is ${age} years old.`);
    console.log(`Average score: ${avgScore} → ${classify}`);
    console.log(`Best subject: ${bestSub.subject} (${bestSub.score})`);
    console.log(`Weakest subject: ${weakestSub.subject} (${weakestSub.score})`);
};
const student = {
    name: 'Dev',
    age: 20,
    listSubject: [
        { subject: 'Math', score: 9 },
        { subject: 'English', score: 7.5 },
        { subject: 'Physics', score: 10 },
        { subject: 'Literature', score: 8.5 },
    ],
};

getStudentSummary(student);
