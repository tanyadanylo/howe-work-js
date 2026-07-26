let content = document.getElementById('content');
let prevButton = document.getElementById('prev-button');
let nextButton = document.getElementById('next-button');

let sneakersList = [];

for (let i = 0; i < 100; i++) {
    sneakersList.push({
        id: i,
        name: `Brand ${Math.ceil(i / 20)}`,
        model: `Model X-${i}`,
        price: 1000 + (i * 15)
    });
}

let currentPage = 1;

function renderPage(){
    let startIndex = (currentPage - 1) * 10;
    let endIndex =  currentPage  * 10;

    let currentItems = sneakersList.slice(startIndex, endIndex);

    content.innerHTML = '';

    currentItems.forEach(item => {
        let div = document.createElement('div');
        div.innerText = `ID: ${item.id} | ${item.name} | ${item.model} | Ціна: ${item.price} грн`;
        content.appendChild(div);
    })
}
renderPage();

nextButton.addEventListener('click', function(){
    if (currentPage < 10){
        currentPage +=1;
        renderPage();

    }
});

prevButton.addEventListener('click', function(){
   if (currentPage > 1){
       currentPage -= 1;
       renderPage();
   }
})