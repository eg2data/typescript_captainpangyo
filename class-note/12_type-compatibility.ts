// 기본적으로, type 호환은 오른쪽 변수가 구조적으로 더 크다(ex. 더 많은 속성을 가지고 있다). 클 때 성립한다.
interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
}

class Person1 {
    name: string;
}

let developer: Developer;
let person: Person;

// developer = person;
person = developer;
// new Person1() = developer; // ???????? 이건 되야하는거 아닌가. 뭔가.. 형식의 문제인가.
// developer = new Person1();
let person1 = new Person1();
person1 = developer; // 이러면 되는구만.



// 함수에서의 타입 호환
let add = function(a: number) {

}
let sum = function(a: number, b: number) {

}

sum = add;
// add = sum; // 음???? 뭔가 이상한데. 위에서는 더 큰게 오른쪽에 있었고 그것을 왼쪽으로 할당 가능했잖아???????

//generic에서의 타입 호환
interface Empty<T> {

}
let empty1: Empty<string>;
let empty2: Empty<number>;
empty1 = empty2;  // ???? type이 다른데 이게 된다고? 뭐 변하는 것도 없는데 굳이 근데 이걸 왜하지??????
empty2 = empty1;

interface NotEmpty<T> {
    data: T;
}
let notempty1: NotEmpty<string>;
let notempty2: NotEmpty<number>;
// 아.. 속성의 타입. 이게 이제 일치하지 않으니, 서로 호환이 안되는거다
// notempty1 = notempty2;
// notempty2 = notempty1;


