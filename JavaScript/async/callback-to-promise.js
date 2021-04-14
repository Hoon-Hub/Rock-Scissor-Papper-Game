
// callback hellgate Open
class UserStorage{
    loginUser(id, password){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(
                    (id === 'sanghoon' && password === '1234') ||
                    (id === 'coder' && password === 'academy')
                ){
                    resolve(id);
                } else {
                    reject(new Error('not found'));
                }
            },2000);
        })
    }

    getRoles(user){
        return new Promise((resolve, reject) =>{
            setTimeout(()=>{
                if(user === 'sanghoon'){
                    resolve({name: 'sanghoon', role:'admin'});
                }else{
                    reject(new Error('no access'));
                }
            },1000);
        })
    }
}

// 콜백지옥 : 가시성↓ , 에러 및 디버깅이 어려움 
// 1. 사용자에게 아이디와 비밀번호를 입력받기
// 2. login 
// 3. 아이디를 다시 받아옴
// 4. Roles 를 요청 -> 받아옴
// 5. 사용자의 object 획득

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage.loginUser(id, password)
.then(userStorage.getRoles)
.then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
.catch(console.log)
;

/**
userStorage.loginUser(
    id, 
    password, 
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(`
                    Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
                );
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {
        console.log(error)
    }

);

**/
