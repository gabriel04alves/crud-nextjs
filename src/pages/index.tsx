import { Inter } from '@next/font/google'
import React from 'react';
import Icon from '@mdi/react';
import { mdilPlus } from '@mdi/light-js';
import Layout from '@/components/Layout'
import Tabela from '@/components/Tabela'
import Botao from '@/components/Botao';
import Formulario from '@/components/Formulario';
import useClientes from '@/hooks/useClientes';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  const { 
    cliente, 
    clientes, 
    selecionarCliente, 
    salvarCliente,
    excluirCliente, 
    novoCliente,
    tabelaVisivel,
    exibirTabela
  } = useClientes()

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-fundo text-primary-default
    `}>
      <title>CRUD</title>
      <link rel="icon" href="/crud-next/public/logobranco.png" />
      <Layout titulo="CRUD usando NextJS">
        {tabelaVisivel ? (
          <>
            <div className="flex">
              <Botao onClick={novoCliente} className='mb-4' 
              cor='primary-400'> 
                <Icon path={mdilPlus} size={1} color={'#FFF'} /> Novo Cliente
              </Botao>
            </div>
            <Tabela clientes={clientes} 
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente}
            /> 
          </>
        ) : (
          <Formulario
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={exibirTabela}
          />
        )}


      </Layout>      
    </div>
  )
}
