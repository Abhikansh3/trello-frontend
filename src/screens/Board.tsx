import { useState } from "react";
import { Appbar } from "../Components/Appbar";
import { BoardSection } from "../Components/BoardSection";
import { Card } from "../Components/Card"
export function Board() {

  const [pendingTasks, setPendingTasks] = useState([{
    id: 1,
    title: "Node to bun Migration",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate."
  },
  {
    id: 2,
    title: "Node to bun Migration",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate."
  }])

  const [onGoingTasks, setOnGoingTasks] = useState([{
    id: 3,
    title: "Node to bun Migration",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate."
  }])

  const [doneTasks, setDoneTasks] = useState([{
    id: 4,
    title: "Node to bun Migration",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate."
  }])
  return <div>
    <Appbar />
    <div style={{ display: "flex", padding: 30 }}>

      <BoardSection onDrop={(item: any) => {
        setPendingTasks(p => p.filter(x => x.id != item.id))
        setOnGoingTasks(p => p.filter(x => x.id != item.id))
        setDoneTasks(p => p.filter(x => x.id != item.id))
        setPendingTasks(p => [...p, item])
      }}>
        {pendingTasks.map((task) => <Card id={task.id} title={task.title} description={task.description} />)}
      </BoardSection>

      <BoardSection onDrop={(item: any) => {
        setPendingTasks(p => p.filter(x => x.id != item.id))
        setOnGoingTasks(p => p.filter(x => x.id != item.id))
        setDoneTasks(p => p.filter(x => x.id != item.id))
        setOnGoingTasks(p => [...p, item])
      }}>
        {onGoingTasks.map((task) => <Card id={task.id} title={task.title} description={task.description} />)}
      </BoardSection>

      <BoardSection onDrop={(item: any) => {
        setPendingTasks(p => p.filter(x => x.id != item.id))
        setOnGoingTasks(p => p.filter(x => x.id != item.id))
        setDoneTasks(p => p.filter(x => x.id != item.id))
        setDoneTasks(p => [...p, item])

      }}>
        {doneTasks.map((task) => <Card id={task.id} title={task.title} description={task.description} />)}
      </BoardSection>
    </div>
  </div >
}
