 function validateForm() {
    return (isNotEmpty("name", "Please enter your name!")
    && isNotEmpty("lname", "Please enter your last name!")
    && isSelected("city", "Please make a selection!")
    && isSelected("state", "Please make a selection!")
    && isNumeric("zipcode", "Please enter a 5-digit zip code!")
    && isLengthMinMax("zipcode", "Please enter a 5-digit zip code!", 5, 5)
    && isNumeric("phone", "Please enter a valid phone number!")
    && isValidEmail("email", "Enter a valid email!")
    && isLengthMinMax("login", "Enter a valid login id!", 10, 25)
    && isLengthMinMax("password", "Enter a valid password!", 6, 8));
}