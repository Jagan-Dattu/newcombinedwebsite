setInterval(()=>{
    let f = new Date();
    const formattedDate = f.toLocaleDateString();
    document.querySelector('.today').innerHTML=formattedDate;
    let g = f.getHours();
    let w=f.getMinutes();
    let q=f.getSeconds();
    console.log(g);
    if(g>12)
    {
        g=g-12;
        document.querySelector('.time').innerHTML=`${g}:${w}:${q}PM`
    }
    else{
        document.querySelector('.time').innerHTML=`${g}:${w}:${q}AM`
    }
}, 1000);
let x=[];
function year(year)
{
    x.push(year);
    f();
}
function month(month)
{
    x.push(month);
}
function days(date)
{
    x.push(date);
}
function f(){
    let a=new Date();
    let b=a.getDate();
    let c=a.getMonth();
    let d=a.getFullYear();
    if(x[0]>b && x[1]>=c)
    {
        document.querySelector('.answe').innerHTML=(`The age of person is:`);
        document.querySelector('.answerr').innerHTML=(`${d-1-x[2]} years`);
        if(x[1]==4 || x[1]==6 || x[1]==8 || x[1]==9 || x[1]==11){
        document.querySelector('.answer').innerHTML=(` ${(30-x[0])+b} days`);
        }
        else if(x[1]==2)
        {
            document.querySelector('.answer').innerHTML=(` ${(28-x[0])+b} days`);
        }
        else{
            document.querySelector('.answer').innerHTML=(` ${(31-x[0])+b} days`);
        }
        document.querySelector('.answers').innerHTML=(` ${(12-x[1])+((c-1))} months`);
    }
    if(x[0]>b && x[1]<c)
    {
        document.querySelector('.answe').innerHTML=(`The age of person is:`);
        document.querySelector('.answerr').innerHTML=(` ${d-x[2]} years`);
        if(x[1]==4 || x[1]==6 || x[1]==8 || x[1]==9 || x[1]==11){
            document.querySelector('.answer').innerHTML=(` ${(30-x[0])+b} days`);
            }
            else if(x[1]==2)
            {
                document.querySelector('.answer').innerHTML=(` ${(28-x[0])+b} days`);
            }
            else{
                document.querySelector('.answer').innerHTML=(` ${(31-x[0])+b} days`);
            }
        document.querySelector('.answers').innerHTML=(` ${(c-1)-((x[1]))} months`);
    }
    if(x[0]<b && x[1]>c)
    {
        document.querySelector('.answe').innerHTML=(`The age of person is:`);
        document.querySelector('.answerr').innerHTML=(` ${d-1-x[2]} years`);
        document.querySelector('.answer').innerHTML=(` ${b-x[0]} days`);
        document.querySelector('.answers').innerHTML=(` ${(12-x[1])+((c-1))} months`);
    }
    if(x[0]<b && x[1]<=c)
    {
        document.querySelector('.answe').innerHTML=(`The age of person is:`);
        document.querySelector('.answerr').innerHTML=(` ${d-x[2]} years`);
        document.querySelector('.answer').innerHTML=(` ${b-x[0]} days`);
        document.querySelector('.answers').innerHTML=(` ${(c)-((x[1]))} months`);
    }
}
