const url = "https://nodejs-serverless-function-express-liart-eight.vercel.app";
async function loadJsonData(){
    try{
        const response = await fetch(url+"/api/hero");
        if(!response.ok){
            const errMsg = ("Error: ", response.status, response.statusText);
            throw new Error(errMsg);
        }
        const data = await response.json();
        handleJsonData(data);
    } catch (error){
        console.log(error);
    }
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

window.onload = loadJsonData();