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
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20'),
	() => import('./nodes/21'),
	() => import('./nodes/22'),
	() => import('./nodes/23'),
	() => import('./nodes/24'),
	() => import('./nodes/25'),
	() => import('./nodes/26')];

export const server_loads = [];

export const dictionary = {
	"/": [6],
	"/cv": [7,[2]],
	"/iit": [8],
	"/iit/maths": [9],
	"/iit/maths/2021": [10,[3]],
	"/iit/maths/2021/question1": [11,[3]],
	"/iit/maths/2021/question2": [12,[3]],
	"/iit/maths/2021/question3": [13,[3]],
	"/iit/maths/2021/question4": [14,[3]],
	"/iit/maths/2021/question5": [15,[3]],
	"/iit/maths/2021/question6": [16,[3]],
	"/notes": [17],
	"/notes/maths": [18,[4]],
	"/notes/maths/Sets/Equal sets": [20,[4]],
	"/notes/maths/Sets/Finite and infinite sets": [21,[4]],
	"/notes/maths/Sets/Introduction": [22,[4]],
	"/notes/maths/Sets/Sets and their representations": [23,[4]],
	"/notes/maths/Sets/Subsets": [24,[4]],
	"/notes/maths/Sets/The empty set": [25,[4]],
	"/notes/maths/conic": [19,[4]],
	"/practice": [26,[5]]
};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};