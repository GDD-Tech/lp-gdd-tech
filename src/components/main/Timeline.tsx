import {
    AssignmentTurnedIn,
    ContactMail,
    TrendingUp,
} from '@mui/icons-material'
import { Container, Grid, Paper } from '@mui/material'
import { type FC } from 'react'
import FeatureItem from '../global/FeatureItem'
import Section from '../global/Section'
import Subtitle from '../global/Subtitle'
import Title from '../global/Title'

const Timeline: FC = () => {
    return (
        <Section
            id="funcionamento"
            py={4}
            sx={{
                background: 'linear-gradient(180deg, white 30%, #F2F1FF 100%)',
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
                <Title>Como funciona?</Title>
                <Subtitle maxWidth={600} mx="auto" mt={2}>
                    Entre em contato conosco, defina o escopo do seu projeto e
                    acompanhe sua empresa alcançar novos resultados.
                </Subtitle>
            </Container>

            <Paper sx={{ borderRadius: 4, mx: { xs: 2, lg: 4 }, py: 8, px: 4 }}>
                <Grid container spacing={8}>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <FeatureItem
                            icon={<ContactMail fontSize="large" />}
                            title="1. Entre em contato"
                            description="Converse com nossa equipe e compartilhe suas necessidades e objetivos."
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <FeatureItem
                            icon={<AssignmentTurnedIn fontSize="large" />}
                            title="2. Defina o escopo"
                            description="Planejamos a solução ideal para o seu negócio, seja sistema, site ou consultoria."
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <FeatureItem
                            icon={<TrendingUp fontSize="large" />}
                            title="3. Alcance resultados"
                            description="Otimize seus processos, aumente suas vendas e conquiste novos clientes."
                        />
                    </Grid>
                </Grid>
            </Paper>
        </Section>
    )
}

export default Timeline
