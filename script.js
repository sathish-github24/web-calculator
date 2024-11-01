class Calculator{
    constructor(previousOperand, currentOperand){
        this.previousOperand = previousOperand.innerText
        this.currentOperand = currentOperand.innerText
    }

    clear(){
        this.currentOperand = ""
        this.previousOperand = ""
        this.operation = undefined
    }

    delete(){
        if(this.currentOperand != ''){
            this.currentOperand = this.currentOperand.slice(0, -1);
        }else{
            if(isNaN(previoustextOperand.innerText)) {
                this.operation = undefined
                this.currentOperand = this.previousOperand
                this.previousOperand = ''
            }else{
                this.previousOperand = this.previousOperand.slice(0, -1)
            }
        }
    }

    append(number){
        if(number === '.' && this.currentOperand.includes('.')){
            return null
        }else{
            this.currentOperand =
            this.currentOperand.toString() + number.toString();
        }
    }

    chooseOperator(operation){
        // if statement shorthand
        if(this.currentOperand === '') return
        if(this.previousOperand !== '') this.compute()
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    compute(){
        // newly parsefloat function used
        let computation
        const prev = parseFloat(this.previousOperand)
        const curr = parseFloat(this.currentOperand)
        if(isNaN(prev) || isNaN(curr)) return
        switch(this.operation){
            case '+': computation = prev + curr; break
            case '-': computation = prev - curr; break
            case '*': computation = prev * curr; break
            case '÷': computation = prev / curr; break
            default: return
        }
        this.currentOperand = computation
        this.previousOperand = ''
        this.operation = undefined
    }

    update(){
        currenttextOperand.innerText = this.currentOperand;
        if(this.operation != null){
            previoustextOperand.innerText = `${this.previousOperand} ${this.operation}`
        }else{
            previoustextOperand.innerText = this.previousOperand
        }
    }
}

const numberButtons = document.querySelectorAll('[data-number]')
const numberOperations = document.querySelectorAll('[data-operation]')
const numberDelete = document.querySelector('[data-delete]')
const allClear = document.querySelector('[data-all-clear]')
const equal = document.querySelector('[data-equal]')
const previoustextOperand = document.querySelector('[data-previous-operand]')
const currenttextOperand = document.querySelector('[data-current-operand]')


const calculator = new Calculator(previoustextOperand, currenttextOperand)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.append(button.innerText)
        calculator.update()
    })

})

numberOperations.forEach(function(button){
    button.onclick = function(){
        calculator.chooseOperator(button.innerText) 
        calculator.update()
    }
})

allClear.onclick = function() {
    calculator.clear()
    calculator.update()
}

numberDelete.onclick = function(){
    calculator.delete()
    calculator.update()
}

equal.onclick = function(){
    calculator.compute()
    calculator.update()
}
