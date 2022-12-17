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
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15')];

export const server_loads = [];

export const dictionary = {
	"/": [5],
	"/cv": [6,[2]],
	"/iit": [7],
	"/iit/maths": [8,[3]],
	"/iit/maths/question1": [9,[3]],
	"/iit/maths/question2": [10,[3]],
	"/iit/maths/question3": [11,[3]],
	"/iit/maths/question4": [12,[3]],
	"/iit/maths/question5": [13,[3]],
	"/iit/maths/question6": [14,[3]],
	"/practice": [15,[4]]
};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};