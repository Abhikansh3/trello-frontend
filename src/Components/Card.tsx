
export function Card(props) {

  return <div style={{ border: " 1px solid black", borderRadius: 10, padding: 20, margin: 20, cursor: "pointer" }}>
    {props.title}
    <div style={{ height: 1, width: '100%', background: 'black' }}></div>
    {props.description}
  </div>

}
