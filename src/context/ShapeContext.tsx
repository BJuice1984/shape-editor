import { createContext, useContext, useState, ReactNode } from 'react'
import { ShapeType } from '../store/shapesStore'

type Tool = 'select' | 'shape'
export type ShapesFctory = {
    x: number
    y: number
    type: ShapeType
}

interface ShapeContextType {
    selectedShape: ShapeType | null
    setSelectedShape: (shape: ShapeType | null) => void
    tool: Tool
    setTool: (tool: Tool) => void
    shapes: ShapesFctory[]
    setShapes: (shapes: ShapesFctory[]) => void
}

const ShapeContext = createContext<ShapeContextType | null>(null)

export const ShapeProvider = ({ children }: { children: ReactNode }) => {
    const [tool, setTool] = useState<Tool>('select')
    const [selectedShape, setSelectedShape] = useState<ShapeType | null>('rectangle')
    const [shapes, setShapes] = useState<any[]>([])

    return (
        <ShapeContext.Provider
            value={{ selectedShape, setSelectedShape, tool, setTool, shapes, setShapes }}
        >
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
