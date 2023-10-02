const sayi1 = document.getElementById('sayi1');
const sayi2 = document.getElementById('sayi2');

const sonuc = document.getElemenyById('sonuc');

function cikar(){
	sonuc.innerHTML = sayi1.value - sayi2.value ;
}
