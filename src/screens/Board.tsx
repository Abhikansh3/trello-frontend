import { Appbar } from "../Components/Appbar";
import { Card } from "../Components/Card"
export function Board() {
  return <div style={{}}>
    <Appbar />
    <div style={{ display: "flex", gap: 10 }}>
      <div style={{ flex: 1, borderRight: "1px dotted black", minHeight: "80vh", }}>
        <Card
          title={"Node to bun Migration"}
          description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate."}
        />
        <Card
          title={"Node to bun Migration"}
          description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate."}
        />
        <Card
          title={"Node to bun Migration"}
          description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate."}
        />

      </div>
      <div style={{ flex: 1, borderRight: "1px dotted black", minHeight: "80vh" }}>
        <Card
          title={"Node to bun Migration"}
          description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate."}
        />

      </div>
      <div style={{ flex: 1, minHeight: "80vh" }}>
        <Card
          title={"Node to bun Migration"}
          description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate."}
        />
      </div>
    </div>
  </div>
}
