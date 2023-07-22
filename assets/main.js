const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$('.tab-item');
const panes = $$('.tab-pane');

const line = $('.line');
const tabActive = $('.tab-item.active');

setLine(tabActive)

tabs.forEach((tab,index) => {
    tab.onclick = function() {
        $('.tab-item.active').classList.remove('active');
        $('.tab-pane.active').classList.remove('active');

        this.classList.add('active');
        panes[index].classList.add('active');

        setLine(this);
    }
});

function setLine(tab){
    line.style.left = tab.offsetLeft + 'px';
    line.style.width = tab.offsetWidth + 'px';
}
