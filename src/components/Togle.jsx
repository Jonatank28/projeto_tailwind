import { ThemeContext } from '@/contexts/ThemeContext'
import { useContext, useState, useEffect } from 'react'

const Togle = () => {
    const { theme, setTheme } = useContext(ThemeContext)
    const [mountedComponent, setMountedComponent] = useState(false)

    useEffect(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            setMountedComponent(true)
        }
    }, [])

    return (
        mountedComponent && (
            <button
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                className="fixed top-2 right-2 p-1 z-50"
            >
                {theme === 'light' ? '☀️' : '🌙'}
            </button>
        )
    )
}

export default Togle
