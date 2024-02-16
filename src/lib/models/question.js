// @ts-nocheck


export const initializeNewQuestion = (type, courseName, statement, optionA, optionB, optionC, optionD, correct, solution, isPublic) => {
    let newUser = {
        type: 'Objective',
        courseName: '',
        statement: '',
        optionA: '',
        optionB: '',
        optionC: '',
        optionD: '',
        correct: [],
        solution: '',
        isPublic: true,
        creationTimestamp: Date.now(), //private
    }
    return newUser;
}