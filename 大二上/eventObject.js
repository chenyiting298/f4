/**
 * Created by Administrator on 2018/10/31.
 */
window.onload=function() {
    var demo = document.getElementById('demo');
    var demo = document.getElementsByClassName('demo')[0]
    var demo = document.querySelector('#demo');
    var demo = document.querySelector('.demo');
}
    var key=document,querySelector('#key');
    key.onkeydown=show;
    function show(event){
        demo.style='width:100px;height:100px;backgroud-color:red;';
        if(event && event.keyCode==113){
            console.log('°´ÏÂF2');
        }
    }
