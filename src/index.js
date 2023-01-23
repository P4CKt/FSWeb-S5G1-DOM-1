const siteContent = { // BU NESNEYİ DEĞİŞTİRMEYİN
  "nav": {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  "cta": {
    "h1": "Bu DOM Mükemmel",
    "button": "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik": "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik": "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği": "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği": "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği": "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "iletisim": {
    "iletişim-h4": "İletişim",
    "adres": "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    "telefon": "+90 (123) 456-7899",
    "email": "satis@birsirketsitesi.com.tr",
  },
  "footer": {
    "copyright": "Copyright Bir Şirket Sitesi 2022",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('Proje açıldı!')


/* Kodlar Buradan aşağıya */
const hName =document.querySelectorAll("a");
hName[0].textContent = siteContent.nav["nav-item-1"];
hName[1].textContent = siteContent.nav["nav-item-2"];
hName[2].textContent = siteContent.nav["nav-item-3"];
hName[3].textContent = siteContent.nav["nav-item-4"];
hName[4].textContent = siteContent.nav["nav-item-5"];
hName[5].textContent = siteContent.nav["nav-item-6"];

//testten geçmiyor ama bence müq
// for (item of hName) {
//   item.setAttribute("class","italic");} 

hName.forEach(element => {
  element.setAttribute("class","italic")
});

// bu da bi çözüm
// for (let index=0;index<hName.length;index++) {
//   hName[index].classList.add("italic");
//   } 

document.querySelector("#logo-img").setAttribute("src",siteContent["images"]["logo-img"]);
document.querySelector("#cta-img").setAttribute("src",siteContent["images"]["cta-img"]);
document.querySelector("#middle-img").setAttribute("src",siteContent["images"]["accent-img"]);


document.querySelector("h1").textContent= siteContent.cta.h1;
document.querySelector("button").textContent= siteContent.cta.button;
const textCo =document.querySelectorAll(".text-content h4");
const textIn= document.querySelectorAll(".text-content p");
//h4'ler
textCo[0].textContent=siteContent["ana-içerik"]["özellikler-h4"];
textCo[1].textContent=siteContent["ana-içerik"]["hakkımızda-h4"];
textCo[2].textContent=siteContent["ana-içerik"]["servisler-h4"];
textCo[3].textContent=siteContent["ana-içerik"]["ürünler-h4"];
textCo[4].textContent=siteContent["ana-içerik"]["vizyon-h4"];


//p'ler
textIn[0].textContent=siteContent["ana-içerik"]["özellikler-içerik"];
textIn[1].textContent=siteContent["ana-içerik"]["hakkımızda-içerik"];
textIn[2].textContent=siteContent["ana-içerik"]["servisler-içeriği"];
textIn[3].textContent=siteContent["ana-içerik"]["ürünler-içeriği"];
textIn[4].textContent=siteContent["ana-içerik"]["vizyon-içeriği"];

document.querySelector(".contact h4").textContent= siteContent["iletisim"]["iletişim-h4"];
const contactInfo=document.querySelectorAll(".contact p");
contactInfo[0].textContent=siteContent["iletisim"]["adres"];
contactInfo[1].textContent=siteContent["iletisim"]["telefon"];
contactInfo[2].textContent=siteContent["iletisim"]["email"];
document.querySelector("footer a").setAttribute("class","bold");
document.querySelector("footer a").textContent=siteContent["footer"]["copyright"];


