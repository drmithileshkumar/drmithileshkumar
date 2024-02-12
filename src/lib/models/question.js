// @ts-nocheck


export const initializeNewQuestion = (type, course, statement, optionA, optionB, optionC, optionD, correct, solution) => {
    let newUser = {
        type: 'Objective',
        course: '',
        statement: '',
        optionA: '',
        optionB: '',
        optionC: '',
        optionD: '',
        correct: [],
        solution: '',
        creationTimestamp: Date.now(), //private
    }
    return newUser;
}