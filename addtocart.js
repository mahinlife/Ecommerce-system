const product = [
    {
        id: 0,
        image: 'image/gg-1.jpg',
        title: 'Z Flip Foldable Mobile<p>Shop:32/a</p><p>Ismile Mobile Telicom</p>',
        price: 120000,
    },
    {
        id: 1,
        image: 'image/airpods_pro.jpg',
        title: 'Air Pods Pro<p>Shop:24/f</p><p>Brothers Store</p>',
        price: 6000,
    },
    {
        id: 2,
        image: 'image/ee-3.jpg',
        title: '250D DSLR Camera<p>Shop:34/c</p><p>Apple Gadgets</p>',
        price: 230000,
    },
    {
        id: 3,
        image: 'image/aa-1.jpg',
        title: 'Head Phones<p>Shop: 12/d</p><p>Star Tech</p>',
        price: 10000,
    },
    {
        id: 4,
        image: 'image/k68-mechanical-gaming-keyboard.webp',
        title: 'Mechanical Keyboard<p>Shop:23/b</p><p>Rakib gadgets</p>',
        price: 4500,
    },
    {
        id: 5,
        image: 'image/pendrive.webp',
        title: 'Lexar Pendrive<p>Shop:23/b</p>Rakib gadgets</p>',
        price: 2000,
    },
    {
        id: 6,
        image: 'image/Laptop.jpg',
        title: 'Asus Vivobook v19<p>Shop:23/a</p><p>Laptop mania</p>',
        price: 700000,
    },
    {
        id: 7,
        image: 'image/powerbank.jpg',
        title: 'Samsung Power <p>Shop:26/c</p><p>Forever tech</p>',
        price: 10000,
    },
    {
        id: 8,
        image: 'image/charger.jpg',
        title: 'Type-C 25w Charger<p>Shop:15/a</p><p>Red house</p>',
        price: 1500,
    },
    {
        id: 9,
        image: 'image/Huawei_MatePad.webp',
        title: 'Matepad pro<p>Shop:21/h</p><p>Shomas tech</p>',
        price: 56000,
    }

];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>TK ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "TK "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "TK "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>TK ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}
