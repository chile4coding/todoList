let input = document.querySelector('#input');
let btn = document.querySelector('#btn');
let element = document.querySelector('.element');
let close = document.querySelector('button');

btn.addEventListener('click', ()=>{
    let close = document.createElement('button');
    if(input.value !== ""){
    close.classList ="btnClose "
    close.classList = "items"
    close.innerHTML = "X";
     let div = document.createElement('div');
     
     div.classList = "btnClose div2";
     div.innerHTML = input.value;
     div.append(close);
     section.append(div);
     input.value = "";

    div.addEventListener('click', ()=>{
         div.style.textDecoration = "line-through";
         div.style.textDecorationThickness = "2px";
         div.style.textDecorationColor = "white";
         close.style.textDecoration = "none";
       
   
       
    })
    
    close.addEventListener('click', ()=>{
        close.remove();
        div.remove();
   })

    }   
}
);







