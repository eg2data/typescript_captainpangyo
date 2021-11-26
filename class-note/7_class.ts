class Person {
    // 멤버변수 반드시 선언해야
    // type 뿐만 아니라 접근 범위도.
    public name: string;
    private age: number;
    readonly log: string;

    constructor(name: string, age: number) { // 위에서 했는데 여기서 또 하네
        this.name = name;
        this.age = age;
    }
}