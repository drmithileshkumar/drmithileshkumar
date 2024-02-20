//@ts-nocheck
export const contents = [
    {
        name: 'Linear algebra',
        url: '/courses/linearalgebra',
        topics: [
            {
                name: 'Bases and linear independence',
                url: '/courses/linearalgebra/bases',
                topics: [
                ]
            },
            {
                name: "Linear operators and matrices",
                url: '/courses/linearalgebra/operators',
                topics: [
                ]
            },
            {
                name: 'The Pauli matrices',
                url: '/courses/linearalgebra/pauli',
                topics: [
                ]
            },
            {
                name: "Inner products",
                url: "/courses/linearalgebra/inner",
                topics: [
                ]
            },
            {
                name: "Eigenvectors and eignevalues",
                url: "/courses/linearalgebra/eigen",
                topics: [
                ]
            },
            {
                name: "Adjoints and Hermitian operators",
                url: "/courses/linearalgebra/adjoint",
                topics: [
                ]
            },
            {
                name: "Tensor products",
                url: "/courses/linearalgebra/tensor",
                topics: [
                ]
            },
            {
                name: "Operator functions",
                url: "/courses/linearalgebra/functions",
                topics: [
                ]
            },
            {
                name: "The commutator and anti-commutator",
                url: "/courses/linearalgebra/commutator",
                topics: [
                ]
            },
            {
                name: "The polar and singular value decompositions",
                url: "/courses/linearalgebra/decompositions",
                topics: [
                ]
            }
        ]
    },
    
]
export const contentNav = {
    "/courses/linearalgebra": {
        "name": "Linear algebra",
        "url": "/courses/linearalgebra",
        "previous": "/courses/linearalgebra",
        "next": "/courses/linearalgebra/bases"
    },
    "/courses/linearalgebra/bases": {
        "name": "Bases and linear independence",
        "url": "/courses/linearalgebra/bases",
        "previous": "/courses/linearalgebra",
        "next": "/courses/linearalgebra/operators"
    },
    "/courses/linearalgebra/operators": {
        "name": "Linear operators and matrices",
        "url": "/courses/linearalgebra/operators",
        "previous": "/courses/linearalgebra/bases",
        "next": "/courses/linearalgebra/pauli"
    },
    "/courses/linearalgebra/pauli": {
        "name": "The Pauli matrices",
        "url": "/courses/linearalgebra/pauli",
        "previous": "/courses/linearalgebra/operators",
        "next": "/courses/linearalgebra/inner"
    },
    "/courses/linearalgebra/inner": {
        "name": "Inner products",
        "url": "/courses/linearalgebra/inner",
        "previous": "/courses/linearalgebra/pauli",
        "next": "/courses/linearalgebra/eigen"
    },
    "/courses/linearalgebra/eigen": {
        "name": "Eigenvectors and eignevalues",
        "url": "/courses/linearalgebra/eigen",
        "previous": "/courses/linearalgebra/inner",
        "next": "/courses/linearalgebra/adjoint"
    },
    "/courses/linearalgebra/adjoint": {
        "name": "Adjoints and Hermitian operators",
        "url": "/courses/linearalgebra/adjoint",
        "previous": "/courses/linearalgebra/eigen",
        "next": "/courses/linearalgebra/tensor"
    },
    "/courses/linearalgebra/tensor": {
        "name": "Tensor products",
        "url": "/courses/linearalgebra/tensor",
        "previous": "/courses/linearalgebra/adjoint",
        "next": "/courses/linearalgebra/functions"
    },
    "/courses/linearalgebra/functions": {
        "name": "Operator functions",
        "url": "/courses/linearalgebra/functions",
        "previous": "/courses/linearalgebra/tensor",
        "next": "/courses/linearalgebra/commutator"
    },
    "/courses/linearalgebra/commutator": {
        "name": "The commutator and anti-commutator",
        "url": "/courses/linearalgebra/commutator",
        "previous": "/courses/linearalgebra/functions",
        "next": "/courses/linearalgebra/decompositions"
    },
    "/courses/linearalgebra/decompositions": {
        "name": "The polar and singular value decompositions",
        "url": "/courses/linearalgebra/decompositions",
        "previous": "/courses/linearalgebra/commutator",
        "next": "/courses/linearalgebra/decompositions"
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