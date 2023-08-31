//console.log(`Bağlantı `); //JavaScript konsola yazdırıak Dosyası bağlantı kontrolü
//document.write("Bağlantı kontrolu <br>"); //Ekrana Yazdırma metodu

//JavaScript Veri Türleri

//Number- Rakamlar (1,2,3,45) matematiksel işlemlerde number veri tip kullnaılır
// document.write(1, 5, 6);
// document.write("<br>");
// document.write(1 + 2);

//String- Metin gibi veriler Tırnak içerisinde yazılır ('İsim')
// document.write("<br>");
// document.write("Hasan ", "Mehmet", " ", "1", "   ", "2");
// document.write("<br>");
// document.write("1" + "2");

// document.write("<br>");

//Boolean: True veya False değeri döndüren veri tipidir
// document.write("1 sayısı 2 sayısına eşit mi ?", false);
// document.write("<br>");

//Array Bir diziye benzer veri yapıları örneğin [1,2,3,4] ['2','Kemal']

// document.write([1, 2, 3, 4, 5]);
// document.write("<br>");
// document.write(["Abdulsamet", "Ahmet"]);
// document.write("<br>");

//Object: Nesne yapıları örneğin Ahmetin genel bilgierli objesi {isim:'Ahmet',soyisim:'Berktaş',sezonBilgisi:'7 Hafta İçi'}

// console.log({
// isim:'Ahmet',
// soysisim:'Berktaş',
// sezonBilgisi:7

// })

// console.log({
//     isim:'Abdulsamet',
//     soyisim:'Dursun',
//     sezonBilgisi:7
// })

// console.log([
//   {
//     isim: "Ahmet",
//     soysisim: "Berktaş",
//     sezonBilgisi: 7,
//   },
//   {
//     isim: "Abdulsamet",
//     soyisim: "Dursun",
//     sezonBilgisi: 7,
//   },
// ]);

//Evinizdeki her bir bireyin isim soy isim yaş cinsiyet bilgilerinin bulunuduğu array(dizi oluşturun)

// console.log([
//   { isim: "Hasan", soyisim: "Çelik", yaş: "25", cinsiyet: "Erkek" },
//   { isim: "Neriman", soyisim: "Çelik", yaş: "63", cinsiyet: "Kadın" },
//   {isim:'Kamil',soyisim:'Çelik',yaş:'65',cinsiyet:'Erkek'}
// ]);

// Tek bir satırı yoruma almak için // işaret kullnıalır

/*


birden fazla yorum satırı için bu yazım kulllnıalır /** */

//JavaScript değişkenler

//var , let , const bu anahtar kelimeler değişken atamasında kullanılır

//var JavaScritpin önceki versiyonlarında değişken tanımlamak için kullanılan anahatar kelime

/**
Değişken tanımlama yöntemi 
önce uygun anahtar kelime sonrasında değişkenin adı ve değişkenin varsa değeri
 */

// var egitmenAdi='Hasan Çelik'
// document.write('Şu Anki Eğitmen  ===>  ',egitmenAdi)
// var egitmenAdi='Mehmet Can Seyhan'
// document.write('<br>')
// document.write('Şu Anki Eğitmen  ===>  ',egitmenAdi)

//let anahtar kelime es6 ile önerilen değişken tanımlama için kullanılan anahtardır

// let egitmenAdi = "Hasan Çelik";

// document.write("Şu Anki Eğitmen  ===>  ", egitmenAdi);

// egitmenAdi = "Yusuf Aykın";
// document.write("<br>");

// document.write("Haftaya Eğitmen  ===>  ", egitmenAdi);

// let haftaninKonusu;
// haftaninKonusu='boostrap proje'
// document.write('<br>')
// document.write(haftaninKonusu)

// let haftayaDersSaati = "20.15";
// let haftayaGirecekEgitmen;
// document.write(
//   "Hafta Ders Satti Başlangıcı ==>>  ",
//   haftayaDersSaati,
//   "Haftaya Girecek eğitmen ==>>",
//   haftayaGirecekEgitmen
// );

// haftayaGirecekEgitmen = "Furkan Evin";
// document.write("<br>");

// document.write(
//   "Hafta Ders Satti Başlangıcı ==>>",
//   haftayaDersSaati,
//   " Haftaya Girecek eğitmen ==>>",
//   haftayaGirecekEgitmen
// );

