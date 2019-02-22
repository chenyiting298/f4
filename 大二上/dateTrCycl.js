window.onload=function(){
    var get_date=document.getElementById('get_date');
    var d=new Date();
    var year= d.getFullYear();
    var month= d.getMonth();
    var date= d.getDate();
    var day= d.getDay();
    switch (day){
        case 0:
            day='星期日';
            break;
        case 1:
            day='星期一';
            break;
        case 2:
            day='星期二';
            break;
        case 3:
            day='星期三';
            break;
        case 4:
            day='星期四';
            break;
        case 5:
            day='星期五';
            break;
        case 6:
            day='星期六';
            break;
        default:day='未查询到星期天数';
    }
    var hours= d.getHours();
    var minutes= d.getMinutes();
    var seconds= d.getSeconds();
    var time= d.getTime();
    get_date.innerHTML=year+'年'+month+'月'+date+'日'+day+hours+'时'+minutes+'分'+seconds+'秒'+time+'(1997.1.1以来的秒数)';
    d.setFullYear(2015);
    var sYear= d.getFullYear();
    d.setMonth(6);
    var sMoth= d.getMonth()+1;
    d.setDate(2);
    var sDay= d.getDay();
    switch (sDay){
        case 0:
            sDay='星期日';
            break;
        case 1:
            sDay='星期一';
            break;
        case 2:
            sDay='星期二';
            break;
        case 3:
            sDay='星期三';
            break;
        case 4:
            sDay='星期四';
            break;
        case 5:
           sDay='星期五';
            break;
        case 6:
            sDay='星期六';
            break;
        default :sDay='未查询到星期天数';
    }
    d.setHours(5);
    var sHours= d.getHours();
    d.setMinutes(34);
    var sMinutes= d.getMinutes();
    d.setSeconds(29);
    var sSeconds=d.getSeconds();
    d.setTime(1000);
    var sTime= d.getTime();
    var set_date=document.getElementById('set_date');
    set_date.innerHTML=sYear+'年'+sMonth+'月'+sDate+'日'+sHours+'时'+sMinutes+'分'+sSeconds+'秒'+sTime+'(1997年1月1日以来的毫秒数)';
    var a=454,b=true,c=54.256,d='122.26',e='15.25eee',f=null;
    var x=parseInt(e);
    var y=parseFloat(e);
    var demo=0;
    var i=1;
    for(i;i<=100;i++){
        demo=demo+i;
    }
    while(i<=200){
        demo+=i;
        i++;
    }
    do{
        demo+=i;
        i++
    }while(i<=300)
    console.log(demo);
}

