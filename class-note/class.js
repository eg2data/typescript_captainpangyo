// es6의 최신문법
// class keyword 사용
// class는 기본적으로 instance를 생성하는 역할
// 그래서 constructor라는 초기화 method를 사용하게 된다.
class Person {
    // class logic
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
var park = new Person("세호", 30); // Person class를 활용한 instance 생성
console.log(park);

// class 문법 전엔 아래와 같이 표현했음. 생성자 함수.
// 전히 돌일하다. (prototype을 활용한 상속 등)
// function Pertson(name, age) {
//     this.name = name;
//     this.age = age;
// }
// var park = new Person("세호", 30);