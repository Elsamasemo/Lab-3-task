let cartQty = 0;
function forshowqty() {
    document.getElementById('quantity').textContent = cartQty;
}
function foraddtocart() {
 
    cartQty++;
}
function forplus2() {  cartQty = cartQty + 2; }
function forplus3() { cartQty = cartQty + 3; }
function forresetcart() {  cartQty = 0; }
document.getElementById('quantity1').addEventListener('click', forshowqty);
document.getElementById('quantity2').addEventListener('click', foraddtocart);
document.getElementById('quantity3').addEventListener('click', forplus2);
document.getElementById('quantity4').addEventListener('click', forplus3);
document.getElementById('quantity5').addEventListener('click', forresetcart);