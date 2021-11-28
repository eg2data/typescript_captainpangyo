interface Data<T> {
    value: T;
    selected: boolean;
}

const emails: Data<string>[] = [
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
];

const numberOfProducts: Data<number>[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

function createDropdownItem<T>(item: Data<T> ) { // ?? 한 줄로 어떻게 줄일 수 있을까 더 짧게???? 음..
// function createDropdownItem(item:  Data<string> | Data<number>) {
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) {
  const item = createDropdownItem(email);
  const selectTag = document.querySelector('#email-dropdown');
  selectTag.appendChild(item);
});

numberOfProducts.forEach(function (product) {
   const item = createDropdownItem(product);

});

// // interface를 쓰면, type 하나가 바뀐다고 해서 코드가 아주 많이 늘어나.
// interface Email {
//     value: string;
//     selected: boolean;
// }
// interface ProductNumber {
//     value: number;
//     selected: boolean;
// }
// // 만약 다른 type을 수용하고 싶으면, 그 때마다 또 interface를 생성해야한다
// interface TrueFalse {
//     value: boolean;
//     selected: boolean;
// }
//
// // 그래서, interface에 generic을 선언하여 활용한다.