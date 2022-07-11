API = 'https://api.adviceslip.com/advice';

const advicenNum =  document.getElementById('advicen-num');
const adviceText =  document.getElementById('advice-text');
const circle = document.getElementById('circle-advice');

async function fechdata(urlApi) {
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
}

 const callToAction = async () => {
    try {
        const frase = await fechdata(API);
        advicenNum.innerText = frase.slip.id;
        adviceText.innerHTML = frase.slip.advice;
    } catch (Error) {
        console.log(Error)
    }
};

callToAction();

circle.addEventListener("click", () => {
    callToAction();
})