
export function Button(props) {

  return <div className="button" onClick={props.onClick} style={{ display: "flex", gap: 7 }}>
    <div style={{ display: "flex", alignItems: "center" }}>
      {props.leftIcon}
    </div>

    {props.children}
    {props.rightIcon}
  </div >
}
