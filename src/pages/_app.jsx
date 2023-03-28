import '@/styles/globals.css'
import { ThemeProvider } from '@/contexts/ThemeContext'
import LayoutPrimary from '@/layout/LayoutPrimary'

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider>
            <LayoutPrimary>
                <Component {...pageProps} />
            </LayoutPrimary>
        </ThemeProvider>
    )
}
