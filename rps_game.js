const images=document.querySelectorAll('.choice');
let userScoreChange=document.querySelector('#user_score');
let compScoreChange=document.querySelector('#comp_score');
let show_result=document.querySelector('.result');
let output;
let user_count=0;
let comp_count=0;
images.forEach(choice => {
    choice.addEventListener('mouseover',function(){
        choice.style.border='2px solid aqua';
    });
    choice.addEventListener('mouseout',function(){
        choice.style.border='';
    });
    choice.addEventListener('click',function(){
        const userChoice=this.id;
        let compChoice=getRandomInt();

    if((userChoice == 'rock' && compChoice== 3)|| (userChoice == 'paper' && compChoice== 1) || (userChoice == 'scissor' && compChoice== 2)){
        user_count++;
        output="You Won";
        show_result.textContent=output;
        show_result.style.backgroundColor='green';
    }
    else if(userChoice==compChoice){
        output="Draw";
        show_result.textContent=output;
        show_result.style.backgroundColor='blue';
    }
    else{
        comp_count++;
        output ="Computer Wins";
        show_result.textContent=output;
        show_result.style.backgroundColor='red';
    }
    update_score();
    setTimeout(()=>{
        show_result.textContent='Play your move';
        show_result.style.backgroundColor=''
    },1500);
    });
});

// Random number generator---
function getRandomInt() {
    return Math.floor(Math.random() * 3) + 1;
}

// Function to Update Score Table-----
function update_score(){
    userScoreChange.textContent=user_count;
    compScoreChange.textContent=comp_count;
}