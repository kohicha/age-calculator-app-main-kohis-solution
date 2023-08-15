const date = new Date();

let currDay = date.getDate()

let currMonth = date.getMonth()

let currYear = date.getFullYear()

const dayInput = document.getElementById('day')

const monthInput = document.getElementById('month')

const yearInput = document.getElementById('year')

const inputs = document.querySelectorAll('input')

const submit = document.querySelector('.submit')

const errorState = document.querySelectorAll('.error-state')

const emptyFieldMessage = document.querySelectorAll('.empty-field')

const resetDates = document.querySelectorAll('.reset')

const form = document.querySelector('form')



var day = Number();
var month = Number();
var year = Number();

for(let i = 0; i < inputs.length; i++){
    inputs.forEach(el => {
        el.addEventListener('input', function(){
            this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');
            if(this.value !== ""){
                emptyFieldMessage.forEach(el => {
                    el.classList.add('hidden')
                })
                errorState.forEach(el => {
                    el.classList.remove('text-red-400')
                })
            }
        })
    })
}

dayInput.addEventListener('input', function() {
    day = parseInt(this.value)
    if(dayInput.value > 31 || dayInput.value < 1){
        document.querySelector('.invalid-day').classList.remove('hidden')
        errorState[0].classList.add('text-red-400')
    } else if (dayInput.value > 29 && monthInput.value == 2){
        document.querySelector('.invalid-day').classList.remove('hidden')
        errorState[0].classList.add('text-red-400')
    } else {
        document.querySelector('.invalid-day').classList.add('hidden')
        errorState[0].classList.remove('text-red-400')
    }
})

monthInput.addEventListener('input', function()  {
    month = parseInt(this.value)
    if(monthInput.value > 12 || monthInput.value < 1){
        document.querySelector('.invalid-month').classList.remove('hidden')
        errorState[1].classList.add('text-red-400')
    } else if(dayInput.value > 29 && monthInput.value == 2){
        document.querySelector('.invalid-month').classList.remove('hidden')
        errorState[1].classList.add('text-red-400')
    } else{
        document.querySelector('.invalid-month').classList.add('hidden')
        errorState[1].classList.remove('text-red-400')
    }
})

yearInput.addEventListener('input', function() {
    year = parseInt(this.value)
    if(yearInput.value > currYear || yearInput.value < 1){
        document.querySelector('.invalid-year').classList.remove('hidden')
        errorState[2].classList.add('text-red-400')
    }else{
        document.querySelector('.invalid-year').classList.add('hidden')
        errorState[2].classList.remove('text-red-400')
    }
})


function calculateAll(){
    
    let daysResult = Math.abs(currDay - day);
    let monthsResult = (currMonth - month);
    let yearResult = Math.abs(currYear - year);
    let d = document.querySelector('.days');
    let m = document.querySelector('.month')
    let y = document.querySelector('.year') 
    if (month > currMonth){
        yearResult = (yearResult - 1)
    }
    d.innerHTML = daysResult
    m.innerHTML = Math.abs(monthsResult)
    y.innerHTML = yearResult
}




form.addEventListener('submit', doSubmit)
function doSubmit(event){
    event.preventDefault();
    for(let i = 0; i < inputs.length; i++){
        if(inputs[i].value == ""){
            emptyFieldMessage[i].classList.remove('hidden')
            errorState[i].classList.add('text-red-400');
        }
    }
    if(dayInput.value == "" || monthInput.value == "" || yearInput.value == ""){
        emptyFieldMessage.forEach(el => {
            el.classList.remove('hidden')
        })
        errorState.forEach(el => {
            el.classList.add('text-red-400')
        })
    } else{
        calculateAll();
    }   
}
