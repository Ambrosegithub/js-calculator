let result = document.getElementById("inputtext")

let calculate = (number) => {
    result.value += number;

}

let Result = () => {
    try {
        result.value = eval(result.value);
    } catch (error) {
        alert ("Enter A Invalid Input")
    }
}

const clr = () => {
    result.value = "";
}

const del = () => {
    result.value = result.value.slice(0, -1);
}