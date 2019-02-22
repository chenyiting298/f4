window.onload=function(){
    var jsCall=document.getElementById('jsCall')
    jsCall.onclick=callJS;
    function callJS(){
        alert('js调用事件成功');
    }

}
function callHTML(){
    console.log('html调用事件成功')
}
console.log(window.innerHeight+'*'+window.innerWidth);
console.log(screen.height+'*'+screen.width);
console.log(location.href);