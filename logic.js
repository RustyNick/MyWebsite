const aboutMe = [
    {
        title:"About",
        worked:"I have earlier studied Graphic design and social media, due to change of career I’ve been into both customer service and warehouse worker with designated assignments of support. Now I’m looking forward and found webb development as a high interest since it both involve design elements and creative building. As a future developer I would like to be the team inspirer to help fellow colleagues find solid solutions for our works and creations."
    },
    {
        title:"MedieInstitutet",
        year:"Now",
        worked:"Student"
    },
    {
        title:"FristadsAB",
        year:"2019",
        worked:"Worked as a Value Added Service (VAS) operator with supporting assignments"
    },
    {
        title:"Speed AB",
        year:"2018",
        worked:"Warehouse worker, specilised in Pick and pack."
    },
    {
        title:"Manpower Ab",
        year:"year",
        worked:"ambulated warehouse worker, specilised in Pick and Pack"
    },
    {
        title:"Transcom Ab",
        year:"year",
        worked:"customer service, firstline for telecom"
    }
];

const boxlist = [
    {
        image: "icon.png",
        hobby:"Twitch - JakkenBlue",
        Desc: "hava a great instrest in Streaming, mainly on the gaming side. Love the studio feeling of broadcasting and just have fun with friends. ",
        page: "My Twitch",
        link: "https://www.twitch.tv/jakkenblue"
    },
    {
        image: "furry72dpi.png",
        hobby:"Arts",
        Desc: "I'm drawing a little when the mood strikes me, I usually draw anthromorpich characters and some fantasy creature, ",
        
    },
    {
        image: "theCouch.png",
        hobby:"Discord - The Couch",
        Desc:"I maintain a discord Server where my twitch community can turn to chat and mingle yet it's main goal is to make a plattform for smaller streamers to make contcts and friends to be able to have a ground to work on projects together.",
       
    },{
        image: "",
        hobby:"Games",
        Desc:"If you haven't figured it out yet I like games, I'm more focused on platforming games like your casual mario or puzzle solving Zelda yet we can't just forget Minecraft, I've spent to many hours on that game than I like to admit.",
       
    },
    

];

const contactlist = [
    {
        medie:"Send me an E-mail",
        contact:"e-mail",
        desc:"",
        link: "mailto: niklas.hadell@medieinstitutet.se"
    },
    {
        medie: "Add me on linkedIn",
        contact:"Linkedin",
        desc:"",
        link: "https://www.linkedin.com/in/niklas-hådell-51b767201"
    },
    {
        medie:"Whisper me on twitch",
        contact:"whisper in twitch",
        desc:"",
        link:"https://www.twitch.tv/jakkenblue"
    },
    {
        medie:"DM me on Twitter",
        contact:"DM me on Twitter",
        desc:"",
        link:"https://twitter.com/JakkenBlue"
    },{
        medie:"Join our discord",
        contact:"Join our Discord",
        desc:"",
        link:"https://discord.com/invite/zRx28HY7vH"
    },
    {
        
        desc:"Feel free to contact me an I shall respond to you as soon as I can",
    },
]

window.addEventListener("load",initsite)

document.getElementById("alpbtn").addEventListener("click", AlphaPage)
document.getElementById("betbtn").addEventListener("click", betaPage)
document.getElementById("gambtn").addEventListener("click", gammaPage)
document.getElementById("topbtn").addEventListener("click", topfunction)
window.onscroll = function() {scroll()};

backTop = document.getElementById("")

function scroll(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topbtn.style.display = "block";
      } else {
        topbtn.style.display = "none";
      }
}

function topfunction(){
    document.body.scrollTop =0;
    document.documentElement.scrollTop = 0;
}


function initsite(){
    AlphaPage()
    /* loadProducts() */

}

/* function addProductsToWebpage(){
    for (let i = 0; i < listOfInfo.length; i++) {
        let info = listOfInfo[i];
        document.getElementById("main").appendChild(createProductCard(i))
    }
} */



function restorePage(){
    document.getElementById("gamma").innerText = ""
    document.getElementById("beta").innerText = ""
    document.getElementById("alpha").innerText = ""
}

function AlphaPage(){
    restorePage()
    alpha.style.display = "block";
    beta.style.display = "None";
    gamma.style.display = "None";
    renderPfpCard()
    loopaalphabox()

}

function betaPage(){
    restorePage()
    alpha.style.display = "None";
    beta.style.display = "block";
    gamma.style.display = "None";
    loopbetabox()
}

function gammaPage(){
    restorePage()
    alpha.style.display = "None";
    beta.style.display = "None";
    gamma.style.display = "block";
    loopgammabox()

}

function loopaalphabox(){
    for (let i = 0; i < aboutMe.length; i++) {
        let divBox = aboutMe[i];
        divBox.innerText = JSON.stringify(aboutMe[i]);
        document.getElementById("alpha").append(renderalphaContent(i))
    }   
}
function loopbetabox(){

    for (let i = 0; i < boxlist.length; i++) {
        let divBox = boxlist[i];
        divBox.innerText = JSON.stringify(boxlist[i]);
        document.getElementById("beta").append(renderbetaContent(i))
    }  
}

