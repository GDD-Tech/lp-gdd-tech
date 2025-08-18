import { Toolbar } from '@mui/material'
import { Box } from '@mui/system'
import { type FC } from 'react'
import Contact from './Contact'
import FAQ from './FAQ'
import Features from './Features'
import Hero from './Hero'
import Portfolio from './Portfolio'
import Timeline from './Timeline'
import Motivations from './Motivations'
import WhatsAppButton from '../global/WhatsAppButton'

const MainContent: FC = () => {
    return (
        <>
            <Toolbar />
            <Box component={'main'}>
                <Hero />
                <Features />
                <Motivations />
                <Timeline />
                <Portfolio />
                <FAQ />
                <Contact />
            </Box>
            <WhatsAppButton />
        </>
    )
}

export default MainContent
