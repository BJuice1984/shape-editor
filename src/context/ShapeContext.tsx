import { createContext, useContext, useState, ReactNode } from 'react'
import { ShapeType } from '../store/shapesStore'

type Tool = 'select' | 'shape'
export type ShapesFctory = {
    x: number
    y: number
    type: ShapeType
    id: string
}

interface ShapeContextType {
    selectedShape: ShapeType | null
    setSelectedShape: (shape: ShapeType | null) => void
    tool: Tool
    setTool: (tool: Tool) => void
    shapes: ShapesFctory[]
    setShapes: (shapes: ShapesFctory[]) => void
    updateShapePosition: (id: string, x: number, y: number) => void
}

const ShapeContext = createContext<ShapeContextType | null>(null)

export const ShapeProvider = ({ children }: { children: ReactNode }) => {
    const [tool, setTool] = useState<Tool>('select')
    const [selectedShape, setSelectedShape] = useState<ShapeType | null>('rectangle')
    const [shapes, setShapes] = useState<ShapesFctory[]>([])

    const updateShapePosition = (id: string, x: number, y: number) => {
        setShapes(prevShapes =>
            prevShapes.map(shape => (shape.id === id ? { ...shape, x, y } : shape))
        )
    }

    return (
        <ShapeContext.Provider
            value={{
                selectedShape,
                setSelectedShape,
                tool,
                setTool,
                shapes,
                setShapes,
                updateShapePosition,
            }}
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
