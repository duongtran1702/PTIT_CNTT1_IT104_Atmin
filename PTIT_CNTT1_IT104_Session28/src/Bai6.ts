type Next = () => void;

const task1 = (next: Next) => setTimeout(() => { 
    console.log("Task 1 xong"); 
    next(); 
}, 1000);

const task2 = (next: Next) => setTimeout(() => { 
    console.log("Task 2 xong"); 
    next(); 
}, 1500);

const task3 = (next: Next) => setTimeout(() => { 
    console.log("Task 3 xong"); 
    next(); 
}, 2000);

// Chạy tuần tự
task1(() => task2(() => task3(() => console.log("Hoàn tất"))));
