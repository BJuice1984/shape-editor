import { useShapeContext } from '../context/ShapeContext'
import shapesStore from '../store/shapesStore'
import { Rect, Circle, Line } from 'react-konva'

interface ShapeFactoryProps {
    x: number
    y: number
}

const ShapeFactory = ({ x, y }: ShapeFactoryProps) => {
    const { selectedShape } = useShapeContext()
    if (!selectedShape) return null

    const shapeData = shapesStore[selectedShape]

    let newShape
    switch (shapeData.type) {
        case 'rectangle':
            newShape = {
                type: 'rectangle',
                x,
                y,
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
                draggable: true,
            }
            return <Rect {...newShape} />
        case 'circle':
            newShape = {
                type: 'circle',
                x,
                y,
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
                draggable: true,
            }
            return <Circle {...newShape} />
        case 'triangle':
            newShape = {
                type: 'triangle',
                x,
                y,
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
                draggable: true,
                closed: true,
            }
            return <Line {...newShape} />
        default:
            return null
    }
}

export default ShapeFactory
