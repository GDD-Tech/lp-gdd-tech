import { Close } from '@mui/icons-material'
import {
    Box,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
} from '@mui/material'
import { type FC } from 'react'

interface MobileNavigationProps {
    open: boolean
    toggleDrawer: (open: boolean) => void
}

const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
}

const MobileNavigation: FC<MobileNavigationProps> = ({
    open,
    toggleDrawer,
}) => {
    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={() => toggleDrawer(false)}
            slotProps={{
                backdrop: {
                    sx: {
                        backgroundColor: 'rgb(0, 69, 131, 0.7)',
                        backdropFilter: 'blur(2px)',
                    },
                },
                paper: {
                    sx: {
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        color: '#fff',
                    },
                },
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    p: 1,
                }}
            >
                <IconButton
                    onClick={() => toggleDrawer(false)}
                    sx={{ color: '#fff' }}
                >
                    <Close />
                </IconButton>
            </Box>
            <List>
                <ListItem disablePadding>
                    <ListItemButton
                        onClick={() => {
                            toggleDrawer(false)
                            setTimeout(() => scrollToSection('solucoes'), 250)
                        }}
                        sx={{
                            color: '#fff',
                        }}
                    >
                        <ListItemText primary={'Soluções'} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                        onClick={() => {
                            toggleDrawer(false)
                            setTimeout(() => scrollToSection('sobre'), 250)
                        }}
                        sx={{
                            color: '#fff',
                        }}
                    >
                        <ListItemText primary={'Sobre'} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                        onClick={() => {
                            toggleDrawer(false)
                            setTimeout(
                                () => scrollToSection('funcionamento'),
                                250
                            )
                        }}
                        sx={{
                            color: '#fff',
                        }}
                    >
                        <ListItemText primary={'Como funciona'} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                        onClick={() => {
                            toggleDrawer(false)
                            setTimeout(() => scrollToSection('contato'), 250)
                        }}
                        sx={{
                            color: '#fff',
                        }}
                    >
                        <ListItemText primary={'Entre em contato'} />
                    </ListItemButton>
                </ListItem>
            </List>
        </Drawer>
    )
}

export default MobileNavigation
