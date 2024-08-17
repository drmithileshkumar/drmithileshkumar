//@ts-nocheck
export const contents = [
    {
        name: 'Discrete Mathematical Structures',
        url: '/courses/discrete',
        topics: [
            {
                name: 'LOGIC',
                url: '/courses/discrete/logic',
                topics: [
                    {
                        name: 'Basic Connectives and Truth Tables',
                        url: '/courses/discrete/logic/table',
                    },
                    {
                        name: 'The Laws of Logic',
                        url: '/courses/discrete/logic/laws',
                    },
                    {
                        name: "Rules of Inference",
                        url: "/courses/discrete/logic/inference",
                    },
                    {
                        name: "Quantifiers",
                        url: "/courses/discrete/logic/quantifiers"
                    },
                    {
                        name: "Proofs",
                        url: "/courses/discrete/logic/proofs"
                    },
                    {
                        name: "Mathematical Induction",
                        url: "/courses/discrete/logic/induction"
                    }
                ]
            },
            {
                name: "COMBINATORICS",
                url: '/courses/discrete/combinatorics',
                topics: [
                    {
                        name: 'The Rules of Sum and Product',
                        url: '/courses/discrete/combinatorics/rules',
                    },
                    {
                        name: "Permutations",
                        url: '/courses/discrete/combinatorics/permutations',
                    },
                    {
                        name: "Combinations",
                        url: "/courses/discrete/combinatorics/combinations"
                    },
                    {
                        name: "Combination with Repetition",
                        url: "/courses/discrete/combinatorics/repetition"
                    }
                ]
            },
            {
                name: 'RELATIONS',
                url: '/courses/discrete/relations',
                topics: [
                    {
                        name: 'Cartesian Products',
                        url: '/courses/discrete/relations/cartesian',
                    },
                    {
                        name: 'Functions',
                        url: "/courses/discrete/relations/functions",
                    },
                    {
                        name: "The Pigeonhole Principle",
                        url: "/courses/discrete/relations/pigeonhole",
                    },
                    {
                        name: 'Function Composition and inverse',
                        url: '/courses/discrete/relations/composition'
                    },
                    {
                        name: "Properties of Relations",
                        url: '/courses/discrete/relations/properties'
                    },
                    {
                        name: "Computer recognition",
                        url: "/courses/discrete/relations/recognition"
                    },
                    {
                        name: "Partial orders",
                        url: "/courses/discrete/relations/partial",
                    },
                    {
                        name: "Partitions",
                        url: "/courses/discrete/relations/partitions"
                    }
                ]
            },
            {
                name: "RECURRENCE RELATIONS",
                url: "/courses/discrete/recurrence",
                topics: [
                    {
                        name: 'The Principle of Inclusion and Exclusion',
                        url: "/courses/discrete/recurrence/inclusion"
                    },
                    {
                        name: "Derangements",
                        url: "/courses/discrete/recurrence/derangements"
                    },
                    {
                        name: "The First-Order Linear Recurrence Relation",
                        url: "/courses/discrete/recurrence/firstorder"
                    },
                    {
                        name: "The Second-Order Linear Recurrence Relation",
                        url: "/courses/discrete/recurrence/secondorder"
                    },
                ]
            },
            {
                name: "GRAPH THEORY",
                url: '/courses/discrete/graph',
                topics: [
                    {
                        name: "Definition",
                        url: "/courses/discrete/graph/definition"
                    },
                    {
                        name: "Subgraphs",
                        url: "/courses/discrete/graph/subgraphs"
                    },
                    {
                        name: "Trees",
                        url: "/courses/discrete/graph/trees"
                    },
                    {
                        name:"Sorting",
                        url:"/courses/discrete/graph/sorting"
                    },
                    {
                        name: "Prefix codes",
                        url: "/courses/discrete/graph/prefix"
                    }
                ]
            }
        ]
    },
    
]
export let contentNav = {
    "/courses/discrete": {
        "name": "Discrete Mathematical Structures",
        "url": "/courses/discrete",
        "previous": "/courses/discrete",
        "next": "/courses/discrete/logic"
    },
    "/courses/discrete/logic": {
        "name": "LOGIC",
        "url": "/courses/discrete/logic",
        "previous": "/courses/discrete",
        "next": "/courses/discrete/logic/table"
    },
    "/courses/discrete/logic/table": {
        "name": "Basic Connectives and Truth Tables",
        "url": "/courses/discrete/logic/table",
        "previous": "/courses/discrete/logic",
        "next": "/courses/discrete/logic/laws"
    },
    "/courses/discrete/logic/laws": {
        "name": "The Laws of Logic",
        "url": "/courses/discrete/logic/laws",
        "previous": "/courses/discrete/logic/table",
        "next": "/courses/discrete/logic/inference"
    },
    "/courses/discrete/logic/inference": {
        "name": "Rules of Inference",
        "url": "/courses/discrete/logic/inference",
        "previous": "/courses/discrete/logic/laws",
        "next": "/courses/discrete/logic/quantifiers"
    },
    "/courses/discrete/logic/quantifiers": {
        "name": "Quantifiers",
        "url": "/courses/discrete/logic/quantifiers",
        "previous": "/courses/discrete/logic/inference",
        "next": "/courses/discrete/logic/proofs"
    },
    "/courses/discrete/logic/proofs": {
        "name": "Proofs",
        "url": "/courses/discrete/logic/proofs",
        "previous": "/courses/discrete/logic/quantifiers",
        "next": "/courses/discrete/logic/induction"
    },
    "/courses/discrete/logic/induction": {
        "name": "Mathematical Induction",
        "url": "/courses/discrete/logic/induction",
        "previous": "/courses/discrete/logic/proofs",
        "next": "/courses/discrete/combinatorics"
    },
    "/courses/discrete/combinatorics": {
        "name": "COMBINATORICS",
        "url": "/courses/discrete/combinatorics",
        "previous": "/courses/discrete/logic/induction",
        "next": "/courses/discrete/combinatorics/rules"
    },
    "/courses/discrete/combinatorics/rules": {
        "name": "The Rules of Sum and Product",
        "url": "/courses/discrete/combinatorics/rules",
        "previous": "/courses/discrete/combinatorics",
        "next": "/courses/discrete/combinatorics/permutations"
    },
    "/courses/discrete/combinatorics/permutations": {
        "name": "Permutations",
        "url": "/courses/discrete/combinatorics/permutations",
        "previous": "/courses/discrete/combinatorics/rules",
        "next": "/courses/discrete/combinatorics/combinations"
    },
    "/courses/discrete/combinatorics/combinations": {
        "name": "Combinations",
        "url": "/courses/discrete/combinatorics/combinations",
        "previous": "/courses/discrete/combinatorics/permutations",
        "next": "/courses/discrete/combinatorics/repetition"
    },
    "/courses/discrete/combinatorics/repetition": {
        "name": "Combination with Repetition",
        "url": "/courses/discrete/combinatorics/repetition",
        "previous": "/courses/discrete/combinatorics/combinations",
        "next": "/courses/discrete/relations"
    },
    "/courses/discrete/relations": {
        "name": "RELATIONS",
        "url": "/courses/discrete/relations",
        "previous": "/courses/discrete/combinatorics/repetition",
        "next": "/courses/discrete/relations/cartesian"
    },
    "/courses/discrete/relations/cartesian": {
        "name": "Cartesian Products",
        "url": "/courses/discrete/relations/cartesian",
        "previous": "/courses/discrete/relations",
        "next": "/courses/discrete/relations/functions"
    },
    "/courses/discrete/relations/functions": {
        "name": "Functions",
        "url": "/courses/discrete/relations/functions",
        "previous": "/courses/discrete/relations/cartesian",
        "next": "/courses/discrete/relations/pigeonhole"
    },
    "/courses/discrete/relations/pigeonhole": {
        "name": "The Pigeonhole Principle",
        "url": "/courses/discrete/relations/pigeonhole",
        "previous": "/courses/discrete/relations/functions",
        "next": "/courses/discrete/relations/composition"
    },
    "/courses/discrete/relations/composition": {
        "name": "Function Composition and inverse",
        "url": "/courses/discrete/relations/composition",
        "previous": "/courses/discrete/relations/pigeonhole",
        "next": "/courses/discrete/relations/properties"
    },
    "/courses/discrete/relations/properties": {
        "name": "Properties of Relations",
        "url": "/courses/discrete/relations/properties",
        "previous": "/courses/discrete/relations/composition",
        "next": "/courses/discrete/relations/recognition"
    },
    "/courses/discrete/relations/recognition": {
        "name": "Computer recognition",
        "url": "/courses/discrete/relations/recognition",
        "previous": "/courses/discrete/relations/properties",
        "next": "/courses/discrete/relations/partial"
    },
    "/courses/discrete/relations/partial": {
        "name": "Partial orders",
        "url": "/courses/discrete/relations/partial",
        "previous": "/courses/discrete/relations/recognition",
        "next": "/courses/discrete/relations/partitions"
    },
    "/courses/discrete/relations/partitions": {
        "name": "Partitions",
        "url": "/courses/discrete/relations/partitions",
        "previous": "/courses/discrete/relations/partial",
        "next": "/courses/discrete/recurrence"
    },
    "/courses/discrete/recurrence": {
        "name": "RECURRENCE RELATIONS",
        "url": "/courses/discrete/recurrence",
        "previous": "/courses/discrete/relations/partitions",
        "next": "/courses/discrete/recurrence/inclusion"
    },
    "/courses/discrete/recurrence/inclusion": {
        "name": "The Principle of Inclusion and Exclusion",
        "url": "/courses/discrete/recurrence/inclusion",
        "previous": "/courses/discrete/recurrence",
        "next": "/courses/discrete/recurrence/derangements"
    },
    "/courses/discrete/recurrence/derangements": {
        "name": "Derangements",
        "url": "/courses/discrete/recurrence/derangements",
        "previous": "/courses/discrete/recurrence/inclusion",
        "next": "/courses/discrete/recurrence/firstorder"
    },
    "/courses/discrete/recurrence/firstorder": {
        "name": "The First-Order Linear Recurrence Relation",
        "url": "/courses/discrete/recurrence/firstorder",
        "previous": "/courses/discrete/recurrence/derangements",
        "next": "/courses/discrete/recurrence/secondorder"
    },
    "/courses/discrete/recurrence/secondorder": {
        "name": "The Second-Order Linear Recurrence Relation",
        "url": "/courses/discrete/recurrence/secondorder",
        "previous": "/courses/discrete/recurrence/firstorder",
        "next": "/courses/discrete/graph"
    },
    "/courses/discrete/graph": {
        "name": "GRAPH THEORY",
        "url": "/courses/discrete/graph",
        "previous": "/courses/discrete/recurrence/secondorder",
        "next": "/courses/discrete/graph/definition"
    },
    "/courses/discrete/graph/definition": {
        "name": "Definition",
        "url": "/courses/discrete/graph/definition",
        "previous": "/courses/discrete/graph",
        "next": "/courses/discrete/graph/subgraphs"
    },
    "/courses/discrete/graph/subgraphs": {
        "name": "Subgraphs",
        "url": "/courses/discrete/graph/subgraphs",
        "previous": "/courses/discrete/graph/definition",
        "next": "/courses/discrete/graph/trees"
    },
    "/courses/discrete/graph/trees": {
        "name": "Trees",
        "url": "/courses/discrete/graph/trees",
        "previous": "/courses/discrete/graph/subgraphs",
        "next": "/courses/discrete/graph/sorting"
    },
    "/courses/discrete/graph/sorting": {
        "name": "Sorting",
        "url": "/courses/discrete/graph/sorting",
        "previous": "/courses/discrete/graph/trees",
        "next": "/courses/discrete/graph/prefix"
    },
    "/courses/discrete/graph/prefix": {
        "name": "Prefix codes",
        "url": "/courses/discrete/graph/prefix",
        "previous": "/courses/discrete/graph/sorting",
        "next": "/courses/discrete/graph/prefix"
    }
}

// let contentArray = [];
// let getArray = (subContent) => {
//     contentArray = [...contentArray, {name: subContent.name, url: subContent.url}];
//     if(!subContent.topics) return;
//     else {
//         for(let i = 0; i < subContent.topics.length; i++) {
//             getArray(subContent.topics[i]);
//         }
//     }
// }
// getArray(contents[0]);

// let withSides = contentArray.map((u, i) => {
//     return {
//         name: u.name,
//         url: u.url,
//         previous: i > 0 ? contentArray[i - 1].url : u.url,
//         next: i < contentArray.length - 1 ? contentArray[i + 1].url : u.url
//     }
// })
// let objectWithSides = {};
// for(let i = 0; i < withSides.length; i++) {
//     objectWithSides[withSides[i].url] = withSides[i];
// }
// console.log(objectWithSides)