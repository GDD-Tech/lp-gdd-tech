import { Menu } from '@mui/icons-material'
import {
    Box,
    Container,
    IconButton,
    Link,
    AppBar as MUIAppBar,
    Toolbar,
    useMediaQuery,
    useScrollTrigger,
    useTheme,
} from '@mui/material'
import { useState, type FC } from 'react'
import gdd_logo from '../../assets/gdd_logo.png'
import SectionLink from '../global/SectionLink'
import MobileNavigation from './MobileNavigation'
import Navigation from './Navigation'

const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
}

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
                position="fixed"
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
                    <Toolbar disableGutters sx={{ px: 1 }}>
                        <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            flex={1}
                            width="100%"
                        >
                            <Link
                                component="button"
                                onClick={() => scrollToSection('apresentacao')}
                                underline="none"
                            >
                                <img
                                    src={gdd_logo}
                                    width={100}
                                    alt="Logo do site"
                                />
                            </Link>

                            <Navigation display={isMobile ? 'none' : 'block'} />
                            <SectionLink
                                id="contato"
                                variant="contained"
                                disableElevation
                                sx={{
                                    px: 3,
                                    textTransform: 'none',
                                    fontWeight: 600,
                                    fontSize: 16,
                                    backgroundColor: '#004583',
                                    ':hover': {
                                        backgroundColor: '#005bb5',
                                    },
                                    display: isMobile ? 'none' : 'block',
                                }}
                            >
                                Entre em contato
                            </SectionLink>
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
