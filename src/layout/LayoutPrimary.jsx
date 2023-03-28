import Togle from '@/components/Togle'

const LayoutPrimary = ({ children }) => {
    return (
        <>
            <Togle />
            {children}
        </>
    )
}

export default LayoutPrimary
