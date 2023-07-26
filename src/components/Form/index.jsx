import React, { useState } from "react";
import api from "../../services/api";
import { Container, ContainerSearch } from "./styles";
import InputMask from "react-input-mask";

function form() {
  const [cep, setCep] = useState("");
  const [result, setResult] = useState({});

  async function buscarCep() {
    if (cep === "") {
      alert("Coloque um cep");
    }

    try {
      const response = await api.get(`${cep}/json`);
      console.log(response.data);
      setResult(response.data);
      setCep("");
    } catch (e) {
      console.log(e);
      alert("Erro na busca!!");
      setCep("");
    }
  }

  return (
    <div>
      <ContainerSearch>
        <InputMask
          mask="99999-999"
          type="text"
          value={cep}
          placeholder="Digite seu cep......"
          onChange={(e) => setCep(e.target.value)}
        />
        <button onClick={buscarCep}>Procurar</button>
      </ContainerSearch>

      {Object.keys(cep) > 0 && (
        <Container>
          <div>
            <span>Cep:</span>
          </div>
          <div>{result.cep}</div>
          <div>
            <span>Logradouro:</span>
          </div>
          <div>{result.logradouro}</div>
          <div>
            <span>Bairro:</span>
          </div>
          <div>{result.bairro}</div>
          <div>
            <span>Bairro:</span>
          </div>
          <div>{result.localidade}</div>
        </Container>
      )}
    </div>
  );
}

export default form;
