const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
// const num3 = num1.concat(num2, [7, 8, 9], 'igor');
// ... = rest -> spread

const num3 = [...num1, 'igor', ...num2, ...[7, 8, 9]];
console.log(num3)