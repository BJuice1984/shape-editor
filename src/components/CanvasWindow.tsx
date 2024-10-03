import { useState } from 'react'
import { Stage, Layer, Rect, Circle, Line } from 'react-konva'
import { KonvaEventObject } from 'konva/lib/Node'
import shapesStore from '../mock/shapesStore'

interface CanvasProps {
    tool: 'select' | 'shape'
    selectedShape: keyof typeof shapesStore | null
}

const CanvasWindow = ({ tool, selectedShape }: CanvasProps) => {
    const [shapes, setShapes] = useState<any[]>([])
    const [isDragging, setIsDragging] = useState(false)

    const handleMouseDown = (e: KonvaEventObject<MouseEvent>) => {
        if (tool === 'shape' && selectedShape) {
            const pos = e.target.getStage()?.getPointerPosition()
            if (!pos) return

            let newShape
            const shapeData = shapesStore[selectedShape]

            switch (shapeData.type) {
                case 'rectangle':
                    newShape = {
                        type: 'rectangle',
                        x: pos.x,
                        y: pos.y,
                        width: shapeData.width,
                        height: shapeData.height,
                        fillLinearGradientStartPoint: shapeData.fillLinearGradientStartPoint,
                        fillLinearGradientEndPoint: shapeData.fillLinearGradientEndPoint,
                        fillLinearGradientColorStops: [
                            shapeData.fillLinearGradientColorStops.startOffset,
                            shapeData.fillLinearGradientColorStops.startColor,
                            shapeData.fillLinearGradientColorStops.endOffset,
                            shapeData.fillLinearGradientColorStops.endColor,
                        ],
                        shadowBlur: shapeData.shadowBlur,
                        shadowColor: shapeData.shadowColor,
                    }
                    break
                case 'circle':
                    newShape = {
                        type: 'circle',
                        x: pos.x,
                        y: pos.y,
                        radius: shapeData.radius,
                        fillLinearGradientStartPoint: shapeData.fillLinearGradientStartPoint,
                        fillLinearGradientEndPoint: shapeData.fillLinearGradientEndPoint,
                        fillLinearGradientColorStops: [
                            shapeData.fillLinearGradientColorStops.startOffset,
                            shapeData.fillLinearGradientColorStops.startColor,
                            shapeData.fillLinearGradientColorStops.endOffset,
                            shapeData.fillLinearGradientColorStops.endColor,
                        ],
                        shadowBlur: shapeData.shadowBlur,
                        shadowColor: shapeData.shadowColor,
                    }
                    break
                case 'triangle':
                    newShape = {
                        type: 'triangle',
                        x: pos.x,
                        y: pos.y,
                        points: shapeData.points,
                        fillLinearGradientStartPoint: shapeData.fillLinearGradientStartPoint,
                        fillLinearGradientEndPoint: shapeData.fillLinearGradientEndPoint,
                        fillLinearGradientColorStops: [
                            shapeData.fillLinearGradientColorStops.startOffset,
                            shapeData.fillLinearGradientColorStops.startColor,
                            shapeData.fillLinearGradientColorStops.endOffset,
                            shapeData.fillLinearGradientColorStops.endColor,
                        ],
                        shadowBlur: shapeData.shadowBlur,
                        shadowColor: shapeData.shadowColor,
                    }
                    break
                default:
                    return
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
            className={`${isDragging ? 'cursor-grab' : 'cursor-default'}`}
        >
            <Layer>
                {shapes.map((shape, index) => {
                    switch (shape.type) {
                        case 'rectangle':
                            return <Rect key={index} {...shape} draggable />
                        case 'circle':
                            return <Circle key={index} {...shape} draggable />
                        case 'triangle':
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
