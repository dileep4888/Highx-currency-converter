const amount = document.querySelector("#amount");
const select =  document.querySelector("#currency");
const select2 = document.querySelector("#currency2");
const result = document.querySelector("#result");
const flag1 = document.querySelector("#flag1");
const flag2 = document.querySelector("#flag2");
const countrykeys = Object.keys(countryList);
const container = document.querySelector("#converter-container");

const data = async () => {
    let dat = await fetch("https://latest.currency-api.pages.dev/v1/currencies/eur.json");
    let json = await dat.json();
    if (amount.value === "") {
        result.innerText = "Enter amount ";
        resultStyle()
        return
    }
    let value1 = select.value.toLowerCase();
    let value2 = select2.value.toLowerCase();
    console.log(value1)
    let eur = amount.value / json.eur[value1];
    console.log(eur * json.eur[value2]);
    let res = `${amount.value} ${select.value} = ${parseFloat(eur * json.eur[value2])} ${select2.value}`
    result.innerText = res;
    resultStyle()
}
function resultStyle() {
    container.style.height = "55vh";
}

countrykeys.forEach(opt => {
    let option = new Option(opt, opt);
    select.add(option);
});

countrykeys.forEach(opt => {
    let option = new Option(opt, opt);
    select2.add(option);
});

function convert(){
    const currency1 = select.value;
    const currency2 = select2.value;
    data();
    
}

select.addEventListener("change", () => {flag1.src = `https://flagsapi.com/${countryList[select.value]}/flat/64.png`;})
select2.addEventListener("change", () => {flag2.src = `https://flagsapi.com/${countryList[select2.value]}/flat/64.png`;})

function countrySwap() {
        let country = {
        flag: flag1.src,
        countryOption: select.value
    }
    select.value = select2.value;
    flag1.src = flag2.src;
    select2.value = country.countryOption;
    flag2.src = country.flag;
}

