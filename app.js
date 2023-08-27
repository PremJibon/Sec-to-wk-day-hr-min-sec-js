let input = document.querySelector("input"),
convertBtn = document.getElementById("convertBtn"),
output = document.getElementById("output")

function convert(){
    var sec = parseInt(input.value),
    min = Math.floor(sec /60),

    sec = sec % 60,
    hr = Math.floor(min /60),

    min = min % 60,
    day = Math.floor(hr / 24),

    hr = hr%24,
    wk = Math.floor(day /7),

    day = day % 7;
    output.innerHTML = `${wk} week ${day} day ${hr} hour ${min} minute ${sec} second`;
}

convertBtn.addEventListener("click",convert);