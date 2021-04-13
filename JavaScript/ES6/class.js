'user strict';
{
// class 선언
    class Person {
        // constructor
        constructor(name, age){
            //fields
            this.name = name;
            this.age = age;
        }

        //method
        speak(){
            console.log(`${this.name}: hello!`);
        }
    }

    const sanghoon = new Person('sanghoon', 25);
    console.log(sanghoon.name);
    console.log(sanghoon.age);
    sanghoon.speak();
}



// getter setter

{
    class User {
        constructor(firstName, lastName, age){
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
        }
        get age(){
            return this._age;
        }

        set age(value){
            // if(value < 0) throw Error('age can not be under 0');
            this._age = value < 0 ? 0 : value;
        }
    }
    const user1 = new User('Steave Jobs','Job',-1);
    console.log(user1.age);

}



//public private
{
    class Experiment {
        prublicField = 2;
        #privateField = 0;
    }
    const experiment = new Experiment();
    console.log(experiment.prublicField);
    console.log(experiment.privateField);   // private : 접근이 불가능함.
}


// static properties and methods 
{
    class Article {
        static publisher = 'Dream Coding';
        constructor(articleNumber){
            this.articleNumber = articleNumber;
        }

        static printPublisher(){
            console.log(Article.publisher);
        }
    }
    const article1 = new Article(1);
    const article2 = new Article(2);
    console.log(article1.publisher);    // undefined
    console.log(Article.publisher);     // class를 이용
    
    Article.printPublisher();           //static method를 이용

}



// 상속, 다형성 
    // 재사용 가능, 유지보수 용이 
{
    class Shape {
        constructor(width, height, color){
            this.width = width;
            this.height = height;
            this.color = color;
        }

        draw(){
            console.log(`drawing ${this.color} color of `);
        }

        getArea(){
            return this.width * this.height;
        }
    
    }

    class Rectangle extends Shape {}
    class Triangle extends Shape {
        draw(){
            super.draw();   // 상속한 클래스의 기존 함수도 사용.
            console.log('삼각형!')
        }
        getArea(){
            return (this.width * this.height) / 2;
        }
        toString(){
            return `Triangle: color = ${this.color}`;
        }
    }


    const rectangle = new Rectangle(20, 20, 'blue');
    rectangle.draw();
    console.log(rectangle.getArea());

    const triangle = new Triangle(20, 20, 'yellow');
    triangle.draw();
    console.log(triangle.getArea());


    // instance 인스턴스 
        //좌측의 함수가 우측의 함수를 통해서 만들어졌는지의 유무를 확인
            // true 와 false return 
    console.log(rectangle instanceof Rectangle);    //t
    console.log(triangle instanceof Rectangle);     //f
    console.log(triangle instanceof Triangle);      //t
    console.log(triangle instanceof Shape);         //t
    console.log(triangle instanceof Object);        //t
                                //자바스크립트에서 만든 모든 object는 Object를 상속한 것이다.
    console.log(triangle.toString());
}