window.addEventListener("load",initsite)

document.getElementById("alpbtn").addEventListener("click", AlphaPage)
document.getElementById("betbtn").addEventListener("click", betaPage)
document.getElementById("gambtn").addEventListener("click", gammaPage)

function initsite(){
    AlphaPage()

}

function AlphaPage(){
    document.getElementById("alpha").innerText = "Alpha"
    alpha.style.display = "block";
    beta.style.display = "None";
    gamma.style.display = "None";
    console.log("alpha")

}

function betaPage(){
    document.getElementById("beta").innerText = "Beta"
    alpha.style.display = "None";
    beta.style.display = "block";
    gamma.style.display = "None";
    console.log("beta")
}

function gammaPage(){
    document.getElementById("gamma").innerText = "Gamma"
    alpha.style.display = "None";
    beta.style.display = "None";
    gamma.style.display = "block";
    console.log("gamma")

}