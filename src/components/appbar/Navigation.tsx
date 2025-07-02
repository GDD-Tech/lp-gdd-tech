import { List, ListItem, Link } from '@mui/material'
import { type FC } from 'react'

const Navigation: FC = () => {
    return (
        <nav aria-label="Main navigation">
            <List
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    padding: 0,
                    margin: 0,
                    listStyle: 'none',
                    '& a': { fontSize: 16, color: 'black', fontWeight: 500 },
                    '& a:hover': { color: 'primary.main' },
                    gap: 6,
                }}
            >
                <ListItem sx={{ padding: 0 }}>
                    <Link href="#home" underline="none">
                        Seção 1
                    </Link>
                </ListItem>
                <ListItem sx={{ padding: 0 }}>
                    <Link href="#about" underline="none">
                        Seção 2
                    </Link>
                </ListItem>
                <ListItem sx={{ padding: 0 }}>
                    <Link href="#services" underline="none">
                        Seção 3
                    </Link>
                </ListItem>
                <ListItem sx={{ padding: 0 }}>
                    <Link href="#contact" underline="none">
                        Seção 4
                    </Link>
                </ListItem>
            </List>
        </nav>
    )
}

export default Navigation
