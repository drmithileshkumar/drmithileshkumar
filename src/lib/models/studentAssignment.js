// @ts-nocheck


export const initializeNewStudentAssignment = (name, id, title, publicID, submission, assignmentID, answers, marks, total) => {
    let newStudentAssignment = {
        name: '',
        id: '',//usn
        title: '',
        publicID: '',
        submission: Date.now(),
        assignmentID: '',//assignment id
        answers: {},//{questionID: answer}
        marks: [],//question-wise
        total: 0,
        creationTimestamp: Date.now(), //private
    }
    return newStudentAssignment;
}