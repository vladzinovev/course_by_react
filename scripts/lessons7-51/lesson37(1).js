// lesson 37(1) (practice)
"use strict"

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data) {
    let culc = 0;
    let S=0;
    data.shops.forEach(el=>{
        S+=el.width*el.length;
    });
    culc=data.budget-(data.height*S*data.moneyPer1m3);
    console.log(culc);
    if(culc>=0){
        console.log('достаточно');
        return 'Бюджета достаточно';
    } else{
        console.log('недостаточно');
        return 'Бюджета недостаточно';
    }
    
}
isBudgetEnough(shoppingMallData);