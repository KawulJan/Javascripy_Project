(()=>{
    const tapp = document;
    const tab = tapp.getElementById('js-tab');
    const nav = tab.querySelectorAll('[data-nav]');
    const content = tab.querySelectorAll('[data-content]');

    const init = () => {
        content[0].style.display = 'block'
    };
init();


// click
const handleClick =(e) =>{
    e.preventDefault();

    // click nav get data

    const $this =e.target;
    const targetvalue = $this.dataset.nav;

    // click nav all content reset
    let index = 0;
    while(index < nav.length){
        content[index].style.display = 'none';
        nav[index].classList.remove('is-active');
        index++;
    }

    // active the commit
    tab.querySelectorAll('[data-content="'+ targetvalue +'"]')[0].style.display='block';
    nav[targetvalue].classList.add('is-active');
};
// all nav command up
let index= 0;
while(index < nav.length){
    nav[index].addEventListener('click', (e) => handleClick(e));
    index++;
};
})();