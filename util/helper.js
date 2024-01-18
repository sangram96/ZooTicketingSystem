// method handle the price with respective age's
const getPrice = (age) => {
    if (age <= 2) {
        return 0;
    } else if (age >= 3 && age < 18) {
        return 100;
    } else if (age >= 18 && age < 60) {
        return 500;
    } else {
        return 300;
    }
}

// exports the method
module.exports = getPrice;