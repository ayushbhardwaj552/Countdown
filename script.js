let btn = document.querySelector(".btn");
let day = document.querySelector("#day");
let hour = document.querySelector("#hr");
let minute = document.querySelector("#Minutes");
let second = document.querySelector("#Second");
let audio = new Audio('audio.mp3');


let body = document.querySelector("body");

let scn = document.querySelector("#conclusion");
let countdownEnded = false; // Flag to track if countdown has ended

// Function to update the displayed values
function updateValues() {
    let dayValue = parseInt(day.value);
    let hourValue = parseInt(hour.value);
    let minuteValue = parseInt(minute.value);
    let secondValue = parseInt(second.value);

    // Decrease second value by 1
    secondValue--;

    // Adjust other values based on second
  
    if (secondValue < 0) {
        secondValue = 0;
        minuteValue--;
    }
    if (minuteValue < 0) {
        minuteValue = 0;
        hourValue--;
    }
    if(minuteValue == 1){
        minuteValue = 0;
        secondValue = 59;
    }
    if (hourValue < 0) {
        hourValue = 0;
        dayValue--;
    }
    if(hourValue === 1){
        hourValue = 0;
        minuteValue = 59;
        secondValue = 0;
    }

    if(dayValue === 1){
        dayValue = 0;
        hourValue = 23;
        minuteValue = 59;
        secondValue = 59;
    }
   
    // Display "Your Time is over" if the countdown is finished
    if ( ! dayValue &&!minuteValue && !hourValue && secondValue == 0) {
        scn.innerText = "Your Time is over";
       
        scn.style.color = "blue";
        scn.style.fontSize = "40px"; // Corrected property name
        scn.style.textAlign = "center"; 
        scn.style.alignItems = "center";
        audio.play();
        body.style.backgroundImage = "url('timeout.jpg')";
        body.style.backgroundSize = "cover";
        body.addEventListener("click", ()=>{
             audio.src = "";
        });
    }

    // Update the text content of the elements
    day.innerText = dayValue;
    hour.innerText = hourValue;
    minute.innerText = minuteValue;
    second.innerText = secondValue;

    // Update the input values displayed on the screen
    day.value = dayValue;
    hour.value = hourValue;
    minute.value = minuteValue;
    second.value = secondValue;
  
}

// Call the function immediately
updateValues();

// Add an event listener to the button
btn.addEventListener("click", () => {
    // Call the function every second using setInterval
    if(countdownEnded == false)  setInterval(updateValues, 1000);
   
});
