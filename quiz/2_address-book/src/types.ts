interface PhoneNumberDictionary {
    [phone: string]: { // ?????? 음..? 이걸 어찌 해석하지? string type의 phone 변수가 들어간 배열. 근데 num은 뭐지
        num: number;   // 이게 뭐지???? 음...
    };
}

interface Contact {
    name: string;
    address: string;
    phones: PhoneNumberDictionary;
}

enum PhoneType {
    Home = 'home',
    Office = 'office',
    Studio = 'studio',
}

export { PhoneNumberDictionary, Contact, PhoneType }; // 오 이렇게 export해도 되는구만!