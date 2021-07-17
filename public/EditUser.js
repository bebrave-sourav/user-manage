const template = document.createElement("template");
template.innerHTML = `
<div style="
                  border: 1px solid black;
                  border-radius: 5px;
                  margin-top: 4px;
                " class=".content">
              <form>
                <input type="text" name="fname" class="form-control" id="t1" placeholder="enter first name" required disabled>
                <br />
                <input type="text" name="lanme" class="form-control" id="t2" placeholder="enter last name" required disabled>
                <br />
                <input type="email" name="email" class="form-control" id="t3" placeholder="enter email" required
                  disabled />
                <br />
                <button class="btn btn-success" id="b2"
                  style="margin-left: 37%;height: 20px;padding-top: 0%;padding-bottom: 5px; margin-bottom: 5px;"
                  disabled></button>
              </form>
            </div>
`;

class EditUser extends HTMLElement {
  constructor() {
    super();

  }
  connectedCallback() {

    this.appendChild(template.content);
  }

  disconnectedCallback() { }
}

window.customElements.define("edit-user", EditUser);
