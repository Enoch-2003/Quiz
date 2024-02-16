const Q = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: 0
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Jupiter", "Saturn", "Mars", "Earth"],
    answer: 0
  },
  {
    question: "What is the smallest country in the world?",
    options: ["Vatican City", "Monaco", "Nauru", "Tuvalu"],
    answer: 0
  },
  {
    question: "What is the highest mountain in the world?",
    options: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
    answer: 0
  },
];

const Qelement = document.getElementById("Q");
const ansB = document.getElementById("answerB");
const nextB = document.getElementById("next");

let current_Q_index = 0;
let score = 0;



function start(){
  current_Q_index = 0;
  score = 0;
  nextB.innerHTML = "Next";
  showQ();
}

function showQ(){
  reset();
  let current_Q = Q[current_Q_index];
  let Q_no = current_Q_index + 1;
  Qelement.innerHTML = Q_no + ". " + current_Q.question;
  current_Q.options.forEach(option =>{
    const button = document.createElement("button");
    button.innerHTML = option;
    button.classList.add("btn");
    ansB.appendChild(button);
    
    button.addEventListener("click", (e) => {
      const selectB = e.target;
       if(option == current_Q.options[current_Q.answer]){
         score++;
         selectB.classList.add("correct");
       }
      else{
        selectB.classList.add("incorrect");
      }
      Array.from(ansB.children).forEach(button =>{
        if(button.innerHTML == current_Q.options[current_Q.answer]){
          button.classList.add("correct");
        }
        button.disabled = true;
      });
      nextB.style.display = "block";
     });
    });
}

nextB.addEventListener("click",()=>{
  if(current_Q_index == Q.length){
      document.getElementById("Q").innerText = "You have answered all the questions";
    ansB.innerHTML = "Your score is " + score + " out of " + Q.length;
    nextB.style.display = "none";
    return;
  }
  else{
    current_Q_index ++;
    if(current_Q_index == Q.length){
    nextB.innerHTML = "Show score";
    }
    else{
      showQ();
    }
  }
})

function reset(){
  nextB.style.display = "none";
  while(ansB.firstChild){
    ansB.removeChild(ansB.firstChild);
  }
}

start();