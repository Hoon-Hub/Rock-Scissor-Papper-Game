{

    // 공백함수 : annonimous function 
    const print = function (){
        console.log('print');
    }
    print();
    const printAgain = print;
    printAgain();

    function sum(a,b){
        return a + b;
    }
    const sumAgain = sum;
    console.log(sumAgain(1,3));
}


//call back
{
    function randomQuiz(answer, printYes, printNo){
        if(answer === 'love you'){
            printYes();
        }else{
            printNo();
        }
    }

    //annonimous function
    const printYes = function(){
        console.log('yes!');
    };

    //named function
    const printNo = function print(){
        console.log('No!');
        // print(); xxxx
    };

    randomQuiz('wrong', printYes, printNo);
    randomQuiz('love you',printYes, printNo);

}