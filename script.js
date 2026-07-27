// =======================
// العناصر
// =======================

const text = document.getElementById("text");
const buttons = document.getElementById("buttons");
const nextBtn = document.getElementById("nextBtn");

const clickSound = document.getElementById("clickSound");
const music = document.getElementById("music");

// =======================
// تشغيل أول ضغطة
// =======================

nextBtn.onclick = function(){

    clickSound.play();

    music.volume = 0.35;

    music.play();

    nextBtn.disabled = true;

    text.classList.add("fadeOut");

    setTimeout(()=>{

        text.classList.remove("fadeOut");

        text.classList.add("fadeIn");

        typeText("❤️ أنا بحبك على فكرة ❤️");

    },700);

}

// =======================
// الكتابة حرف حرف
// =======================

function typeText(message){

    text.innerHTML="";

    let i=0;

    let timer=setInterval(()=>{

        text.innerHTML+=message.charAt(i);

        i++;

        if(i>=message.length){

            clearInterval(timer);

            setTimeout(showButtons,800);

        }

    },70);

}

// =======================
// ظهور الأزرار
// =======================

function showButtons(){

    buttons.innerHTML="";

    const btn1=document.createElement("button");

    btn1.innerHTML="🥰 وأنا بحبك ياحمودي";

    btn1.style.display="none";

    btn1.style.background="#ff4d94";



    const btn2=document.createElement("button");

    btn2.innerHTML="😍 وأنا بعشق أمك";

    btn2.style.display="none";

    btn2.style.background="#ff77aa";



    const btn3=document.createElement("button");

    btn3.innerHTML="😒 ماشي";

    btn3.id="moveBtn";

    btn3.style.display="none";

    btn3.style.background="#ffb347";



    buttons.appendChild(btn1);

    buttons.appendChild(btn2);

    buttons.appendChild(btn3);



    setTimeout(()=>{

        btn1.style.display="block";

        btn1.classList.add("fadeIn");

    },300);



    setTimeout(()=>{

        btn2.style.display="block";

        btn2.classList.add("fadeIn");

    },900);



    setTimeout(()=>{

    btn3.style.display="block";

    btn3.classList.add("fadeIn");

    // بعد ظهور كل الأزرار نفعلها
    activateButtons();

},1500);

}
// ===================================
// أحداث الأزرار بعد ظهورها
// ===================================

let moveCounter = 0;

function activateButtons(){

    const loveButtons = document.querySelectorAll("button");

    loveButtons.forEach(btn=>{

        if(btn.innerHTML.includes("بحبك") || btn.innerHTML.includes("بعشق")){

            btn.onclick = function(){

                clickSound.play();

                showKissScene();

            }

        }

    });

    const moveBtn=document.getElementById("moveBtn");

    moveBtn.onmouseover = moveButton;

    moveBtn.onclick = moveButton;

}


// ===================================
// تشغيل الأحداث بعد ظهور الأزرار
// ===================================



// ===================================
// زر ماشي يهرب
// ===================================

function moveButton(){

    const btn=document.getElementById("moveBtn");
    const container=document.querySelector(".container");

    if(moveCounter<5){

        moveCounter++;

        const rect=container.getBoundingClientRect();

        const margin=20;

        const btnWidth=btn.offsetWidth;
        const btnHeight=btn.offsetHeight;

        const x=rect.left+margin+Math.random()*(rect.width-btnWidth-margin*2);
        const y=rect.top+margin+Math.random()*(rect.height-btnHeight-margin*2);

        btn.style.position="fixed";
        btn.style.left=x+"px";
        btn.style.top=y+"px";
        btn.style.transition=".35s";

        clickSound.currentTime=0;
        clickSound.play();

    }else{

        buttons.innerHTML="";
        text.innerHTML="🥺<br><br>يعني (ماشي) بس؟<br><br>كنت مستني كلمة أحلى ❤️";

    }

}



// ===================================
// شاشة البوسة
// ===================================

