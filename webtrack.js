import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://pahbxnmbixuxrmtyutzj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBhaGJ4bm1iaXh1eHJtdHl1dHpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkwNTY2MDEsImV4cCI6MjA2NDYzMjYwMX0.vVeLfym30Zl1utCSesTcTcLHttiYasPkW5h7cJYgVzk";
  
  const trackSave = () => {
    document
    .getElementById("identifierForm")
    .addEventListener("submit", async function (event) {
      event.preventDefault(); 
      
      const supabase = createClient(supabaseUrl, supabaseKey);

      const username = document.getElementById("username").value;
      const password = document.getElementById("tpassword").value;
      console.log("u: "+username+"p: "+password);
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

trackSave();
