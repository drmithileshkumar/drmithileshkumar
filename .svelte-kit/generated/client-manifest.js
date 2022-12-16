export { matchers } from './client-matchers.js';

export const nodes = [() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13')];

export const server_loads = [];

export const dictionary = {
	"/": [4],
	"/cv": [5,[2]],
	"/questions": [6],
	"/questions/maths": [7,[3]],
	"/questions/maths/question1": [8,[3]],
	"/questions/maths/question2": [9,[3]],
	"/questions/maths/question3": [10,[3]],
	"/questions/maths/question4": [11,[3]],
	"/questions/maths/question5": [12,[3]],
	"/questions/maths/question6": [13,[3]]
};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};