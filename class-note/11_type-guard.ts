interface  Developer {
    name: string;
    skill: string;
}

interface  Person {
    name: string;
    age: number;
}

function introduce(): Developer | Person {
    return { name: 'park', age: 33, skill: 'Iron making' }
}
let euigeun = introduce();
// console.log(euigeun.skill); error. 위에 분명히 눈에 보이는데 error.. union은 공통 속성만 사용 가능하게 하기 때문

if ((euigeun as Developer).skill) { // type assertioni(단언)을 통한 접근, 해결
    console.log((euigeun as Developer).skill);
} else if ((euigeun as Person).age) {
    console.log((euigeun as Person).age);
} // 길어지고, 가독성이 떨어진다...


// 그래서, type-guard 활용 - is keyword 활용
function isDeveloper(target: Developer | Person): target is Developer {
    return (target as Developer).skill !== undefined; // 이부분이 약간 좀 음.. 이게 어떻게 filter 역할을 하는지가...
}

if (isDeveloper(euigeun)) { // type assertion 사용 때보다 코드가 아주 간결해지지
    euigeun.skill
} else {
    euigeun.age
}

