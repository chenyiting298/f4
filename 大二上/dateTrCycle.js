window.onload=function(){
    var get_date=document.getElementById('get_date');
    var d=new Date();
    var year= d.getFullYear();
    var month= d.getMonth()+1;
    var date= d.getDate();
    var day= d.getDay();
    switch(day){
        case 0:
            day='������';
            break;
        case 1:
            day='����һ';
            break;
        case 2:
            day='���ڶ�';
            break;
        case 3:
            day='������';
            break;
        case 4:
            day='������';
            break;
        case 5:
            day='������';
            break;
        case 6:
            day='������';
            break;
    }
    var hours= d.getHours();
    var minutes= d.getMinutes();
    var seconds= d.getSeconds();
    var time= d.getTime();
    get_date.innerHTML=year+'��'+month+'��'+date+'��'+day+hours+'ʱ'+minutes+'��'+seconds+'��'+time+'1997.1.1����������';
    var set_date=document.getElementById('set_date');
    d.setFullYear(2015);
    var sYear= d.getFullYear();
    d.setMonth(4);
    var sMonth= d.getMonth()+1;
    d.setDate(8);
    var sDate= d.getDate();
    var sDay=d.getDay();
    switch(sDay){
        case 0:
            sDay='������';
            break;
        case 1:
            sDay='����һ';
            break;
        case 2:
            sDay='���ڶ�';
            break;
        case 3:
            sDay='������';
            break;
        case 4:
            sDay='������';
            break;
        case 5:
            sDay='������';
            break;
        case 6:
            sDay='������';
            break;
    }
    d.setHours(4);
    var sHours= d.getHours();
    d.setMinutes(5);
    var sMinutes= d.getMinutes();
    d.setSeconds(20);
    var sSeconds=d.getSeconds();
    d.setTime(1000);
    var sTime= d.getTime();
    set_date.innerHTML=sYear+'��'+sMonth+'��'+sDate+'��'+sDay+sHours+'ʱ'+sMinutes+'��'+sSeconds+'��'+sTime+'(1997.1.1����������)';
    var tran=document.getElementById('tran');
    var a=45,b=true,c=34.55,d='12.34',e='12.35fgg25',f=null;
    tran.innerHTML=a+c;
    tran.innerHTML=Boolean(b);
    tran.innerHTML=d+a;
    tran.innerHTML=Boolean(c);
    tran.innerHTML=Number(e);
    tran.innerHTML=String(a);
    tran.innerHTML= a.toString();
    tran.innerHTML= parseInt(e);
    tran.innerHTML=parseFloat(e);
    var demo=0;
    var i=1;
    for(i;i<=100;i++){
        demo=demo+i;
    }
    while(i<=200){
        demo=demo+i;
        i++;
    }
    do{
        demo=demo+i;
        i++;
    }while(i<=300);
    alert(demo);
}