let boxes=document.querySelectorAll('.box');
let gop=document.querySelectorAll('.boxess')
let gopa=document.querySelectorAll('.boxesss')
let arr=[];
let q=0;
function func()
{
    let k=0;
    // console.log(arr)
    for(let i=0;i<arr.length;i++)
    {
        if(arr.length!=1 && (q==arr[i] && i!=arr.length-1))
        {
            k++;
            const index = arr.indexOf(q);
            if (index !== -1) {
             arr.splice(index, 1);
            }
            break;
        }      
    }
    if(k==1){
        q=Math.floor(Math.random()*25)+1;
        arr.push(q);
        // console.log(q);
        func(q);
    }
    else{  
        return q;
    }
}
for(let i=0;i<25;i++)
{
    q=Math.floor(Math.random()*25)+1;
    arr.push(q);
    q=func(q);
}

for(let j=0;j<25;j++)
{
    boxes[j].innerHTML=arr[j];
}


let boxe=document.querySelectorAll('.boxe');

let arrr=[];
let qr=0;
function funcc()
{
    let kr=0;
    // console.log(arrr)
    for(let i=0;i<arrr.length;i++)
    {
        if(arrr.length!=1 && (qr==arrr[i] && i!=arrr.length-1))
        {
            kr++;
            const indexe = arrr.indexOf(qr);
            if (indexe !== -1) {
             arrr.splice(indexe, 1);
            }
            break;
        }      
    }
    if(kr==1){
        qr=Math.floor(Math.random()*25)+1;
        arrr.push(qr);
        // console.log(qr);
        funcc(qr);
    }
    else{  
        return qr;
    }
}
for(let i=0;i<25;i++)
{
    qr=Math.floor(Math.random()*25)+1;
    arrr.push(qr);
    qr=funcc(qr);
}

for(let j=0;j<25;j++)
{
    boxe[j].innerHTML=arrr[j];
}
console.log(arrr);
let p=25;
let a=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let b=[0];
let v=0;
let f=0;
let jo=0;
let joe=0;
let jog=0;
let joq=0;
let jw=0;
let je=0;
let jd=0;
let jf=0;
let jg=0;
let jh=0;
let jj=0;
let jk=0;
let aq=0;
let aw=0;
let ae=0;
let ar=0;
let at=0;
let ay=0;
let au=0;
let ai=0;
let ao=0;
let ap=0;
let aa=0;
let as=0;


