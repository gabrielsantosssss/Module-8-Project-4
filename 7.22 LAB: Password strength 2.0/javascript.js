function isStrongPassword(password) {
    // Check if password length is less than 8 characters
    if (password.length < 8) {
        return false;
    }

    // Check if password contains the word "password" (case insensitive)
    if (password.toLowerCase().includes("password")) {
        return false;
    }

    // Check if password contains at least one uppercase letter (A-Z)
    if (!/[A-Z]/.test(password)) {
        return false;
    }

    // Check if password contains at least one digit (0-9)
    if (!/[0-9]/.test(password)) {
        return false;
    }

    // Check if password contains at least one special character
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        return false;
    }

    // Check if password contains any sequence of four repeating characters
    if (/([a-zA-Z0-9])\1{3,}/.test(password)) {
        return false;
    }

    // If all conditions pass, the password is considered strong
    return true;
}

console.log("Testing isStrongPassword()...");
console.log("Qwerty - " + isStrongPassword("Qwerty"));                   // false - Too short, no number, no special character
console.log("passwordQwerty - " + isStrongPassword("passwordQwerty"));   // false - Contains "password"
console.log("qwerty123 - " + isStrongPassword("qwerty123"));             // false - No uppercase chars, no special character
console.log("Qwerty123 - " + isStrongPassword("Qwerty123"));             // false - No special character
console.log("Qaaaa123! - " + isStrongPassword("Qaaaa123!"));             // false - Repeated sequence of four
console.log("Qwerty123! - " + isStrongPassword("Qwerty123!"));           // true

// Do NOT remove the following line:
export default isStrongPassword;
