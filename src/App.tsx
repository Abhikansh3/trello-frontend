import { Dashboard } from './screens/Dashboard'
import { Auth } from './screens/Auth'
import { Board } from './screens/Board'
import { BrowserRouter, Routes, Route } from 'react-router'
function app() {
  return <div>
    <BrowserRouter>
      <Routes>
        <Route path='/signin' element={<Auth></Auth>}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/board/:boardId' element={<Board />}></Route>
      </Routes>
    </BrowserRouter>
  </div>
}


export default app
