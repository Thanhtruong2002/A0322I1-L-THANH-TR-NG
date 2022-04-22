var height1 = document.getElementById('Height');
var weight1 = document.getElementById(' weight');
var cal = document.getElementById('cal');

function Calculate(height, weight) {
    if (height <= 0 || weight <= 0 || isNaN(height) || isNaN(weight)) {
        alert("No Calculate");
    } else
        height = height/100;
        let bmi = weight/Math.pow(height.2);
        return bmi;
}
cal.onclick = function result() {
    var height = height1.value;
    var weight = weight1.value;
    var bmi = calculator(height,weight);
    if (bmi < 18.5){
        alert("Bạn bị gầy, nguy cơ phát triển thấp");
    }else  if (bmi >= 18.5 && bmi <= 29.5){
        alert('Bạn bình thường, nguy cơ phát triển bệnh bình thường')
    }
    else if (bmi >= 25 && bmi <= 29.9){
        alert("bạn hơi béo, nguy cơ phát triển bệnh trung cao");
    }else if (bim >= 30 && bmi <= 34.9){
        alert("Bạn béo phì cấp độ 1, nguy cơ phát triển bạn cao");
    }else if (bmi >=35 && bmi <= 39.9){
        alert('bạn béo phì cấp độ 2, nguyen cơ phát triển bệnh cao'))
    }else if (bmi >40){
        alert("Bạn béo phì cấp độ 3, nguy cơ phát triển bệnh cao")
    }
}

