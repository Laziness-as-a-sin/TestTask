let arrCheckBoxes = [];

window.onload = function () {
    tab = document.getElementsByClassName('right_content_top_button');
    tabContent = document.getElementsByClassName('right_content_bot_');
    tabContent[0].classList.remove('invisibility');
    tab[0].classList.add('highlighting')

    checkBoxes = document.getElementsByClassName('checkbox');
    for (var i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].checked == true) {
            arrCheckBoxes[i] = true;
        } else {
            arrCheckBoxes[i] = false;
        }
    }
}

document.getElementById('right_top_tabs').onclick = function (event) {
    var target = event.target;
    if (target.className == 'right_content_top_button') {
        for (var i = 0; i < tab.length; i++) {
            if (target == tab[i]) {
                showTab(i);
                break;
            }
        }
    }
}

function showTab(b) {
    for (var i = 0; i < tab.length; i++) {
        if (!tabContent[i].classList.contains('invisibility')) {
            tabContent[i].classList.add('invisibility');
            tab[i].classList.remove('highlighting');
            break;
        }
    }
    tabContent[b].classList.remove('invisibility');
    tab[b].classList.add('highlighting');
}

document.getElementById('form_notifications').onclick = function (event) {
    var target = event.target;
    checkBoxes = document.getElementsByClassName('checkbox');
    if (target.className == 'checkbox') {
        for (var i = 0; i < checkBoxes.length; i++) {
            if (target == checkBoxes[i]) {
                var check = false;
                for (var i = 0; i < checkBoxes.length; i++) {
                    if (checkBoxes[i].checked != arrCheckBoxes[i]) {
                        check = true;
                    }
                }
                if (check) {
                    document.getElementById("form_notifications_button").disabled = false;
                } else {
                    document.getElementById("form_notifications_button").disabled = true;
                }
            }
        }
    }
}

function form_notifications_submit() {
    try{
        document.form_notifications.submit();
    }catch (e) {
        alert("ALERT")
    }
}

// function form_notifications_submit() {
//     // form = document.getElementById('form_notifications');
//     // var req = getXmlHttp();
//     // req.open('post', 'in.php');
//     // req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//     // try {
//     //     req.send(form);
//     // } catch (e) {
//     //     alert("AAAAA")
//     // }
//     //
//     // return false;
//     // 1. Создаём новый объект XMLHttpRequest
//     var xhr = new XMLHttpRequest();
//
// // 2. Конфигурируем его: GET-запрос на URL 'phones.json'
//     xhr.open('GET', 'phones.json', false);
//
// // 3. Отсылаем запрос
//     xhr.send();
//
// // 4. Если код ответа сервера не 200, то это ошибка
//     if (xhr.status != 200) {
//         // обработать ошибку
//         alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
//     } else {
//         // вывести результат
//         alert( xhr.responseText ); // responseText -- текст ответа.
//     }
//     return false;
// }
//
// function getXmlHttp(){
//     var xmlhttp;
//     try {
//         xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
//     } catch (e) {
//         try {
//             xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
//         } catch (E) {
//             xmlhttp = false;
//         }
//     }
//     if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
//         xmlhttp = new XMLHttpRequest();
//     }
//     return xmlhttp;
// }