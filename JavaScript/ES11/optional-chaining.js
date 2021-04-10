{
    // obj1
    const person1 = {
        name : 'Hoon',
        job : {
            title: 'S/W Engineer',
            manager: {
                name : 'Bob',
            },
        },
    };

    //obj2
    const person2 = {
        name: 'Bob',
    };


    //nope
    {
        function printManager(person){
            console.log(person.job && person.job.manager && person.job.manager.name);   //persion.job 의 반복 : 지저분하고 가독성이 좋지 않음
        }
        printManager(person1);
        printManager(person2); 
    }

    // optional training
    {
        function printManager(person){
            console.log(person.job?.manager?.name);     //가독성이 좋게 변함 자동으로 undefine이 뜨게 됨.
        }
        printManager(person1);
        printManager(person2);

    }
}