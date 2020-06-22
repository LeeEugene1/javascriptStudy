document.querySelector('#click').addEventListener('click',()=>{
    const f = document.querySelector('#first').value
    const s = document.querySelector('#second').value
    
    if(f){
        if(s){
            document.querySelector('#result').textContent = f*s
        }else{
            document.write('2번째값을 입력하세요')
        }
    }else{
        document.write('1번째 값을 입력하세요')
    }

});