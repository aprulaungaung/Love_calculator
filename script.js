
let randomNumber = Math.random()*100;
randomNumber = (Math.floor(randomNumber)) +1;

document.querySelector(".container button").addEventListener("click", function(){
  let person1Name = document.querySelector(".person1").value;
  let person2Name = document.querySelector(".person2").value;


if(person1Name.length === 0 && person2Name.length === 0){
  document.querySelector(".container p").innerHTML = "<strong style = 'color:red;'>Please type the names first!</strong>";
}else{
  chatting();
  document.querySelector(".headLine_container h1").innerHTML = "<strong style = 'color:red; font-size: 2rem;'>"+person1Name+"</strong>"+"<strong style='color:red;'>'s</strong>" + " "+"Love Score!";
  document.querySelector(".container h3").innerHTML = "Love Score of"+" "+
  "<strong style = 'color:blue; font-size:1.5rem;'>"+person1Name +"</strong>"+" & "+"<strong style='color: blue;font-size: 1.5rem'>"+person2Name+"</strong>"+" is:"+"  "+"<strong style = 'font-size: 3.5rem; color:red;'>" +randomNumber+"</strong>" + "%.";
}
nextTime();
});

function nextTime(){
  document.querySelector(".person1").value = "";
  document.querySelector(".person2").value = "";
}

function chatting(){
  let person1Name = document.querySelector(".person1").value;
  let person2Name = document.querySelector(".person2").value;
if(randomNumber < 50){
  document.querySelector(".direction").innerHTML = "Congratulation..!. Hi.."+" "+"<em style ='color:#F806CC; font-size: 1.5625rem;'>"+"''"+person1Name+"''"+"</em>"
  +" "+","+"Your Score is"+" "+randomNumber+" %." +"Your opportunity is progressing as long as you stick to your hope and your dream will come true as well!";
}else if(randomNumber > 40){
  document.querySelector(".direction").innerHTML = "Hey..."+"<em style ='color:#F806CC; font-size: 1.5625rem;'>"+"''"+person1Name+"''"+"</em>" + ", "+" Your Score is "+" "+randomNumber+" %." +
  " very awesome!. It's definitely sure that the brighter furture of your life is waiting for you. You will be enjoying your life with your favourite one in the furture."
}else{
  console.log("error");
}
}
