// type 추론 기본 1
let a = 'abc';

function getB(b = 10) { // 기본값의 type을 통해 return type을 추론한거지.
    let c = 'hi';
    return b + c; // string. 왜냐하면, 10 + '10' // 1010
}

// type 추론 기본 2
interface Dropdown<T> { // ???? 이거 왜이렇게 어색해보이지?
    value: T; // 오..
    title: string;
}

let shoppingItem: Dropdown<string> = {
    value: 'abc',
    title: 'hello'
}

// type 추론 기본 3
interface Dropdown1<T> { // ???? 이거 왜이렇게 어색해보이지?
    value: T; // 오..
    title: string;
}

interface DetailedDropdown<K> extends Dropdown1<K>{
    description: string;
    tag: K;
}

let detailedItem: DetailedDropdown<number> = {
    value: 1,
    tag: 2,
    description: "a",
    title: "a"
    
}

// best common type - 존재하는 타입들을 union으로 묶어나간다는 것.
let arr = [1,2,true,'a'];