function showKissScene(){

    buttons.innerHTML="";

    text.classList.remove("fadeIn");

    text.classList.add("fadeOut");

    setTimeout(()=>{

        text.classList.remove("fadeOut");

        text.innerHTML="💋🥹 هاتي بوسة 🥹💋";

        text.classList.add("fadeIn");

        const yes=document.createElement("button");

        yes.id="kissBtn";

        yes.innerHTML="😘 هديك أحلى بوسة ياحمودة";

        yes.style.background="#ff2d75";



        const no=document.createElement("button");

        no.id="noBtn";

        no.innerHTML="😠 لا";

        no.style.background="#666";



        buttons.appendChild(yes);

        buttons.appendChild(no);

    },700);

}
// ===================================
// زر "لا" يهرب
// ===================================

let noCounter = 0;

document.addEventListener("click",function(e){

    if(e.target.id=="noBtn"){

        const noBtn=e.target;

        if(noCounter<5){

            noCounter++;

            const container=document.querySelector(".container");
const rect=container.getBoundingClientRect();

const margin=20;

let x=rect.left+margin+Math.random()*(rect.width-noBtn.offsetWidth-margin*2);
let y=rect.top+margin+Math.random()*(rect.height-noBtn.offsetHeight-margin*2);
            
        

            noBtn.style.position="fixed";
            noBtn.style.left=x+"px";
            noBtn.style.top=y+"px";

            clickSound.currentTime=0;
            clickSound.play();

            return;

        }

        buttons.innerHTML="";

        text.innerHTML="🥺💔<br><br>أنا مخصمك ومش عايز حاجة على فكرة.";

    }

});



// ===================================
// زر البوسة
// ===================================

document.addEventListener("click",function(e){

    if(e.target.id=="kissBtn"){

        kissSound.play();

        explodeHearts();

        setTimeout(showLoveStory,1200);

    }

});




// ===================================
// انفجار القلوب
// ===================================

function explodeHearts(){

for(let i=0;i<70;i++){

const h=document.createElement("div");

h.innerHTML=Math.random()>0.5?"❤️":"💋";

h.style.position="fixed";

h.style.left=Math.random()*100+"vw";

h.style.top=Math.random()*100+"vh";

h.style.fontSize=(20+Math.random()*30)+"px";

h.style.transition="2s";

h.style.zIndex="9999";

document.body.appendChild(h);

setTimeout(()=>{

h.style.transform="translateY(-250px) scale(2)";
h.style.opacity="0";

},50);

setTimeout(()=>{

h.remove();

},2200);

}

}
// ===================================
// بداية الرسالة النهائية
// ===================================

function showLoveStory(){

    buttons.innerHTML="";

    text.innerHTML="";

    typeWriterStory();

}

// ===================================
// كتابة الرسائل واحدة واحدة
// ===================================

const messages=[

"🥹❤️ في حاجة كنت عايز أقولهالك...",

"من أول يوم عرفتك فيه ❤️",

"وأنا كل يوم بحبك أكتر من اليوم اللي قبله 🌹",

"وعارفة بقالنا قد إيه مع بعض؟ 🥰"

];

let msgIndex=0;

function typeWriterStory(){

if(msgIndex>=messages.length){

startCounter();

return;

}

text.innerHTML="";

let i=0;

let message=messages[msgIndex];

let timer=setInterval(()=>{

text.innerHTML+=message.charAt(i);

i++;

if(i>=message.length){

clearInterval(timer);

msgIndex++;

setTimeout(typeWriterStory,1800);

}

},70);

}



// ===================================
// عداد الأيام
// ===================================

function getDaysTogether(){

    const startDate = new Date(2025,7,2); // 2 أغسطس 2025
    const today = new Date();

    startDate.setHours(0,0,0,0);
    today.setHours(0,0,0,0);

    return Math.floor((today-startDate)/(1000*60*60*24));

}
function startCounter(){

let totalDays=getDaysTogether();

let day=0;

let timer=setInterval(()=>{

text.innerHTML="❤️ بقالنا مع بعض<br><br>"+day+" يوم ❤️";

day++;

if(day>totalDays){

clearInterval(timer);

setTimeout(showLastWords,1200);

}

},18);

}


// ===================================
// الكلمات الأخيرة
// ===================================

