type MyString = string;
let str: MyString = 'hello';

// interface Person {
//     name: string;
//     age: number;
// }

type Person = {
    name: string;
    age: number;
}

// let euigeun: Person = {
//
// }

// interface와 type alias의 차이
//  후자는 cmd 올리면 바로 구성을 보여주는 점
//  후자는 확장이 되지 않는다는 점 => 따라서 후자보다 전자를 사용하라. <extends 활용>
