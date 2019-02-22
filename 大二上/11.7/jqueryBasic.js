$(document).ready(function(){
    $('input').click(function(){
        $('p').hide();
    });
    $('.demo').click(function(){
        $('.demo').css('background-color','green');
    });
    $('#demo').dblclick(function(){
        $(this).css({'backgroung-color':'red','width':'200px','height':'100px'});
    });
    $('[src]').click(function(){
        $(this).css('border','5px solid #ae3333');
    });
    $('[name="weather"]').mousedown(function(){
        $('[name="weather"]').css('background-color','brown');
    });
    var jq=jquery.noconflict();
    jq('[href="#"]').mouseover(function(){
        jq(this).css('color','#ae3333')
    })
});