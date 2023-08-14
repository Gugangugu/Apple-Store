// formula --->  total = price * volume 
let product1price = 70000, product2price = 50000, product3price = 12000, product4price = 64000, product5price = 100000;

//  product 1 
function product1() {
    let product1Vol = document.querySelector('#product1Vol').value;
    let vol1 = document.querySelector('#vol1');
    vol1.innerHTML = product1Vol;
    let p1total = document.querySelector('#p1total');
    p1total.value = product1Vol * product1price;
    let total1 = document.querySelector('#total1');
    total1.innerHTML = p1total.value;
}

//  product 2 
function product2() {
    let product2Vol = document.querySelector('#product2Vol').value;
    let vol2 = document.querySelector('#vol2');
    vol2.innerHTML = product2Vol;
    // product2Total.innerText = product2Vol*product2price;
    let p2total = document.querySelector('#p2total');
    p2total.value = product2Vol * product2price;
    let total2 = document.querySelector('#total2');
    total2.innerHTML = p2total.value;
}
//  product 3
function product3() {
    let product3Vol = document.querySelector('#product3Vol').value;
    let vol3 = document.querySelector('#vol3');
    vol3.innerHTML = product3Vol;
    // product3Total.innerText = product3Vol*product3price;
    let p3total = document.querySelector('#p3total');
    p3total.value = product3Vol * product3price;
    let total3 = document.querySelector('#total3');
    total3.innerHTML = p3total.value;
}
//  product 4 
function product4() {
    let product4Vol = document.querySelector('#product4Vol').value;
    let vol4 = document.querySelector('#vol4');
    vol4.innerHTML = product4Vol;
    // product4Total.innerText = product4Vol*product4price;
    let p4total = document.querySelector('#p4total');
    p4total.value = product4Vol * product4price;
    let total4 = document.querySelector('#total4');
    total4.innerHTML = p4total.value;
}
//  product 5 
function product5() {
    let product5Vol = document.querySelector('#product5Vol').value;
    let vol5 = document.querySelector('#vol5');
    let p5total = document.querySelector('#p5total');
    vol5.innerHTML = product5Vol;
    // product5Total.innerText = product5Vol*product5price;
    p5total.value = product5Vol * product5price;
    let total5 = document.querySelector('#total5');
    total5.innerHTML = p5total.value;
}
// button 1 
function btn1() {
    let p1 = Number(document.querySelector('#p1total').value);
    let p2 = Number(document.querySelector('#p2total').value);
    let p3 = Number(document.querySelector('#p3total').value);
    let p4 = Number(document.querySelector('#p4total').value);
    let p5 = Number(document.querySelector('#p5total').value);
    let total1 = document.querySelector('#total1');
    total1.innerHTML = (p1 + p2 + p3 + p4 + p5)

    // discount 

    if (Number(total1.innerHTML) > 50000) {
        let discount = document.querySelector('#discount');
        let dis = ((Number(total1.innerHTML) * 8) / 100);
        let pay = Number(total1.innerHTML) - dis;
        discount.innerHTML = `Got 8 % Discount  !. Savings : ${dis} /-  , Pay : ${pay} /-`
    } else {
        discount.innerHTML = "Discount not is available ! More than 50,000/- only Discount ..."
    }
}

// payment 
function pay(){
    let name = document.querySelector('#Bname').value;
    let code = document.querySelector('#Bcode').value;
    let number = document.querySelector('#Bnumber').value;

}
// online 
function online(){
    let name = document.querySelector('#Bname');
    let code = document.querySelector('#Bcode');
    let number = document.querySelector('#Bnumber');
name.innerHTML="Bank Name : Union Bank";
code.innerHTML='IFSC code : UNION2115';
number.innerHTML="Acc number : 211519114123" ; 
}
function offline(){
    let name = document.querySelector('#Bname');
    let code = document.querySelector('#Bcode');
    let number = document.querySelector('#Bnumber');
name.innerHTML="Only Cash";
code.innerHTML="Visit Our Office";
number.innerHTML=" Location : Uthukottai" ;   
}

function submitbtn(){
    let inlineText = document.querySelector('#inlineText');
    inlineText.innerHTML="Thanks For Purchasing Products !..."
    inlineText.style.marginTop="20px";
    inlineText.style.marginBottom="20px";
}