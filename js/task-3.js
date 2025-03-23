const inputUserName = document.querySelector("#name-input");
const outputUserName = document.querySelector("#name-output");
inputUserName.addEventListener("input", setUserName);
function setUserName(event) {
  const validUserName = event.currentTarget.value.trim();
  if (validUserName) {
    outputUserName.textContent = validUserName;
  } else {
    outputUserName.textContent = "Anonymous";
  }
}
