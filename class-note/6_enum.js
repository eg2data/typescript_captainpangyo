// 초기화(Nike=10)안하면, 0부터 시작해서. 1씩 자동증가. (숫자형 enum)
var Shoes;
(function (Shoes) {
    Shoes[Shoes["Nike"] = 0] = "Nike";
    Shoes[Shoes["Adidas"] = 1] = "Adidas";
})(Shoes || (Shoes = {}));
var myShoes = Shoes.Adidas;
console.log(myShoes); // 0
var Shoes1;
(function (Shoes1) {
    Shoes1["Nike"] = "\uB098\uC774\uD0A4";
    Shoes1["Adidas"] = "\uC544\uB514\uB2E4\uC2A4";
})(Shoes1 || (Shoes1 = {}));
var myShoes1 = Shoes1.Adidas;
console.log(myShoes1); // '나이키'
