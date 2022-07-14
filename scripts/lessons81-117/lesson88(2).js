// lesson 88(2) (practice)
"use strict";



const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
];

const getPositiveIncomeAmount = (data) => {
    return data.filter(dat => dat.amount > 0).reduce((acc, curr) => acc + curr.amount, 0);
};
console.log(getPositiveIncomeAmount(funds));

const getTotalIncomeAmount = (data) => {
    if(data.some(dat=>dat.amount<=0)===true){
        return data.reduce((acc, curr) => acc + curr.amount, 0);
    }else{
        return getPositiveIncomeAmount(data);
    } 
};
console.log(getTotalIncomeAmount(funds));


