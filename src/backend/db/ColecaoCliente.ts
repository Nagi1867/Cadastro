import {
  collection,
  getDocs,
  addDoc,
  doc,
  setDoc,
  deleteDoc,
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  SnapshotOptions
} from "firebase/firestore"

import { db } from "../config"
import Cliente from "../../core/Cliente"
import ClienteRepositorio from "../../core/ClienteRepositorio"

/**
 * Conversor Firestore <-> Cliente
 */
const conversor: FirestoreDataConverter<Cliente> = {
  toFirestore(cliente: Cliente) {
    return {
      nome: cliente.nome,
      idade: cliente.idade
    }
  },

  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): Cliente {
    const dados = snapshot.data(options)
    return new Cliente(dados.nome, dados.idade, snapshot.id)
  }
}

export default class ColecaoCliente implements ClienteRepositorio {

  async salvar(cliente: Cliente): Promise<Cliente> {
    if (cliente.id) {
      await setDoc(doc(this.colecao(), cliente.id), cliente)
      return cliente
    } else {
      const docRef = await addDoc(this.colecao(), cliente)
      return new Cliente(cliente.nome, cliente.idade, docRef.id)
    }
  }

  async excluir(cliente: Cliente): Promise<void> {
    await deleteDoc(doc(this.colecao(), cliente.id))
  }

  async obterTodos(): Promise<Cliente[]> {
    const snapshot = await getDocs(this.colecao())
    return snapshot.docs.map(doc => doc.data())
  }

  private colecao() {
    return collection(db, "clientes").withConverter(conversor)
  }
}