function loopgammabox(){

    for (let i = 0; i < contactlist.length; i++) {
        let conbox = contactlist[i];
        conbox.innerText = JSON.stringify(contactlist[i]);
        document.getElementById("gamma").append(rendergammaContent(i))
    }   

}


function renderPfpCard(){
    let renderCard = document.createElement("div");
    renderCard.className = "renderCard";

    let pfp = document.createElement("div")
    pfp.id = "pfp"

    let image = document.createElement("img")
    image.id = "image"
    image.src="assets/profilepicture.jpg"

    let stylebox = document.createElement("div")
    stylebox.className ="stylebox"


    let fullName = document.createElement("p");
    fullName.id = "fullName";
    fullName.style.width="30%"
    fullName.innerText = "Niklas Hådell"

    let age = document.createElement("p");
    age.id = "age";
    age.style.width="30%"
    age.innerText = "1994-04-14"

    let list = document.createElement("p");
    list.id = "list";
    list.style.width="30%"
    list.innerText = "Future Webb Developer"

    let alphabtn = document.createElement("button")
    alphabtn.className ="btn"
    alphabtn.innerText ="Contact"
    alphabtn.addEventListener("click",function() {
        gammaPage()
      }); 

    pfp.appendChild(image);
    
    renderCard.appendChild(pfp);
    stylebox.appendChild(fullName);
    stylebox.appendChild(age)
    stylebox.appendChild(list);
    renderCard.appendChild(stylebox)
    renderCard.appendChild(alphabtn);


    document.getElementById("alpha").appendChild(renderCard);
}

function renderalphaContent(i){
    

    let renderCard = document.createElement("div");
    renderCard.className = "renderCard";


    let infoBox = document.createElement("div")
    infoBox.id = "infoBox"

    let title = document.createElement("h3")
    title.style.marginBottom ="0px"
    title.innerText =aboutMe[i].title;

    let year = document.createElement("h5")
    year.style.margin ="0px"
    year.style.paddin ="0px"
    year.innerText =aboutMe[i].year;

    let infoText = document.createElement("p")
    infoText.id = "infoText"
    infoText.innerText = aboutMe[i].worked;
    
    
    infoBox.appendChild(title)
    infoBox.appendChild(year)
    infoBox.appendChild(infoText);
    renderCard.appendChild(infoBox);
    document.getElementById("alpha").appendChild(renderCard);

    if(!aboutMe[i].year){
        year.innerText ="";
    }else{
        year.innerText =aboutMe[i].year;
    }

    return renderCard
}

function renderbetaContent(i){
    let renderCard = document.createElement("div");
    renderCard.className = "renderCard";

    let image = document.createElement("img")
    image.className = "img"
    image.innerText = boxlist[i].image;

    let imageURL = boxlist[i].image
    image.src = ("https://rustynick.github.io/MyWebsite/assets/" +imageURL);

    let title = document.createElement("h3")
    title.id="title"
    title.innerText= boxlist[i].hobby

    let newBox = document.createElement("div")
    newBox.id = "newBox"
    newBox.innerText = boxlist[i].Desc;

    
    let goTobtn = document.createElement("button")
    goTobtn.className ="btn"
    goTobtn.innerText = boxlist[i].page;
    goTobtn.addEventListener("click",function() {
        window.location.href = boxlist[i].link;
      }); 

    renderCard.append(image)
    renderCard.append(title)
    renderCard.append(newBox)

    if(!boxlist[i].link){
        goTobtn.innerText = ""
    }else{
        renderCard.append(goTobtn)   
    }
    document.getElementById("beta").appendChild(renderCard);
    return renderCard
}


function rendergammaContent(i){
    let renderCard = document.createElement("div");
    renderCard.className = "renderCard";

    let stylebox = document.createElement("div")
    stylebox.className = "stylebox"

    let infoBox = document.createElement("div")
    infoBox.className = "infoBox"


    let infoText = document.createElement("div")
    infoText.className = "infoText"
    infoText.innerText = contactlist[i].desc;
    infoText.style.fontSize = "20px"

    let contactbtn = document.createElement("button");
    contactbtn.className = "btn"
    contactbtn.innerText = contactlist[i].medie;
    contactbtn.addEventListener("click",function() {
        window.location.href = contactlist[i].link;
      }); 

    if(!contactlist[i].link){
        contactbtn.style.display = "none"
        
    }else{
        stylebox.append(contactbtn)   
    }
    

    stylebox.append(contactbtn)
    infoBox.append(infoText);
    stylebox.append(infoBox)
    renderCard.appendChild(stylebox);
    document.getElementById("gamma").appendChild(renderCard);

    return renderCard
}
