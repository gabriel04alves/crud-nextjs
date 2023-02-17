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
      <Layout titulo="Cadastro Simples">
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
