// interface PhoneNumberDictionary {
//   [phone: string]: { // ?????? 음..? 이걸 어찌 해석하지? string type의 phone 변수가 들어간 배열. 근데 num은 뭐지
//       num: number;   // 이게 뭐지???? 음...
//   };
// }
//
// interface Contact {
//   name: string;
//   address: string;
//   phones: PhoneNumberDictionary;
// }
//
// enum PhoneType {
//     Home = 'home',
//     Office = 'office',
//     Studio = 'studio',
// }

import { PhoneNumberDictionary, Contact, PhoneType } from './types'

// api
// TODO: 아래 함수의 반환 타입을 지정해보세요.
function fetchContacts(): Promise<Contact[]>  { // 음.. return이 Promise의 instance.. type은..?
  // TODO: 아래 변수의 타입을 지정해보세요.
  const contacts: Contact[] = [
    {
      name: 'Tony',
      address: 'Malibu',
      phones: {
        home: {
          num: 11122223333,
        },
        office: {
          num: 44455556666,
        },
      },
    },
    {
      name: 'Banner',
      address: 'New York',
      phones: {
        home: {
          num: 77788889999,
        },
      },
    },
    {
      name: '마동석',
      address: '서울시 강남구',
      phones: {
        home: {
          num: 213423452,
        },
        studio: {
          num: 314882045,
        },
      },
    },
  ]; // ????? interface를 그냥 안쓰고, 거기에 []를 붙이네? 음.????
  return new Promise(resolve => {
    setTimeout(() => resolve(contacts), 2000);
  });
}

// main
class AddressBook {
  // TODO: 아래 변수의 타입을 지정해보세요.
  contacts: Contact[] = [];

  // constructor는 기본적인 type 정의를 안하는게 rule.
  constructor() { // class 생성 시 초기화할 내용들을 넣어준다
    this.fetchData();
  }

  fetchData(): void { // return이 없으니까.
    fetchContacts().then(response => {
      this.contacts = response;
    });
  }

  /* TODO: 아래 함수들의 파라미터 타입과 반환 타입을 지정해보세요 */
  findContactByName(name: string): Contact[] {
    return this.contacts.filter(contact => contact.name === name);
  }

  findContactByAddress(address: string): Contact[] {
    return this.contacts.filter(contact => contact.address === address);
  }

  findContactByPhone(phoneNumber: number, phoneType: PhoneType): Contact[] { // 오.. enum활용해서 이 함수 호출 시의 실수를 방지
    return this.contacts.filter(
      contact => contact.phones[phoneType].num === phoneNumber
    );
  }

  addContact(contact: Contact): void {
    this.contacts.push(contact);
  }

  displayListByName(): string[] { // map에 대한 이해 필요
    return this.contacts.map(contact => contact.name);
  }

  displayListByAddress(): string[] {
    return this.contacts.map(contact => contact.address);
  }
  /* ------------------------------------------------ */
}

// const div = document.querySelector('div');
// div.innerText

new AddressBook(); // ???? 이게 이 밑에 있는 것도 굉장히 생소해. 이게 대체 뭔지
