const makeChange = (c) => {
  // your name here
	let p = 1;
    let n = 5;
    let d = 10;
    let q = 25;

    let result = { "q": 0, "d": 0, "n": 0, "p": 0 };

    while (c > 0) {
    if (c >= 25) {
      c -= 25;
      result.q++;
    } else if (c >= 10) {
      c -= 10;
      result.d++;
    } else if (c >= 5) {
      c -= 5;
      result.n++;
    } else {
      c -= 1;
      result.p++;
    }
  }

  return result;
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
