import { Box, Button, Container, Stack, Typography } from '@mui/material'
import { type FC } from 'react'
import hero_image from '../../assets/hero_image.png'
import Section from '../global/Section'
import Title from '../global/Title'
import Subtitle from '../global/Subtitle'

const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
}

const Hero: FC = () => {
    return (
        <Section
            id="apresentacao"
            sx={{
                backgroundColor: '#fff',
                color: '#0a192f',
                minHeight: { xs: 'auto', md: '90vh' },
                display: 'flex',
                alignItems: 'center',
                py: { xs: 6, md: 8 },
            }}
        >
            <Container maxWidth="lg">
                <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    spacing={{ xs: 4, md: 6 }}
                    alignItems="center"
                >
                    <Box flex={1}>
                        <Typography
                            variant="body1"
                            sx={{
                                textTransform: 'uppercase',
                                letterSpacing: 1,
                                opacity: 0.7,
                                fontSize: { xs: '0.85rem', md: '1rem' },
                            }}
                            fontWeight={500}
                        >
                            Web • Mobile • Software sob medida
                        </Typography>

                        <Title sx={{ mt: 1 }} gutterBottom>
                            Tecnologia que acelera seu crescimento
                        </Title>
                        <Subtitle sx={{ mb: 3 }}>
                            Desenvolvemos aplicações sob medida, rápidas e
                            escaláveis, para transformar sua ideia em um produto
                            digital de impacto.
                        </Subtitle>

                        <Stack
                            direction={{ xs: 'column', sm: 'row' }}
                            spacing={2}
                            sx={{ width: '100%' }}
                        >
                            <Button
                                variant="contained"
                                size="large"
                                onClick={() => {
                                    scrollToSection('contato')
                                }}
                                disableElevation
                                sx={{
                                    backgroundColor: '#004583',
                                    ':hover': {
                                        backgroundColor: '#005bb5',
                                    },
                                }}
                            >
                                Começar projeto
                            </Button>
                            <Button
                                variant="outlined"
                                size="large"
                                onClick={() => {
                                    scrollToSection('solucoes')
                                }}
                                sx={{
                                    borderColor: '#004583',
                                    color: '#004583',
                                    ':hover': {
                                        borderColor: '#005bb5',
                                        color: '#005bb5',
                                    },
                                }}
                            >
                                Saiba Mais
                            </Button>
                        </Stack>
                    </Box>

                    <Box
                        flex={1}
                        sx={{
                            textAlign: 'center',
                            display: { xs: 'none', md: 'flex' },
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <img
                            src={hero_image}
                            alt="Tecnologia"
                            style={{
                                maxWidth: '100%',
                                maxHeight: 400,
                                height: 'auto',
                            }}
                        />
                    </Box>
                </Stack>
            </Container>
        </Section>
    )
}

export default Hero
