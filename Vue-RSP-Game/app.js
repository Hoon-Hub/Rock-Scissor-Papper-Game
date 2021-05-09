new Vue({
    el: '#app',
    data: {
        myChoice: null,
        comChoice: null,
        count: 3,
        winner: null,
        lifeOfMe: 3,
        lifeOfCom: 3,
        isSelectable: true,
        logs: [],
        selects: [
            {name: '가위', value: 'scissor'},
            {name: '바위', value: 'rock'},
            {name: '보', value: 'paper'},

        ]
    },
    computed: {
        myChoiceImg: function() {
            return this.myChoice !== null ? `images/${this.myChoice}.jpg` : 'images/question.jpg'
        },
        comChoiceImg: function(){
            return this.comChoice !== null ? `images/${this.comChoice}.jpg` : 'images/question.jpg'
        },
        leftLifeOfMe: function () {
            return 3-this.lifeOfMe
        },
        leftLifeOfCom: function () {
            return 3-this.lifeOfCom
        }
    },
    watch: {
        count: function(newVal) {
            if(newVal === 0){
                // 컴퓨터가 가위바위보 선택하는 부분
                this.selectCom()

                // 승패 결정 & 몫 차감
                this.whoIsWin()               

                // 대결 후 초기화 
                this.count = 3

                //버튼이 다시 보임
                this.isSelectable = true

                // 승패 로그 출력 및 업데이트 
                this.updateLogs()
                
            }
        },
        lifeOfMe: function(newVal){
            if(newVal === 0){
                // 게임 종료
                this.endGame('당신이 패배하였습니다. ')
                
            }
        },
        lifeOfCom: function(newVal){
            if(newVal === 0){
                this.endGame('축하드립니다. 당신이 승리하였습니다. ')
            }
        }
    },
    methods: {
        startGame () {
            

            if(this.myChoice === null) alert('가위 바위 보 중 하나를 선택해주세요.')
            else {
                // 버튼이 보이지 않음
                this.isSelectable = false
                
                let countDown = setInterval( () => {
                    this.count --
                    if(this.count === 0) {
                        clearInterval(countDown);
                    }

                }, 1000)
            }
        },
        selectCom: function (){
            // 컴퓨터가 가위바위보 선택하는 부분
            let number = Math.random()
            if(number < 0.33){
                this.comChoice = 'scissor'
            }else if(number < 0.66){
                this.comChoice = 'rock'
            }else{
                this.comChoice = 'paper'
            }
        },
        whoIsWin: function(){
            if(this.myChoice === this.comChoice) this.winner = 'no one'
            else if(this.myChoice === 'rock' && this.comChoice === 'scissor') this.winner = 'me'
            else if(this.myChoice === 'scissor' && this.comChoice === 'paper') this.winner = 'me'
            else if(this.myChoice === 'paper' && this.comChoice === 'rock') this.winner = 'me'
            else if(this.myChoice === 'scissor' && this.comChoice === 'rock') this.winner = 'com'
            else if(this.myChoice === 'paper' && this.comChoice === 'scissor') this.winner = 'com'
            else if(this.myChoice === 'rock' && this.comChoice === 'paper') this.winner = 'com'
            else this.winner = 'error'

            //몫 차감 
            if(this.winner === 'me'){
                this.lifeOfCom --
            }
            else if(this.winner === 'com') {
                this.lifeOfMe --
            }
        },
        updateLogs: function(){
            let log = {
                message: `You: ${this.myChoice}, Computer: ${this.comChoice}`,
                winner: this.winner
            }
            this.logs.unshift(log)
        },
        endGame: function (message){
            setTimeout(() => {
                confirm(message)
                this.lifeOfMe = 3
                this.lifeOfCom = 3
                this.myChoice = null
                this.comChoice = null
                this.winner = null
                this.logs = []
            }, 500)
        }
    }
})