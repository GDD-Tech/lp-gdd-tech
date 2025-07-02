import {
    Box,
    Container,
    AppBar as MUIAppBar,
    Toolbar,
    useScrollTrigger,
    useTheme,
} from '@mui/material'
import { type FC } from 'react'
import logo from '../../assets/logo.svg'
import ContactButton from '../global/ContactButton'
import Navigation from './Navigation'

const AppBar: FC = () => {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    })

    const theme = useTheme()

    return (
        <MUIAppBar
            elevation={0}
            sx={{
                bgcolor: 'white',
                borderBottom: trigger
                    ? `1px solid ${theme.palette.divider}`
                    : 'none',
                transition: 'border-bottom 0.3s ease',
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box
                        display={'flex'}
                        justifyContent={'space-between'}
                        alignItems={'center'}
                        flex={1}
                        p={1}
                    >
                        <img src={logo} alt="Logo do site" />
                        <Navigation />
                        <ContactButton />
                    </Box>
                </Toolbar>
            </Container>
        </MUIAppBar>
    )
}

export default AppBar
