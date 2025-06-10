interface ContainerProps {
  nome: string;
}
function Container(props:ContainerProps) {
  const contador = 10;
  function mudar() {
    console.log('Mudar');
  }
  return (
  <>
   <h1>{props.nome}</h1>
   Valor Contador: {contador}
   <button onClick={mudar}>Mudar</button>
  </>
 )
}
export default Container;
