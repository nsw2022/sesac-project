document.getElementById("send-button").addEventListener("click", function () {
  const userInput = document.getElementById("user-input").value;
  sendMessageToChatbot(userInput);
});
/*
document
  .getElementById("user-input")
  .addEventListener("keyup", function (event) {
    if (event.key === "Shift" && event.shiftKey) {
      event.preventDefault();
      const userInput = document.getElementById("user-input");
      userInput.value += "\n";
      userInput.style += "height : 20px;";
      //console.log("나는 쉬프트와 엔터를 입력 받았따!");
    }
    if (event.key === "Enter") {
      const userInput = document.getElementById("user-input").value;
      sendMessageToChatbot(userInput);
      //console.log("나는 엔터를 입력 받았따!");
    }
  });
*/
/*
document
  .getElementById("user-input")
  .addEventListener("input", function (event) {
    const userInput = event.target;
    //userInput.style.height = "auto";
    userInput.style.height += 30 + "px";
  });
*/
document
  .getElementById("user-input")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter" && event.shiftKey) {
      //event.preventDefault();
      const userInput = document.getElementById("user-input");
      userInput.style.height = 100 + "px";
      let scHeight = event.target.scrollHeight;
      userInput.style.height = `${scHeight}px`;
      userInput.style.maxHeight = "400px";
      //userInput.style.height = auto;
      userInput.style.borderRadius = 8 + "px";
      console.log("나는 쉬프트와 엔터를 입력 받았다!");
    } else if (event.key === "Enter") {
      event.preventDefault();
      const userInput = document.getElementById("user-input").value;
      sendMessageToChatbot(userInput);
      //userInput.value = "";
      console.log("나는 엔터를 입력 받았다!");
    }
  });

function sendMessageToChatbot(message) {
  console.log(message);
  if (message.trim() === "") {
    return;
  }

  updateChatBox("User", message);
  console.log(message);
  fetch(`http://localhost:8000/chat?user_input=${encodeURIComponent(message)}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      updateChatBox("도봉이", data["도봉이"]);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function updateChatBox(sender, message) {
  const chatBox = document.getElementById("chat-box");
  const userInput = document.getElementById("user-input");
  if (sender == "User") {
    console.log("user:", message);
    var message = message.replaceAll("\n", "<br>");
    chatBox.innerHTML += `<p style="
      
    border: 1px solid #444;
    height: 15%;
    padding: 8px;
    border-radius: 8px;
    box-shadow: 5px 8px #d6d6d6;
    max-width: 700px;

    "><strong style="
    display: flex;
    align-items: baseline;
    justify-content: flex-start;
    padding-bottom: 15px;
    padding-left: 5px;
    
    ">${sender}:</strong> ${message}</p><br>`;
    // console.log(typeof message);

    userInput.value = "";
    console.log(message);
    //console.log("사람의 답변입니다");
  } else {
    chatBox.innerHTML += `<p style="
   
    border: 1px solid #444;
    height: 15%;
    width: 100%;
    border-radius: 8px;
    box-shadow: -5px 8px #d6d6d6;
    

    ">
    <strong style="
    display: flex;
    align-items: baseline;
    justify-content: flex-end;
   
    padding-right: 5px;
    ">${sender}:<br></strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${message}</p><br>`;
    //console.log("기계의 답변입니다");
  }

  chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}
