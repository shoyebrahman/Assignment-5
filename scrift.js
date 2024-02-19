const seats=document.getElementsByClassName("seat");
const ul1=document.getElementById("ul1");
const ul2=document.getElementById("ul2");
const ul3=document.getElementById("ul3");
let totalMoney=document.getElementById("ul3");
let chooseSeat=0;
let seatAvailable=document.getElementById("seat-avail");
let seatAv=parseInt(seatAvailable.innerText);
let sit=document.getElementById("seat-select");
let seatSelect=parseInt(sit.innerText);
let sum=0;
let totalPrice=document.getElementById("total-price");
let grandTotal=document.getElementById("grand-total");
let disc=document.getElementById("discount");
const email=document.getElementById("email");
const name=document.getElementById("name");
const number=document.getElementById("number");
let count=0;
for (const seat of seats){
    seat.addEventListener("click", function(){
        chooseSeat++;
        if (chooseSeat > 4){
            alert("you can't choose more than 4 seat");
        }
       else{
        seatSelect++;
        sit.innerText=seatSelect;
        seatAv--;
        seatAvailable.innerText=seatAv;
        seat.style.backgroundColor ="green";
        let li=document.createElement("li");
        li.innerText=seat.innerText;
        let li1=document.createElement("li");
        let li2=document.createElement("li");
        li1.innerText="Economy";
        li2.innerText=550;
        let money=parseInt(li2.innerText);
        ul1.appendChild(li);
        ul2.appendChild(li1);
        ul3.appendChild(li2); 
        count++;
        for (let money of totalMoney.children){
            sum=550*count;
            console.log(sum);
        }
        totalPrice.innerText=sum;
        grandTotal.innerText=sum;
       }
    })
}
const apply=document.getElementById("apply");
apply.addEventListener("click",function(){
    const input=document.getElementById("input-field").value.toLowerCase();
    if (input==="couple 20"){
        grandTotal.innerText=sum*0.80;
        let discountAmount=sum-grandTotal.innerText;
        discount.innerText="Discount : "+discountAmount;
        document.getElementById("input-field").value="";
        console.log(sum);
        console.log(input);
       
    }
    else if(input==="new15"){
        grandTotal.innerText=sum*0.85;
        let discountAmount=sum-grandTotal.innerText;
        discount.innerText="Discount : "+discountAmount;
        document.getElementById("input-field").value="";
        console.log("matching coupon 2")
        console.log(input);
        
    }
    else{
        let discountAmount=sum-grandTotal.innerText;
        discount.innerText="Discount : "+discountAmount;
        document.getElementById("input-field").value="";
        console.log("no matching coupon")
        console.log(input);
    }
})

const btn1=document.getElementById("btn1");
btn1.addEventListener("click",function(){
    if (count<1){
        alert("please choose a seat first");
    }
    else if(!number.value || number.value.length!==11){
        alert("please enter a valid number");
    }
    else if(!name.value ){
        alert("please enter a name");
    }
    else{
        document.getElementById("selling").classList.add("hidden");
        document.getElementById("sec2").classList.add("hidden");
        document.getElementById("sec1").classList.add("hidden");
        document.getElementById("head").classList.add("hidden");
        document.getElementById("foot").classList.add("hidden");
        document.getElementById("success").classList.remove("hidden");
    }
})
function previus(){
    document.getElementById("selling").classList.remove("hidden");
    document.getElementById("sec2").classList.remove("hidden");
    document.getElementById("sec1").classList.remove("hidden");
    document.getElementById("head").classList.remove("hidden");
    document.getElementById("foot").classList.remove("hidden");
    document.getElementById("success").classList.add("hidden");
}

