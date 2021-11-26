//
interface User {
    age: number;
    name: string;
}

// 변수에 인터페이스 활용
const park: User = {
    age: 33,
    name: 'park'
}

// 함수에 인터페이스 활용: 자주쓴다. parameter에 interface를 적용하는 방식 ok.
// ??? return값의 type은 노상관?
function getUser(user: User) {
    console.log(user);
}
const capt = {
    name: 'captain',
    age: 8
}

getUser(capt);

// 함수의 spec에 인터페이스 활용 (spec: 구조)
// 함수의 전체적인 모습까지 interface로 정의할 수 있다는게 핵심
interface SumFunction {
    (a: number, b: number): number;
}

let sum: SumFunction;
sum = function(a: number, b: number): number { // 위에서 interface로 줬어도 여기 또 입력해야하네 음..
    return a+b;
}

// indexing
interface StringArray {
    [index: number]: string;
}

let arr: StringArray = ['a', 'b', 'c'];
// arr[0] = 10 // error

// dictionary 패턴
interface StringRegexDictionary {
    [key: string]: RegExp;
}

let obj: StringRegexDictionary = {
   // sth: /abc/,
    cssFile: /\.css$/,
    jsFile: /\.js$/,
}

// 여기서 obj 내 value를 다루려고 할 때
// obj['cssFile']로 접근하는게 생소하네
// obj.cssFile 로 생각했음. 이게, 이게 interface의 영향인건가!


// 인터페이스 확장
// oop에서의 상속의 느낌
// interface를 상속받아 기존의 것을 확장한다는 의미
interface Person {
    name: string;
    age: number;
}
interface Developer extends Person{
    // name: string;
    // age: number;
    language: string;
}
let soul: Developer = {
    language: 'js',
    name: 'park',
    age: 33
}