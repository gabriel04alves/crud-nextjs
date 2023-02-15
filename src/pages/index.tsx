import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout'
import Tabela from '@/components/Tabela'
import Cliente from '@/core/Cliente'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const clientes = [
    new Cliente('Gabriel', 'gabriel@gmail.com', 'Joinville SC', 18, '1'),
    new Cliente('Juli', 'juli@gmail.com', 'Joinville SC', 37, '2'),
    new Cliente('Vagner', 'vagner@gmail.com', 'Joinville SC', 37, '3'),
  ]

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-fundo text-primary-default
    `}>
      <Layout titulo="Cadastro Simples">
        <Tabela clientes={clientes}></Tabela> 
      </Layout>      
    </div>
  )
}
