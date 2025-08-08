import {
    Code,
    DesignServices,
    IntegrationInstructions,
    Security,
    SupportAgent,
    Web,
} from '@mui/icons-material'
import { Box, Container, Grid, Paper, Typography } from '@mui/material'
import { type FC } from 'react'
import Section from '../global/Section'
import Title from '../global/Title'
import Subtitle from '../global/Subtitle'

interface FeatureItemProps {
    icon: React.ReactNode
    title: string
    description: string
}

const FeatureItem: FC<FeatureItemProps> = ({ icon, title, description }) => {
    return (
        <Box
            display={'flex'}
            alignItems={'center'}
            flexDirection={'column'}
            gap={2}
            px={3}
            sx={{
                transition: 'background-color 0.3s ease',
                '&:hover .feature-icon': {
                    bgcolor: '#005bb5',
                    color: 'white',
                },
            }}
        >
            <Box
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                width={90}
                height={90}
                bgcolor={'#F8F9FF'}
                borderRadius={4}
                className="feature-icon"
                sx={{
                    color: '#005bb5',
                    transition: 'background-color 0.3s ease, color 0.3s ease',
                }}
            >
                {icon}
            </Box>
            <Typography
                variant="h6"
                fontSize={'1.37rem'}
                fontWeight={600}
                textAlign={'center'}
            >
                {title}
            </Typography>
            <Subtitle textAlign={'center'}>{description}</Subtitle>
        </Box>
    )
}

const Features: FC = () => {
    return (
        <Section
            id="features"
            py={4}
            sx={{
                background: 'linear-gradient(180deg, white 50%, #FFF0EC 100%)',
            }}
        >
            <Container
                sx={{
                    textAlign: 'center',
                    py: 4,
                    my: 2,
                    maxWidth: 'md',
                    mx: 'auto',
                }}
            >
                <Title>Soluções Digitais Sob Medida</Title>
                <Subtitle maxWidth={600} mx="auto" mt={2}>
                    Desenvolvemos softwares personalizados, landing pages
                    otimizadas e soluções completas de T.I. para impulsionar o
                    seu negócio.
                </Subtitle>
            </Container>
            <Paper sx={{ borderRadius: 4, mx: { xs: 2, lg: 4 }, py: 8, px: 4 }}>
                <Grid container spacing={8}>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <FeatureItem
                            icon={<Code fontSize="large" />}
                            title="Desenvolvimento de Software"
                            description="Sistemas personalizados, escaláveis e seguros para empresas de todos os tamanhos."
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <FeatureItem
                            icon={<Web fontSize="large" />}
                            title="Landing Pages de Alta Conversão"
                            description="Páginas rápidas, responsivas e pensadas para maximizar resultados."
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <FeatureItem
                            icon={<SupportAgent fontSize="large" />}
                            title="Consultoria em T.I."
                            description="Análise estratégica e implementação de soluções tecnológicas sob demanda."
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <FeatureItem
                            icon={<IntegrationInstructions fontSize="large" />}
                            title="Integrações e APIs"
                            description="Integramos sistemas com ERPs, CRMs e APIs externas para automatizar processos."
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <FeatureItem
                            icon={<Security fontSize="large" />}
                            title="Suporte Técnico Especializado"
                            description="Manutenção, monitoramento e suporte para manter seu sistema sempre disponível."
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <FeatureItem
                            icon={<DesignServices fontSize="large" />}
                            title="UX/UI Design"
                            description="Experiência do usuário centrada em usabilidade, performance e estética."
                        />
                    </Grid>
                </Grid>
            </Paper>
        </Section>
    )
}

export default Features
