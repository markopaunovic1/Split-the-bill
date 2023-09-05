const button = document.getElementById('calculateButton');
const resetButton = document.getElementById('resetButton');
const sumField = document.getElementById('sum');
const nrOfFriendsField = document.getElementById('numberOfFriends');
const tipField = document.getElementById('tip');

function calculateTip(sum, tip) {
    const calculatedTip = parseInt(sum) * parseInt(tip) / 100;
    return calculatedTip;
}

function divideTotal(total, nrOfFriends) {
    return total / parseInt(nrOfFriends);

}

function displayDividedSum(sum) {
    const element = document.getElementById('friendSum');
    element.innerHTML = sum + ' kr';

    const inputForm = document.getElementById('inputForm');
    inputForm.classList.toggle('hide');

    document.getElementById('showSum').classList.toggle('hide');

}

button.addEventListener('click', function() {

    const sum = sumField.value;
    const nrOfFriends = nrOfFriendsField.value;
    const tip = tipField.value;

    const calculatedTip = calculateTip(sum, tip);
    const total = parseInt(sum) + calculatedTip;


    const friendSum = divideTotal(total, nrOfFriends);

    displayDividedSum(friendSum);

});

resetButton.addEventListener('click', function() {
    console.log("click");

    sumField.value = '';
    nrOfFriendsField.value = '';
    tipField.value = '';

    document.getElementById('showSum').classList.toggle('hide');

    const showInput = document.getElementById('inputForm');
    showInput.classList.toggle('hide');

    console.log(showInput);
}) 