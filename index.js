var initialPrice = document.querySelector("#initial-price");
var quantityStock = document.querySelector("#quantity");
var currentPrice = document.querySelector("#current-price");

var submitButton = document.querySelector("#button");
var output = document.querySelector("#output");


function calculateProfitAndLoss(initial, quantity, current){
    if(current > initial){
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit/ initial) * 100;
        output.innerText=(`Hey the profit is ${profit} and the percentage is ${profitPercentage}%`)

    }
    else if(initial > current){
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss/ initial) * 100;
        output.innerText=(`Hey the loss is ${loss} and the percentage is ${lossPercentage}%`)
    }
    else{
        output.innerText=("no pain no gain no gain no pain")
    }
}

function clickHandler(){
    var ip = Number(initialPrice.value);
    var qua = Number(quantity.value);
    var op = Number(currentPrice.value);

    if(ip&&qua&&op){
    calculateProfitAndLoss(ip, qua, op)
    }else{
        output.innerText=("please fill all the Fields")
    }
}

submitButton.addEventListener('click', clickHandler)