import shapesStore, { ShapeType } from '../store/shapesStore'
import { Rect, Circle, Line } from 'react-konva'

interface ShapeFactoryProps {
    shape: {
        x: number
        y: number
        type: ShapeType
    }
}

const ShapeFactory = ({ shape }: ShapeFactoryProps) => {
    let newShape
    switch (shape.type) {
        case 'rectangle':
            newShape = {
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
            }
            return <Rect {...newShape} />
        case 'circle':
            newShape = {
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
            }
            return <Circle {...newShape} />
        case 'triangle':
            newShape = {
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
            }
            return <Line {...newShape} />
        default:
            return null
    }
}

export default ShapeFactory
