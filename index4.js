

let con=-1;
function enter(){
    let g=document.getElementById('dat');
    let y=parseFloat(g.value);
    console.log(y);
    if(con==-1 || con==y){
    con=y;
    }
    console.log(con);
    function disableb(){
        con--;
        if(con==0)
        {
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
    }
    if(r==1 && q==1)
    {
        document.getElementById('answer').innerText=`draw`;
    }
    if(r==1 && q==3)
    {
        document.getElementById('answer').innerText=`player 1 won`;

    }
    if(r==2 && q==1)
    {
        document.getElementById('answer').innerText=`player 1won`;
    }
    if(r==2 && q==2)
    {
        document.getElementById('answer').innerText=`draw`;
    }
    if(r==2 && q==3)
    {
        document.getElementById('answer').innerText=`computer won`;
    }
    if(r==3 && q==1)
    {
        document.getElementById('answer').innerText=`player 1 won`;
    }
    if(r==3 && q==2)
    {
        document.getElementById('answer').innerText=`computer won`;
    }
    if(r==3 && q==3)
    {
        document.getElementById('answer').innerText=`draw`;
    }
    if(con>0){
    disableb();
    }
}


