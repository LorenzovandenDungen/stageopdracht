// Admin Login Page
function loginPage() {
    let username = prompt('Username?');
    let password = prompt('Password?');
    if (username === 'admin' && password === 'password') {
        // Successfully logged in
    } else {
        // Login failed
    }
}

// Create User
function createUser() {
    let name = prompt('Name of user?');
    let email = prompt('Email of user?');
    let role = prompt('Role of user (Admin, Employee, Company)?');

    // Write user data to database
}

// Send Invite
function sendInvite() {
    let trainingID = prompt('Training ID?');
    let userIDs = prompt('User IDs to invite (comma separated)?');
    let expiryTime = prompt('Expiry time for invite?');
    let message = `You have been invited to complete a training (${trainingID}) before ${expiryTime}.`;

    // Send invite emails with message to users in userIDs
}
