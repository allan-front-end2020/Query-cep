import React,{useState} from "react";
import api from "../../services/api";

function form() {
   const [cep, setCep] =useState('')
   
  async function buscarCep(){
   
    if(cep ===""){
      alert("coloque um cep")
      setCep('')
    }

try {
  const response = await api.get(`${cep}/json`)
  console.log(response.data)
} catch (e) {

}


  }



  return (
    <div>
      <input 
      type="text"
      value={cep}
      onChange={(e)=> setCep(e.target.value)}
      />
      <button onClick={buscarCep}>procurar</button>
    </div>
  );
}

export default form;
