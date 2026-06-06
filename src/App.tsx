import { Dashboard } from './screens/Dashboard'
import { Auth } from './screens/Auth'
import { Board } from './screens/Board'
import { BrowserRouter, Routes, Route } from 'react-router'

import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
function app() {
  return <div>
    <DndProvider backend={HTML5Backend}>
      <BrowserRouter>
        <Routes>
          <Route path='/signin' element={<Auth></Auth>}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/board/:boardId' element={<Board />}></Route>
        </Routes>
      </BrowserRouter>
    </DndProvider>
  </div>
}


export default app
