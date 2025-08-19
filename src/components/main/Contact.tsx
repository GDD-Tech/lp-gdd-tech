import { WhatsApp } from '@mui/icons-material'
import {
    Box,
    Button,
    Container,
    Paper,
    TextField,
    Typography,
} from '@mui/material'
import { useState, type FC } from 'react'
import Section from '../global/Section'
import Subtitle from '../global/Subtitle'
import Title from '../global/Title'

const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER

const Contact: FC = () => {
    const [message, setMessage] = useState<string>('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (!message.trim()) return

        const encodedMessage = encodeURIComponent(message)
        const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

        window.open(whatsappLink, '_blank')
    }

    return (
        <Section
            id="contato"
            py={4}
            sx={{
                background:
                    'linear-gradient(180deg, #F2F1FF 0%, #F6F6FF 3%, white 20%)',
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
                        mx: { xs: 0, lg: 4 },
                        py: 6,
                        px: { xs: 2, md: 6 },
                        my: 4,
                        backgroundColor: '#f9fbfd',
                    }}
                    elevation={1}
                >
                    <Box
                        component="form"
                        noValidate
                        autoComplete="off"
                        onSubmit={handleSubmit}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 3,
                            maxWidth: 800,
                            mx: 'auto',
                        }}
                    >
                        <TextField
                            fullWidth
                            placeholder="Conte-nos sobre a sua ideia"
                            multiline
                            rows={4}
                            variant="outlined"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />

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
                                startIcon={<WhatsApp />}
                                color="success"
                                type="submit"
                                sx={{
                                    px: 6,
                                    py: 1.5,
                                    textTransform: 'none',
                                    fontWeight: 'bold',
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
