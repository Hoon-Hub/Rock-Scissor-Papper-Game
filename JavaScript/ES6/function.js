// parameters
{
    function changeName (obj){
        obj.name = 'coder';
    }

    const sanghoon = {name : 'sh'};
    changeName(sanghoon);
    console.log(sanghoon);
}


// default parameter
{
    function showMessage(message, from = 'unknwon'){ 
        console.log(`${message} by ${from}`);
    }

    showMessage('Hello?');
}

// Rest parameter 
{
    function printAll(...args){
        args.forEach((arg) => console.log(arg));
    }
    printAll('dream','coding','sanghoon');
}

// local scope : 지역변수
{
    function printMessage(){
        let message = 'globalmessage';
        let globalMessage = 'global';
        console.log(message);
        console.log(globalMessage);

        function printAnother(){
            console.log(message);
            let childMessage = 'hi this is child';
        }
        //console.log(childMessage);    error
    }
    printMessage();
    //console.log(message);     error
    
}


// early return , early exit

{
    //bad
    function upgradeUser(user){
        if(user.point > 10){
            // long upgrade logic
        }
    }
}
{
    // good
    // 작은 값 먼저 빼내주기
    function upgradeUser(user){
        if(user.point <= 10){
            return;
        }
        // long upgrade logic
    }
}