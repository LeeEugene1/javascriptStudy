// document.querySelector('#button').addEventListener('click',()=>{
    // const plus = document.querySelector('#plus');
    // const minus = document.querySelector('#minus');
    // const divide = document.querySelector('#devide');
    // const multifly = document.querySelector('#multifly');
    
    // input.textContent = 
    // });
   
document.querySelector('#plus').addEventListener('click',()=>{
    const plus = document.querySelector('#plus');
    const input = document.querySelector('#input');
    input.value = plus;
});
document.querySelector('#remove').addEventListener('click',()=>{
    const input = document.querySelector('#input');
    input.value = '';
});
