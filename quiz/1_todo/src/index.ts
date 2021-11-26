// any type: 모든 type을 통칭. js=>ts 변환 시 일단 any로 지정 후 차근차근 type을 구체화하는 것이 정석.
// type Todo = { // 아래에서 계속 긴- 타입이 반복되니까, 'type 별칭' 사용해서. 근데 이거보다 더 좋은 방법이 있음. related to interface.
//     id: number;
//     title: string;
//     done: boolean;
// }
// let todoItems: Todo[];

// 'type 별칭' 방식보다 더 나은 것은 interface 활용. interface는 typescript의 핵심!
interface Todo {
    id: number;
    title: string;
    done: boolean;
}

let todoItems: Todo[];

// api
function fetchTodoItems(): Todo[] {
  const todos = [ // 음? 얘는 왜 타이핑 안하지?????? => 여기가 아니라 저 위에다가 하네 오.. // 근데 const todos 내부는 제어 못하네 음.
    { id: 1, title: '안녕', done: false },
    { id: 2, title: '타입', done: false },
    { id: 3, title: '스크립트', done: false },
  ];
  return todos;
}

// crud methods
function fetchTodos(): object[] {
  const todos: object[] = fetchTodoItems(); // 여기도 왜 타이핑 안하지???????
  return todos;
}

// void type: 반환값이 없다고 명시적으로 지정해주는 것. 모든 언어 공통.
// return값이 없는 함수에는 void를 준다
function addTodo(todo: Todo): void { // 이걸 통으로 계속 쓰네
  todoItems.push(todo);
}

function deleteTodo(index: number): void {
  todoItems.splice(index, 1);
}

function completeTodo(index: number, todo: Todo): void {
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo(): object {
  return todoItems[0];
}

// filter api
function showCompleted(): object[] { // boolean이 아니지. ok.
  return todoItems.filter(item => item.done);
  // return todoItems.filter(function(item) {
  //     if (item.done) {
  //         return item;
  //     }
  // })
}

// TODO: 아래 함수의 내용을 채워보세요. 아래 함수는 `addTodo()` 함수를 이용하여 2개의 새 할 일을 추가하는 함수입니다.
function addTwoTodoItems(): void {
  // addTodo() 함수를 두 번 호출하여 todoItems에 새 할 일이 2개 추가되어야 합니다.
    const item1 = {
        id: 4,
        title: 'item4',
        done: false,
    }
    addTodo(item1);
    addTodo({
        id: 5,
        title: 'item5',
        done: false,
    })
}

// NOTE: 유틸 함수
function log(): void {
  console.log(todoItems);
}

todoItems = fetchTodoItems();
addTwoTodoItems();
log();
