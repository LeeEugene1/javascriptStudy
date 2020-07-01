document.querySelector('#click').addEventListener('click', () => {
    const f = document.querySelector('#first').value
    const s = document.querySelector('#second').value
    const r = document.querySelector('#result').textContent
    if (f) {
        if (s) {
            r.textContent = f * s
        } else {
            r.textContent = '2번째값을 입력하세요'
        }
    } else {
        r.textContent = '1번째 값을 입력하세요'
    }

});