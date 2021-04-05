function Animal(type, name, sound){
    this.type = type;
    this.name = name;
    this.sound = sound;
    // this.say = function(){  //같은 기능을 가진 함수이기에 바깥으로 꺼낼것이다.
    //     console.log(this.sound);
    // }
}

Animal.prototype.say = function(){
    console.log(this.sound);
}

Animal.prototype.sharedValue = 1;

// const dog = new Animal('개','멍멍이','멍멍');
// const cat = new Animal('고양이','야옹이','야옹');

const dog = new Dog('개','멍멍이','멍멍');
const cat = new Cat('고양이','야옹이','야옹');
// function say (){
//     console.log(this.sound);
// }
// dog.say = say;
// cat.say = say;

dog.say();
cat.say();