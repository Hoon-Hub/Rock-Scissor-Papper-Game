{
    {
        function printMessage(message){
            if(message == null){
                message = 'default message';
            }
            console.log(message);
        }

        printMessage('hello');
        printMessage();

    }
    
    // 변경점 : default parameter 
    {
        function printMessage(message = 'null message'){
            console.log(message);
        }

        printMessage('hello');
        printMessage();

    }
}