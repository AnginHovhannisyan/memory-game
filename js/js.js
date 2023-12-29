// let div = document.querySelectorAll('.d')
// let c = 0;
// let arr=[];
// for (let i = 0; i < div.length; i++) {
// 	div[i].addEventListener("click", function () {
// 		// div[i].innerHTML = ""
// 		console.log(this.innerText);
// 		arr.push(this);
// // debugger;
// 		c++;
// 		if (c <= 2) {
// 			div[i].classList.toggle("card-rotate");
// 		}
// 			console.dir(this)
// 		// if(i === i){
// 		// 	console.log("asd")
// 		// 	// div[i].classList.toggle("card-rotate");
// 		// }
// 		function fun() {
// 			if(arr.length === 2){
// 				if (arr[0].innerText === arr[1].innerText){
// 					// console.log("sd")
// 					arr[0].classList.add("cadr-right");
// 					arr[1].classList.add("cadr-right");
// 					arr.splice(0,arr.length);
// 				}else{
// 					// arr[1].classList.add("card-rotate");
// 					arr[0].classList.remove("card-rotate");
// 					arr[1].classList.remove("card-rotate");
// 					arr.splice(0,arr.length);
// 					}
// 				}
// 			}	
// 			setTimeout(fun,1500)
// 			c = 0;
// 	})
// }



let div = document.querySelectorAll('.d');
let c = 0;
let str = "";
let str2 = "";
// let timeLeft = 10; // Reduced for testing (in seconds)
//         let elapsedTime = 0;
//         let gameEnded = false;

//         const timerDisplay = document.getElementById('timer');
//         const elapsedTimeDisplay = document.getElementById('elapsed-time');
//         const hintDisplay = document.getElementById('hint');
//         const gameOverModal = document.getElementById('game-over-modal');

//         function updateTimerDisplay() {
//             const minutes = Math.floor(timeLeft / 60);
//             const seconds = timeLeft % 60;
//             timerDisplay.textContent = `Time Left: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
//         }

//         function updateElapsedTimeDisplay() {
//             const minutes = Math.floor(elapsedTime / 60);
//             const seconds = elapsedTime % 60;
//             elapsedTimeDisplay.textContent = `Elapsed Time: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
//         }

//         const timerInterval = setInterval(function () {
//             if (timeLeft > 0) {
//                 timeLeft--;
//                 elapsedTime++;
//                 updateTimerDisplay();
//                 updateElapsedTimeDisplay();
//             } else if (!gameEnded) {
//                 clearInterval(timerInterval);
//                 gameEnded = true;
//                 // Show game-over modal
//                 gameOverModal.style.display = 'block';
//                 hintDisplay.textContent = 'Game Over! Your time is up.';
//             }
//         }, 1000);

//         function resetGame() {
//             // Hide game-over modal
//             gameOverModal.style.display = 'none';
//             // Clear hint
//             hintDisplay.textContent = '';
//             // Reset game variables
//             divs.forEach(card => {
//                 card.style.display = "inline-block";
//                 card.classList.remove("card-rotate");
//             });
//             timeLeft = 10; // Reset to the initial time (in seconds)
//             elapsedTime = 0;
//             updateTimerDisplay();
//             updateElapsedTimeDisplay();
//             gameEnded = false;
//         }

	for (let i = 0; i < div.length; i++) {
		div[i].addEventListener("click", function () {
			c++;
			if (c <= 2) {
				this.classList.toggle("card-rotate");
				if (str === "") {
					str = this.innerHTML;
					strT = this;
				}else {
					str2 = this.innerHTML;
					if (str === str2 && strT !== this) {
						setTimeout(function () {
						strT.style.display = "none";
						div[i].style.display = "none";
						c = 0;
						}, 1000)
					}
					else{
						setTimeout(function () {
						// strT.classList.remove("card-rotate")
						// div[i].clasist.remove("card-rotate")
						strT.classList.toggle("card-rotate")
						div[i].classList.toggle("card-rotate")
						c = 0;
						}, 1000)
					}
					str = ""
				}
				console.log(str, str2)
			}
			function areAllDivsSameClass() {
            if (div.length > 0) {
                // Get the class of the first div
                let firstDivClass = div[0].className;

                // Check if all other div have the same class
                for (let i = 1; i < div.length; i++) {
                    if (div[i].className !== firstDivClass) {
                        return false; // Different class found
                    }
                }

                return true; // All divs have the same class
            }

            return false; // No divs found
        }
        if (areAllDivsSameClass()) {
            document.getElementById('win').innerText="Win"
        } else {
            console.log('Not all divs have the same class.');
        }

	})
}