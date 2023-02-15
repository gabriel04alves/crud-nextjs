import Cliente from "@/core/Cliente"
import Icon from '@mdi/react';
import { mdilDelete, mdilPencil } from '@mdi/light-js';

interface TabelaProps {
    clientes: Cliente[]
    clienteSelecionado?: (cliente: Cliente) => void
    clienteExcluido?: (cliente: Cliente) => void
}

export default function Tabela(props: TabelaProps) {
    
    const exibirAcoes = props.clienteSelecionado  || props.clienteExcluido

    function renderizarCabecalho() {
        return (
            <tr>
                <th  className="text-center p-4 ">Código</th>
                <th  className="text-center p-4 ">Nome</th>
                <th  className="text-center p-4 ">Email</th>
                <th  className="text-center p-4 ">Local</th>
                <th  className="text-center p-4 ">Idade</th>
                {exibirAcoes ? <th  className="text-center p-4 ">Editar</th> : false}
            </tr>
        )
    }
    
    function renderizarDados() {
        return props.clientes?.map((cliente, i ) => {
            return (
                <tr key={cliente.id} 
                    className={`${i % 2 === 0 ? 'bg-primary-300' : 'bg-primary-200' }`}>
                    <td  className="text-center p-4">{cliente.id}</td>
                    <td  className="text-center p-4">{cliente.nome}</td>
                    <td  className="text-center p-4">{cliente.email}</td>
                    <td  className="text-cen1ter p-4">{cliente.local}</td>
                    <td  className="text-center p-4">{cliente.idade}</td>
                    {exibirAcoes ? rederizarAcoes(cliente) : false}
                </tr>
            )
        })
    }

    function rederizarAcoes(cliente: Cliente) {
        return (
            <td className="flex p-4 justify-center">
                {props.clienteSelecionado ? (
                <button onClick={() => props.clienteSelecionado?.(cliente)} className={`
                    flex justify-center items-center
                    rounded-full hover:translate-x-1 m-1
                `}>
                    <Icon path={mdilPencil} size={1.2} color={'#114b5f'}/>
                </button>
                ): false}
                {props.clienteExcluido ? (
                <button onClick={() => props.clienteExcluido?.(cliente)} className={`
                    flex justify-center items-center
                    rounded-full hover:translate-x-1 m-1
                `}>
                    <Icon path={mdilDelete} size={1.2} color={'red'}/>
                </button>
                ): false}
            </td>
        )
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
                bg-primary-400
            `} >
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )
}