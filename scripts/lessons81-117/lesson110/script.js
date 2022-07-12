import 'jquery';
import $ from 'jquery'; 



const btn = $('#btn');
console.log(btn);



$(document).ready(function(){
    /* при навдедние на кнопку у нее класс сатновится активным */
    $('.list-item:first').hover(function(){
        $(this).toggleClass('active');
    });
    /* при нажатии на третью кнопку четная картинка исчезает плавно */
    $('.list-item:eq(2)').on('click',function(){
        $('.image:even').fadeToggle('slow');
    });
    /*  при нажатии на четвертую кнопку нечетная картинка плавно уменьшается до исчезновения */
    $('.list-item:eq(4)').on('click',function(){
        $('.image:odd').animate({
            opacity:'toogle',
            height:'toogle'
        },2000);
    });

});