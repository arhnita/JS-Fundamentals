const firstArg = parseInt(process.argv[2]);
const secondArg = parseInt(process.argv[3]);

function add(a, b) {
  if (isNaN(a) || isNaN(b)) {
    console.log(NaN);
  } else {
    console.log(a + b);
  }
}

 add(firstArg, secondArg);
