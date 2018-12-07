/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
const Navigation = () => {
  let navBar = document.getElementById("myNavBar");
  if (navBar.className === "hero") {
    navBar.className += "responsive";
  } else {
    navBar.className = "myNavBar";
  }
}

const toSubmit