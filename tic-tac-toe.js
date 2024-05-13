let boxes=document.querySelectorAll(".box");
let resetGameBtn=document.querySelector("#resetBtn");
let newBtn=document.querySelector("#newBtn");
let msgCointainer=document.querySelector(".msgCointainer");
let msg=document.querySelector("#msg");
let turnO=true;
let winningTruns=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
const resetGame=() => {
    turnO=true;
    enabledBoxes();
    
    msgCointainer.classList.add("hide");
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if (turnO){//playerO
        box.innerText="O";
        turnO=false;
        }else{//playerX
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;

        checkWinner();
    });
});
const disabledBoxes =() => {
    for(let box of boxes){
         box.disabled=true;
    }
};

const enabledBoxes =() => {
    for(let box of boxes){
         box.enabled=false;
         box.innerText="";
    }
}
const showWinner =(winner)=>{
msg.innerText=`Congrats,Winner is ${winner}`;
msgCointainer.classList.remove("hide");
disabledBoxes();


};

const checkWinner=()=>{
    for (turn of winningTruns){
        // console.log(turn[0], turn[1],turn[2]);
        // console.log(boxes[turn[0]].innerText,boxes[turn[1]].innerText,boxes[turn[2]].innerText);
    
    let turnVal1=boxes[turn[0]].innerText;
    let turnVal2=boxes[turn[1]].innerText;
    let turnVal3=boxes[turn[2]].innerText;

    if(turnVal1 !="" && turnVal2!="" && turnVal3!=""){
        if(turnVal1===turnVal2 && turnVal2==turnVal3){
            showWinner(turnVal1);
        }
    }
    } 
};
newBtn.addEventListener("click",resetGame);  
resetGameBtn.addEventListener("click",resetGame);



