import Cliente from "@/core/Cliente"
import { useState } from "react"
import Entrada from "./Entrada"
import Botao from "./Botao"
import Icon from '@mdi/react';
import { mdilAccount, mdilPlus, mdilCancel, mdilContentSaveAll } from '@mdi/light-js';

interface FormularioProps {
    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void
    cancelado?: () => void
}

export default function Formulario(props: FormularioProps) {
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [email, setEmail] = useState(props.cliente?.email ?? '')
    const [local, setLocal] = useState(props.cliente?.local ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)
    
    return (
        <div>
            {id ? (
                <Entrada somenteLeitura texto='Código' tipo='text' valor={id}/>
            ) : false}            
            <Entrada texto='Nome' tipo='text' valor={nome} valorMudou={setNome} className=""/>
            <Entrada texto='Email' tipo='text' valor={email} valorMudou={setEmail}/>
            <Entrada texto='Cidade' tipo='text' valor={local} valorMudou={setLocal}/>
            <Entrada texto='Idade' tipo='number' valor={idade} valorMudou={setIdade}/>
            <div className="flex mt-3 justify-end mr-10">
                <Botao onClick={() => props.clienteMudou?.(new Cliente(nome, email, local, +idade, id))} className="outline-verde-500 text-verde-500 mr-4" >
                    <Icon path={mdilContentSaveAll } size={1} /> {id ? 'Alterar' : 'Salvar'} 
                </Botao>
                <Botao onClick={props.cancelado} className="outline-red text-red">
                    <Icon path={mdilCancel} size={1} />Cancelar
                </Botao>
            </div>
        </div>
    )
}