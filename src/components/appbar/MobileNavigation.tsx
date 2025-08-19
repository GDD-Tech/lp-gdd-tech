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

const MobileNavigation: FC<MobileNavigationProps> = ({
    open,
    toggleDrawer,
}) => {
    return (
        <Drawer
            anchor="left"
            open={open}
            onClose={() => toggleDrawer(false)}
            slotProps={{
                backdrop: {
                    sx: {
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
            <Box display="flex" justifyContent="flex-end" p={2}>
                <IconButton
                    onClick={() => toggleDrawer(false)}
                    sx={{ color: '#fff' }}
                >
                    <Close />
                </IconButton>
            </Box>
            <List>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => toggleDrawer(false)}>
                        <ListItemText
                            primary={'teste'}
                            sx={{ textAlign: 'center' }}
                        />
                    </ListItemButton>
                </ListItem>
            </List>
            {/* <ContactButton /> */}
        </Drawer>
    )
}

export default MobileNavigation
