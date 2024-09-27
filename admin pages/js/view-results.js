// Dummy election results data
const results = [
    { candidate: 'John Doe', votes: 100 },
    { candidate: 'Jane Smith', votes: 130 },
    { candidate: 'Bob Johnson', votes: 90 }
];
let winnerName ="" ,winnerVotes = 0;
// Function to display election results in the table
function displayResults() {
    const table = document.createElement('table');
    results.forEach(result => {
        const row = document.createElement('tr');

        const candidateCell = document.createElement('td');
        candidateCell.textContent = result.candidate;

        const votesCell = document.createElement('td');
        votesCell.textContent = result.votes;
        if(result.votes > winnerVotes)
        {
            winnerVotes = result.votes;
            winnerName = result.candidate;
        }
        row.appendChild(candidateCell);
        row.appendChild(votesCell);
        table.appendChild(row);
    });
    let winner = document.createElement('p');winner.textContent = `Election Winner is ${winnerName} with ${winnerVotes} votes`;
    document.getElementById("results-list").appendChild( table);
    document.getElementById("results-list").appendChild(winner);
}

// Call displayResults when the page loads
window.onload = displayResults;
