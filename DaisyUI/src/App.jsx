import './App.css'
import Dropdown from '../components/Dropdown'
import Modal from '../components/Modal'
function App() {

  return (
    <>
    <h1 className="flex justify-center font bold text-xl text-yellow-200">DaisyUI + TailWind</h1>
    {/* components */}
    <h1 className='text-xl font-bold underline'>Components :</h1>
    <button className='btn btn-secondary m-4'>Click me!</button>
    <Dropdown />
    <Modal/>
    </>
  )
}

export default App
