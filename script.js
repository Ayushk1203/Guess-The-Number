const start = document.getElementById('start');
const submit = document.getElementById('submit');
const input = document.querySelector('input');
let random = 0;
let arr = [];



const startAgain = () =>{
    start.disabled = false;
    start.style.cursor = 'pointer';
    submit.disabled = true;
    submit.style.cursor = 'not-allowed';
    input.disabled = true;
    input.style.cursor = 'not-allowed';
    arr = [];
    


}

const updateNumberList = (inpv) => {
    arr.push(inpv);
    const cn = document.getElementById('choosenNumber');
    cn.innerHTML = `You have chosen numbers: ${arr.join(' , ')}`;
};

start.addEventListener('click', () => {
    start.disabled = true;
    start.style.cursor = 'not-allowed';
    submit.disabled = false;
    submit.style.cursor = 'pointer';
    input.disabled = false;
    input.style.cursor = 'pointer';
    random = Math.floor(Math.random() * 100) + 1;
    console.log("Random number:", random); 
    const result = document.getElementById('res');

    result.innerHTML="";
    const cn = document.getElementById('choosenNumber');

    cn.innerHTML = "";
    input.value = "";
    
});

submit.addEventListener('click', () => {
    const display = document.getElementById('display');
    const result = document.getElementById('res');
    const inpv = parseInt(input.value);

    if (isNaN(inpv)) {
        result.innerHTML = `<p>Please enter a valid number!</p>`;
        return;
    }

    updateNumberList(inpv);

    if (random < inpv) {
        result.innerHTML = `<p>Too High!</p>`;
    } else if (random > inpv) {
        result.innerHTML = `<p>Too Low!</p>`;
    } else {
        result.innerHTML = `<p>Congrats! You got the number.</p>`;
        startAgain();
    }
});

