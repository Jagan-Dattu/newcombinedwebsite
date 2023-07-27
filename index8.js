let t='X';
let aud=new Audio("hoorays-73283-[AudioTrimmer.com].mp3");
function change()
{
    if(t==='X')
    {
        return 'O';
    }
    else{
        return 'X';
    }
}
let y=false;
let r=false;
let boxes = document.querySelectorAll('.box');
let arr=[];
function winorloss()
{
    // console.log(arr);
    if(arr[0]=='X' && arr[4]=='X' && arr[8]=='X')
    {
        return true;
    }
    if(arr[0]=='X' && arr[1]=='X' && arr[2]=='X')
    {
        return true;
    }
    if(arr[0]=='X' && arr[3]=='X' && arr[6]=='X')
    {
        return true;
    }
    if(arr[1]=='X' && arr[4]=='X' && arr[7]=='X')
    {
        return true;
    }
    if(arr[2]=='X' && arr[5]=='X' && arr[8]=='X')
    {
        return true;
    }
    if(arr[3]=='X' && arr[4]=='X' && arr[5]=='X')
    {
        return true;
    }
    if(arr[6]=='X' && arr[7]=='X' && arr[8]=='X')
    {
        return true;
    }  
    if(arr[2]=='X' && arr[4]=='X' && arr[6]=='X')
    {
        return true;
    }
}
function wiorlo()
{
    // console.log(arr);
    if(arr[0]=='O' && arr[4]=='O' && arr[8]=='O')
    {
        return true;
    }
    if(arr[0]=='O' && arr[1]=='O' && arr[2]=='O')
    {
        return true;
    }
    if(arr[0]=='O' && arr[3]=='O' && arr[6]=='O')
    {
        return true;
    }
    if(arr[1]=='O' && arr[4]=='O' && arr[7]=='O')
    {
        return true;
    }
    if(arr[2]=='O' && arr[5]=='O' && arr[8]=='O')
    {
        return true;
    }
    if(arr[3]=='O' && arr[4]=='O' && arr[5]=='O')
    {
        return true;
    }
    if(arr[6]=='O' && arr[7]=='O' && arr[8]=='O')
    {
        return true;
    }  
    if(arr[2]=='O' && arr[4]=='O' && arr[6]=='O')
    {
        return true;
    }
}
let p=1;
let b=1;
let cond=false;
document.getElementById('dattu').innerText=`player ${p} Enter`;

boxes.forEach((box,index) => {
    box.addEventListener('click', () => {
        if (box.innerHTML==='') {
            document.getElementById('dattu').innerText=`player ${p+1} Enter`;
            box.innerHTML = t;
            p--;
            arr[index]=t;
            t=change();
            y=winorloss();
            r=wiorlo();
            if(cond==true)
            {
                document.removeEventListener('click',()=>{});
                return;
               
            }
            if(y==true )
            {
                document.getElementById('jagan').innerText='player 1 win';
                aud.play();

                cond=true;
                return;

            }
            if(r==true )
            {
                document.getElementById('jagan').innerText='player 2 win';
                aud.play();
                return;
            }
            if(p===-1)
            {
                p=1;
            }
            b++;
            console.log(b);
            if(b==10 && y!=true && r!=true)
            {
                console.log("jagan");
                    document.getElementById('jagan').innerText='Match Draw';
                
            }

        } 
    });
})
