//Componente para realizar a manutenção de tarefas
//importar os hooks componentes especiais do react
import {useForm} from "react-hook-form";
import { useState, useEffect } from "react"; // os uses são hook
import { api } from "../config_axios";
import ItemLista from "./itemLista";
//import tarefas from "./tarefas";
//Componente para realizar a manutenção de tarefas


const manutencaoTarefas = () => {
    //código
    const {register, handleSubmit, reset} = useForm();
    // vetor de tarefas, método setTarefas para inserir tarefa no vetor tarefas
    const [tarefas, setTarefas] = useState([]);
    //método obter lista de tarefas
    const obterLista = async () => {
        try {
            const lista = await api.get("tarefa"); //api é axios vai buscar tarefa do BD
            setTarefas(lista.data);}
        catch (e) {
            alert("Não foi possível obter dados", e);
        }
    }
    //Método qu será executado assim que o componente for carregado
    useEffect(() => {
        obterLista();
    }, []);
    
    const filtrarLista = async (campos) => {
        try{
            const lista = await api.get(`tarefa/filtro/${campos.palavra}`);
            lista.data.length
            ? setTarefas(lista.data)
            : alert("Não há tarefas cadastradas com a palavra chave pesquisada");
        }catch(error){
            alert(`Erro: ..Não foi possível obter os dados: ${error}`);
        }
        
    
    }
    
    const excluir = async(id_tarefas,titulo) => {
        if(!window.confirm(`Confirma a exclusão da tarefa ${titulo}?`)){
            return;
        }
        try{
            await api.delete(`tarefa/${id_tarefas}`);
            setTarefas(tarefas.filter(tarefas => tarefas.id_tarefas !== id_tarefas));
            
        }catch(error){
            alert(`Erro: ..Não foi possível excluir a tarefa ${titulo}: ${error}`);
        }
    }
    
    //alterar os registros
    const alterar = async (id_tarefas,titulo,index) => {
        const novoStatus = (prompt(`Digite o status da tarefa ${titulo}`));
        if (novoStatus == ""){
           alert('Digite o novo status!') 
            return;
        }
        try{//captura os erros 
            //chamando o backend e passando os dados
            await api.put(`tarefa/${id_tarefas}`,{status: novoStatus});

            const tarefasAtualizadas = [...tarefas];
            const indiceTarefas = tarefasAtualizadas.findIndex(tarefas => tarefas.id_tarefas === id_tarefas);
            tarefasAtualizadas[indiceTarefas.id_tarefas].status = novoStatus;
            setTarefas(tarefasAtualizadas);
            obterLista();
            location.reload();
        }
        catch(error){
            alert(`Tarefa Alterada com Sucesso!`);
        }
    }
        return (
           <div className="container">
            <div className="row">
                <div className="col-sm-7">
                    <h4 className="fst-italic mt-3">Manutenção</h4>
                </div>
                <div className="col-sm-5">
                    <form onSubmit={handleSubmit(filtrarLista)}>
                        <div className="input-group mt-3">
                            <input type="text" className="form-control" placeholder="Titulo Status" required {...register("palavra")} />
                            <input type="submit" className="btn btn-primary" value="Pesquisar" />
                            <input type="button" className="btn btn-danger" value="Todos" onClick={()=>{reset({palavra:""});obterLista();}}/>
                        </div>
                    </form>
                </div>
            </div>
    
            <table className="table table-striped mt-3">
                <thead>
                    <tr>
                        <th>Cód</th>
                        <th>Titulo</th>
                        <th>Descrição</th>
                        <th>Status</th>
                        <th>Data de Criação</th>
                        <th>Data Limite</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {tarefas.map((tarefas) => (
                        <ItemLista
                            key={tarefas.id_tarefas}
                            id_tarefas={tarefas.id_tarefas}
                            titulo={tarefas.titulo}
                            descricao={tarefas.descricao}
                            status={tarefas.status}
                            data_criacao={tarefas.data_criacao}
                            data_limite={tarefas.data_limite}
                            excluirClick={()=>excluir(tarefas.id_tarefas,tarefas.titulo)}
                            alterarClick={()=>alterar(tarefas.id_tarefas,tarefas.titulo)}
                        />
                    ))}
                </tbody>
            </table>
    
           </div> 
        );
  };
    


export default manutencaoTarefas;
