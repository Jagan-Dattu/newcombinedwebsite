let r=0;
let w=0;
let c=-1;
let s=-1;
function display()
{
    const boxes=document.querySelectorAll('.box');
    c++;
    if(c>=1)
    {
        //console.log(w);
        boxes[100-w].innerText=w;
        boxes[100-w].style.color='';
        boxes[100-w].style.backgroundColor='';
        document.getElementById('ok').innerText=' ';

    }
    let y=Math.floor(Math.random() * 6 )+1;
    document.getElementById('ol').innerText=`previous position is ${w} `;
    let r=w+y;
    if(r>100)
    {
        r=r-y;
        console.log(q);
    }
    w=r;
    document.getElementById('loll').innerText=`current position is ${w}`;
    document.getElementById('input').value=y;

// boxes[100-w].innerText=w;
boxes[100-w].innerText='player 1';
boxes[100-w].style.color='red';
boxes[100-w].style.backgroundColor='blue';
{
    if((w)===2)
    {
        boxes[100-w].innerText=w;
        boxes[100-w].style.color='';
        boxes[100-w].style.backgroundColor='';
        
        document.getElementById('ok').innerText=`from ${w} go to 25`;
        boxes[75].innerText='player 1';
        boxes[75].style.color='red';
        boxes[75].style.backgroundColor='blue';
        w=25;

    }
    if((w)===4)
    {
        boxes[100-w].innerText=w;
        boxes[100-w].style.color='';
        boxes[100-w].style.backgroundColor='';
        document.getElementById('ok').innerText=`from ${w} go to 22`;
        boxes[78].innerText='player 1';
        boxes[78].style.color='red';
        boxes[78].style.backgroundColor='blue';
        w=22;
    }

    if((w)===9)
    {
        boxes[100-w].innerText=w;
        boxes[100-w].style.color='';
        boxes[100-w].style.backgroundColor='';
        document.getElementById('ok').innerText=`from ${w} go to 31`;
        boxes[100-31].innerText='player 1';
        boxes[69].style.color='red';
        boxes[69].style.backgroundColor='blue';
        w=31;
    }
    if((w)===21)
    {
        boxes[100-w].innerText=w;
        boxes[100-w].style.color='';
        boxes[100-w].style.backgroundColor='';
        document.getElementById('ok').innerText=`from ${w} go to 42`;
        boxes[100-42].innerText='player 1';
        boxes[58].style.color='red';
        boxes[58].style.backgroundColor='blue';
        w=42;
    }
    if((w)===28)
    {
        boxes[100-w].innerText=w;
        boxes[100-w].style.color='';
        boxes[100-w].style.backgroundColor='';
        document.getElementById('ok').innerText=`from ${w} go to 84`;
        boxes[100-84].innerText='player 1';
        boxes[16].style.color='red';
        boxes[16].style.backgroundColor='blue';
        w=84;
    }
    if((w)===48)
    {
        boxes[100-w].innerText=w;
        boxes[100-w].style.color='';
        boxes[100-w].style.backgroundColor='';
        document.getElementById('ok').innerText=`from ${w} go to 96`;
        boxes[100-96].innerText='player 1';
        boxes[4].style.color='red';
        boxes[4].style.backgroundColor='blue';
        w=96;
    }
    if((w)===51)
    {
        boxes[100-w].innerText=w;
        boxes[100-w].style.color='';
        boxes[100-w].style.backgroundColor='';
        document.getElementById('ok').innerText=`from ${w} go to 67`;
        boxes[100-67].innerText='player 1';
        boxes[33].style.color='red';
        boxes[33].style.backgroundColor='blue';
        w=67;
    }
    if((w)===66)
    {
        boxes[100-w].innerText=w;
        boxes[100-w].style.color='';
        boxes[100-w].style.backgroundColor='';
        document.getElementById('ok').innerText=`from ${w} go to 86`;
        boxes[100-86].innerText='player 1';
        boxes[14].style.color='red';
        boxes[14].style.backgroundColor='blue';
        w=86;
    }
    if((w)===71)
    {
        boxes[100-w].innerText=w;
        boxes[100-w].style.color='';
        boxes[100-w].style.backgroundColor='';
        document.getElementById('ok').innerText=`from ${w} go to 91`;
        boxes[9].innerText='player 1';
        boxes[9].style.color='red';
        boxes[9].style.backgroundColor='blue';
        w=91;
    }
    if((w)===80)
    {
        boxes[100-w].innerText=w;
        boxes[100-w].style.color='';
        boxes[100-w].style.backgroundColor='';
        document.getElementById('ok').innerText=`from ${w} go to 100`;
        boxes[100-100].innerText='player 1';
        boxes[0].style.color='red';
        boxes[0].style.backgroundColor='blue';
        w=100;
    }
    if((w)===13)
    {
        boxes[100-w].innerText=w;
        boxes[100-w].style.color='';
        boxes[100-w].style.backgroundColor='';
        document.getElementById('ok').innerText=`from ${w} go to 3`;
        boxes[100-3].innerText='player 1';
        boxes[97].style.color='red';
        boxes[97].style.backgroundColor='blue';
        w=3;
    }
    if((w)===17)
    {
        boxes[100-w].innerText=w;
        boxes[100-w].style.color='';
        boxes[100-w].style.backgroundColor='';
        document.getElementById('ok').innerText=`from ${w} go to 7`;
        boxes[100-7].innerText='player 1';
        boxes[93].style.color='red';
        boxes[93].style.backgroundColor='blue';
        w=7;
    }

    if((w)===32)
    {
        boxes[100-w].innerText=w;
        boxes[100-w].style.color='';
        boxes[100-w].style.backgroundColor='';
        document.getElementById('ok').innerText=`from ${w} go to 19`;
        boxes[100-19].innerText='player 1';
        boxes[81].style.color='red';
        boxes[81].style.backgroundColor='blue';
        w=19;
    }
    if((w)===44)
    {
        boxes[100-w].innerText=w;
        boxes[100-w].style.color='';
        boxes[100-w].style.backgroundColor='';

        document.getElementById('ok').innerText=`from ${w} go to 39`;
        boxes[100-39].innerText='player 1';
        boxes[61].style.color='red';
        boxes[61].style.backgroundColor='blue';
        w=39;
    }
    if((w)===64)
    {
        boxes[100-w].innerText=w;
        boxes[100-w].style.color='';
        boxes[100-w].style.backgroundColor='';
        document.getElementById('ok').innerText=`from ${w} go to 60`;
        boxes[100-60].innerText='player 1';
        boxes[40].style.color='red';
        boxes[40].style.backgroundColor='blue';
        w=60;
    }
    if((w)===77)
    {
        boxes[100-w].innerText=w;
        boxes[100-w].style.color='';
        boxes[100-w].style.backgroundColor='';
        document.getElementById('ok').innerText=`from ${w} go to 55`;
        boxes[100-55].innerText='player 1';
        boxes[45].style.color='red';
        boxes[45].style.backgroundColor='blue';
        w=55;
    }
    if((w)===89)
    {
        boxes[100-w].innerText=w;
        boxes[100-w].style.color='';
        boxes[100-w].style.backgroundColor='';
        document.getElementById('ok').innerText=`from ${w} go to 24`;
        boxes[100-24].innerText='player 1';
        boxes[76].style.color='red';
        boxes[76].style.backgroundColor='blue';
        w=24;
    }
    if((w)===93)
    {
        boxes[100-w].innerText=w;
        boxes[100-w].style.color='';
        boxes[100-w].style.backgroundColor='';
        document.getElementById('ok').innerText=`from ${w} go to 53`;
        boxes[100-53].innerText='player 1';
        boxes[47].style.color='red';
        boxes[47].style.backgroundColor='blue';
        w=53;
    }
    if((w)===98)
    {
        boxes[100-w].innerText=w;
        boxes[100-w].style.color='';
        boxes[100-w].style.backgroundColor='';
        document.getElementById('ok').innerText=`from ${w} go to 1`;
        boxes[100-1].innerText='player 1';
        boxes[99].style.color='red';
        boxes[99].style.backgroundColor='blue';
        
        w=1;
    }
    if(w==100)
    {
        document.getElementById('ol').innerText="player 1 won";
        return;
    }
}
}
let q=0;
let p=0;
function display2()
{
    const boxes=document.querySelectorAll('.box');
    s++;
    if(s>=1)
    {
        // console.log(p);
        boxes[100-p].innerText=p;
        boxes[100-p].style.color='';
        boxes[100-p].style.backgroundColor='';
        document.getElementById('ko').innerText=' ';
    }

    document.getElementById('lo').innerText=`previous position is ${p} `;
    let g=Math.floor(Math.random() * 6 )+1;
    q=p+g;
    console.log(q);
    if(q>100)
    {
        q=q-g;
        console.log(q);
    }
    p=q;
    document.getElementById('lol').innerText=`current position is ${p}`;
    document.getElementById('input2').value=g;

boxes[100-p].innerText='player 2';
boxes[100-p].style.color='pink';
boxes[100-p].style.backgroundColor='black';
{
    if((p)===2)
    {
        boxes[100-p].innerText=p;
        boxes[100-p].style.color='';
        boxes[100-p].style.backgroundColor='';
        document.getElementById('ko').innerText=`from ${p} go to 25`;
        boxes[75].innerText='player 2';
        boxes[100-25].style.color='pink';
        boxes[100-25].style.backgroundColor='black';
        p=25;
    }
    if((p)===4)
    {
        boxes[100-p].innerText=p;
        boxes[100-p].style.color='';
        boxes[100-p].style.backgroundColor='';
        document.getElementById('ko').innerText=`from ${p} go to 22`;
        boxes[78].innerText='player 2';
        boxes[100-22].style.color='pink';
boxes[100-22].style.backgroundColor='black';
        p=22;
    }

    if((p)===9)
    {
        boxes[100-p].innerText=p;
        boxes[100-p].style.color='';
        boxes[100-p].style.backgroundColor='';
        document.getElementById('ko').innerText=`from ${p} go to 31`;
        boxes[100-31].innerText='player 2';
        boxes[100-31].style.color='pink';
boxes[100-31].style.backgroundColor='black';
        p=31;
    }
    if((p)===21)
    {
        boxes[100-p].innerText=p;
        boxes[100-p].style.color='';
        boxes[100-p].style.backgroundColor='';
        document.getElementById('ko').innerText=`from ${p} go to 42`;
        boxes[100-42].innerText='player 2';
        boxes[100-42].style.color='pink';
boxes[100-42].style.backgroundColor='black';
        p=42;
    }
    if((p)===28)
    {
        boxes[100-p].innerText=p;
        boxes[100-p].style.color='';
        boxes[100-p].style.backgroundColor='';
        document.getElementById('ko').innerText=`from ${p} go to 84`;
        boxes[100-84].innerText='player 2';
        boxes[100-84].style.color='pink';
boxes[100-84].style.backgroundColor='black';
        p=84;
    }
    if((p)===48)
    {
        boxes[100-p].innerText=p;
        boxes[100-p].style.color='';
        boxes[100-p].style.backgroundColor='';
        document.getElementById('ko').innerText=`from ${p} go to 96`;
        boxes[100-96].innerText='player 2';
        boxes[100-96].style.color='pink';
boxes[100-96].style.backgroundColor='black';
        w=96;
    }
    if((p)===51)
    {
        boxes[100-p].innerText=p;
        boxes[100-p].style.color='';
        boxes[100-p].style.backgroundColor='';
        document.getElementById('ko').innerText=`from ${p} go to 67`;
        boxes[100-51].innerText='player 2';
        boxes[100-51].style.color='pink';
boxes[100-51].style.backgroundColor='black';
        p=67;
    }
    if((p)===66)
    {
        boxes[100-p].innerText=p;
        boxes[100-p].style.color='';
        boxes[100-p].style.backgroundColor='';
        document.getElementById('ko').innerText=`from ${p} go to 86`;
        boxes[100-86].innerText='player 2';
        boxes[100-86].style.color='pink';
boxes[100-86].style.backgroundColor='black'
        w=86;
    }
    if((p)===71)
    {
        boxes[100-p].innerText=p;
        boxes[100-p].style.color='';
        boxes[100-p].style.backgroundColor='';
        document.getElementById('ko').innerText=`from ${p} go to 91`;
        boxes[9].innerText='player 2';
        boxes[100-91].style.color='pink';
boxes[100-91].style.backgroundColor='black';
        p=91;
    }
    if((p)===80)
    {
        boxes[100-p].innerText=p;
        boxes[100-p].style.color='';
        boxes[100-p].style.backgroundColor='';
        document.getElementById('ko').innerText=`from ${p} go to 100`;
        boxes[100-100].innerText='player 2';
        boxes[100-100].style.color='pink';
boxes[100-100].style.backgroundColor='black';
        p=100;
    }
    if((p)===13)
    {
        boxes[100-p].innerText=p;
        boxes[100-p].style.color='';
        boxes[100-p].style.backgroundColor='';
        document.getElementById('ko').innerText=`from ${p} go to 3`;
        boxes[100-3].innerText='player 2';
        boxes[100-3].style.color='pink';
boxes[100-3].style.backgroundColor='black';
        p=3;
    }
    if((p)===17)
    {
        boxes[100-p].innerText=p;
        boxes[100-p].style.color='';
        boxes[100-p].style.backgroundColor='';
        document.getElementById('ko').innerText=`from ${p} go to 7`;
        boxes[100-7].innerText='player 2';
        boxes[100-7].style.color='pink';
boxes[100-7].style.backgroundColor='black';
        p=7;
    }

    if((p)===32)
    {
        boxes[100-p].innerText=p;
        boxes[100-p].style.color='';
        boxes[100-p].style.backgroundColor='';
        document.getElementById('ko').innerText=`from ${p} go to 19`;
        boxes[100-19].innerText='player 2';
        boxes[100-19].style.color='pink';
boxes[100-19].style.backgroundColor='black';
        p=19;
    }
    if((p)===44)
    {
        boxes[100-p].innerText=p;
        boxes[100-p].style.color='';
        boxes[100-p].style.backgroundColor='';
        document.getElementById('ko').innerText=`from ${p} go to 39`;
        boxes[100-39].innerText='player 2';
        boxes[100-39].style.color='pink';
boxes[100-39].style.backgroundColor='black';
        p=39;
    }
    if((p)===64)
    {
        boxes[100-p].innerText=p;
        boxes[100-p].style.color='';
        boxes[100-p].style.backgroundColor='';
        document.getElementById('ok').innerText=`from ${p} go to 60`;
        boxes[100-60].innerText='player 2';
        boxes[100-60].style.color='pink';
boxes[100-60].style.backgroundColor='black';
        p=60;
    }
    if((p)===77)
    {
        boxes[100-p].innerText=p;
        boxes[100-p].style.color='';
        boxes[100-p].style.backgroundColor='';
        document.getElementById('ko').innerText=`from ${p} go to 55`;
        boxes[100-55].innerText='player 2';
        boxes[100-55].style.color='pink';
boxes[100-55].style.backgroundColor='black';
        p=55;
    }
    if((p)===89)
    {
        boxes[100-p].innerText=p;
        boxes[100-p].style.color='';
        boxes[100-p].style.backgroundColor='';
        document.getElementById('ko').innerText=`from ${p} go to 24`;
        boxes[100-24].innerText='player 2';
        boxes[100-24].style.color='pink';
boxes[100-24].style.backgroundColor='black';
        p=24;
    }
    if((p)===93)
    {
        boxes[100-p].innerText=p;
        boxes[100-p].style.color='';
        boxes[100-p].style.backgroundColor='';
        document.getElementById('ko').innerText=`from ${p} go to 53`;
        boxes[100-53].innerText='player 2';
        boxes[100-53].style.color='pink';
boxes[100-53].style.backgroundColor='black';
        p=53;
    }
    if((p)===98)
    {
        boxes[100-p].innerText=p;
        boxes[100-p].style.color='';
        boxes[100-p].style.backgroundColor='';
        document.getElementById('ko').innerText=`from ${p} go to 1`;
        boxes[100-1].innerText='player 2';
        boxes[100-1].style.color='pink';
boxes[100-1].style.backgroundColor='black';

        p=1;
    }
    if(p==100)
    {
        document.getElementById('ko').innerText="player 2 won";
        return;
    }
}

}
