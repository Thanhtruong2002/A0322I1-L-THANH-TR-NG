var height = document.getElementById('Height');
var weight = document.getElementById(' weight');
cal = document.getElementById('cal');

function Calculator(height, weight) {
    if (height <= 0 || weight <= 0 || isNaN(height)|| isNaN(weight)){
        alert('No Calculator');
    }else {
        height = height/100
    }
}