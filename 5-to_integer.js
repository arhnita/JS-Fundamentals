const firstArg = process.argv[2];

if (parseInt(firstArg)) {
  console.log(`My number: ${firstArg}`);
} else {
  console.log("Not a number");
}
