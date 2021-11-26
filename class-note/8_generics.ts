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