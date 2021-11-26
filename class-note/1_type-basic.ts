// 변수 오른쪽에 : type
const str: string = 'hello';
const num: number = 10;

// 대문자<내부 데이터의 타입> 혹은 내부 데이터의 타입[].
// 후자가 더 편한 듯. 일관성도 있고.
const arr: Array<number> = [1,2,3];
const arr1: number[] = [1,2,3];
const heroes: Array<string> = ["thor"]; // 10 넣으면 error
const heroes1: string[] = ['thor'];

// ts tuple: 배열에서 특정 index의 type까지 지정하겠다는 것.
const address: [string, string, number] = ['abc', 'def', 1];

// ts object: 각 property의 type을 지정 할수도, 안할수도.
// 1. const obj: object = {};
const person: object = {
    name: 'capt',
    age: 100,
};
// 2. const obj2: object { property: type } = {};
const person2: { name: string, age: number} = {
    name: 'capt2',
    age: 101,
}

// ts boolean
const show: boolean = true;

