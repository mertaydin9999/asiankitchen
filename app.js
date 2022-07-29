//URUNLER
const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];



let listDOM = document.querySelector("#list") //listenin ID'sine ulasiyoruz.
let ullength = document.getElementsByTagName("li"); //liste uzunlugunu aliyoruz ki for icinde donebilelim.

//buttonlarimizi idlerinden aldik.

let allBtn = document.querySelector("#btn-all");
let koreaBtn = document.querySelector("#btn-korea");
let japanBtn = document.querySelector("#btn-japan");
let chinaBtn = document.querySelector("#btn-china");

console.log(allBtn)


//for dongusu ile her bir menu elemanini bir li icerisine atiyoruz.
for(let index = 0 ; index < menu.length ; index++){
  
  let liDOM = document.createElement('li'); 
  liDOM.classList="col-6 row mt-3"

  liDOM.innerHTML = `
        <img class="photo col-2" src="${menu[index].img}" alt="" >
          <div class="col-8">
            <h4 class="menu-title ">${menu[index].title}  <span class="float-end">${menu[index].price}</span></h4>
            <p class="mt-2">${menu[index].desc} </p>
          </div>
        
  `
  listDOM.appendChild(liDOM); 

}

allBtn.addEventListener('click', bringAll)
koreaBtn.addEventListener('click', bringKorea) //korea butonuna dinleyici yerlestirdik.
japanBtn.addEventListener('click', bringJapan) //japan butonuna dinleyici yerlestirdik.
chinaBtn.addEventListener('click', bringChina) //china butonuna dinleyici yerlestirdik.


//BU KISIMDA KOPYALAMA ISLEMI YAPIYORUZ. DAHA DOGRUSU 4 MENU YARATIYORUZ KATEGORILERE GORE


//yalnizca japan kategorisindeki yemekler




// tum yemekler
  let allFood = []
  for(let i=0 ; i<menu.length ; i++){
      allFood.push(menu[i]);
  }


//HEPSINI GETIREN FONKSIYON
  function bringAll(){
    listDOM.innerHTML=""
    for(let index = 0 ; index < menu.length ; index++){
    
      let liDOM = document.createElement('li'); 
      liDOM.classList="col-6 row mt-3"
    
      liDOM.innerHTML = `
            <img class="photo col-2" src="${menu[index].img}" alt="" >
              <div class="col-8">
                <h4 class="menu-title ">${menu[index].title}  <span class="float-end">${menu[index].price}</span></h4>
                <p class="mt-2">${menu[index].desc} </p>
              </div>
            
      `
      listDOM.appendChild(liDOM); 
    
    }
  }

//SADECE KORE YEMEKLERINI GETIREN FONKSIYON
function bringKorea(){
  //yalnizca korea kategorisindeki yemekler

  let koreanFood = []
  for(let i=0 ; i<menu.length ; i++){
    if(menu[i].category == "Korea"){
      koreanFood.push(menu[i]);
    }
  }
  listDOM.innerHTML="";
  for(let index = 0 ; index < koreanFood.length ; index++){

    let liDOM = document.createElement('li'); 
    liDOM.classList="col-6 row mt-3"
      liDOM.innerHTML = `
          <img class="photo col-2" src="${koreanFood[index].img}" alt="" >
            <div class="col-8">
              <h4 class="menu-title ">${koreanFood[index].title}  <span class="float-end">${koreanFood[index].price}</span></h4>
              <p class="mt-2">${koreanFood[index].desc} </p>
            </div>
          
    `
    listDOM.appendChild(liDOM); 
  }
}

//SADECE JAPAN YEMEKLERINI GETIREN FONKSIYON
function bringJapan(){
  let japanFood = []
  for(let i=0 ; i<menu.length ; i++){
    if(menu[i].category == "Japan"){
      japanFood.push(menu[i]);
    }}

  listDOM.innerHTML = "";
  for(let index = 0 ; index < japanFood.length ; index++){
    
    let liDOM = document.createElement('li'); 
    liDOM.classList="col-6 row mt-3"
  
      liDOM.innerHTML = `
          <img class="photo col-2" src="${japanFood[index].img}" alt="" >
            <div class="col-8">
              <h4 class="menu-title ">${japanFood[index].title}  <span class="float-end">${japanFood[index].price}</span></h4>
              <p class="mt-2">${japanFood[index].desc} </p>
            </div>
          
    `
    listDOM.appendChild(liDOM); 
  }
}

//SADECE JAPAN YEMEKLERINI GETIREN FONKSIYON
function bringChina(){
//yalnizca china kategorisindeki yemekler
let chinaFood = []
for(let i=0 ; i<menu.length ; i++){
  if(menu[i].category == "China"){
    chinaFood.push(menu[i]);
  }
}
  listDOM.innerHTML = "";
  for(let index = 0 ; index < chinaFood.length ; index++){
    
    let liDOM = document.createElement('li'); 
    liDOM.classList="col-6 row mt-3"
  
      liDOM.innerHTML = `
          <img class="photo col-2" src="${chinaFood[index].img}" alt="" >
            <div class="col-8">
              <h4 class="menu-title ">${chinaFood[index].title}  <span class="float-end">${chinaFood[index].price}</span></h4>
              <p class="mt-2">${chinaFood[index].desc} </p>
            </div>
          
    `
    listDOM.appendChild(liDOM); 
  }
}
