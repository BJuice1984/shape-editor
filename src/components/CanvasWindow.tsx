import { useState } from 'react'
import { Stage, Layer } from 'react-konva'
import { KonvaEventObject } from 'konva/lib/Node'
import ShapeFactory from '../utils/ShapeFactory'

const CanvasWindow = () => {
    const [shapes, setShapes] = useState<{ x: number; y: number }[]>([])
    console.log('🚀 ~ CanvasWindow ~ shapes:', shapes)

    const handleMouseDown = (e: KonvaEventObject<MouseEvent>) => {
        const pos = e.target.getStage()?.getPointerPosition()
        if (!pos) return

        setShapes([...shapes, { x: pos.x, y: pos.y }])
    }

    return (
        <Stage
            width={window.innerWidth}
            height={window.innerHeight}
            onMouseDown={handleMouseDown}
            className='cursor-default'
        >
            <Layer>
                {shapes.map((shape, index) => (
                    <ShapeFactory key={index} x={shape.x} y={shape.y} />
                ))}
            </Layer>
        </Stage>
    )
}

export default CanvasWindow
