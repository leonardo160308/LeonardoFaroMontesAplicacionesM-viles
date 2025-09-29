<<<<<<< HEAD
// script.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("dniForm");
  const dniInput = document.getElementById("dniNumber");
  const letterInput = document.getElementById("dniLetter");
  const msg = document.getElementById("message");

  const letras = [
    "T","R","W","A","G","M","Y","F","P","D","X","B",
    "N","J","Z","S","Q","V","H","L","C","K","E","T"
  ];

  function showMessage(text, type) {
    msg.textContent = text;
    msg.className = type === "success" ? "success" : "error";
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    msg.textContent = "";
    msg.className = "";

    const dniRaw = dniInput.value.trim();
    const letraRaw = letterInput.value.trim().toUpperCase();

    const dniNumber = Number(dniRaw);

    // Validación en una sola instrucción (fuera de rango)
    if (isNaN(dniNumber) || dniNumber < 0 || dniNumber > 99999999) {
      showMessage("Número de DNI no válido (debe estar entre 0 y 99.999.999).", "error");
      return;
    }

    // Validar que la letra sea una sola letra A-Z
    if (!/^[A-Z]$/.test(letraRaw)) {
      showMessage("Introduzca una sola letra (A-Z).", "error");
      return;
    }

    // Calcular letra correcta
    const resto = dniNumber % 23;
    const letraCorrecta = letras[resto];

    if (letraRaw !== letraCorrecta) {
      showMessage(`Letra incorrecta. La letra correcta para ${dniNumber} es ${letraCorrecta}.`, "error");
    } else {
      showMessage(`DNI correcto: ${dniNumber}-${letraCorrecta}`, "success");
    }
  });

  // Botón limpiar
  document.getElementById("clearBtn").addEventListener("click", () => {
    dniInput.value = "";
    letterInput.value = "";
    msg.textContent = "";
    msg.className = "";
  });

  // Forzar mayúsculas en el input de letra
  letterInput.addEventListener("input", function () {
    this.value = this.value.toUpperCase().replace(/[^A-Z]/g, "");
  });
});
=======
// script.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("dniForm");
  const dniInput = document.getElementById("dniNumber");
  const letterInput = document.getElementById("dniLetter");
  const msg = document.getElementById("message");

  const letras = [
    "T","R","W","A","G","M","Y","F","P","D","X","B",
    "N","J","Z","S","Q","V","H","L","C","K","E","T"
  ];

  function showMessage(text, type) {
    msg.textContent = text;
    msg.className = type === "success" ? "success" : "error";
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    msg.textContent = "";
    msg.className = "";

    const dniRaw = dniInput.value.trim();
    const letraRaw = letterInput.value.trim().toUpperCase();

    const dniNumber = Number(dniRaw);

    // Validación en una sola instrucción (fuera de rango)
    if (isNaN(dniNumber) || dniNumber < 0 || dniNumber > 99999999) {
      showMessage("Número de DNI no válido (debe estar entre 0 y 99.999.999).", "error");
      return;
    }

    // Validar que la letra sea una sola letra A-Z
    if (!/^[A-Z]$/.test(letraRaw)) {
      showMessage("Introduzca una sola letra (A-Z).", "error");
      return;
    }

    // Calcular letra correcta
    const resto = dniNumber % 23;
    const letraCorrecta = letras[resto];

    if (letraRaw !== letraCorrecta) {
      showMessage(`Letra incorrecta. La letra correcta para ${dniNumber} es ${letraCorrecta}.`, "error");
    } else {
      showMessage(`DNI correcto: ${dniNumber}-${letraCorrecta}`, "success");
    }
  });

  // Botón limpiar
  document.getElementById("clearBtn").addEventListener("click", () => {
    dniInput.value = "";
    letterInput.value = "";
    msg.textContent = "";
    msg.className = "";
  });

  // Forzar mayúsculas en el input de letra
  letterInput.addEventListener("input", function () {
    this.value = this.value.toUpperCase().replace(/[^A-Z]/g, "");
  });
});
>>>>>>> cff9081abda0ba00c6f2ae620cb76bdf57918767
