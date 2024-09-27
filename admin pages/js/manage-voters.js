// Event listener for adding a new voter
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const voterName = document.querySelector('#voter-name').value;
    const voterEmail = document.querySelector('#voter-email').value;

    // Simple form validation
    if (voterName && voterEmail) {
        addVoterToTable(voterName, voterEmail);
        alert('Voter added successfully.');
        document.querySelector('form').reset();
    } else {
        alert('Please fill in both fields.');
    }
});

// Function to add voter details to the table
function addVoterToTable(name, email) {
    const table = document.querySelector('#voters-table tbody');
    const newRow = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = name;

    const emailCell = document.createElement('td');
    emailCell.textContent = email;

    newRow.appendChild(nameCell);
    newRow.appendChild(emailCell);
    table.appendChild(newRow);
}
