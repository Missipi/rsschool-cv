let a=`ОЦЕНКА trave#2: 54 БАЛЛА\n
1. Верстка соответствует макету +40\n
2. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки.\n 
Весь контент страницы при этом не сохраняется: +10\n
3. На ширине экрана 390рх и меньше реализовано адаптивное меню +4\n
console.log(a);


$(document).ready(function(){
    $('.header_burger').click(function(event){
    $('.header_burger', '.header_nav').toggleClass('active');
    $('body').toggleClass('lock');
});
});
