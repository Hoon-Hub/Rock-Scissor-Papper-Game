// class = 객체 생성자와 prototype을 조금 더 쉽게 사용하기 위해서 사용.

class Animal{
    constructor(type, name, sound){ //생성자라는 이름을 가지고 잇음
        this.type = type;
        this.name = name;
        this.sound = sound;
    }

    say(){
        console.log(this.sound)
    }
}

class Dog extends Animal{
    constructor(name, sound){
        super('개', name, sound);
    }
}

class Cat extends Animal{
    constructor(name, sound){
        super('고양이',name,sound);
    }
}
// console.log(Animal.prototype.say);

// const dog = new Animal('개','멍멍이', '멍멍');
// const cat = new Animal('고양이', '야옹이', '야옹');

const dog = new Dog('멍멍이', '멍멍');
const cat = new Cat('야옹이', '야옹');
const cat2 = new Cat('야오우옹이','애용');

dog.say();
cat.say();
cat2.say();