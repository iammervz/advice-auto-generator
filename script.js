

document.getElementById("button").addEventListener("click", randomAdvice);
window.addEventListener("load", randomAdvice);

function randomAdvice() {
    
    fetch('https://api.adviceslip.com/advice')
    .then((response) => response.json())
        .then((data) => {
            console.log(data);
            let output = `
                    <h6>Advice #${data.slip.id}</h6>
                    <p>"${data.slip.advice}"</p>
                    <img src="images/pattern-divider-mobile.svg" alt="">
                `;
            document.getElementById("advice").innerHTML = output;
    })
}

