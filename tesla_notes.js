const form = document.forms["tesla_notes"];
const output = document.getElementById("output");

const updateOutput = (value = "") => {
  value = value.trim();

  if (value.length > 0) {
    output.innerHTML += "<li>" + value + "</li>" + "\n";
  }
};

form.addEventListener("submit", function (e) {
  e.preventDefault();

  /**
   * Takes the data from the form, making simple to interact with it
   * @type {FormData}
   */
  const data = new FormData(form);

  switch (data.get("input")) {
    case "test":
      window.location.replace("tesla-counter.html");
      break;
    case "delete":
      output.innerHTML = "";
      break;
    default:
      updateOutput(data.get("input"));
  }

  form.reset(); // Clears the form
});
