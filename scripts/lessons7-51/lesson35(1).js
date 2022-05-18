// lesson 35(1) (practice)
"use strict"


const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs:function(persplan){
        const {age}=persplan;
        const {languages}=persplan.skills;
        let str = `Мне ${age} и я владею языками: `;
        
        languages.forEach(function(lang) {
            str += `${lang.toUpperCase()} `;
        });
        /* 
        for (let key in languages){
        str += ` ${languages[key].toUpperCase()}`;
        }
        */
        console.log(str);
        return str;
    }
};
personalPlanPeter.showAgeAndLangs(personalPlanPeter);

function showExperience(plan) {
    const {exp} = plan.skills;
    return exp;

}
showExperience(personalPlanPeter);
function showProgrammingLangs(plan) {
    let str= '';
    const {programmingLangs}=plan.skills;
    for (let key in programmingLangs){
        str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
    }
    return str;
}
showProgrammingLangs(personalPlanPeter);