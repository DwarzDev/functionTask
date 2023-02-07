
let pernyataan = confirm("Menghitung Volume Balok \n Dan Luas Permukaan Balok")
if (pernyataan) {
    let panjang = parseInt(prompt("Masukan Nilai Panjang : "));
let lebar = parseInt(prompt("Masukan Nilai Lebar : "));
let tinggi = parseInt(prompt("Masukan Nilai TInggi : "));

function volumeBalok(p,l,t){
    return result = p * l * t;
}

function luasPermukaanBalok(p,l,t){
    return result = (p * l + p * t + l * t) * 2;
}

let hitungVolumeDanLuasPermukaanBlok = function (panjang,lebar,tinggi) {
    const volumeBalokResult = volumeBalok(panjang,lebar,tinggi)
    const luasPermukaanBalokResult = luasPermukaanBalok(panjang,lebar,tinggi)
    document.write("</br><hr></br> <h2>Menghitung Volume dan Luas Permukaan Balok</h2></br></br>")
    document.write(`Anda Memasukan Nilai Panjang : ${panjang}, Nilai Lebar : ${lebar}, dan Nilai Tinggi : ${tinggi}. </br> Volume Balok adalah : ${volumeBalokResult}</br>Luas Permukaan Balok : ${luasPermukaanBalokResult}`);
  
}

hitungVolumeDanLuasPermukaanBlok(panjang,lebar,tinggi);

}
