// const url = "https://nodejs-serverless-function-express-liart-eight.vercel.app/api/hero";
const url = "/api/hero";
let errorOccured = false;

async function loadJsonData(){
    try{
        const response = await fetch(url);
        if(!response.ok){
            const errMsg = ("Error: ", response.status, response.statusText);
            errorHandeler();
            errorOccured = true;
            throw new Error(errMsg);
        }
        const data = await response.json();
        handleJsonData(data);
    } catch (error){
        console.log(error);
        errorOccured = true;
        errorHandeler();
    }

    errorHandeler();
}

function handleJsonData(data){
    const title_ele = document.getElementById("content_title");
    const sub_title = document.getElementById("content_subheading");
    const cta_btn = document.getElementById("cta_btn");

    title_ele.innerText = data.headline;
    sub_title.innerText = data.subText;
    cta_btn.innerText = data.ctaText;

    cta_btn.addEventListener("click", ()=>{
        window.location.href = data.ctaLink;
    })
}

function errorHandeler(){
    const error_ele = document.getElementById("error");
    const loading_ele = document.getElementById("loading");

    if(errorOccured){
        error_ele.style.display = "flex";
        loading_ele.style.display = "none";
    }
    if(!errorOccured){
        loading_ele.style.display = "none";
        error_ele.style.display = "none";
    }
}

window.onload = loadJsonData();