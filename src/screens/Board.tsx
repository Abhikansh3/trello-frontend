import { Appbar } from "../Components/Appbar";
import { BoardSection } from "../Components/BoardSection";
import { Card } from "../Components/Card"
export function Board() {

  const pendingTasks = [{
    id: 1,
    title: "Node to bun Migration",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate."
  },
  {
    id: 2,
    title: "Node to bun Migration",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate."
  }]
  const onGoingTasks = [{
    id: 1,
    title: "Node to bun Migration",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate."
  }]
  const doneTasks = [{
    id: 1,
    title: "Node to bun Migration",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate."
  }]
  return <div>
    <Appbar />
    <div style={{ display: "flex", gap: 10 }}>

      <BoardSection>
        {pendingTasks.map((task) => <Card key={task.id} title={task.title} description={task.description} />)}
      </BoardSection>

      <BoardSection >
        {onGoingTasks.map((task) => <Card key={task.id} title={task.title} description={task.description} />)}
      </BoardSection>

      <BoardSection>
        {doneTasks.map((task) => <Card key={task.id} title={task.title} description={task.description} />)}
      </BoardSection>
    </div>
  </div >
}
