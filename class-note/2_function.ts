//  방식은 같다. parameter:type
// 함수의 반환값(return값)의 type도 정의"해야만"한다는 사실. (type 추론)
function sum(a: number, b: number): number {
    return a+b;
}

// js는 함수 선언 시 정의된 parameter 보다 더 많은 argument를 호출할 시 불필요한 값들은 그냥 무시. 일종의 유연함.
// ts에서는 이 경우에 error 준다. (parameter와 argument의 갯수와 타입이 다를 시)
// sum(10, 20, 30); error

// 함수의 optional parameter "?"
// 함수 선언 후 argument의 갯수 등을 자유롭게 주고 싶으면 각각 다른함수를 만들어야하나? no
// "?" 활용
function log(a: string, b?: string): string {
    return a;
}
log("park")
log("park", "eui")