function showLastWords(){

const days=getDaysTogether();

const remain=365-days;

text.innerHTML=`

⏳❤️

بقالنا ${days} يوم مع بعض 🥹

<br><br>

فاضل ${remain} أيام

ونكون سنة كاملة مع بعض ❤️

<br><br>

🌹

ودي كانت أجمل سنة

في حياتي

عشان وجودك فيها ❤️

`;

setTimeout(finalMessage,5000);

}



// ===================================
// الرسالة الأخيرة
// ===================================

function finalMessage(){

fireworks();

const lines=[

"❤️❤️❤️",

"",

"أنا بحبك يا منمن 🥹💖",

"",

"وكل يوم بيمر",

"بيأكدلي إن وجودك أجمل نعمة ربنا رزقني بيها",

"وربنا يديمك في حياتي العمر كله",

"",

"ويارب منتفترقش أبدًا 🤍♾️"

];

text.innerHTML="";
text.style.fontSize="42px";

let line=0;

function writeLine(){

    if(line>=lines.length){

        setTimeout(()=>{

text.innerHTML+=`

<br><br>

<div style="
font-size:22px;
color:#ffc0cb;
margin-top:25px;
">

🤍  بمناسبه مرور سنه مع بعض وان شاء الله العمر كله مع بعض ❤  

</div>

`;

},1500);

        return;

    }

    const p=document.createElement("div");
    p.style.margin="15px 0";
    text.appendChild(p);

    let i=0;

    const current=lines[line];

    const timer=setInterval(()=>{

        p.innerHTML+=current.charAt(i);

        i++;

        if(i>current.length){

            clearInterval(timer);

            line++;

            setTimeout(writeLine,800);

        }

    },60);

}

writeLine();

}

function showPromiseMessage(){

buttons.innerHTML="";

text.innerHTML="";

document.body.style.transition="1s";
document.body.style.background="#1b0f1b";

const lines=[

"🤍",

"وعد...",

"",

"إني كل يوم",

"هختارك من جديد ❤️",

"",

"ووعد...",

"مهما حصل بينا من خلاف",

"هنرجع لبعض 🥹",

"",

"لأنك أجمل حاجة",

"حصلتلي في حياتي 🌹",

"",

"يارب منتفترقش أبدًا",

"♾️❤️"

];

let index=0;

function nextLine(){

    if(index>=lines.length){

        setTimeout(showSuccess,1200);

        return;

    }

    const div=document.createElement("div");

    div.style.margin="14px";

    div.style.fontSize="36px";

    text.appendChild(div);

    let i=0;

    let sentence=lines[index];

    let timer=setInterval(()=>{

        div.innerHTML+=sentence.charAt(i);

        i++;

        if(i>sentence.length){

            clearInterval(timer);

            index++;

            setTimeout(nextLine,700);

        }

    },55);

}

nextLine();

} 
function showSuccess(){

explodeHearts();

fireworks();

text.innerHTML+=`

<br><br>

<div style="font-size:45px;color:#ff4d94;animation:pulse 1s infinite;">

💍

تم تسجيل الوعد بنجاح ❤️

</div>

`;

setTimeout(showFinalGift,2500);

} 
function showFinalGift(){

const gift=document.createElement("button");

gift.innerHTML="🎁 اضغطي هنا للمفاجأة الأخيرة ❤️";

gift.style.marginTop="40px";

gift.style.padding="18px 35px";

gift.style.fontSize="25px";

gift.style.borderRadius="20px";

gift.style.background="#ff2d75";

gift.style.color="white";

gift.style.border="none";

gift.style.cursor="pointer";

gift.style.boxShadow="0 0 25px #ff2d75";

buttons.appendChild(gift);

gift.onclick=function(){

showForever();

}

}
function showForever(){

buttons.innerHTML="";

text.innerHTML="";

const today=new Date();

const date=today.toLocaleDateString("ar-EG",{

day:"numeric",

month:"long",

year:"numeric"

});

const message=[

"❤️",

"بحبك يا منمن",

"",

"أمس...",

"والنهارده...",

"وبكرة...",

"",

"وكل يوم",

"هعيش فيه ❤️",

"",

"📅 آخر تحديث للحب",

date,

"",

"🤍♾️"

];

let line=0;

function write(){

if(line>=message.length){

return;

}

const p=document.createElement("div");

p.style.margin="15px";

p.style.fontSize="38px";

text.appendChild(p);

let i=0;

let t=setInterval(()=>{

p.innerHTML+=message[line].charAt(i);

i++;

if(i>message[line].length){

clearInterval(t);

line++;

setTimeout(write,600);

}

},55);

}

write();

}

