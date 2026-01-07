import Link from "next/link";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import { useState } from "react";


export default function Home() {
  const[cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
  
  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 45, '2'),
    new Cliente('Pedro', 23, '3'),
    new Cliente('Carlos', 54, '4')
  ]

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente)
    setVisivel('form')
  }

  function clienteExcluido(cliente: Cliente) {

  }

  function novoCliente() {
    setCliente(Cliente.vazio())
    setVisivel('form')
  }

  function salvarCliente(cliente: Cliente) {
    setVisivel('tabela')
  }

  return (
    <div className="flex h-screen justify-center items-center bg-gradient-to-r from-purple-500 to-blue-600 text-white">
      <Layout titulo="Cadastro Titulo">
        {visivel === 'tabela' ? (
          <>
            <div className="flex justify-end">
              <Botao cor="green" className="mb-4 hover:cursor-pointer" onClick={novoCliente}>Novo Cliente</Botao>
            </div>

            <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido}></Tabela>
          </>
        ) : (
          <Formulario cliente={cliente} cancelado={() => setVisivel('tabela')}/>
        )}
      </Layout>
    </div>
  );
}
