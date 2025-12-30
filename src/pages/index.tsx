import Link from "next/link";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";


export default function Home() {
  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 45, '2'),
    new Cliente('Pedro', 23, '3'),
    new Cliente('Carlos', 54, '4')
  ]

  function clienteSelecionado(cliente: Cliente) {

  }

    function clienteExcluido(cliente: Cliente) {

  }

  return (
    <div className="flex h-screen justify-center items-center bg-gradient-to-r from-purple-500 to-blue-600 text-white">
      <Layout titulo="Cadastro Titulo">
        <div className="flex justify-end">
          <Botao cor="green" className="mb-4">Novo Cliente</Botao>
        </div>

        <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido}></Tabela>
        
        <Formulario cliente={clientes[0]} />
      </Layout>
    </div>
  );
}
