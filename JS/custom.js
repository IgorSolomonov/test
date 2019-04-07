let perem1, perem2; //Две переменные для вопроса
perem1 = prompt("Ваш бюджет?", "");
perem2 = prompt("Название вашего магазина?", "");

let mainList = {
    perem:perem1,
    name:perem2,
    shopGoods:[],
    employers:"",
    open:"",
}

for(let x = 0; x < 3; x++){
    mainList.shopGoods[x] = prompt("Какой тип товаров будем продавать?","");
}

alert("Ваш бюджет на день= " + mainList.perem/30 + " руб");
console.log(mainList.shopGoods[2]);