function submitYes() {
  document.getElementById("attendance").value = "YES";
  document.querySelector("form").submit();
  localStorage.setItem("guestName", document.querySelector(".name-input").value);
  window.location.href = "menu.html";
}

function submitNo() {
  document.getElementById("attendance").value = "NO";
  document.querySelector("form").submit();
  window.location.href = "thankyou-no.html";
}

function submitMenu() {
  document.getElementById("menuName").value =
    localStorage.getItem("guestName") || "";
  document.querySelector("form").submit();
  window.location.href = "thankyou-yes.html";
}
function submitNext() {
  // Optional: save the name to localStorage
  localStorage.setItem("guestName", document.querySelector(".name-input").value);

  // Submit the form to Google Forms
  document.querySelector("form").submit();

  // Optional: redirect to next page
  window.location.href = "menu.html"; // change this to whatever your next page is
}




