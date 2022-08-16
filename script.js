document.querySelector(".container button").addEventListener("click", function(){

  let randomNumber = Math.random()*100;
  randomNumber = (Math.floor(randomNumber))+1;
  let person1Name = document.querySelector(".person1").value;
  let person2Name = document.querySelector(".person2").value;

if(person1Name.length === 0 && person2Name.length === 0){
  document.querySelector(".container p").innerHTML = "<strong style = 'color:red;'>Please type the names first!</strong>";
}else{
  document.querySelector(".headLine_container h1").innerHTML = person1Name +"'s" + " "+"Love Score!";
  document.querySelector(".container h3").innerHTML = "Love Score of"+" "+
  "<strong style = 'color:blue; font-size:1.5rem;'>"+person1Name +"</strong>"+" & "+"<strong style='color: blue;font-size: 1.5rem'>"+person2Name+"</strong>"+" is:"+"  "+"<strong style = 'font-size: 3.5rem; color:red;'>" +randomNumber+"</strong>" + "%.";
}
nextTime();
});

function nextTime(){
  document.querySelector(".person1").value = "";
  document.querySelector(".person2").value = "";
}
