import { Facebook, Instagram } from '@mui/icons-material'
import { Box, Button, Link, Typography } from '@mui/material'
import { type FC } from 'react'

const Footer: FC = () => {
    return (
        <Box component={'footer'}>
            {/* <Box
                display={'flex'}
                flexDirection={{ xs: 'column', md: 'row' }}
                sx={{
                    padding: '1rem',
                    backgroundColor: '#f8f9fa',
                }}
            >
                <Box flex={1}>logo + desc</Box>
                <Grid
                    flex={1}
                    container
                    spacing={2}
                    justifyContent="center"
                    mt={2}
                >
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <Typography variant="h6" fontWeight={600}>
                            Sobre Nós
                        </Typography>
                    </Grid>
                </Grid>
            </Box> */}
            <Box
                display={'flex'}
                flexDirection={{ xs: 'column-reverse', md: 'row' }}
                justifyContent={'space-between'}
                alignItems={'center'}
                color={'white'}
                px={4}
                py={2}
                bgcolor="#005bb5"
            >
                <Typography
                    textAlign={{ xs: 'center', md: 'left' }}
                    fontWeight={500}
                    flex={1}
                >
                    © {new Date().getFullYear()} GDD Tech. Todos os direitos
                    reservados
                </Typography>
                <Box
                    display={'flex'}
                    flex={2}
                    alignItems={'center'}
                    flexDirection={{ xs: 'column', md: 'row' }}
                >
                    <Box
                        display={'flex'}
                        justifyContent="center"
                        gap={2}
                        flex={1}
                        sx={{
                            '& > a': { color: 'white', opacity: 0.7 },
                            '& > a:hover': {
                                opacity: 1,
                            },
                        }}
                    >
                        <Link
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Facebook />
                        </Link>
                        <Link
                            href="https://www.instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Instagram />
                        </Link>
                    </Box>
                    <Box
                        display={'flex'}
                        justifyContent="flex-end"
                        gap={2}
                        flex={1}
                        sx={{ '& > button': { color: 'white' } }}
                    >
                        <Button variant="text">Política de Privacidade</Button>
                        <Button variant="text">Termo de Uso</Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Footer
