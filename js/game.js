var RastgeleSayi = Math.round(Math.random()*30); // 1-30 arası (1-30 dahil) sayı üretiliyor.
//window.alert(RastgeleSayi);
function EtiketteGoster()
{
	var EtiketeGonder = RastgeleSayi;
	document.getElementById("UretilenSayiEkranda").value = EtiketeGonder;;
	var KarakterSayisi = EtiketeGonder;
	var SayiUzunlugu = KarakterSayisi.toString().length;
	switch(SayiUzunlugu) {
		case 1:
		document.write("* - Tek hanelidir.");
		break;
		case 2:
		document.write("** - Çift hanelidir.");
		break;
		default:
		document.write("Parametre hatası!"); //Parametre hatasına düştüğünde ErrorHandling (try-catch) yapılmalıdır.
		break;
	}
}
function KontrolEt(){
	
	var DogruMu;
	var YanlisMi;
	var TextBoxDegeri;
	//var hak=5;
	TextBoxDegeri = document.getElementById("BilgiGiris").value;
	//window.alert(TextBoxDegeri);
	if(TextBoxDegeri == RastgeleSayi) {
		window.alert("Doğru Cevap!");
		DogruMu = true;
	}
	else if(TextBoxDegeri == ""){
		window.alert("Boş bırakma patron!");
		
	}
	else {
		window.alert("Yanlış Cevap!");
		YanlisMi = true;
	}
	/*if(YanlisMi == true) {
		hak=hak-1;
		window.alert("Kalan tahmin hakkınız : "+hak);
	}
	else {
		hak=10;
	}*/ //Hak verme sistemi iptal edilmiştir.Eklemek isteyen kişinin kodu tekrar düzenlemesi gerekmektedir.

}