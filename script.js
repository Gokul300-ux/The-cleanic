
  document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".b3");

    button.addEventListener("click", function (event) {
      event.preventDefault(); 

      const fields = [
        { id: "q1", name: "First name" },
        { id: "q2", name: "Last name" },
        { id: "q3", name: "Email" },
        { id: "q4", name: "Phone number" },
        { id: "q5", name: "Address" },
        { id: "q6", name: "City" },
        { id: "q7", name: "Number of rooms" },
        { id: "q8", name: "Service" },
      ];

      let isValid = true;
      let data = {};
      let firstEmptyField = null;

      fields.forEach((field) => {
        const input = document.getElementById(field.id);
        const value = input.value.trim();

        if (value === "") {
          isValid = false;
          input.style.border = "2px solid red";
          if (!firstEmptyField) {
            firstEmptyField = input;
          }
        } else {
          input.style.border = "1px solid #555";
          data[field.name] = value;
        }
      });

      if (!isValid) {
        alert("Please fill out all required fields.");
        firstEmptyField.focus();
      } else {
  
        localStorage.setItem("quoteForm", JSON.stringify(data));
        alert("Quote request saved locally!");
   
        fields.forEach((field) => {
          document.getElementById(field.id).value = "";
        });
      }
    });
  });
