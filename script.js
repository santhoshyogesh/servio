function chatbot(input) {
  let output = "";
  input = input.toLowerCase();
  if (input.includes("hello") || input.includes("hi")  || input.includes("Hii")) {
    output = "Hello, nice to meet you!";
  } else if (input.includes("how are you")) {
    output = "I'm doing fine, thank you for asking.";
  } else if (input.includes("what is your name")) {
    output = "My name is servio, I'm a chatbot.";
  } else if (input.includes("what can you do")) {
    output = "I can chat with you and answer some simple questions.";
  } else if (input.includes("tell me a joke")) {
    output = "Why did the chicken go to the seance? To get to the other side.";
  }
  else if (input.includes("i love you") || input.includes("I love you")) {
    output = "really,love you tooo...";
  }
  else if (input.includes("who is your lover")) {
    output = "All are my lovers..specifically 'Ragu' is my lover..";
  }
  else if (input.includes("How do I debug this code")) {
    output = "this will take time so you can go and drink a coffee or tea";
  }
  else if (input.includes("Can you suggest ideas for my project?")) {
    output = "1.cloud computing 2.machine learning and more...";
  }
  else if (input.includes("yes")) {
    output = "Mmm...Then";
  }
  else if (input.includes("Its rain")) {
    output = "Ahh.. yes enjoy your climate with hot tea...";
  } else {
    output = "Sorry, I don't understand that. Please try something else.";
  }
  return output;
}

// Display the user message on the chat
function displayUserMessage(message) {
  const chat = document.getElementById("chat");
  const userMessage = document.createElement("div");
  userMessage.classList.add("chat", "user");
  userMessage.innerHTML = `<span>${message}</span>`;
  chat.appendChild(userMessage);
  chat.scrollTop = chat.scrollHeight;
}

// Display the bot message on the chat
function displayBotMessage(message) {
  const chat = document.getElementById("chat");
  const botMessage = document.createElement("div");
  botMessage.classList.add("chat", "response");
  botMessage.innerHTML = `<span>${message}</span>`;
  chat.appendChild(botMessage);
  chat.scrollTop = chat.scrollHeight;
}

// Send the user message and get the bot response
function sendMessage() {
  const input = document.getElementById("input").value;
  if (input) {
    displayUserMessage(input);
    const output = chatbot(input);
    setTimeout(() => displayBotMessage(output), 1000);
    document.getElementById("input").value = "";
  }
}

// Add event listeners
document.getElementById("button").addEventListener("click", sendMessage);
document.getElementById("input").addEventListener("keypress", function(event) {
  if (event.keyCode === 13) {
    sendMessage();
  }
});