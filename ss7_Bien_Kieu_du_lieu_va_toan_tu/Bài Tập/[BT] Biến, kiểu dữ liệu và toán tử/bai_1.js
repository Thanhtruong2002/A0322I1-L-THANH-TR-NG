let vatly;
let hoa;
let sinhhoc;

vatly = prompt('Nhập diểm vật lý');
hoa = prompt('Nhập điểm hóa');
sinhhoc = prompt('Nhập điểm sinh');
let tb = (parseInt(vatly) + parseInt(hoa) + parseInt(sinhhoc)/3)
document.write('điểm tb' +tb )