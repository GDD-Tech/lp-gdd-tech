import { Menu } from '@mui/icons-material'
import {
    Box,
    Container,
    IconButton,
    AppBar as MUIAppBar,
    Toolbar,
    useMediaQuery,
    useScrollTrigger,
    useTheme
} from '@mui/material'
import { useState, type FC } from 'react'
import gdd_logo from '../../assets/gdd_logo.png'
import ContactButton from '../global/ContactButton'
import MobileNavigation from './MobileNavigation'
import Navigation from './Navigation'

const AppBar: FC = () => {
    const [open, setOpen] = useState<boolean>(false)

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))

    const toggleDrawer = (state: boolean) => () => {
        setOpen(state)
    }

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    })

    return (
        <>
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
                            <img src={gdd_logo} width={100} alt="Logo do site" />
                            <Navigation display={isMobile ? 'none' : 'block'} />
                            <ContactButton
                                sx={{ display: isMobile ? 'none' : 'block' }}
                            />
                            <IconButton
                                sx={{ display: isMobile ? 'block' : 'none' }}
                                onClick={toggleDrawer(true)}
                                color="primary"
                                size="large"
                            >
                                <Menu />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </Container>
            </MUIAppBar>
            {isMobile && (
                <MobileNavigation open={open} toggleDrawer={setOpen} />
            )}
        </>
    )
}

export default AppBar
