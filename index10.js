let q;
let con=-1;
let cone=-1;
let jag=0;
let jagan=0;
let fu=0;
function display()
{
    a.style.display='block';
    b.style.display='block';
    c.style.display='block';
    d.style.display='block';
    e.style.display='block';
    f.style.display='block';
    g.style.display='block';
    h.style.display='block';
    i.style.display='block';
}
function cal2()
{
    return q;
}
function cal1()
{
    let joe=document.getElementById('dat');
    let yoe=parseFloat(joe.value);
    fu++;
    // console.log(k);
    let y=cal2();
    // console.log(y);
    // document.querySelector('.
    if(y>k)
    {
        document.querySelector('.result').innerHTML='player 1 won';
        document.querySelector('.answers').innerText=`Number of Times Remaining ${yoe-fu}`;
        jag++;
    }
    else if(y<k){
        document.querySelector('.result').innerHTML='player 2 won';
        document.querySelector('.answers').innerText=`Number of Times Remaining ${yoe-fu}`;

        jagan++;
    }
    else{
        document.querySelector('.result').innerHTML='Draw';
        document.querySelector('.answers').innerText=`Number of Times Remaining ${yoe-fu}`;
    }
    if(fu===yoe){
        if(jag>jagan)
        {
            document.querySelector('.comp').innerHTML=`Game won by Player 1 by having ${jag} points`;
            document.querySelector('.compu').innerHTML=`Game lost for Player 2 by having ${jagan} points`;
        }
        else if(jag<jagan)
        {
            document.querySelector('.comp').innerHTML=`Game won by Player 2 by having ${jagan} points`;
            document.querySelector('.compu').innerHTML=`Game lost for Player 1 by having ${jag} points`;
        }
        else{
            document.querySelector('.comp').innerHTML='Draw';
        }
        
    }
}



let a=document.getElementById('b1');
let b=document.getElementById('b2');
let c=document.getElementById('b3');
let d=document.getElementById('b4');
let e=document.getElementById('b5');
let f=document.getElementById('b6');
let g=document.getElementById('b7');
let h=document.getElementById('b8');
let i=document.getElementById('b9');

function play1(){
    let bf=document.getElementById('datt');
    let gf=parseFloat(bf.value);
    let j=document.getElementById('dat');
    let y=parseFloat(j.value);
    // console.log(y);
    // console.log(con);
    if(con==-1 || con==y){
    con=y;
    }
    // console.log(con);
    function disableb(){
        con--;
        if(con==0)
        {
            document.querySelector('.button').disabled = true;             
       }

    }
console.log("jagan");

    q=Math.floor(Math.random() * 6 )+1;
    // q=6;
    cal2(q);
    document.querySelector('.k').innerHTML=q;
     display();
    if(q==1)
    {
        a.style.display='none';
        b.style.display='none';
        c.style.display='none';   
        d.style.display='none';
        f.style.display='none';
        g.style.display='none';
        h.style.display='none';
        i.style.display='none';
    }
    if(q==2)
    {
        a.style.display='none';
        b.style.display='none';
        //
        d.style.display='none';
        e.style.display='none';
        f.style.display='none';
    
        h.style.display='none';
        i.style.display='none';

    }
    if(q==3)
    {
        a.style.display='none';
        b.style.display='none';
          
        d.style.display='none';
    
        f.style.display='none';
    
        h.style.display='none';
        i.style.display='none';
    }
    if(q==4)
    {
    
        b.style.display='none';
        //
        d.style.display='none';
        e.style.display='none';
        f.style.display='none';
    
        h.style.display='none';
    
    }
    if(q==5)
    {
        
         b.style.display='none';
           
         d.style.display='none';
        
         f.style.display='none';
        
         h.style.display='none';
        
        
    }
    if(q==6)
    {
    
        b.style.display='none';
        
    
        e.style.display='none';
    
    
        h.style.display='none';
    
    } 
    if(con>0){
        disableb();
        }
    if(gf===1){
        play2();
        }

}
// console.log(con);

let boxe=document.querySelectorAll('.boxw');
let bute=document.querySelector('.buttonw');

let k;
let r=0;
function displayy()
{
    z.style.display='block';
    x.style.display='block';
    v.style.display='block';
    n.style.display='block';
    m.style.display='block';
    l.style.display='block';
    s.style.display='block';
    p.style.display='block';
    o.style.display='block';
}
let z=document.getElementById('a1');
let x=document.getElementById('a2');
let v=document.getElementById('a3');
let n=document.getElementById('a4');
let m=document.getElementById('a5');
let l=document.getElementById('a6');
let s=document.getElementById('a7');
let p=document.getElementById('a8');
let o=document.getElementById('a9');



function play2(){

    let jo=document.getElementById('dat');
    let ye=parseFloat(jo.value);
    // console.log(y);
    // console.log(con);
    if(cone==-1 || cone==ye){
    cone=ye;
    }
    // console.log(con);
    function disablebe(){
        cone--;
        if(cone==0)
        {
            // console.log(jag);
            document.querySelector('.buttonw').disabled = true;             
       }

    }
    k=Math.floor(Math.random() * 6 )+1;

    // q=6;
    r=k;
    cal1(k);
    document.querySelector('.kw').innerHTML=k;
     displayy();
    if(k==1)
    {
        z.style.display='none';
        x.style.display='none';
        v.style.display='none';   
        n.style.display='none';
        l.style.display='none';
        s.style.display='none';
        p.style.display='none';
        o.style.display='none';
    }
    if(k==2)
    {
        z.style.display='none';
        x.style.display='none';
        //
        n.style.display='none';
        m.style.display='none';
        l.style.display='none';
    
        p.style.display='none';
        o.style.display='none';

    }
    if(k==3)
    {
        z.style.display='none';
        x.style.display='none';
        
        n.style.display='none';
    
        l.style.display='none';
    
        p.style.display='none';
        o.style.display='none';
    }
    if(k==4)
    {
    
        x.style.display='none';
        
        n.style.display='none';
        m.style.display='none';
        l.style.display='none';
    
        p.style.display='none';
    
    }
    if(k==5)
    {
        
         x.style.display='none';
         // c.style.display='none';   
         n.style.display='none';
        
         l.style.display='none';
        
         p.style.display='none';
    }
    if(k==6)
    {
    
        x.style.display='none';
       
    
        m.style.display='none';
    
    
        p.style.display='none';
    }
    if(cone>0)
    {
        disablebe();
    }
}



