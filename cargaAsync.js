let heroes=[];
document.addEventListener('DOMContentLoaded',(e)=>{
    LoadData();
})

async function LoadData(){
    const response =await fetch('data/heroes.json');
    heroes=await response.json();
    console.log(heroes)
}

