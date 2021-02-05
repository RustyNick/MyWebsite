/* function loadProducts() {
    fetch("./info.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(Info) {
        listOfInfo = Info;
        addProductsToWebpage();
    });
} */

window.addEventListener("load",initsite)

document.getElementById("alpbtn").addEventListener("click", AlphaPage)
document.getElementById("betbtn").addEventListener("click", betaPage)
document.getElementById("gambtn").addEventListener("click", gammaPage)

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

function AlphaPage(){
    document.getElementById("alpha").innerText = ""
    alpha.style.display = "block";
    beta.style.display = "None";
    gamma.style.display = "None";
    renderPfpCard()
    renderalphaContent()

}

function betaPage(){
    document.getElementById("beta").innerText = ""
    alpha.style.display = "None";
    beta.style.display = "block";
    gamma.style.display = "None";
    renderbetaContent()
}

function gammaPage(){
    document.getElementById("gamma").innerText = ""
    alpha.style.display = "None";
    beta.style.display = "None";
    gamma.style.display = "block";
    rendergammaContent()

}

function renderPfpCard(){
    let renderCard = document.createElement("div");
    renderCard.className = "renderCard";

    let pfp = document.createElement("div")
    pfp.id = "pfp"

    let image = document.createElement("img")
    image.id = "image"
    image.src="assets/profilepicture.jpg"

    let fullName = document.createElement("p");
    fullName.id = "fullName";
    fullName.innerText = "Niklas Hådell"

    let list = document.createElement("p");
    list.id = "list";
    list.innerText = "Future webb Developer"

    pfp.appendChild(image);
    
    renderCard.appendChild(pfp);
    renderCard.appendChild(fullName);
    renderCard.appendChild(list);


    document.getElementById("alpha").appendChild(renderCard);
}

function renderalphaContent(){
    let renderCard = document.createElement("div");
    renderCard.className = "renderCard";

    let infoBox = document.createElement("div")
    infoBox.id = "infoBox"

    let infoText = document.createElement("p")
    infoText.id = "infoText"
    infoText.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi rerum vel, temporibus sunt aspernatur perspiciatis tempora quisquam nisi libero necessitatibus tempore, nemo recusandae commodi dolorum repellendus. Debitis recusandae atque exercitationem?"

    infoBox.appendChild(infoText);
    infoBox.appendChild(infoText);
    infoBox.appendChild(infoText);
    renderCard.appendChild(infoBox);
    document.getElementById("alpha").appendChild(renderCard);
}

function renderbetaContent(){
    let renderCard = document.createElement("div");
    renderCard.className = "renderCard";

    let infoBox = document.createElement("div")
    infoBox.className = "infoBox"

    let infoText = document.createElement("p")
    infoText.className = "infoText"
    infoText.innerText = "BETA Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi rerum vel, temporibus sunt aspernatur perspiciatis tempora quisquam nisi libero necessitatibus tempore, nemo recusandae commodi dolorum repellendus. Debitis recusandae atque exercitationem?"

    infoBox.appendChild(infoText);
    renderCard.appendChild(infoBox);
    document.getElementById("beta").appendChild(renderCard);
}

function rendergammaContent(){
    let renderCard = document.createElement("div");
    renderCard.className = "renderCard";

    let infoBox = document.createElement("div")
    infoBox.className = "infoBox"

    let infoText = document.createElement("p")
    infoText.className = "infoText"
    infoText.innerText = "GAMMA Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi rerum vel, temporibus sunt aspernatur perspiciatis tempora quisquam nisi libero necessitatibus tempore, nemo recusandae commodi dolorum repellendus. Debitis recusandae atque exercitationem?"

    infoBox.appendChild(infoText);
    renderCard.appendChild(infoBox);
    document.getElementById("gamma").appendChild(renderCard);
}