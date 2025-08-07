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
                    bgcolor: 'primary.main',
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
                    color: 'primary.main',
                    transition: 'background-color 0.3s ease, color 0.3s ease',
                }}
            >
                {icon}
            </Box>
            <Typography
                variant="h6"
                fontSize={22}
                fontWeight={'bold'}
                textAlign={'center'}
            >
                {title}
            </Typography>
            <Typography
                variant="body2"
                fontSize={16}
                color="text.secondary"
                fontWeight={500}
                textAlign={'center'}
            >
                {description}
            </Typography>
        </Box>
    )
}

const Features: FC = () => {
    return (
        <Box
            component={'section'}
            id="features"
            my={4}
            sx={{ scrollMarginTop: '80px' }}
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
                <Typography variant="h2" fontSize={44} fontWeight="bold">
                    Soluções Digitais Sob Medida
                </Typography>
                <Typography
                    variant="h6"
                    fontSize={16}
                    color="text.secondary"
                    maxWidth={600}
                    mx="auto"
                    mt={2}
                >
                    Desenvolvemos softwares personalizados, landing pages
                    otimizadas e soluções completas de T.I. para impulsionar o
                    seu negócio.
                </Typography>
            </Container>
            <Paper sx={{ borderRadius: 4, mx: {xs: 2, lg: 4}, py: 8, px: 4 }}>
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
        </Box>
    )
}

export default Features
