let inc = document.getElementById('inc');
let dec = document.getElementById('dec');
let re = document.getElementById('re');
let h2 = document.getElementById('h2');

let globalvar = 0;

function color() {
    if (globalvar > 0) {
        h2.setAttribute('style', 'color:green');
    }
    else if (globalvar < 0) {
        h2.setAttribute('style', 'color:red');
    }
    else {
        h2.setAttribute('style', 'color:blue')
    }
}

re.addEventListener('click', function () {
    globalvar = 0;
    h2.textContent = 0;
    color();

})

dec.addEventListener('click', function () {
    globalvar -= 1;
    h2.textContent = globalvar;
    color();
})


inc.addEventListener('click', function () {
    globalvar += 1;
    h2.textContent = globalvar;
    color();
})