function win()
{
    if((a[0]==1 && a[1]==1 && a[2]==1 && a[3]==1 && a[4]==1) && jo==0)
    {
        console.log("win"); 
        f++;
        jo++;
        // console.log(jo);
        document.querySelector('.playe').innerHTML=`player point is ${f}`;
        gop[f-1].style.background='rgb(103, 244, 96)';

    }
    if((a[0]==1 && a[5]==1 &&a[10]==1 && a[15]==1 && a[20]==1)
  && joq==0)   {
        console.log("win");
        f++;
        joq++;
        console.log(a[0]);
         document.querySelector('.playe').innerHTML=`player point is ${f}`;
         gop[f-1].style.background='rgb(103, 244, 96)';
    }
    if((a[0]==1 && a[6]==1 &&a[12]==1 && a[18]==1 && a[24]==1) && jj==0)   {
        console.log("win");
        f++;
        jj++;
        console.log(a[0]);
         document.querySelector('.playe').innerHTML=`player point is ${f}`;
         gop[f-1].style.background='rgb(103, 244, 96)';
    }
    if((a[1]==1 && a[6]==1 &&a[11]==1 && a[16]==1 && a[21]==1)
  && joe==0)   {
        console.log("win");
        f++;
        joe++;
        console.log(a[1]);
         document.querySelector('.playe').innerHTML=`player point is ${f}`;
         gop[f-1].style.background='rgb(103, 244, 96)';
    }
    if((a[2]==1 && a[7]==1 &&a[12]==1 && a[17]==1 && a[22]==1)
  && jg==0)   {
        console.log("win");
        f++;
        jg++;
        console.log(a[2]);
         document.querySelector('.playe').innerHTML=`player point is ${f}`;
         gop[f-1].style.background='rgb(103, 244, 96)';
    }
    if((a[3]==1 && a[8]==1 &&a[13]==1 && a[18]==1 && a[23]==1)
  && joq==0)   {
        console.log("win");
        f++;
        joq++;
        console.log(a[3]);
         document.querySelector('.playe').innerHTML=`player point is ${f}`;
         gop[f-1].style.background='rgb(103, 244, 96)';
    }
    if((a[4]==1 && a[9]==1 &&a[14]==1 && a[19]==1 && a[24]==1)
  && jog==0)   {
        console.log("win");
        f++;
         jog++;
         console.log(a[4]);
         document.querySelector('.playe').innerHTML=`player point is ${f}`;
         gop[f-1].style.background='rgb(103, 244, 96)';
    }
    if((a[4]==1 && a[8]==1 &&a[12]==1 && a[16]==1 && a[20]==1)
  && jk==0)   {
        console.log("win");
        f++;
         
         jk++;
         console.log(a[4]);
         document.querySelector('.playe').innerHTML=`player point is ${f}`;
         gop[f-1].style.background='rgb(103, 244, 96)';
    }
    if((a[5]==1 && a[6]==1 &&a[7]==1 && a[8]==1 && a[9]==1
)     && jw==0){
        console.log("win");
        f++;
         jw++;
         console.log(a[5]);
         document.querySelector('.playe').innerHTML=`player point is ${f}`;
         gop[f-1].style.background='rgb(103, 244, 96)';
    }
    if((a[10]==1 && a[11]==a[12]==1 && a[13]==1 && a[14]==1) && jd==0)
    {
        console.log("win");
        f++;
        jd++;
        console.log(a[10]);
         document.querySelector('.playe').innerHTML=`player point is ${f}`;
         gop[f-1].style.background='rgb(103, 244, 96)';
    }
    if((a[15]==1 && a[16]==1 &&a[17]==1 && a[18]==1 && a[19]==1) && je==0)
    {
        console.log("win");
        f++;
        je++;
        console.log(a[15]);
         document.querySelector('.playe').innerHTML=`player point is ${f}`;
         gop[f-1].style.background='rgb(103, 244, 96)';
    }
    if((a[20]==1 && a[21]==1 &&a[22]==1 && a[23]==1 && a[24]==1) && jh==0)
    {
        console.log("win");
        f++;
        jh++;
        console.log(a[20]);
         document.querySelector('.playe').innerHTML=`player point is ${f}`;
         gop[f-1].style.background='rgb(103, 244, 96)';
    }

    if((b[0]==1 &&b[1]==1 && b[2]==1 && b[3]==1 && b[4]==1
  )   && aq==0){
        v++;
        aq++;
        document.querySelector('.compe').innerHTML=`computer point is ${v}`;
        gopa[v-1].style.background=' rgba(66, 41, 253, 0.69)';
    }
    if((b[0]==1 &&b[5]==1 && b[10]==1 && b[15]==1 && b[20]==1)
  && aw==0)   {
        v++;
        aw++;
        document.querySelector('.compe').innerHTML=`computer point is ${v}`;
        gopa[v-1].style.background=' rgba(66, 41, 253, 0.69)';
    }
    if((b[0]==1 &&b[6]==1 && b[12]==1 && b[18]==1 && b[24]==1)
  && ae==0)   {
        v++;
        ae++;
        document.querySelector('.compe').innerHTML=`computer point is ${v}`;
        gopa[v-1].style.background=' rgba(66, 41, 253, 0.69)';
    }
    if((b[1]==1 && b[6]==1 && b[11]==1 && b[16]==1 && b[21]==1)
  && ar==0)   {
        v++;
        ar++;
        document.querySelector('.compe').innerHTML=`computer point is ${v}`;
        gopa[v-1].style.background=' rgba(66, 41, 253, 0.69)';
    }
    if((b[2]==1 &&b[7]==1 && b[12]==1 && b[17]==1 && b[22]==1)
  && at==0)   {
        v++;
        at++;
        document.querySelector('.compe').innerHTML=`computer point is ${v}`;
        gopa[v-1].style.background=' rgba(66, 41, 253, 0.69)';
    }
    if((b[3]==1 &&b[8]==1 && b[13]==1 && b[18]==1 && b[23]==1)
  && ay==0)   {
        v++;
        ay++;
        document.querySelector('.compe').innerHTML=`computer point is ${v}`;
        gopa[v-1].style.background=' rgba(66, 41, 253, 0.69)';
    }
    if((b[4]==1 &&b[9]==1 && b[14]==1 && b[19]==1 && b[24]==1)
  && au==0)   {
        v++;
        au++;
        document.querySelector('.compe').innerHTML=`computer point is ${v}`;
        gopa[v-1].style.background=' rgba(66, 41, 253, 0.69)';
    }
    if((b[4]==1 &&b[8]==1 && b[12]==1 && b[16]==1 && b[20]==1)
  && ai==0)   {
        v++;
        ai++;
        document.querySelector('.compe').innerHTML=`computer point is ${v}`;
        gopa[v-1].style.background=' rgba(66, 41, 253, 0.69)';
    }
    if((b[5]==1 && b[6]==1 && b[7]==1 && b[8]==1 && b[9]==1
  )   && ao==0){
        v++;
        ao++;
        document.querySelector('.compe').innerHTML=`computer point is ${v}`;
        gopa[v-1].style.background=' rgba(66, 41, 253, 0.69)';
    }
    if((b[10]==1 && b[11]==1 && b[12]==1 && b[13]==1 && b[14]==1) && ap==0)
    {
        v++;
        ap++;
        document.querySelector('.compe').innerHTML=`computer point is ${v}`;
        gopa[v-1].style.background=' rgba(66, 41, 253, 0.69)';
    }
    if((b[15]==1 && b[16]==1 && b[17]==1 && b[18]==1 && b[19]==1) && aa==0)
    {
        v++;
        aa++;
        document.querySelector('.compe').innerHTML=`computer point is ${v}`;
        gopa[v-1].style.background=' rgba(66, 41, 253, 0.69)';
    }
    if((b[20]==1 && b[21]==1 && b[22]==1 && b[23]==1 && b[24]==1) && as==0)
    {
        v++;
        as++;
        document.querySelector('.compe').innerHTML=`computer point is ${v}`;
        gopa[v-1].style.background=' rgba(66, 41, 253, 0.69)';
    }

    if(f>=5 && f>=v)
    {
        console.log("jagan")
        document.querySelector('.play').innerHTML=`player won the match`;
    }
    else if(v>=5 && v>=f)
    {
        console.log("datt")
        document.querySelector('.comp').innerHTML=`computer won the match`;
    }

}
boxes.forEach((box,indexee)=>{
    box.addEventListener('click',()=>{
        let e=box.innerHTML;
        document.querySelector('.play').innerHTML=`player choice is ${e}`;
        box.style.background='pink';
        for(let i=0;i<25;i++)
        {
            if(arrr[i]==e)
            {
                console.log(arrr[i])
                const index = arrr.indexOf(arrr[i]);
                if (index !== -1) {
                     arrr.splice(index, 1);
                    }
            }
        }
        for(let i=0;i<25;i++)
        {
            if(boxe[i].innerHTML==e)
            {
                boxe[i].style.background='pink';
                b[i]=1;

            }
        }
        a[indexee]=(1);
        console.log(a);
        win();
        p--;
        let y=Math.floor(Math.random()*(p));
        // console.log(y)
        let g=arrr[y];
        document.querySelector('.comp').innerHTML=`computer  choice is ${g}`;
        // console.log(g);
        const index = arrr.indexOf(g);
        if (index!== -1) {
             arrr.splice(index, 1);
            }
            for(let i=0;i<25;i++)
            {
                if(boxe[i].innerHTML==g)
                {
                    boxe[i].style.background='violet';
                    b[i]=1;
                }
            }
        for(let i=0;i<25;i++)   
        {
            if(boxes[i].innerHTML==g)
            {
                boxes[i].style.background='violet';
                a[i]=(1);

            }
        }
         win();
        p--;
        console.log(b);
    })
})


