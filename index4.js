

let con=-1;
let m=0;
let n=0;
let b=0;

function enter(){
    
    let g=document.getElementById('dat');
    let y=parseFloat(g.value);
    console.log(y);
    if(con==-1 || con==y){
    con=y;
    }
    let h=con;
    console.log(con);
    function disableb(){
        con--;
        if(con==0)
        {

            if(n>m)
            {
                console.log("jagan");
                document.getElementById('da').innerHTML=`player 1 won`;
                
            }        
            if(n<m)
            {  
                document.getElementById('da').innerHTML=`computer won`;
                
            } 
            if(n==m)
            { 
                document.getElementById('da').innerHTML=`it's a draw`;
               
            }       
            document.querySelector('button').disabled = true;        
       }
    }
    let s=document.getElementById('input');
    let d=s.value;
    let r=parseFloat(d);
    let q=Math.floor(Math.random() * 3 )+1;
    let w=document.getElementById('input2');
    w.value=q;
    if(r==1 && q==2)
    {
        document.getElementById('answer').innerText=`computer won`;
        document.getElementById('answers').innerText=`Number of Times Remaining ${h-1}`;
        h--;
        m++;
    }
    if(r==1 && q==1)
    {
        document.getElementById('answer').innerText=`draw`;
        document.getElementById('answers').innerText=`Number of Times Remaining ${h-1}`;
        h--;
    
    }
    if(r==1 && q==3)
    {
        document.getElementById('answer').innerText=`player 1 won`;
        document.getElementById('answers').innerText=`Number of Times Remaining ${h-1}`;
        h--;
        
        n++;

    }
    if(r==2 && q==1)
    {
        document.getElementById('answer').innerText=`player 1won`;
        document.getElementById('answers').innerText=`Number of Times Remaining ${h-1}`;
        h--;
        
        n++;
    }
    if(r==2 && q==2)
    {
        document.getElementById('answer').innerText=`draw`;
        document.getElementById('answers').innerText=`Number of Times Remaining ${h-1}`;
        h--;
    }
    if(r==2 && q==3)
    {
        document.getElementById('answer').innerText=`computer won`;
        document.getElementById('answers').innerText=`Number of Times Remaining ${h-1}`;
        h--;
        m++;
    }
    if(r==3 && q==1)
    {
        document.getElementById('answer').innerText=`player 1 won`;
        document.getElementById('answers').innerText=`Number of Times Remaining ${h-1}`;
        h--;
        n++;
    }
    if(r==3 && q==2)
    {
        document.getElementById('answer').innerText=`computer won`;
        document.getElementById('answers').innerText=`Number of Times Remaining ${h-1}`;
        h--;
        m++;
    }
    if(r==3 && q==3)
    {
        document.getElementById('answer').innerText=`draw`;
        document.getElementById('answers').innerText=`Number of Times Remaining ${h-1}`;
        h--;
    }
    if(con>0){
    disableb();
    }

}


