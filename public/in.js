var url;
var selectedUserData = {};
sugg = () => {
  alert('sugg');
  url = "http://localhost:5000/sugg?userstrng="+document.getElementById('form1').value;
  fetch(url, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      table=document.createElement('table');
      sugg=document.getElementById("sugg");
      sugg.innerHTML = "";
      sugg.style.display = "block"; 
      for (let i = 0; i < data.result.length; i++) {
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        td.innerText = data.result[i].fname+" "+data.result[i].lname;
        td.onclick=()=>{
          document.getElementById('form1').value = td.innerText;
          selectedUserData['id']=data.result[i].id;
          selectedUserData['fname']=data.result[i].fname;
          selectedUserData['lname']=data.result[i].lname;
          selectedUserData['email']=data.result[i].email;
        }
        tr.appendChild(td);
        table.appendChild(tr);
      } 
      sugg.appendChild(table);
    }); 
  }

check = () => {
  setTextBox();
  const operation = document.getElementById("b2").innerText;
  document.getElementById("t1").disabled = false;
  document.getElementById("t2").disabled = false;
  document.getElementById("t3").disabled = false;
  document.getElementById("b2").disabled = false;
  switch (operation) {
    case 'ADD': resetTextBox(); document.getElementById("b2").onclick = createUser; break;
    case 'UPDATE': document.getElementById("b2").onclick = updateUser; break;
    case 'DELETE': document.getElementById("b2").onclick = deleteUser;
  }

};
recheck = () => {
  document.getElementById("t1").disabled = true;
  document.getElementById("t2").disabled = true;
  document.getElementById("t3").disabled = true;
  document.getElementById("b2").disabled = true;
};
setTextBox = () => {
  document.getElementById("t1").value = selectedUserData.fname;
  document.getElementById("t2").value = selectedUserData.lname;
  document.getElementById("t3").value = selectedUserData.email;
}
resetTextBox = () => {
  document.getElementById("t1").value = "";
  document.getElementById("t2").value = "";
  document.getElementById("t3").value = "";
  selectedUserData = {};
}
createUser = () => {
  const form = document.forms[0];
  const inputs = form.querySelectorAll("input");
  //console.log(inputs[2].value);
  var userData = {
    fname: inputs[0].value,
    lname: inputs[1].value,
    email: inputs[2].value,
  };
  //const formData = new FormData(form);
  url = "http://localhost:5000/user";
  fetch(url, {
    method: "POST",
    headers: { "Content-type": "application/json ; charset=UTF-8" },
    body: JSON.stringify({ userData }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success == 1) {
        // document.getElementById("alert").classList.remove("d-none");
        resetTextBox();
        readUsers();
      }
    });
};
updateUser = () => {
  const form = document.forms[0];
  const inputs = form.querySelectorAll("input");
  var userData = {};
  var i = 0;
  for (let proprety in selectedUserData) {
    if (proprety == "id") {
      userData[proprety] = selectedUserData[proprety];
      continue;
    }
    if (inputs[i].value != selectedUserData[proprety]) {
      userData[proprety] = inputs[i].value;
    }
    i++;
  }
  url = "http://localhost:5000/user";
  fetch(url, {
    method: "PUT",
    headers: { "Content-type": "application/json ; charset=UTF-8" },
    body: JSON.stringify({ userData }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success == 1) {
        // document.getElementById("alert").classList.remove("d-none");
        resetTextBox();
        readUsers();
      }
    });
};

readUser = () => {
  url = "http://localhost:5000/user?userid=4";
  fetch(url, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("t1").value = data.result[0].fname;
      document.getElementById("t2").value = data.result[0].lname;
      document.getElementById("t3").value = data.result[0].email;
      if (data.success == 1) {
        //document.getElementById("alert").classList.remove("d-none");
      }
    });
};

readUsers = () => {
  recheck();
  url = "http://localhost:5000/users";
  fetch(url, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("ta").innerHTML = "";
      for (let i = 0; i < data.result.length; i++) {
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        const ul = document.createElement('ul');
        ul.style.listStyleType = "none";
        for (let j = 0; j < 2; j++) {
          const li = document.createElement('li');

          if (j == 0) {
            li.innerHTML = data.result[i].fname + " " + data.result[i].lname + "  <button class='btn btn-primary' value='" + JSON.stringify({ fname: data.result[i].fname, lname: data.result[i].lname, email: data.result[i].email, id: data.result[i].id }) + "' id='" + i + "u" + "' style='height: 25px;width: 25px;padding: 0%;'><i class='fas fa-pencil-alt'></i></button>  <button class='btn btn-danger' value='" + JSON.stringify({ fname: data.result[i].fname, lname: data.result[i].lname, email: data.result[i].email, id: data.result[i].id }) + "' id='" + i + "d" + "' style='height: 25px;width: 25px;padding: 0%;'><i class='fas fa-trash'></i></button>";

            ul.appendChild(li);

            continue;
          }
          li.innerHTML = data.result[i].email;
          ul.appendChild(li);
        }

        td.appendChild(ul);
        tr.appendChild(td);
        document.getElementById("ta").appendChild(tr);
        document.getElementById(i + 'u').onclick = () => {
          selectedUserData = JSON.parse(document.getElementById(i + 'u').value);
          document.getElementById('b2').innerText = 'UPDATE';
          check();
        }
        document.getElementById(i + 'd').onclick = () => {
          selectedUserData = JSON.parse(document.getElementById(i + 'd').value);
          //console.log(document.getElementById(i + 'd').value);
          document.getElementById('b2').innerText = 'DELETE';
          check();
        }
      }
      const tr = document.createElement('tr');
      const td = document.createElement('td');
      const button = document.createElement('button');
      button.classList.add('btn');
      button.classList.add('btn-success');
      button.innerHTML = "<i class='fas fa-user-plus'></i>";
      button.onclick = () => {
        document.getElementById('b2').innerText = 'ADD';
        check();
      };

      td.appendChild(button);
      tr.appendChild(td);
      document.getElementById("ta").appendChild(tr);
      if (data.success == 1) {

      }
    });
};

deleteUser = () => {
  alert("Are U sure to delete this user?");
  url = "http://localhost:5000/user?userid=" + selectedUserData.id;
  fetch(url, {
    method: "DELETE",
  }).then((response) => response.json())
    .then((data) => {
      if (data.success == 1) {
        // document.getElementById("alert").classList.remove("d-none");
        resetTextBox();
        readUsers();
      }
    });
};
