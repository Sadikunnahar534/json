// ============================================
// CSE472 Lab 03 - JavaScript Foundations
// Student Workshop Registration System
// ============================================

// Variable that stores the number of available seats
let availableSeats = 12;

// Interaction 1: Check Registration Status
// Finds the paragraph by its id and updates its text
function checkRegistration() {
  let message = document.getElementById("registrationStatus");
  message.textContent = "Registration is currently open.";
}

// Interaction 2: Check Seat Availability
// Uses a simple if...else condition to decide the message
function checkSeats() {
  let message = document.getElementById("seatMessage");

  if (availableSeats > 0) {
    message.textContent = "Seats are available. Remaining seats: " + availableSeats;
  } else {
    message.textContent = "Sorry, no seats are available.";
  }
}

// Interaction 3: Personal Greeting
// Reads the value typed in the Full Name input and shows a greeting
function showGreeting() {
  let name = document.getElementById("studentName").value;
  let output = document.getElementById("greetingMessage");

  if (name === "") {
    output.textContent = "Please type your name first.";
  } else {
    output.textContent = "Welcome, " + name + "!";
  }
}

// Independent improvement: Workshop reminder button
// A small extra feature using only concepts taught in this lab
function showReminder() {
  let reminder = document.getElementById("reminderMessage");
  reminder.textContent = "Reminder: The workshop starts at 9:00 AM in Lab Room 302.";
}
