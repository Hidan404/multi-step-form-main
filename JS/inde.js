document.addEventListener("DOMContentLoaded", function() {
    // Seleciona o formulário da primeira etapa
    const formStep1 = document.getElementById("form-step-1");
  
    // Função para validar os campos
    function validateInputs() {
      let valid = true;
  
      // Validação do nome
      const nome = document.getElementById("nome");
      if (nome.value.trim() === "" || nome.value.length < 3) {
        valid = false;
        nome.classList.add("is-invalid");
      } else {
        nome.classList.remove("is-invalid");
      }
  
      // Validação do email
      const email = document.getElementById("email");
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!email.value.match(emailPattern)) {
        valid = false;
        email.classList.add("is-invalid");
      } else {
        email.classList.remove("is-invalid");
      }
  
      // Validação do telefone
      const telefone = document.getElementById("telefone");
      const telefonePattern = /^\+?[0-9\s-]{7,15}$/;
      if (!telefone.value.match(telefonePattern)) {
        valid = false;
        telefone.classList.add("is-invalid");
      } else {
        telefone.classList.remove("is-invalid");
      }
  
      return valid;
    }
  
    // Função para carregar o próximo formulário
    function loadNextStep() {
      // O novo conteúdo HTML para a segunda etapa
      const step2Content = `
        <h1>Billing Information</h1>
        <p>Please fill in your billing details:</p>
        <form id="form-step-2" class="form-initial">
          <div class="col mb-5">
            <label for="address" class="form-label">Address</label>
            <input type="text" id="address" class="form-control" placeholder="e.g. 123 Main St" required>
          </div>
          <div class="col mb-5">
            <label for="city" class="form-label">City</label>
            <input type="text" id="city" class="form-control" placeholder="e.g. New York" required>
          </div>
          <div class="col mb-5">
            <label for="postal-code" class="form-label">Postal Code</label>
            <input type="text" id="postal-code" class="form-control" placeholder="e.g. 10001" required>
          </div>
          <button type="submit" id="button-sub-2" class="btn btn-primary">Submit</button>
        </form>
      `;
  
      // Substitui o conteúdo da div principal pelo próximo formulário
      document.getElementById("main-content").innerHTML = step2Content;
  
      // Vincula a próxima etapa ao novo formulário
      document.getElementById("form-step-2").addEventListener("submit", function(event) {
        event.preventDefault();
        if (validateNextStep()) {
          alert("Form submitted successfully!");
        }
      });
    }
  
    // Função para validar os campos da segunda etapa
    function validateNextStep() {
      let valid = true;
  
      const address = document.getElementById("address");
      const city = document.getElementById("city");
      const postalCode = document.getElementById("postal-code");
  
      if (address.value.trim() === "") {
        valid = false;
        address.classList.add("is-invalid");
      } else {
        address.classList.remove("is-invalid");
      }
  
      if (city.value.trim() === "") {
        valid = false;
        city.classList.add("is-invalid");
      } else {
        city.classList.remove("is-invalid");
      }
  
      const postalCodePattern = /^[0-9]{5}$/;
      if (!postalCode.value.match(postalCodePattern)) {
        valid = false;
        postalCode.classList.add("is-invalid");
      } else {
        postalCode.classList.remove("is-invalid");
      }
  
      return valid;
    }
  
    // Vincula o evento de submit ao primeiro formulário
    formStep1.addEventListener("submit", function(event) {
      event.preventDefault(); // Evita o envio do formulário
  
      // Valida os campos do primeiro formulário
      if (validateInputs()) {
        // Se válidos, carrega o próximo passo
        loadNextStep();
      }
    });
  });
  