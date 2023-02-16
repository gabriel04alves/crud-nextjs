import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import React, { Component, useEffect } from 'react';
import Icon from '@mdi/react';
import { mdilAccount, mdilPlus } from '@mdi/light-js';
import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout'
import Tabela from '@/components/Tabela'
import Cliente from '@/core/Cliente'
import Botao from '@/components/Botao';
import Formulario from '@/components/Formulario';
import { useState } from "react";
import ClienteRepositorio from '@/core/ClienteRepositorio';
import ColecaoCliente from 'backend/db/ColecaoCliente';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  const repo: ClienteRepositorio = new ColecaoCliente()

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [clientes, setClientes] = useState<Cliente[]>([])
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
  
  useEffect(obterTodos, [])

  function obterTodos() {
    repo.obterTodos().then(clientes => {
      setClientes(clientes)
      setVisivel('tabela')
    })
  }

  function clienteSelecionado(cliente: Cliente){
    setCliente(cliente)
    setVisivel('form')
  }
  async function clienteExcluido(cliente: Cliente){
    await repo.excluir(cliente) 
    obterTodos()
  }
  async function salvarCliente(cliente: Cliente) {
    await repo.salvar(cliente)
    obterTodos()
  }
  function novoCliente() {
    setCliente(Cliente.vazio())
    setVisivel('form')
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
              <Botao onClick={novoCliente} className='mb-4' 
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
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={() => setVisivel('tabela')}
          />
        )}


      </Layout>      
    </div>
  )
}
