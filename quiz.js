//access or select the element
const startBtn = document.getElementById("startBtn");
const quizId = document.getElementById("quiz");
const scoreId = document.getElementById("ScoreId");

//score is variable to store the score
let score = 0

//Promise to load the question
const loadQuestion = ()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
          resolve({
            question: "India is a country?",
            options:["state","country","Galaxy","None"],
            answer:"country"
          })
        },2000)
    })
}

startBtn.addEventListener("click", ()=>{
    startBtn.textContent = "Loading..."
    loadQuestion().then(data =>{
        //hide the start button after loading
        startBtn.style.display = "none"

        //display the question to user

        quizId.innerHTML=`
        <h3>${data.question}</h3>
        ${data.options.map(option=>`
            <button class = "option">${option}</button>
              `)}
        `;
       const button = document.querySelectorAll(".option")
       button.forEach(btn=>{
        btn.addEventListener("click" ,()=>{
            if(btn.textContent === data.answer){
                score++
                alert("correct answer")
                scoreId.textContent = score
            }
            else{
                alert("wrong answer")
            }
            quizId.innerHTML="<h3>Quiz is finished</h3>"
        })
       })
    })
})