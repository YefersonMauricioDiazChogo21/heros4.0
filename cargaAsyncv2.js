let comicweb=[];
document.addEventListener('DOMContentLoaded',async (e)=>{
    comicweb= await LoadDataV2();
    console.log(comicweb)
})

async function LoadDataV2(){
    return await fetch('data/heroes.json').then(response =>response.json())
}
