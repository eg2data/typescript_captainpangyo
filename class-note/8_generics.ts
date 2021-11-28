// 호출하는 시점에 parameter의 type을 정하는 것이 generics
function logText<T>(text: T):T {
    console.log(text);
    return text;
}

logText<string>('하이');
logText<number>(10);

// 그동안 해왔던 방법 대비 generic의 장점은?
// 기존 방법: 단순히 type을 다르게 받기 위해서 중복되는 코드를 계속 생산해야했다.
// 이를 해결하기 위해 union type을 썼지.
// 그런데, union type도 문제가 있어:
// 1) 함수 호출 시 argument의 타입은 2개 이상 가져갈 수 있게 됐으나,
//    parameter는 그 타입들의 공통속성만 사용할 수 있기에..
// 2) 심지어 그것을 return한 값의 type이 여전히 2개 이상이기에
//    string을 입력 후 받은 return값에서 .split을 사용하지 못하는 상황 발생.
function logUnion(text: string | number) {
    return text;
    // text.split() // error
}
const a = logUnion('a');
// a.split() // error

// 이 때, generic을 사용하면 위의 문제점을 해결할 수 있다.
// 함수 정의 시엔 <T>로 비워두고, 함수 호출 시에 들어갈 type을 정의해버리는거지
function genericTest<T>(text: T): T {
    console.log(text);
    return text;
}

const stringTest = genericTest<string>('hi');
stringTest.split('');

const numberTest = genericTest<number>(10);
numberTest.toString();
console.log(typeof numberTest);

// interface에 generic을 선언하는 방법
interface DropDown<T> {
    value: T;
    selected: boolean;
}
const obj: DropDown<number> = { value: 10, selected: true };

interface Dropdown1 {
    value: string;
    selected: boolean;
}
const obj1: Dropdown1 = { value: 'shite', selected: true };

// generic의 타입 제한 - T가 무엇이될지 좀 더 힌트를 주자
// 아래 예제를 보면, 함수 선언 시 배열 타입일 것이라고 말했으니, 함 수 안에서
// 배열의 속성, api들을 활용할 수 있다는 것!
function logTextLength<T>(text: T[]): T[] { // 여기서 배열일 것이라고 힌트를 주니까
    text.length;
    text.forEach(function (text) { // 이렇게 활용 가능한거지. 배열일 것이라고 했으니까!
        console.log(text);
    })
    return text;
}
logTextLength<number>([1, 2]);
logTextLength<string>(['1', '2']);

// generic 타입 제한 2 - extends keyword 사용. 정의된 타입 이용하기
interface LengthType {
    //length: number;
    length: number;
}

function logLength<T extends LengthType>(text: T): T {
    text.length;
    return text;
}
logLength('a'); // string은 기본적으로 length가 제공되므로 error 없음
// logLength(10); // error 발생. number는 length가 없어!
logLength({ length: 10 }); // 이건 가능하다. 이건 이해가 된다.
// logLength<number>(10)

// ????? 아니 근데. length type을 정의했고, 그것을 가져다 쓴 함수의 인자로 10을 넣었어
// ????? 그러면 뭐지? 저 length와 interface에서 정의한 length는 다른거 아님?
// ????? 전자는 내장함수, 후자는 정의한 것. 뭐지????????????????????????

// generic 타입 제한 3 - extends keyof keyword 사용
interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
    return itemOption;
}

getShoppingItemOption("name");