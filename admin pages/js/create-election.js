document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const electionName = document.querySelector('#election-name').value;
    const candidates = document.querySelector('#candidates').value;
    const startTime = document.querySelector('#start-date').value;
    const endTime = document.querySelector('#end-date').value;
    console.log(startTime+" "+endTime);
    if(endTime <= startTime)
        alert('Choose a valid start-date-time and end-date-time ');
    else{
        alert('Election created successfully!');
        window.location.href = 'admin-dashboard.html';
     } // Redirect to admin dashboard after creation
});
