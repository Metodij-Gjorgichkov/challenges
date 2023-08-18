let numbers = [13, 15, 20];

function areSmallestAndBiggestPrime(array) {
  let smallest = 1000000;
  let biggest = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] < smallest) {
      smallest = array[i];
    }
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] > biggest) {
      biggest = array[i];
    }
  }

  let deliteliNaSmallest = 0;
  for (let i = 0; i < smallest; i++) {
    if (smallest % i === 0) {
      deliteliNaSmallest++;
    }
  }

  if (deliteliNaSmallest <= 3) {
    console.log(`The smallest number ${smallest} is prime`);
  } else {
    console.log(`The smallest number ${smallest} is not prime`);
  }

  let deliteliNaBiggest = 0;
  for (let i = 0; i < biggest; i++) {
    if (biggest % i === 0) {
      deliteliNaBiggest++;
    }
  }

  if (deliteliNaBiggest <= 3) {
    console.log(`The biggest number ${biggest} is prime`);
  } else {
    console.log(`The biggest number ${biggest} is not prime`);
  }
}

areSmallestAndBiggestPrime(numbers);
