// lesson 64 (Создание табов в новом проекте)
"use strict";

window.addEventListener('DOMContentLoaded',()=>{

    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');

    //сначала скрываем весь контент у табов      
    function hideTabContent(){
        tabsContent.forEach(item=>{
            //item.style.display='none';
            //или
            item.classList.add('hide');
            item.classList.remove('show','fade');
        });
        tabs.forEach(item=>{
            item.classList.remove('tabheader__item_active');
        });
    }

    //функция по показу контента и активации класса активности
    function showTabContent(i=0){
        //tabsContent[i].style.display='block';
        //или
        tabsContent[i].classList.add('show','fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    //запуск основной функции по клику
    tabsParent.addEventListener('click',(event)=>{
        const target = event.target;

        if(target && target.classList.contains('tabheader__item')){
            tabs.forEach((item,i)=>{
                if(target==item){
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

});