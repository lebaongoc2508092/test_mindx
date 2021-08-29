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


// console.log(allLongestStrings(input));
// // Bài 2
// let input = [60, 40, 55, 75, 64]
// let output= 0;
// function alternatingSums(a){
//     for
// }








// js cho web
const colors = ['yellow','red','orange','pink','blue','green'];
const btn = document.querySelector('.btn');
pickColor = () =>{
    const colorsIndex = Math.floor(Math.random() * colors.length);
   return colors[colorsIndex];
}
btn.addEventListener('click',function(){
    document.body.style.backgroundColor = pickColor()
})