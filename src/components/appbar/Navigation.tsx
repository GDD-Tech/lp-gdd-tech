import { Box, List, ListItem } from '@mui/material'
import type { BoxProps } from '@mui/system'
import { type FC } from 'react'
import SectionLink from '../global/SectionLink'

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
                        <SectionLink
                            id={'solucoes'}
                            component={'a'}
                            sx={{
                                textTransform: 'none',
                                '&:hover': { bgcolor: 'transparent' },
                            }}
                        >
                            Soluções
                        </SectionLink>
                    </ListItem>
                    <ListItem sx={{ padding: 0 }}>
                        <SectionLink
                            id={'sobre'}
                            component={'a'}
                            sx={{
                                textTransform: 'none',

                                '&:hover': { bgcolor: 'transparent' },
                            }}
                        >
                            Sobre
                        </SectionLink>
                    </ListItem>
                    <ListItem sx={{ padding: 0 }}>
                        <SectionLink
                            id={'funcionamento'}
                            component={'a'}
                            sx={{
                                textTransform: 'none',
                                minWidth: 130,
                                '&:hover': { bgcolor: 'transparent' },
                            }}
                        >
                            Como funciona
                        </SectionLink>
                    </ListItem>
                </List>
            </nav>
        </Box>
    )
}

export default Navigation
