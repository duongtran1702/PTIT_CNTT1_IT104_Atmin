const delay = (ms: number) =>
    new Promise((resolve) => {
        setTimeout(resolve, ms);
    });

const runTasks = async () => {
    console.log('Run task 1');
    await delay(1000);
    console.log('Task 1 done');

    console.log('Run task 2');
    await delay(2000);
    console.log('Task 2 done');

    console.log('Run task 3');
    await delay(1500);
    console.log('Task 3 done');
};
// runTasks();

const parallelTasks = () => {
    const taskA = new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve('Task A');
        }, 1500);
    });

    const taskB = new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve('Task B');
        }, 2000);
    });
    Promise.all([taskA, taskB])
        .then((res) => console.log('Res :', res))
        .catch((error) => console.log('Error :', error));
};

// parallelTasks();

// Hàm fetchData giả lập
function fetchData(): Promise<{ data: string }> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isSuccess = Math.random() < 0.5; // 50% thành công, 50% thất bại
            if (isSuccess) {
                resolve({ data: 'Success!' });
            } else {
                reject('Network Error!');
            }
        }, 1000);
    });
}

// Hàm handleData gọi fetchData và xử lý bằng try/catch
async function handleData(): Promise<void> {
    try {
        const result = await fetchData();
        console.log('Kết quả:', result);
    } catch (error) {
        console.error('Lỗi:', error);
    }
}

// Gọi thử
handleData();
