// let card=document.createElement('div');
let containers=document.querySelector('.container');
// containers.appendChild(card);
// card.classList.add('card');
// containers.classList.add('flex');
// let left=document.createElement('div');
// let right=document.createElement('div')
// card.appendChild(left);
// card.appendChild(right);

// for(let i=0;i<10;i++){
//     createCard()
// }

let products= [["Beef Enchiladas","https://images-gmi-pmc.edge-generalmills.com/8ba62fee-ecf3-4360-8b7f-ae7cbf7c6d74.jpg"],
               ["Kielbasa", "https://www.budgetbytes.com/wp-content/uploads/2021/10/Bratwurst-and-Sauerkraut-2.jpg"],
               ["Shrimp with Mango", "https://www.carolinescooking.com/wp-content/uploads/2018/12/baked-coconut-shrimp-mango-sauce-photo.jpg"],
               ["Crab Cakes", "https://assets.myfoodandfamily.com/adaptivemedia/rendition/506608_1500x1000.tif?id=e40aeab8882ec955fbf1978bf3f584a218ebf643&ht=650&wd=1004"],
               ["Favorite Meatloaf","https://assets.epicurious.com/photos/58c956ec1c37a669031b2fdf/master/pass/Frankenrecipe-Meatloaf-recipe-03022017tif.jpg"]
            ]
for(let i=0;i<products.length;i++){
    for(let j=0;j<products[i].length;j++){
        console.log(products[i][j]);
    
    }
}
function createCard(urll,names){
    let card=document.createElement('div');//sevqmenit cardi
    containers.appendChild(card);
    card.classList.add('card');
    containers.classList.add('flex');
    card.classList.add('flex')
    var left=document.createElement('div');//sevqmeni lefti
    var right=document.createElement('div')//sevqmenit right
    left.classList.add('left');
    right.classList.add('right');
    card.appendChild(left);
    card.appendChild(right);
    var imgs=document.createElement('img')
    imgs.src=urll;
    left.appendChild(imgs)
    imgs.classList.add('imgs');
    var txt=document.createElement('p');
    right.appendChild(txt);
    txt.classList.add('txt');
    right.classList.add("flexcenter");
    txt.innerHTML=names;
}
for(let i=0;i<products.length;i++){
    for(let j=0;j<products[i].length;j++){
        createCard(products[i][1],products[i][0]);
    }
}

