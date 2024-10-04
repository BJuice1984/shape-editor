import { createContext, useContext, useState, ReactNode } from 'react'
import { ShapeType } from '../store/shapesStore'

type Tool = 'select' | 'shape'

interface ShapeContextType {
    selectedShape: ShapeType | null
    setSelectedShape: (shape: ShapeType | null) => void
    tool: Tool
    setTool: (tool: Tool) => void
}

const ShapeContext = createContext<ShapeContextType | null>(null)

export const ShapeProvider = ({ children }: { children: ReactNode }) => {
    const [tool, setTool] = useState<Tool>('select')
    const [selectedShape, setSelectedShape] = useState<ShapeType | null>('rectangle')

    return (
        <ShapeContext.Provider value={{ selectedShape, setSelectedShape, tool, setTool }}>
            {children}
        </ShapeContext.Provider>
    )
}

export const useShapeContext = () => {
    const context = useContext(ShapeContext)
    if (!context) {
        throw new Error('Ошибка в ShapeProvider')
    }
    return context
}
