function Mensagem({ logado }) {
  return <div>{logado ? <p>Bem-vindo!</p> : <p>Faça login</p>}</div>;
}

export default Mensagem;
