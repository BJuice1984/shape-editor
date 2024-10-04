import { ShapeProvider } from './context/ShapeContext'
import Toolbar from './components/Toolbar'
import CanvasWindow from './components/CanvasWindow'

const App = () => {
    return (
        <ShapeProvider>
            <main className='h-full bg-background-main flex flex-col'>
                <Toolbar />
                <CanvasWindow />
            </main>
        </ShapeProvider>
    )
}

export default App
