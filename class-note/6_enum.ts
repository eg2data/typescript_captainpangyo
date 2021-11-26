// 초기화(Nike=10)안하면, 0부터 시작해서. 1씩 자동증가. (숫자형 enum)
enum Shoes {
    Nike,
    Adidas
}

let myShoes = Shoes.Adidas;
console.log(myShoes); // 0

enum Shoes1 {
    Nike = '나이키',
    Adidas = '아디다스'
}

let myShoes1 = Shoes1.Adidas;
console.log(myShoes1); // '나이키'

// Example - 예스, y, Yes, 네 등 처리하는 로직에 사용될 수 있겠지. 오.
enum Answer {
    Yes = 'Y',
    No = 'N',
}
function askQuestion(answer: Answer) {
    if (answer === Answer.Yes) {
        console.log('정답입니다.');
    }
    if (answer == Answer.No) {
        console.log('오답입니다.');
    }
}

askQuestion(Answer.Yes);