import { shapesMock } from '../mock/shapesMock'

interface Shape {
    type: string
    label: string
    fillLinearGradientStartPoint: { x: number; y: number }
    fillLinearGradientEndPoint: { x: number; y: number }
    fillLinearGradientColorStops: {
        startOffset: number
        startColor: string
        endOffset: number
        endColor: string
    }
    shadowBlur: number
    shadowColor: string
    width?: number
    height?: number
    radius?: number
    points?: number[]
}

export type ShapeType = keyof typeof shapesMock

const shapesStore: Record<ShapeType, Shape> = shapesMock as Record<ShapeType, Shape>

export default shapesStore
