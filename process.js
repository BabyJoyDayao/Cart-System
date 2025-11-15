// step select addEventListener;; products
// log all products


const main = document.querySelector("#main");

const section = main.firstElementChild;
// const article = section.firstElementChild;
// const div1 = article.firstElementChild;

const products = section.lastElementChild.children;
// const products = div1.children;

// const div2 = article.nextElementSibling;
// const div3 = article.nextElementSibling;
// const div4 = article.nextElementSibling;
//const img = div1.firstElementChild; 
//const h2 = div1.nextElementSibling; 
//const div2 = div1.nextElementSibling.children;



// pag walang button recta pick
// const productArray = Array.from(products);
// // console.log(productArray);

// productArray.forEach((p) =>{
//     p.addEventListener('click',() =>{

//     })
// });


//Get Cart
const cart = main
    .firstElementChild
    .nextElementSibling
    .lastElementChild;

console.log(cart)

//Step 2. Convert HTML Collections to Array
const productArray = Array.from(products);

productArray.forEach((p) =>{
    p.addEventListener('click', () =>{
        //step 4
        const h5 = document.createElement('h5')
        h5.innerText = p.firstElementChild.innerText;

        //step 5
        cart.appendChild(p);
    })
});

