let container = document.querySelector('#inject');
let template='';


async function  getItems(){
    
    let url = 'https://raw.githubusercontent.com/kazapanama/Better-Realty/master/data/db.json'
    
    const response = await fetch(url);
    const obj = await response.json();
    const apartments = obj.items

    apartments.forEach(apart=>{
        template +=`
                    <div class="a-item">
                    <img src="${apart.modelImage}" class="a-item-image">
                    <div class="a-item-desk">
                        <h3>${apart.itemsTitle}</h3>
                        <span>Квартира в ЖК Комфорт. Ідеальне інвестиційне рішення як собі, так і для здачі в оренду.</span>
                        <a href="apartment.html?id=${apart.id}">Детальніше</a>
                    </div>

                    </div> 
                    `



      
    })
    container.innerHTML=template;
    console.log(template)
}



getItems();


/*



*/