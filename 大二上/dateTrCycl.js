window.onload=function(){
    var get_date=document.getElementById('get_date');
    var d=new Date();
    var year= d.getFullYear();
    var month= d.getMonth();
    var date= d.getDate();
    var day= d.getDay();
    switch (day){
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
        default:day='δ��ѯ����������';
    }
    var hours= d.getHours();
    var minutes= d.getMinutes();
    var seconds= d.getSeconds();
    var time= d.getTime();
    get_date.innerHTML=year+'��'+month+'��'+date+'��'+day+hours+'ʱ'+minutes+'��'+seconds+'��'+time+'(1997.1.1����������)';
    d.setFullYear(2015);
    var sYear= d.getFullYear();
    d.setMonth(6);
    var sMoth= d.getMonth()+1;
    d.setDate(2);
    var sDay= d.getDay();
    switch (sDay){
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
        default :sDay='δ��ѯ����������';
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
    set_date.innerHTML=sYear+'��'+sMonth+'��'+sDate+'��'+sHours+'ʱ'+sMinutes+'��'+sSeconds+'��'+sTime+'(1997��1��1�������ĺ�����)';
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

