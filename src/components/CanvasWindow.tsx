import { useState } from 'react'
import { Stage, Layer } from 'react-konva'
import { KonvaEventObject } from 'konva/lib/Node'
import ShapeFactory from '../utils/ShapeFactory'
import { useShapeContext } from '../context/ShapeContext'

const CanvasWindow = () => {
    const [shapes, setShapes] = useState<any[]>([])
    console.log('🚀 ~ CanvasWindow ~ shapes:', shapes)
    const { selectedShape } = useShapeContext()

    const handleMouseDown = (e: KonvaEventObject<MouseEvent>) => {
        const pos = e.target.getStage()?.getPointerPosition()
        if (!pos || !selectedShape) return

        const newShape = {
            type: selectedShape,
            x: pos.x,
            y: pos.y,
        }

        setShapes([...shapes, newShape])
    }

    return (
        <Stage width={window.innerWidth} height={window.innerHeight} onMouseDown={handleMouseDown}>
            <Layer>
                {shapes.map((shape, index) => (
                    <ShapeFactory key={index} x={shape.x} y={shape.y} shape={shape} />
                ))}
            </Layer>
        </Stage>
    )
}

export default CanvasWindow
