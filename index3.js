setInterval(()=>{
    date=new Date();
    hour=date.getHours();
    min=date.getMinutes();
    sec=date.getSeconds();
    hr=hour*30+min/2;
    mr=6*min;
    sr=6*sec;

    hours.style.transform=`rotate(${hr}deg)`;
    minutes.style.transform=`rotate(${mr}deg)`;
    seconds.style.transform=`rotate(${sr}deg)`;


},1000)