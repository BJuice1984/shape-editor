import { useState } from 'react'
import { Stage, Layer, Rect, Circle, Line } from 'react-konva'
import { KonvaEventObject } from 'konva/lib/Node'

interface CanvasProps {
    tool: 'select' | 'shape'
    selectedShape: 'rectangle' | 'circle' | 'triangle' | null
}

const CanvasWindow = ({ tool, selectedShape }: CanvasProps) => {
    const [shapes, setShapes] = useState<any[]>([])
    const [isDragging, setIsDragging] = useState(false)

    const handleMouseDown = (e: KonvaEventObject<MouseEvent>) => {
        if (tool === 'shape' && selectedShape) {
            const pos = e.target.getStage()?.getPointerPosition()
            if (!pos) return

            let newShape
            switch (selectedShape) {
                case 'rectangle':
                    newShape = {
                        type: 'rect',
                        x: pos.x,
                        y: pos.y,
                        width: 100,
                        height: 50,
                        fill: 'red',
                    }
                    break
                case 'circle':
                    newShape = { type: 'circle', x: pos.x, y: pos.y, radius: 50, fill: 'blue' }
                    break
                case 'triangle':
                    newShape = {
                        type: 'line',
                        points: [pos.x, pos.y, pos.x + 50, pos.y + 100, pos.x - 50, pos.y + 100],
                        fill: 'green',
                    }
                    break
            }
            setShapes([...shapes, newShape])
        }
    }

    const handleDragMove = () => {
        setIsDragging(true)
    }

    return (
        <Stage
            width={window.innerWidth}
            height={window.innerHeight}
            onMouseDown={handleMouseDown}
            draggable
            onDragMove={handleDragMove}
            style={{ background: '#f0f0f0', cursor: isDragging ? 'grab' : 'default' }}
        >
            <Layer>
                {shapes.map((shape, index) => {
                    switch (shape.type) {
                        case 'rect':
                            return <Rect key={index} {...shape} draggable />
                        case 'circle':
                            return <Circle key={index} {...shape} draggable />
                        case 'line':
                            return <Line key={index} {...shape} closed draggable />
                        default:
                            return null
                    }
                })}
            </Layer>
        </Stage>
    )
}

export default CanvasWindow
