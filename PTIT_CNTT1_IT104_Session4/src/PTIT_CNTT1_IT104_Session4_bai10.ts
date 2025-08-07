type Student1 = {
    readonly studentId: string;
    name: string;
    email: string;
    hasCompleted: boolean;
    finalScore?: number;
};

type Course = {
    courseId: string;
    title: string;
    instructor: string;
    students: Student1[];
    isActive: boolean;
};

type CourseManager = {
    schoolName: string;
    year: number;
    courses: Course[];
};

const getCompletedStudents = (course: Course): Student1[] => {
    const { students } = course;
    const tmp = students.filter((student) => student.hasCompleted);
    return tmp;
};

const calculateAverageScore = (course: Course): number | null => {
    const { students } = course;
    let avgTmp = 0;
    let count = 0;
    for (const tmp of students) {
        if (tmp.finalScore) {
            avgTmp += tmp.finalScore;
            ++count;
        }
    }
    if (avgTmp) return Number((avgTmp / count).toFixed(2));
    return null;
};

const printCourseReport = (manager: CourseManager): void => {
    const { courses } = manager;
    for (let i = 0; i < courses.length; i++) {
        console.log(
            `${i + 1}. ${courses[i].title} (GV: ${courses[i].instructor})`
        );
        console.log(`Tổng học viên: ${courses[i].students.length} học viên`);
        console.log(
            `Hoàn thành: ${getCompletedStudents(courses[i]).length} học viên`
        );
        console.log(
            `Trung bình điểm: ${
                calculateAverageScore(courses[i])
                    ? calculateAverageScore(courses[i])
                    : 'N/A'
            } `
        );
        console.log(
            `Trạng thái: ${courses[i].isActive ? 'Đang mở' : 'Đã đóng'} \n`
        );
    }
};

const courseManager: CourseManager = {
    schoolName: 'PTIT',
    year: 2025,
    courses: [
        {
            courseId: 'C001',
            title: 'TypeScript Cơ Bản',
            instructor: 'Nguyễn Văn A',
            isActive: true,
            students: [
                { studentId: 'S001', name: 'A', email: 'a@email.com', hasCompleted: true, finalScore: 8 },
                { studentId: 'S002', name: 'B', email: 'b@email.com', hasCompleted: true, finalScore: 9 },
                { studentId: 'S003', name: 'C', email: 'c@email.com', hasCompleted: false }
            ]
        },
        {
            courseId: 'C002',
            title: 'HTML & CSS',
            instructor: 'Trần Thị B',
            isActive: false,
            students: [
                { studentId: 'S004', name: 'D', email: 'd@email.com', hasCompleted: false },
                { studentId: 'S005', name: 'E', email: 'e@email.com', hasCompleted: false }
            ]
        }
    ]
};

printCourseReport(courseManager);
