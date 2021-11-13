let disabled = false;
const callFunctionToenableButton = (event) => {
    if (event !== "") {
        document.getElementById("button").disabled = false;
    }
    else {
        document.getElementById("button").disabled = true;
    }
}