// haftayaDersSaati = "22:00";
// document.write("<br>");
// document.write(
//   "Hafta Ders Satti Başlangıcı ==>>",
//   haftayaDersSaati,
//   "Haftaya Girecek eğitmen ==>>",
//   haftayaGirecekEgitmen
// );

//isim ve soy isminizi değişken olarak tanımlayın ve ekranda yan yana yazdırın

//const anahtar kelimesi sabit olan değişkenler için kullanılır

// const pi = 3.14;
// document.write(pi);

// const primaryColor='orange';
// const secondartColor='red';

// const isimErkek = "kemal";
// const soyIsimErkek = "Çetin";
// const dogumTarihiErkek = 1999;
// let evlilikYiliErkek;

// const isimKadın = "Naziye";
// let soyIsimKadın = "Çeliktaş";
// const dogumTarihiKadın = 1999;
// let evlilikYiliKadın;

// document.write("Kadının Ismi ==>", isimKadın + soyIsimKadın);

// soyIsimKadın = "Çetin";
// evlilikYiliKadın = 2023;
// document.write("<br>");
// document.write(
//   "Kadının Ismi ==>",
//   isimKadın + soyIsimKadın,
//   "Evliilk Yıl Dönümü ==>",
//   evlilikYiliKadın
// );

//Java Script Operatörler


//Aritmetik  İşlemler İçin Kullanılacak Operatörler
let isim = "Hasan";
let soyIsim = "Çelik";
let yas = 25;
let gunumuzYili = 2023;
let dogumTarihi = 1998;
let mezuniyetYili = "2019";
let baslamaYili = "2016";

let sayi1=5;
let sayi2=10

// + toplama operatörü

document.write(isim + "  " + soyIsim); // String ifadelerde yanyana getirir

document.write(yas + dogumTarihi); //Sayısal İfadelerde Matematiksel Toplar

document.write("<br>");

document.write(
  "Üniversite Bulunma Tarihleri ===>>",
  baslamaYili + mezuniyetYili
);

//- çıkarma operatörü

document.write('Kişinin Doğum Tarihi ===>>>',gunumuzYili-yas)

//* çarpma operatörü 
document.write("<br>");
document.write('İki sayının çarpımı ===>>',sayi1*sayi2)

// '/' bölme operatörü
document.write("<br>");

document.write('Sayı  nin Sayı 1 E nölümü ===>>',sayi2/sayi1)


//Atama Operatörleri

// = Herhangi bir değişekene bir değer atamak için kullnaılır
let x=5;
let y ='Üç Sayısı'
x=y
document.write("<br>");
document.write(x)

//+= bir değişeknin mevcut değerine  değer ekler

x=6
x+=4
document.write("<br>");
document.write(x)

//-= bir değişeknin mevcut değerine  değer çıkartır

x-=1
document.write('<br>')
document.write(x)

//*= mevcut değişkenin değeri ile değer çarpar

x*=7
document.write('<br>')
document.write(x)

//  '/=' mevcut değişkeni istenilen değer böler

x/=7
document.write('<br>')
document.write(x)
document.write('<br>')

document.write(5/2)



//Karşılaştırma Operatörleri

//JavaSccritpe karşılaştrıma operatörleri veriler arasıdna ilişkiyi kontrol etmek için kullnaılır


let sayiBir=15;
let sayiIki=30;
let sayiUc='15'

// == (eşittir ) operatrölük değer  eşitlik sınaması için kullnaılır
document.write("<br>");
document.write('Sayi bir Sayı 2 ye eşitmidir ?  ',sayiBir==sayiIki)
document.write("<br>");
document.write('sayiBirin Değer = ',sayiBir+'  '+ 'Sayi Üçün değeri = '+'  ' + sayiUc)
document.write("<br>");
document.write('Sayi bir Sayı Üçe ye eşitmidir ?  ',sayiBir==sayiUc)

// === (tam eşit) operatörü karışaştıerlan iki değeri tipleri ile birlikte karşılaştırı
document.write("<br>");
document.write('Sayi bir Sayı Üçe ye eşitmidir ?  ',sayiBir===sayiUc)

// != (eşit değil )
document.write("<br>");
document.write('Sayi 1  Sayı 2 ye eşit değil midir ?  ',sayiBir!=sayiIki)
document.write("<br>");

document.write('sayi1 sayi 3 e eşit değilmidir ?',sayiBir!=sayiUc)

//!== (tam eşit değil) bu operatrö ek olarak veri tipinede bakar
document.write('<br>')
document.write('sayi1 sayi 3 e eşit değilmidir ?',sayiBir!==sayiUc)



