window.onload = function () {
    tab = document.getElementsByClassName('right_content_top_button');
    tabContent = document.getElementsByClassName('right_content_bot_');
    tabContent[0].classList.remove('invisibility');
    tab[0].classList.add('highlighting')
}

document.getElementById('right_top_tabs').onclick = function (event) {
    var target = event.target;
    if(target.className == 'right_content_top_button'){
        for(var i = 0; i < tab.length; i++){
            if(target == tab[i]){
                showTab(i);
                break;
            }
        }
    }
}

function showTab(b) {
    for(var i = 0; i < tab.length; i++){
        if(!tabContent[i].classList.contains('invisibility')){
            tabContent[i].classList.add('invisibility');
            tab[i].classList.remove('highlighting');
            break;
        }
    }
    tabContent[b].classList.remove('invisibility');
    tab[b].classList.add('highlighting');
}