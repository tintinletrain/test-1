// script.js
document.addEventListener('DOMContentLoaded', function () {
    const buttons = {
        past: document.getElementById('btn-past'),
        present: document.getElementById('btn-present'),
        future: document.getElementById('btn-future')
    };

    const sections = {
        past: document.getElementById('past-section'),
        present: document.getElementById('present-section'),
        future: document.getElementById('future-section')
    };

    const backButtons = document.querySelectorAll('.back-btn');

    // Function to show a section
    function showSection(section) {
        for (let key in sections) {
            sections[key].style.display = 'none';
        }
        sections[section].style.display = 'block';
    }

    // Event listeners for main buttons
    buttons.past.addEventListener('click', () => showSection('past'));
    buttons.present.addEventListener('click', () => showSection('present'));
    buttons.future.addEventListener('click', () => showSection('future'));

    // Event listener for back buttons
    backButtons.forEach(button => {
        button.addEventListener('click', () => {
            for (let key in sections) {
                sections[key].style.display = 'none';
            }
        });
    });
});
