        let btn = document.getElementById("btn");
          let result = document.getElementById("result");
          let num = document.getElementById("num");
          btn.addEventListener('click', btnclick);

          function btnclick() {
            const x = Math.round(Math.random() * 10);
            console.log("Secret number:", x);

            let n = prompt("Enter your guess:");
            let count = 1;

            while (n != x) {
              n = prompt("Wrong guess, take another try. Enter your guess:");
              count++;
            }
            num.innerText = "Number is : " + x;
            result.innerText = "🎉 Correct! You took " + count + " guess(es).";
          }