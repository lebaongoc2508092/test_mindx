// Bài 1
var input = ['BINH','HUNG', 'PHUOC','CAO','KHANH']
var output = [];
function allLongestStrings(inputArray) {
    var length = 0;
    for(var i =0; i < input.length; i++){
      if(length < input[i].length){
        length = input[i].length;
      }
    }
    for(var j =0; j < input.length; j++){
      if(input[j].length == length){
         output.push(input[j]);
      }
    }
   if(output.length == 1){
     return output[0]
   }else{
      return output
  }
}
console.log(allLongestStrings(input));
// Bài 2

var arr = [60, 40, 55, 75, 64]

function alternatingSums(a) {
  var sum1 = 0;
  var sum2 = 0;
  for(let i = 0; i < a.length; i+= 2) {
    sum1 += a[i];
  }
  for(let j = 1;j < a.length; j+= 2) {
    sum2 += a[j];
    
  }
  return [sum1, sum2]
}

console.log(alternatingSums(arr))





