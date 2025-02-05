export const contents = [
    {
        name: 'Algorithms',
        url: '/courses/algorithms',
        topics: [
            {
                name: 'Sorting algorithms',
                url: '/courses/algorithms/sorting',
                topics: [
                    {
                        name: 'Bubble Sort',
                        url: '/courses/algorithms/sorting/bubble'
                    },
                    {
                        name: 'Insertion Sort',
                        url: '/courses/algorithms/sorting/insertion'
                    },
                    {
                        name: 'Merge Sort',
                        url: '/courses/algorithms/sorting/merge'
                    },
                    {
                        name: 'Quick Sort',
                        url: '/courses/algorithms/sorting/quick'
                    },
                    {
                        name: 'Count Sort',
                        url: '/courses/algorithms/sorting/count'
                    },
                    {
                        name: 'Bucket Sort',
                        url: '/courses/algorithms/sorting/bucket'
                    },
                    {
                        name: 'Redix Sort',
                        url: '/courses/algorithms/sorting/radix'
                    },
                    {
                        name: 'Complexity',
                        url: '/courses/algorithms/sorting/complexity'
                    },
                ]
            },
        ]
    },
    
]

export const contentNav = {
    "/courses/algorithms": {
        "name": "Algorithms",
        "url": "/courses/algorithms",
        "previous": "/courses/algorithms",
        "next": "/courses/algorithms/sorting"
    },
    "/courses/algorithms/sorting": {
        "name": "Sorting algorithms",
        "url": "/courses/algorithms/sorting",
        "previous": "/courses/algorithms",
        "next": "/courses/algorithms/sorting/bubble"
    },
    "/courses/algorithms/sorting/bubble": {
        "name": "Bubble Sort",
        "url": "/courses/algorithms/sorting/bubble",
        "previous": "/courses/algorithms/sorting",
        "next": "/courses/algorithms/sorting/insertion"
    },
    "/courses/algorithms/sorting/insertion": {
        "name": "Insertion Sort",
        "url": "/courses/algorithms/sorting/insertion",
        "previous": "/courses/algorithms/sorting/bubble",
        "next": "/courses/algorithms/sorting/merge"
    },
    "/courses/algorithms/sorting/merge": {
        "name": "Merge Sort",
        "url": "/courses/algorithms/sorting/merge",
        "previous": "/courses/algorithms/sorting/insertion",
        "next": "/courses/algorithms/sorting/quick"
    },
    "/courses/algorithms/sorting/quick": {
        "name": "Quick Sort",
        "url": "/courses/algorithms/sorting/quick",
        "previous": "/courses/algorithms/sorting/merge",
        "next": "/courses/algorithms/sorting/count"
    },
    "/courses/algorithms/sorting/count": {
        "name": "Count Sort",
        "url": "/courses/algorithms/sorting/count",
        "previous": "/courses/algorithms/sorting/quick",
        "next": "/courses/algorithms/sorting/bucket"
    },
    "/courses/algorithms/sorting/bucket": {
        "name": "Bucket Sort",
        "url": "/courses/algorithms/sorting/bucket",
        "previous": "/courses/algorithms/sorting/count",
        "next": "/courses/algorithms/sorting/radix"
    },
    "/courses/algorithms/sorting/radix": {
        "name": "Radix Sort",
        "url": "/courses/algorithms/sorting/radix",
        "previous": "/courses/algorithms/sorting/bucket",
        "next": "/courses/algorithms/sorting/complexity"
    },
    "/courses/algorithms/sorting/complexity": {
        "name": "Complexity",
        "url": "/courses/algorithms/sorting/complexity",
        "previous": "/courses/algorithms/sorting/radix",
        "next": "/courses/algorithms/sorting/complexity"
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
// console.log(contentArray);


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