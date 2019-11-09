var checkSwap = false;
var indexSwapEl = -1;
let arrCheckBoxes = [];
// let checkBoxes = [];

document.onload = function () {
    checkBoxes = document.getElementsByClassName('checkbox');
    for (var i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].checked == true) {
            arrCheckBoxes[i] = true;
            console.log("true");
        } else {
            arrCheckBoxes[i] = false;
        }
    }
    console.log("end1");
}

document.getElementById('form_notifications').onclick = function (event) {

    var target = event.target;
    checkBoxes = document.getElementsByClassName('checkbox');
    for (var i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].checked == true) {
            console.log("true");
        }
    }
    for (var i = 0; i < checkBoxes.length; i++) {
        if (arrCheckBoxes[i] == true) {
            console.log("true");
        }
    }
    if (target.className == 'checkbox') {
        for (var i = 0; i < checkBoxes.length; i++) {
            if (target == checkBoxes[i]) {
                var check = false;
                for (var i = 0; i < checkBoxes.length; i++) {
                    if (checkBoxes[i].checked != arrCheckBoxes[i]) {
                        // console.log("true");
                        check = true;
                    }
                }
                if (check) {
                    document.getElementById("form_notifications_button").disabled = false;
                } else {
                    // alert("ALERT");
                    document.getElementById("form_notifications_button").disabled = true;
                }
            }
        }
    }
}