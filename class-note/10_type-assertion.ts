// 타입 단언
// typescript보다 개발자가 더 type을 잘 알고있다는 전제에서 출발.
// 그러니 typescript 너는 신경쓰지 말아라.
// as keyword 사용
let a;
a = 20;
let b = a as string; // a=20 넣었음에도 type은 any.

// DOM api 조작
// document라는 전역변수에서 제공하는 속성들을 지칭
// 즉, web page의 tag정보에 접근하고 조작할 수 있는 api
const div = document.querySelector('#app'); // HTMLDivElement union null
if (div) { // type이 명확하지 않기 때문에, div가 있는지 일단확인하고 실행하는게 일반적인 패턴이다. 실무에서.
    div.innerText = 'a';
}

const div1 = document.querySelector('#app') as HTMLDivElement; // 이렇게 함으로서 union null을 제거할 수 있는. 오!
div1.innerText = 'a'; // 그래서, if로 존재확인이 필요 없다!
