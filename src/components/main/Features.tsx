import {
    Code,
    DesignServices,
    IntegrationInstructions,
    Security,
    SupportAgent,
    Web,
} from '@mui/icons-material'
import { Container, Grid, Paper } from '@mui/material'
import { type FC } from 'react'
import Section from '../global/Section'
import Subtitle from '../global/Subtitle'
import Title from '../global/Title'
import FeatureItem from '../global/FeatureItem'

const Features: FC = () => {
    return (
        <Section
            id="solucoes"
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
                    Criamos softwares e ferramentas digitais que resolvem problemas reais e impulsionam o crescimento da sua empresa.
                </Subtitle>
            </Container>
            <Paper
                sx={{
                    borderRadius: 4,
                    mx: { xs: 2, lg: 4 },
                    py: 8,
                    px: { xs: 0, md: 4 },
                }}
            >
                <Grid container spacing={8}>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <FeatureItem
                            icon={<Code fontSize="large" />}
                            title="Desenvolvimento de Software"
                            description="Aplicações web e mobile projetadas de acordo com as necessidades do seu negócio."
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <FeatureItem
                            icon={<Web fontSize="large" />}
                            title="Landing Pages de Alta Conversão"
                            description="Páginas responsivas e otimizadas para gerar leads e aumentar vendas."
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <FeatureItem
                            icon={<SupportAgent fontSize="large" />}
                            title="Consultoria em T.I."
                            description="Orientação estratégica para escolher e implementar a tecnologia certa no momento certo."
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <FeatureItem
                            icon={<IntegrationInstructions fontSize="large" />}
                            title="Integrações e APIs"
                            description="Conectamos sistemas, ERPs, CRMs e ferramentas externas em um único fluxo digital."
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <FeatureItem
                            icon={<Security fontSize="large" />}
                            title="Suporte Técnico Especializado"
                            description="Monitoramento e manutenção contínuos para manter tudo funcionando."
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <FeatureItem
                            icon={<DesignServices fontSize="large" />}
                            title="UX/UI Design"
                            description="Interfaces funcionais, intuitivas e agradáveis para seus usuários."
                        />
                    </Grid>
                </Grid>
            </Paper>
        </Section>
    )
}

export default Features
