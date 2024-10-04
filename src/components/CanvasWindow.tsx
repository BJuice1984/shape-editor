import React from 'react'
import { Stage, Layer } from 'react-konva'
import { KonvaEventObject } from 'konva/lib/Node'
import ShapeFactory from '../utils/ShapeFactory'
import { useShapeContext } from '../context/ShapeContext'
import { v4 as uuidv4 } from 'uuid'

const CanvasWindow = () => {
    const { tool, selectedShape, shapes, setShapes } = useShapeContext()

    const handleMouseDown = (e: KonvaEventObject<MouseEvent>) => {
        if (tool === 'shape' && selectedShape) {
            const pos = e.target.getStage()?.getPointerPosition()
            if (!pos || !selectedShape) return

            const newShape = {
                type: selectedShape,
                x: pos.x,
                y: pos.y,
                id: uuidv4(),
            }

            setShapes([...shapes, newShape])
        }
    }

    return (
        <Stage width={window.innerWidth} height={window.innerHeight} onMouseDown={handleMouseDown}>
            <Layer>
                {shapes.map(shape => (
                    <MemoizedShapeFactory key={shape.id} shape={shape} />
                ))}
            </Layer>
        </Stage>
    )
}

const MemoizedShapeFactory = React.memo(ShapeFactory)

export default CanvasWindow
