import { Box, Button, List, ListItem } from '@mui/material'
import type { BoxProps } from '@mui/system'
import { type FC } from 'react'

const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
}

const Navigation: FC<BoxProps> = ({ ...props }) => {
    return (
        <Box {...props}>
            <nav aria-label="Main navigation">
                <List
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        padding: 0,
                        margin: 0,
                        listStyle: 'none',
                        '& a': {
                            fontSize: 16,
                            color: 'black',
                            fontWeight: 500,
                        },
                        '& a:hover': { color: 'primary.main' },
                        gap: 2,
                    }}
                >
                    <ListItem sx={{ padding: 0 }}>
                        <Button
                            component={'a'}
                            sx={{ textTransform: 'none' }}
                            onClick={() => scrollToSection('solucoes')}
                        >
                            Soluções
                        </Button>
                    </ListItem>
                    <ListItem sx={{ padding: 0 }}>
                        <Button
                            component={'a'}
                            sx={{ textTransform: 'none' }}
                            onClick={() => scrollToSection('sobre')}
                        >
                            Sobre
                        </Button>
                    </ListItem>
                    <ListItem sx={{ padding: 0 }}>
                        <Button
                            component={'a'}
                            sx={{ textTransform: 'none', minWidth: 130 }}
                            onClick={() => scrollToSection('funcionamento')}
                        >
                            Como funciona
                        </Button>
                    </ListItem>
                </List>
            </nav>
        </Box>
    )
}

export default Navigation
