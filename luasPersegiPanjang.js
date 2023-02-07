let panjang = parseInt(prompt("Masukan Nilai Panjang : "));
let lebar = parseInt(prompt("Masukan Nilai Lebar : "));

let hitungLuasPersegiPanjang = (panjang, lebar) => {
    return result = panjang * lebar;
}
let hasil = hitungLuasPersegiPanjang(panjang,lebar);

document.write("</br> <h2>Menghitung Luas Persegi Panjang</h2></br></br>")

document.write(`Anda Memasukan Nilai Panjang : ${panjang} dan Nilai Lebar : ${lebar}. </br> Luas Persegi Panjang adalah : ${hasil}.`)

