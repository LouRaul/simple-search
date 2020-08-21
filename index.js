const searchInput = document.getElementById("usernameInput");

searchInput.addEventListener("keyup", function (event) {
  let searchQuery = event.target.value.toLowerCase();
  let allNameDOMCollection = document.getElementsByClassName("nameTeam");
  for (let counter = 0; counter < allNameDOMCollection.length; counter++) {
    const currentName = allNameDOMCollection[counter].textContent.toLowerCase();
    if (currentName.includes(searchQuery)) {
      allNameDOMCollection[counter].style.display = "block";
    } else {
      allNameDOMCollection[counter].style.display = "none";
    }
  }
});
