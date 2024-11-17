let arrays = [[1, 2, 3], [4, 5], [6]];


const flatten = arrays.reduce((accumulator, currentIndex) => {
    return accumulator.concat(currentIndex);
}, [])

console.log(flatten) 
