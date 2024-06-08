let numbers = [1, 5, 7, 12, 66, 88, 90, 102];

const higherNumber = () => {
  let highestNumber = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > numbers[0]) {
      highestNumber = numbers[i];
    }
  }

  return highestNumber;
};

console.log(higherNumber());
