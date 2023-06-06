const getCelsius = far => (far - 32) * 5 / 9;

console.log(getCelsius(32));


const minMax = (arr) => {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    return {
        min,
        max
    };
};

console.log(minMax([6, 4, 6, 51, 40, 50002]));


((width, length) => {console.log(`A rectangle with a width of ${width} and length ${length} has an area of ${width * length}`)})(10,5);