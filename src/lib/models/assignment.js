// @ts-nocheck


export const initializeNewAssignment = (title, university, department, session, semester, courseName, courseCode, totalMarks, numberOfQuestions, questions, isPublic) => {
    let newAssignment = {
        title: 'Assignment 1',
        university: 'Dayananda Sagar University',
        department: 'Computer Applications',
        session: '2023-2024',
        semester: 'II',
        courseName: 'Mathematics II',
        courseCode: 'CA',
        totalMarks: 100,
        numberOfQuestions: 10,
        questions: [],
        dates: {
            start: Date.now(),
            end: Date.now()
        },
        isPublic: true,
        creationTimestamp: Date.now(), //private
    }
    return newAssignment;
}