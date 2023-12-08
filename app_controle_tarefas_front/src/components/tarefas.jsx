// Componente para incluir usuarios no Banco de Dados.
//Declaração da função do componente usuario
import {useForm} from "react-hook-form";
// Importar o axios para o código
import {api} from "../config_axios" // aqui vai dar ruim
// Importar useState inclusivo do react usa metódo promisses com async e await
import { useState } from "react";
//Register serve para definir os nomes dos campos do form (validação)
// handleSubmit, para indicar o método a ser acionado no evento onSubmit do form
const tarefas = () => {
const {register, handleSubmit} = useForm();
const [aviso, setAviso ] = useState("");
const salvar = async (campos) => {
    try {
            const resposta = await api.post("tarefa", campos);
            setAviso("Tarefa cadastrada com sucesso!");
            alert("Tarefa cadastrada com sucesso!");
        } catch (error) {
            setAviso("Erro ao cadastrar o Tarefa!");
        }
    }
//Metódo chamado para enviar o form on submit
//const salvar = (campos) => {
//JSON.stringify) converte um objeto javascript para uma String JSON
//alert(JSON.stringify(campos));
//}
//form on submit={handleSubmit(salvar)}


    return( //aqui é o que vai ser exibido em tela
        <div className="container">
            <h4 className="container">Inclusão de Tarefa</h4>
            <form onSubmit={handleSubmit(salvar)}>
                <div className="form-group mt-2">
                     <label htmlFor="sobrenome">Titulo</label>
                         <input type="text" className="form-control" id="titulo" required {...register("titulo")}/>
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="idade">Descrição</label>
                         <input type="text" className="form-control" id="descricao" required {...register("descricao")}/>
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="idade">Status</label>
                         <input type="text" className="form-control" id="status" required {...register("status")}/>
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="idade">Data de Criação</label>
                         <input type="date" className="form-control" id="data_criacao" required {...register("data_criacao")}/>
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="idade">Data Limite</label>
                         <input type="date" className="form-control" id="data_limite" required {...register("data_limite")}/>
                </div>
                
                <input type="submit" className="btn btn-primary mt-3" value="Enviar" />
                <input type="reset" className="btn btn-danger mt-3" value="Limpar"/>
        </form>
        <div className="alert"></div>
                
        </div>
    )
}

export default tarefas;