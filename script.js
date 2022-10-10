const num = document.getElementById('number');
const btn = document.getElementById('generate');


const randomNum = () => {
    return Math.floor(Math.random() * 23);
}


 btn.addEventListener('click', () => {
   num.innerHTML = randomNum();
});