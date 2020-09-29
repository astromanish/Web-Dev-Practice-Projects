document.getElementById("list").addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      var li = e.target.parentNode;
      document.getElementById("list").removeChild(li);
    }
  }
});
