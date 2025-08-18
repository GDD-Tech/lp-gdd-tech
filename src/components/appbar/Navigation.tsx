import { List, ListItem, Link, Box } from '@mui/material'
import type { BoxProps } from '@mui/system'
import { type FC } from 'react'

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
                        gap: 6,
                    }}
                >
                    <ListItem sx={{ padding: 0 }}>
                        <Link href="#solucoes" underline="none">
                            Soluções
                        </Link>
                    </ListItem>
                    <ListItem sx={{ padding: 0 }}>
                        <Link href="#sobre" underline="none">
                            Sobre
                        </Link>
                    </ListItem>
                    <ListItem sx={{ padding: 0, minWidth: 110 }}>
                        <Link href="#funcionamento" underline="none">
                            Como funciona
                        </Link>
                    </ListItem>
                </List>
            </nav>
        </Box>
    )
}

export default Navigation
