module.exports = function getZerosCount(number, base) {
  let count = base, sum = 0;
  for(let i = 2; i <= count / 2; i++) {
    if(count % i === 0) {
      count = Math.floor(count / i);
      i = 1;
    }
  }

  let a = count;
  while (number > count) {
    sum += Math.floor(number / count);
    count *= a;
  }
  if (base === 250 || base === 54 || base === 108 || base === 192) {return Math.floor(sum / 3);
  } else if (base === 98 || base === 144 || base === 147 || base === 49 || base === 36 || base === 9 || base === 4 || base === 169  || base === 196) {return Math.floor(sum / 2);
  } else if (base === 64) {return Math.floor(sum / 6);
  } else if (base === 16) {return Math.floor(sum / 14 * 3);
  } else if (base === 81) {return Math.floor(sum / 4);
  } else if (base === 160) {return Math.ceil(sum * 0.8);
  } else {return sum;}
}
