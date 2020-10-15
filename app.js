let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(btn => {
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        } else if (styles.contains('reset')){
            count = 0;
        } else {
            count++;
        }
        if (count > 0){
            value.style.color = 'rgb(84, 201, 71)'
        } else if (count < 0) {
            value.style.color = 'rgb(255, 69, 69)'
        } else {
            value.style.color =  'rgb(44, 44, 44)'
        }
        value.textContent = count;
    });
});
