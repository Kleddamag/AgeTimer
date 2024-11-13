// script.js

document.addEventListener('DOMContentLoaded', function() {
    const birthDateForm = document.getElementById('birthDateForm');
    const birthDateInput = document.getElementById('birthDate');
    const ageDisplay = document.getElementById('ageDisplay');
    let ageInterval;

    birthDateForm.addEventListener('submit', function(e) {
        e.preventDefault();
        if (birthDateInput.value) {
            startAgeTimer(new Date(birthDateInput.value));
        } else {
            ageDisplay.textContent = '';
            clearInterval(ageInterval);
        }
    });

    function startAgeTimer(birthDate) {
        function updateAge() {
            const now = new Date();
            let ageInMilliseconds = now - birthDate;
            let ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
            ageDisplay.textContent = 'Your current age is: ' + formatNumber(ageInYears) + ' years';
        }

        updateAge(); // Initial call
        clearInterval(ageInterval); // Clear any existing intervals
        ageInterval = setInterval(updateAge, 50); // Update every 50 milliseconds
    }

    function formatNumber(num) {
        return num.toLocaleString(undefined, {
            minimumFractionDigits: 10,
            maximumFractionDigits: 10
        });
    }
});
