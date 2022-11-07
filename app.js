
let buttons = Array.from(document.getElementsByClassName('key'))

let sum = document.getElementById('sum')

buttons.map(function(button){
    return button.addEventListener('click', function(e){
        switch (e.target.innerText){
                case "c":
                sum.innerText = " "
                break;
                case "=":
                    try{
                        sum.innerText = eval(sum.innerText)
                    }catch {
                        sum.innerText = "NaN";
                    }
                    break;
            default: sum.innerText += e.target.innerText;
        }

    })
})
