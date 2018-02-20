module.exports =function getZerosCount(number, base) {
  var count = base;
  var sum=0;
  for(let i=2; i<=count/2; i++){
    if(count%i==0){
      count=Math.floor(count/i);
      i=1;
    }
  }

  var a=count;
  while (number>count) {
    sum+=Math.floor(number/count);
    count*=a;
  }
  return sum;
}
