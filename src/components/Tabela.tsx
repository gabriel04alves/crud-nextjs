import Cliente from "@/core/Cliente"

interface TabelaProps {
    clientes: Cliente[]
}

export default function Tabela(props: TabelaProps) {
    
    function renderizarCabecalho() {
        return (
            <tr>
                <th  className="text-center p-4 ">Código</th>
                <th  className="text-center p-4 ">Nome</th>
                <th  className="text-center p-4 ">Email</th>
                <th  className="text-center p-4 ">Local</th>
                <th  className="text-center p-4 ">Idade</th>
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
                    <td  className="text-center p-4">{cliente.local}</td>
                    <td  className="text-center p-4">{cliente.idade}</td>
                </tr>
            )
        })
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