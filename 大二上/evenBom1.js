window.onload=function(){
    var jsCall=document.getElementById('jsCall')
    jsCall.onclick=callJS;
    function callJS(){
        alert('js�����¼��ɹ�');
    }

}
function callHTML(){
    console.log('html�����¼��ɹ�')
}
console.log(window.innerHeight+'*'+window.innerWidth);
console.log(screen.height+'*'+screen.width);
console.log(location.href);