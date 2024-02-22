
const allChears = document.getElementsByClassName("chears");
let selectedSeats = [];

for (const chear of allChears) {
    chear.addEventListener("click", function (event) {
        const chearPosition = event.target.innerText;
        if (selectedSeats.length === 4) {
            const deselectedSeat = selectedSeats.shift();
            deselectedSeat.classList.remove('selected');
        }
        event.target.classList.toggle('selected');
        const index = selectedSeats.indexOf(event.target);
        if (index !== -1) {
            selectedSeats.splice(index, 1);
        } else {
            selectedSeats.push(event.target);
        }
        const selectedSeat = document.getElementById("selected-seat");
        const seatNumber = document.getElementById("seat").innerText;


        const seatRange = getConvertPrice("selected-chear");
        if (seatRange + 1 > 4) {
            alert("You are touch your limit");
            return;
        }
        const parsintNumber = parseInt(seatNumber);
        document.getElementById("seat").innerText = parsintNumber - 1;

        const seatAdded = document.getElementById("selected-chear").innerText;
        const parsintsNumber = parseInt(seatAdded);
        document.getElementById("selected-chear").innerText = parsintsNumber + 1;
        const price = document.getElementById("seat-price").innerText;
        const p = document.createElement("p");
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        p.innerText = chearPosition;
        p1.innerText = "Economy";
        p2.innerText = price;
        selectedSeat.appendChild(p);
        selectedSeat.appendChild(p1);
        selectedSeat.appendChild(p2);



        updateTotalPrice(price);
        updateGrandTotal()


    })
}
function updateGrandTotal(status) {
    const totalPrice = getConvertPrice("total-price");

    if (status == undefined) {

        document.getElementById("grand-total").innerText = totalPrice;
    }
    else {
        const couponUse = document.getElementById("coupon-use").value;
        if (couponUse == "NEW15") {
            const discount = totalPrice * 0.15;
            const roundedTotal = Math.round(discount);
            document.getElementById("grand-total").innerText = totalPrice - roundedTotal;
        }
        else if (couponUse == "Couple20") {
            const discount = totalPrice * 0.2;
            const complement =
                document.getElementById("grand-total").innerText = totalPrice - discount;

        }
        else {
            alert("please Enter Valid Coupon Code")
        }
    }
}
const nextPage1 = document.getElementById("home-scren");
const nextpage2 =document.getElementById("home-scren1");
const nextPage = nextPage1+nextpage2;
nextPage.classList.add("hidden")




function updateTotalPrice() {
    const price = document.getElementById("seat-price").innerText;
    const totalPriceElement = document.getElementById("total-price");
    let totalPrice = 0;
    totalPrice = selectedSeats.length * parseInt(price);
    totalPriceElement.innerText = totalPrice;
}


function getConvertPrice(id) {
    const price = document.getElementById(id).innerText;
    const convertPrice = parseInt(price);
    return convertPrice;
}