import React, { useState } from "react";

function Subscribe() {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  const formURL =
    "https://script.google.com/macros/s/AKfycbwF0oNcwRCgTVUh9GfcqgBTWw7hEd8QnJ17ni4JtXwcuq2ZK2_MF2cakFDMJgmTs4GP/exec"; // Replace with your Google Apps Script Web App URL

  function handleInput(event) {
    setEmail(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Validate email format
    if (email === "" || !/\S+@\S+\.\S+/.test(email)) {
      setIsEmailValid(false);
    } else {
      setIsEmailValid(true);

      // Prepare data to send to Google Apps Script
      const formData = new FormData();
      formData.append("email", email); // The parameter name should match the key in your Apps Script

      // Send the data to Google Apps Script Web App
      fetch(formURL, {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          alert(`Thank you for subscribing with ${email}`);
          setEmail(""); // Clear the email input
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("There was an error submitting your email.");
        });
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center w-1/2 sm:max-w-3xl mx-auto"
    >
      <input
        type="email"
        placeholder="Subscribe for updates"
        value={email}
        onChange={handleInput}
        className="flex-grow text-white py-1 px-2 sm:py-2 sm:px-4 bg-transparent border rounded-none border-white font-oxygenlight"
      />
      <button
        type="submit"
        className="bg-roseda text-white px-2 py-1 sm:px-6 sm:py-2 hover:bg-sage border border-gray-300 font-oxygenlight"
      >
        Subscribe
      </button>
    </form>
  );
}

export default Subscribe;
