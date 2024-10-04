import shapesStore, { ShapeType } from '../store/shapesStore'
import { Rect, Circle, Line } from 'react-konva'
import { KonvaEventObject } from 'konva/lib/Node'
import { useShapeContext } from '../context/ShapeContext'

interface ShapeFactoryProps {
    shape: {
        x: number
        y: number
        type: ShapeType
        id: string
    }
}

const ShapeFactory = ({ shape }: ShapeFactoryProps) => {
    const { updateShapePosition } = useShapeContext()
    const handleDragMove = (e: KonvaEventObject<DragEvent>) => {
        const { x, y } = e.target.position()
        updateShapePosition(shape.id, x, y)
    }

    let newShape
    switch (shape.type) {
        case 'rectangle':
            newShape = {
                id: shape.id,
                type: shape.type,
                x: shape.x,
                y: shape.y,
                width: shapesStore.rectangle.width,
                height: shapesStore.rectangle.height,
                fillLinearGradientStartPoint: shapesStore.rectangle.fillLinearGradientStartPoint,
                fillLinearGradientEndPoint: shapesStore.rectangle.fillLinearGradientEndPoint,
                fillLinearGradientColorStops: [
                    shapesStore.rectangle.fillLinearGradientColorStops.startOffset,
                    shapesStore.rectangle.fillLinearGradientColorStops.startColor,
                    shapesStore.rectangle.fillLinearGradientColorStops.endOffset,
                    shapesStore.rectangle.fillLinearGradientColorStops.endColor,
                ],
                shadowBlur: shapesStore.rectangle.shadowBlur,
                shadowColor: shapesStore.rectangle.shadowColor,
                draggable: true,
                onDragMove: handleDragMove,
            }
            return <Rect {...newShape} />
        case 'circle':
            newShape = {
                id: shape.id,
                type: shape.type,
                x: shape.x,
                y: shape.y,
                radius: shapesStore.circle.radius,
                fillLinearGradientStartPoint: shapesStore.circle.fillLinearGradientStartPoint,
                fillLinearGradientEndPoint: shapesStore.circle.fillLinearGradientEndPoint,
                fillLinearGradientColorStops: [
                    shapesStore.circle.fillLinearGradientColorStops.startOffset,
                    shapesStore.circle.fillLinearGradientColorStops.startColor,
                    shapesStore.circle.fillLinearGradientColorStops.endOffset,
                    shapesStore.circle.fillLinearGradientColorStops.endColor,
                ],
                shadowBlur: shapesStore.circle.shadowBlur,
                shadowColor: shapesStore.circle.shadowColor,
                draggable: true,
                onDragMove: handleDragMove,
            }
            return <Circle {...newShape} />
        case 'triangle':
            newShape = {
                id: shape.id,
                type: shape.type,
                x: shape.x,
                y: shape.y,
                points: shapesStore.triangle.points,
                fillLinearGradientStartPoint: shapesStore.triangle.fillLinearGradientStartPoint,
                fillLinearGradientEndPoint: shapesStore.triangle.fillLinearGradientEndPoint,
                fillLinearGradientColorStops: [
                    shapesStore.triangle.fillLinearGradientColorStops.startOffset,
                    shapesStore.triangle.fillLinearGradientColorStops.startColor,
                    shapesStore.triangle.fillLinearGradientColorStops.endOffset,
                    shapesStore.triangle.fillLinearGradientColorStops.endColor,
                ],
                shadowBlur: shapesStore.triangle.shadowBlur,
                shadowColor: shapesStore.triangle.shadowColor,
                draggable: true,
                closed: true,
                onDragMove: handleDragMove,
            }
            return <Line {...newShape} />
        default:
            return null
    }
}

export default ShapeFactory
