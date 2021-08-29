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