function fireworks(){

    setInterval(()=>{

        for(let i=0;i<25;i++){

            const item=document.createElement("div");

            const arr=["🎆","🎇","✨","❤️","💖","🌹","💋"];

            item.innerHTML=arr[Math.floor(Math.random()*arr.length)];

            item.style.position="fixed";
            item.style.left=Math.random()*100+"vw";
            item.style.top=Math.random()*100+"vh";
            item.style.fontSize=(18+Math.random()*28)+"px";
            item.style.zIndex="99999";
            item.style.pointerEvents="none";

            document.body.appendChild(item);

            setTimeout(()=>{

                item.style.transition="1.8s";

                item.style.transform=`translate(${Math.random()*300-150}px,${Math.random()*300-150}px) scale(2)`;

                item.style.opacity="0";

            },20);

            setTimeout(()=>{

                item.remove();

            },2000);

        }

    },1800);

}



// ===========================================
// ❤️ مطر قلوب
// ===========================================

setInterval(()=>{

    const heart=document.createElement("div");

    heart.innerHTML=Math.random()>0.5?"❤️":"💖";

    heart.style.position="fixed";

    heart.style.left=Math.random()*100+"vw";

    heart.style.top="-50px";

    heart.style.fontSize=(20+Math.random()*25)+"px";

    heart.style.zIndex="5";

    heart.style.pointerEvents="none";

    heart.style.transition="7s linear";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.style.top="110vh";

    },30);

    setTimeout(()=>{

        heart.remove();

    },7200);

},350);



// ===========================================
// 🌹 مطر ورد
// ===========================================

setInterval(()=>{

const rose=document.createElement("div");

rose.innerHTML="🌹";

rose.style.position="fixed";

rose.style.left=Math.random()*100+"vw";

rose.style.top="-40px";

rose.style.fontSize="30px";

rose.style.transition="9s linear";

rose.style.pointerEvents="none";

document.body.appendChild(rose);

setTimeout(()=>{

rose.style.top="110vh";

rose.style.transform="rotate(720deg)";

},20);

setTimeout(()=>{

rose.remove();

},9000);

},1600);




// ===========================================
// ✨ نجوم
// ===========================================

setInterval(()=>{

const star=document.createElement("div");

star.innerHTML="✨";

star.style.position="fixed";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.fontSize="18px";

star.style.opacity="0";

star.style.transition=".8s";

star.style.pointerEvents="none";

document.body.appendChild(star);

setTimeout(()=>{

star.style.opacity="1";

},30);

setTimeout(()=>{

star.style.opacity="0";

},1000);

setTimeout(()=>{

star.remove();

},1800);

},450);




// ===========================================
// 💓 نبض القلب
// ===========================================

setInterval(()=>{

document.title=document.title=="❤️ لمنمن ❤️"

?"💖 بحبك يا منمن 💖"

:"❤️ لمنمن ❤️";

},900);





// ===============================
// 🤍 القائمة السرية
// ===============================

const menuBtn = document.getElementById("menuBtn");
const secretMenu = document.getElementById("secretMenu");
const giftMenuBtn = document.getElementById("giftMenuBtn");

menuBtn.onclick = function () {
    menuBtn.addEventListener("click", function (e) {

    e.stopPropagation();

    menuBtn.classList.toggle("open");

    if (secretMenu.style.display === "block") {
        secretMenu.style.display = "none";
    } else {
        secretMenu.style.display = "block";
    }

});
};

document.addEventListener("click", function (e) {

    if (
        !secretMenu.contains(e.target) &&
        e.target !== menuBtn
    ) {

        secretMenu.style.display = "none";

        menuBtn.classList.remove("open");

    }

});

giftMenuBtn.addEventListener("click", function () {

    secretMenu.style.display = "none";

    menuBtn.classList.remove("open");

    showPromiseMessage();

});