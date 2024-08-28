function validateSyntax(input) {
    // Regular expression to match the pattern "pet_" followed by alphanumeric characters
    const regex = /^pet_[a-zA-Z0-9]+$/;
    
    // Check if the input matches the regular expression
    if (regex.test(input)) {
        return document.getElementById("result").innerHTML = "Valid Syntax";
    } else {
        return document.getElementById("result").innerHTML = "Invalid Syntax";
    }
}

document.getElementById("result").innerHTML = "Valid Syntax"
