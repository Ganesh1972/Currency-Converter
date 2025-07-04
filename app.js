
const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropDown = document.querySelectorAll(".dropdown select");
const btn = document.querySelector(".btn");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

//  Add all countries to select.
for(let select of dropDown)
{
    for(currCode in countryList)
    {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name === "from" && currCode === "USD"){
            newOption.selected = "selected";
        }
        else if(select.name === "to" && currCode === "INR"){
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    });
}


// change flag : update img
const updateFlag = (element)=>{
    let currCode = element.value;
    
    let countryCode = countryList[currCode];
    // console.log(countryCode);
    // console.log(newSrc);

    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}


const updateExchangeRate = async()=>{
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    // console.log(amtVal);

    if(amtVal === "" || amtVal < 1)
    {
        amtVal = 1;
        amount.value = "1";
    }

    // console.log(fromCurr.value);
    // console.log(toCurr.value);

    //APi work on lower case  
    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;

    let response = await fetch(URL);
    let data = await response.json();

    // console.log(data);
    // let a = fromCurr.value.toLowerCase();
    // console.log(a);

    // let b = toCurr.value.toLowerCase();
    // console.log(b);

    // console.log(data[a][b])


    let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
    // console.log(rate);

    let finalVal = rate*amtVal;
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalVal} ${toCurr.value}`;
}


// conversion
btn.addEventListener("click", (evt)=>{
    evt.preventDefault();
    updateExchangeRate();
});


// set default rate initially.

window.addEventListener("load",()=>{
    updateExchangeRate();
});

console.log("HI this is ganesh")
