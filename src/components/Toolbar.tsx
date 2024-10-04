import { useState } from 'react'
import { useShapeContext } from '../context/ShapeContext'
import shapesStore, { ShapeType } from '../store/shapesStore'
import { FaMousePointer } from 'react-icons/fa'

const Toolbar = () => {
    const { tool, setTool, selectedShape, setSelectedShape } = useShapeContext()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleAddButtonClick = () => {
        if (tool === 'shape') {
            setIsMenuOpen(false)
            setTool('select')
        } else {
            setIsMenuOpen(true)
            setTool('shape')
        }
    }

    const handleSelectToolClick = () => {
        setTool('select')
        setIsMenuOpen(false)
    }

    return (
        <div className='bg-background-secondary fixed top-0 left-0 h-screen w-200 flex flex-col items-center p-4 shadow-lg z-50'>
            <h3 className='text-2xl font-medium text-text-main leading-8 cursor-default'>
                Инструменты
            </h3>
            <button
                className={`m-4 p-2 rounded-md ${
                    tool === 'select'
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={handleSelectToolClick}
            >
                <FaMousePointer size={24} />
            </button>
            <div className='relative inline-block text-left'>
                <button
                    className='inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50'
                    onClick={handleAddButtonClick}
                >
                    Добавить
                    <svg
                        className='-mr-1 ml-2 h-5 w-5'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                        aria-hidden='true'
                    >
                        <path
                            fillRule='evenodd'
                            d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                            clipRule='evenodd'
                        />
                    </svg>
                </button>
                {isMenuOpen && (
                    <div className='absolute left-0 z-10 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'>
                        <div
                            className='py-1'
                            role='menu'
                            aria-orientation='vertical'
                            aria-labelledby='options-menu'
                        >
                            {Object.keys(shapesStore).map(shapeKey => (
                                <button
                                    key={shapeKey}
                                    onClick={() => setSelectedShape(shapeKey as ShapeType)}
                                    className={`block px-4 py-2 text-sm w-full text-left ${
                                        selectedShape === shapeKey
                                            ? 'bg-blue-100 text-blue-700'
                                            : 'text-gray-700 hover:bg-gray-100'
                                    }`}
                                    role='menuitem'
                                >
                                    {shapeKey}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Toolbar
