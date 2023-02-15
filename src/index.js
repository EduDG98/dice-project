const result = document.getElementById('result');
const button = document.getElementById('button')

const randomNum =  () => {
    return Math.floor(Math.random()*6)+1;
}

button.addEventListener('click', () => {
    result.textContent = randomNum();
})





