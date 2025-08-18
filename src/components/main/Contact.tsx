import { type FC } from 'react'
import Section from '../global/Section'
import {
    Box,
    Button,
    Container,
    Paper,
    TextField,
    Typography,
} from '@mui/material'
import Title from '../global/Title'
import Subtitle from '../global/Subtitle'

const Contact: FC = () => {
    return (
        <Section
            id="contato"
            py={4}
            sx={{
                background: 'linear-gradient(180deg, #F2F1FF 0%, #F6F6FF 3%, white 20%)',
            }}
        >
            <Container
                sx={{
                    textAlign: 'center',
                    py: 4,
                    maxWidth: 'md',
                    mx: 'auto',
                }}
            >
                <Title>Conecte-se com a gente</Title>
                <Subtitle maxWidth={600} mx="auto" mt={2}>
                    Do planejamento à entrega, ajudamos sua empresa a crescer
                    com tecnologia sob medida.
                </Subtitle>

                <Paper
                    sx={{
                        borderRadius: 4,
                        mx: { xs: 2, lg: 4 },
                        py: 6,
                        px: { xs: 3, md: 6 },
                        my: 4,
                        backgroundColor: '#f9fbfd',
                    }}
                    elevation={2}
                >
                    <Box
                        component="form"
                        noValidate
                        autoComplete="off"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 3,
                            maxWidth: 800,
                            mx: 'auto',
                        }}
                    >
                        {/* Linha 1 */}
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', md: 'row' },
                                gap: 2,
                            }}
                        >
                            <TextField
                                fullWidth
                                placeholder="Digite seu nome"
                                variant="outlined"
                            />
                            <TextField
                                fullWidth
                                placeholder="Empresa (opcional)"
                                variant="outlined"
                            />
                        </Box>

                        {/* Linha 2 */}
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', md: 'row' },
                                gap: 2,
                            }}
                        >
                            <TextField
                                fullWidth
                                placeholder="Digite seu e-mail"
                                type="email"
                                variant="outlined"
                            />
                            <TextField
                                fullWidth
                                placeholder="Digite seu telefone"
                                type="tel"
                                variant="outlined"
                            />
                        </Box>

                        {/* Mensagem */}
                        <TextField
                            fullWidth
                            placeholder="Conte-nos sobre o seu projeto"
                            multiline
                            rows={4}
                            variant="outlined"
                        />

                        {/* Texto + Botão */}
                        <Box textAlign="center" mt={2}>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                mb={2}
                            >
                                Ao clicar no botão, você concorda com nossos
                                termos e política de privacidade.
                            </Typography>
                            <Button
                                variant="contained"
                                size="large"
                                disableElevation
                                sx={{
                                    backgroundColor: '#6366f1',
                                    borderRadius: 2,
                                    px: 6,
                                    py: 1.5,
                                    textTransform: 'none',
                                    fontWeight: 'bold',
                                    '&:hover': { backgroundColor: '#4f46e5' },
                                }}
                            >
                                Enviar mensagem
                            </Button>
                        </Box>
                    </Box>
                </Paper>
            </Container>
        </Section>
    )
}

export default Contact
