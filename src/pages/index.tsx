import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import React, { Component } from 'react';
import Icon from '@mdi/react';
import { mdilAccount } from '@mdi/light-js';
import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout'
import Tabela from '@/components/Tabela'
import Cliente from '@/core/Cliente'
import Botao from '@/components/Botao';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

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

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-fundo text-primary-default
    `}>
      <Layout titulo="Cadastro Simples">
        <div className="flex">
          <Botao className='mb-4'>Novo Cliente</Botao>
        </div>
        <Tabela clientes={clientes} 
          clienteSelecionado={clienteSelecionado}
          clienteExcluido={clienteExcluido}
        /> 
      </Layout>      
    </div>
  )
}
