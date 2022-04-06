const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/formulario", (request, response) => {
    const data = request.body;
    
    Object.entries(data).forEach(item => {
        if (!item[1]) response.json({ message: "Formulário incompleto" });
    });

    response.json({ message: "Formulário enviado com sucesso" });
});

app.listen(3001, () => {
    console.log("Servidor rodando");
});
