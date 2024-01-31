const grades = [56, 78, 99, 85];

// TODO: Complete the 'findAverage' function below.
function findAverage(accumulator, currentValue, index, array) {
    accumulator += currentValue;
    if (index === array.length - 1) {
        return accumulator / array.length;
    } else {
        return accumulator;
    }
}

// TODO: Pass the 'findAverage' into the reduce method.
let gradeAverage = grades.reduce(findAverage, 0);

console.log(gradeAverage);
