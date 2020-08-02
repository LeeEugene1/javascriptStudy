const answer = prompt('주문하실 음료를 선택해주세요 1.아메리카노, 2.카페라떼, 3.카푸치노, 4.프라프치노');
let price = document.querySelector('.menu');

switch(parseInt(answer)){
    case 1:
        price.textContent = answer+'번 메뉴를 선택하셨습니다. 아메리카노의 가격은 3500원입니다.';
        break;
    case 2:
        price.textContent = answer+'번 메뉴를 선택하셨습니다. 카페라떼 가격은 4000원입니다';
        break;
    case 3:
        price.textContent = answer+'번 메뉴를 선택하셨습니다. 카푸치노의 가격은 4500원입니다';
        break;
    case 4:
        price.textContent = answer+'번 메뉴를 선택하셨습니다. 프라프치노의 가격은 5500원입니다';
        break;
    default:
        price.textContent = answer+'번 메뉴를 선택하셨습니다 그런메뉴는 없습니다';
        break;
}