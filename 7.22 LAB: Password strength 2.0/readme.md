The `isStrongPassword` function checks whether a given password meets the criteria for being considered strong.
The function `isStrongPassword(password)` accepts a string `password` and performs the following checks:
Length Check Ensures the password is at least 8 characters long.
Password Check Ensures the password does not contain the word "password" (case insensitive).
Uppercase Letter Check Ensures the password contains at least one uppercase letter (A-Z).
Digit Check Ensures the password contains at least one digit (0-9).
Special Character Check Ensures the password contains at least one special character from `!@#$%^&*(),.?":{}|<>`.
Repeated Sequence Check Ensures the password does not contain any sequence of four repeating characters (e.g., "aaaa").
If all conditions are met, the function returns `true`, indicating the password is strong. If any condition fails, it returns `false` with a specific reason for failure.