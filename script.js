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


