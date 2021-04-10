{
    // or / and 연산자를 사용할 때에는 false 에 대한 조건을 넣어야함.
    {
        const name = 'Hoon';
        const userName = name || 'Guest';   // or 연산자
        console.log(userName);
    }


    // a||b 일때, or 문법은 앞의 a부터 찾아본다.
    {
        const name = null;
        const userName = name || 'Guest';   // 문제 : name이 없을 때 할당하고 싶은데, 문자열이 없을 때도 guest가 뜬다. = ' '
        console.log(userName);
        
        // 또 다른 예
        const num = 0;  // 0 은 false로 판단됨.
        const message = num || 'undefind';
        console.log(message);
    }

    // nullish
    {
        const name = '';
        const userName = name ?? 'Guest';
        console.log(userName);

        const num = 0;
        const message = num ?? 'undefind';
        console.log(message);
    }
    
}