const form = document.querySelector("form");
const userTable = document.querySelector("tbody");
const budgetInput = document.querySelector("input.budget");
const notFound = document.querySelector(".not-found")

form.addEventListener("submit", function(e){
  e.preventDefault();

  const name = form.querySelector(".name").value.trim();
  const date = form.querySelector(".date").value.trim();
  const budget = form.querySelector(".budget").value.trim();

  if(name && date && budget){
    addUserToTable(name, date, budget);
  }else{
    alert("Fill in the form");
  }
  form.reset();
  
  if(userTable.children.length){
    notFound.style.display = "none";
  }
  
});

budgetInput.addEventListener("input", function(e){
  const value = e.target.value.replace(/[^0-9]/g, "");
  e.target.value = value;
});

function addUserToTable(name, date, budget){
  
  const tr = `<tr>
                <td></td>
                <td>${name}</td>
                <td>${date}</td>
                <td>$${parseFloat(budget).toFixed(2)}</td>
                <td>
                  <div class="action-group">
                    <button onclick="removeUser(this)" class="custom-button remove-button" type="button">Delete</button>
                  </div>
                </td>
              </tr>`;
  userTable.insertAdjacentHTML('beforeend', tr);
}

function removeUser(btn){
  const tr = btn.closest("tr");
  userTable.removeChild(tr);
  
  if(!userTable.children.length){
     notFound.style.display = "block";
  }
}

