import { useState } from 'react'
import Toolbar from './components/Toolbar'
import CanvasWindow from './components/CanvasWindow'

const App = () => {
    const [tool, setTool] = useState<'select' | 'shape'>('select')
    const [selectedShape, setSelectedShape] = useState<'rectangle' | 'circle' | 'triangle' | null>(
        null
    )

    return (
        <main className='h-full bg-background-main flex flex-col'>
            <Toolbar setTool={setTool} setSelectedShape={setSelectedShape} />
            <CanvasWindow tool={tool} selectedShape={selectedShape} />
        </main>
    )
}

export default App
