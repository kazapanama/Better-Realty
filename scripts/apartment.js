// javascript for details.html
const id = new URLSearchParams(window.location.search).get('id');
console.log(id);
const container = document.querySelector('#page-inject');
let template='';


async  function renderItem(){

    let url = 'https://raw.githubusercontent.com/kazapanama/Better-Realty/master/data/db.json'
    
    const response = await fetch(url);
    const obj = await response.json();
    const apartments = obj.items
    const item = apartments[id-1]

    console.log(item)
    container.innerHTML = `
    
        
        <section id="item-full">
             <div class="wrapper">
                <div>
                    <img src="${item.mainImage}" class=".item-full-main">
                    <div class="item-full-start">
                        <h1>${item.mainTitle}</h1>
                        <p>Продаж ${item.rooms} кімнатної кварири в ЖК Комфорт. Ідеальне інвестиційне рішення як собі, так здавання у найм.</p>
                        <p>Це проект, що відповідає світовим стандартам у галузі будівництва, в якому реалізовані сучасні дизайнерські та архітектурні ідеї, використані нові технологічні рішення!</p>
                        <a href="#" class="item-action-link">Вибрати квартиру</a>
                    </div>
                </div>
                
                
             </div>
        </section>
    
    
        <section>
            <div class="wrapper">
                <div>
                <img src="${item.modelImage}" class="item-full-img">
                <img src="${item.planImage}"class="item-full-img">
                </div>
            </div>
        
            
        </section>
    
    
    
    
    
    
    `
}

renderItem();