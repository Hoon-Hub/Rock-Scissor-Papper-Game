{
    const isCat = true;


    // 변수를 추가로 할당해 true false에 따라 출력
    {
        let component;
        if(isCat){
            component = 'cats';
        }else{
            component = 'dogs';
        }
        console.log(component);
    }


    // 변수를 추가로 할당하지 않고 true false 에 따라 출력하기
    {
        const component = isCat ? 'cats' : 'dogs';
        console.log(component);

        //직접적으로 쓰기
        console.log(isCat ? 'cats' : 'dogs');
    }
}