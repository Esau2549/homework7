console.log('Hello World!');

document.getElementById('downloadResumeBtn').addEventListener('click', function() {
    alert('Resume downloaded successfully!');
});

// Function to create a greeting message
function showGreeting(name) {
    return "Hello, my name is " + name + "! Welcome to my portfolio!";
}

// Function to display the greeting when the page loads
function displayGreeting() {
    const name = "Emmanuel"; // 
    const greetingMessage = showGreeting(name);
    document.getElementById('greeting').textContent = greetingMessage;
}

// Call displayGreeting when the page loads
window.onload = displayGreeting;

const project = {
    name: "Website Redesign",
    deadline: "2024-12-21" // Deadline in YYYY-MM-DD format
};

// Function to calculate the number of days until the deadline
function daysUntilDeadline(deadline) {
    // Get the current date
    const currentDate = new Date();
    
    // Create a Date object for the deadline
    const deadlineDate = new Date(deadline);
    
    // Calculate the difference in milliseconds
    const differenceInMilliseconds = deadlineDate - currentDate;

    // Convert milliseconds to days
    const daysRemaining = Math.ceil(differenceInMilliseconds / (1000 * 60 * 60 * 24));

    return daysRemaining;
}

// Calculate the days until the project's deadline
const remainingDays = daysUntilDeadline(project.deadline);

// Display the remaining days alongside the project's details
console.log(`Project: ${project.name}`);
console.log(`Deadline: ${project.deadline}`);
console.log(`Days until deadline: ${remainingDays} days`);