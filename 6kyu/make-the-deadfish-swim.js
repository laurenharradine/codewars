// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.

// parse("iiisdoso") => [ 8, 64 ]

function parse( data )
{
  let sum = 0
  let arr = []
  for (let i = 0; i < data.length; i++) {
    switch (data[i]) {
      case 'i':
        sum += 1;
        break;
      case 'd':
        sum -= 1;
        break;
      case 's':
        sum = sum**2;
        break;
      case 'o':
        //Note that I used square brackets here and was tearing my hair out... :/
        arr.push(sum);
        break;
    }
  }
  return arr
}

// Prettier solution: 

// function parse(data) {
//     let res = [];
  
//     data.split('').reduce((cur, s) => {
//       if (s === 'i') cur++;
//       if (s === 'd') cur--;
//       if (s === 's') cur = Math.pow(cur, 2);
//       if (s === 'o') res.push(cur);
      
//       return cur;
//     }, 0);
    
//     return res;
//   }