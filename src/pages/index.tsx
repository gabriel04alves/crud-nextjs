import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import React, { Component } from 'react';
import Icon from '@mdi/react';
import { mdilAccount, mdilPlus } from '@mdi/light-js';
import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout'
import Tabela from '@/components/Tabela'
import Cliente from '@/core/Cliente'
import Botao from '@/components/Botao';
import Formulario from '@/components/Formulario';
import { useState } from "react";


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
  
  const clientes = [
    new Cliente('Gabriel', 'gabriel@gmail.com', 'Joinville SC', 18, '1'),
    new Cliente('Juli', 'juli@gmail.com', 'Joinville SC', 37, '2'),
    new Cliente('Vagner', 'vagner@gmail.com', 'Joinville SC', 37, '3'),
  ]

  function clienteSelecionado(cliente: Cliente){
    console.log(cliente.nome)
  }
  function clienteExcluido(cliente: Cliente){
    console.log(cliente.nome)
  }
  function salvarCliente(cliente: Cliente) {
    console.log(cliente)
  }

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-fundo text-primary-default
    `}>
      <Layout titulo="Cadastro Simples">
        {visivel === 'tabela' ? (
          <>
            <div className="flex">
              <Botao onClick={() => setVisivel('form')} className='mb-4' 
              cor='primary-400'> 
                <Icon path={mdilPlus} size={1} color={'#FFF'} /> Novo Cliente
              </Botao>
            </div>
            <Tabela clientes={clientes} 
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
            /> 
          </>
        ) : (
          <Formulario
            cliente={clientes[0]}
            clienteMudou={salvarCliente}
            cancelado={() => setVisivel('tabela')}
          />
        )}


      </Layout>      
    </div>
  )
}
