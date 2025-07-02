import { Box, Container, AppBar as MUIAppBar, Toolbar } from '@mui/material'
import { type FC } from 'react'
import logo from '../../assets/logo.svg'
import ContactButton from '../global/ContactButton'
import Navigation from './Navigation'

const AppBar: FC = () => {
    return (
        <MUIAppBar position="static" elevation={0} sx={{ bgcolor: 'white' }}>
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
                        <Navigation/>
                        <ContactButton />
                    </Box>
                </Toolbar>
            </Container>
        </MUIAppBar>
    )
}

export default AppBar
