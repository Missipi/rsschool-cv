let a=`ОЦЕНКА travel#1: 94 БАЛЛА\n
1.	Вёрстка валидная +10\n
Валидной вёрстке соответствует надпись "Document checking completed. No errors or warnings to show."\n
2.	Вёрстка семантическая +18\n
- отсутствуют  четыре кнопки <button> -2\n
3.	Вёрстка соответствует макету +48\n
4.	Требования к css + 6\n
не соответствует:\n
- иконки не добавлены в формате .svg.\n
- изображения добавлены в формате .jpg\n
- есть favicon\n
5.	Интерактивность, реализуемая через css +15\n
- нет якорей`;
console.log(a);


$(document).ready(function(){
    $('.header_burger').click(function(event){
    $('.header_burger', '.header_nav').toggleClass('active');
    $('body').toggleClass('lock');
});
});
