// <<<<< 1. union operator    |
// function logMessage(value: any) {
//     console.log(value);
// }
//
// // value: any이기에 아래 둘 다 dhfbdjqtdma.
// logMessage('hello');
// logMessage(19);
// | 를 사용함. union type. 두개 이상의 type을 쓸 수 있게 만드는.
var park;
function logMessage(value) {
    // type guard
    if (typeof value === 'number') {
        value.toLocaleString();
    }
    if (typeof value === 'string') {
        value.toString();
    }
    throw new TypeError('value must be string or number');
}
logMessage('hello');
logMessage(10);
// 인터페이스라던가 특정 타입 구조체 여러개를 union type으로 사용할 경우, 보장된 속성만(=공통된 속성만) 제공한다.
// 공통이 아닌 속성을 이용하고 싶다면, type guard를 활용해야겠지.
function askSomeone(someone) {
    someone.name; // name만 조회된다. skill과 age 속성도 줄 것이라고 예상한 바와 다르다. 공통속성만 접근할 수 있다.
}
// 착각은 하면 안되지. 아래의 것은 상식과 같지. 둘 다 받을 수 있는.
// 위의 것과 혼동하지 말자.
askSomeone({ name: "developer", skill: "web" });
askSomeone({ name: "park", age: 100 });
// type guard 별도로 필요없이, 다 사용할 수 있다. 상식과 다른 접근이네 interface에서의 union / intersection
// 즉, 두 개가 합쳐진 새로운 타입이 생기는거나 마찬가지..!
function askSomeone1(someone) {
    someone.name;
    someone.skill;
    someone.age; // 오히려 여기서는 모든 것을 사용할 수 있네.
}
// 호출 관점에서 보면, intersection이기에 두 interface 내 모든 속성이 다 호출되야 하는거다. 오.
// 그래서 아래 2개는 error 발생
// askSomeone1({ name: "developer", skill: "web" });
// askSomeone1({ name: "park", age: 100 });
askSomeone1({ name: "park", age: 10, skill: "web" });
