interface ToolbarProps {
    setTool: (tool: 'select' | 'shape') => void
    setSelectedShape: (shape: 'rectangle' | 'circle' | 'triangle' | null) => void
}

const Toolbar = ({ setTool, setSelectedShape }: ToolbarProps) => {
    return (
        <div>
            <h3 className='text-2xl font-medium text-text-main leading-8 cursor-default'>
                Инструменты
            </h3>
            <button onClick={() => setTool('select')}>Выбрать</button>
            <div>
                <button onClick={() => setTool('shape')}>Добавить</button>
                <select
                    onChange={e =>
                        setSelectedShape(e.target.value as 'rectangle' | 'circle' | 'triangle')
                    }
                >
                    <option value='rectangle'>Прямоугольник</option>
                    <option value='circle'>Круг</option>
                    <option value='triangle'>Треугольник</option>
                </select>
            </div>
        </div>
    )
}

export default Toolbar
