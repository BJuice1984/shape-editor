import shapesStore, { ShapeType } from '../mock/shapesStore'

interface ToolbarProps {
    setTool: (tool: 'select' | 'shape') => void
    setSelectedShape: (shape: ShapeType | null) => void
}

const Toolbar = ({ setTool, setSelectedShape }: ToolbarProps) => {
    return (
        <div className='bg-background-secondary'>
            <h3 className='text-2xl font-medium text-text-main leading-8 cursor-default'>
                Инструменты
            </h3>
            <button onClick={() => setTool('select')}>Выбрать</button>
            <div>
                <button onClick={() => setTool('shape')}>Добавить</button>
                <select onChange={e => setSelectedShape(e.target.value as ShapeType)}>
                    {Object.keys(shapesStore).map(shapeKey => (
                        <option key={shapeKey} value={shapeKey}>
                            {shapesStore[shapeKey as ShapeType].label}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default Toolbar
