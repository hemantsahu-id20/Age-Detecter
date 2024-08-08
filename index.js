document.getElementById('calculate-btn').addEventListener('click', () => {
    const birthdate = document.getElementById('birthdate').value;
    const resultElement = document.getElementById('result');

    if (!birthdate) {
        resultElement.textContent = 'Please enter a valid birth date.';
        return;
    }

    const age = calculateAge(new Date(birthdate));
    resultElement.textContent = `You are ${age} years old.`;
});

function calculateAge(birthdate) {
    const today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDiff = today.getMonth() - birthdate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }
    return age;
}