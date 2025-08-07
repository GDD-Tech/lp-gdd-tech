import { Box } from '@mui/system'
import { type FC } from 'react'
import Features from './Features'
import { Toolbar } from '@mui/material'
import Section from '../global/Section'

const MainContent: FC = () => {
    return (
        <>
            <Toolbar />
            <Box component={'main'}>
                <Section id="apresentacao">descricao botao de contato</Section>
                <Features />
                <Box component={'section'} id="motivacao do cliente">
                    <div id="motivacao1">
                        imagem por que ter um site/aplicacao/solucao (contexto)
                    </div>
                    <div id="motivacao2">
                        imagem por que ter um site/aplicacao/solucao (contexto)
                    </div>
                </Box>
                <Box component={'section'} id="caminho ao sucesso">
                    processo da solucao do problema
                </Box>
                <Box component={'section'} id="projetos desenvolvidos">
                    portifolio
                </Box>
                <Box component={'section'} id="estimo para entrar em contato">
                    entre em contato para criar sua aplicacao...
                </Box>
                <Box component={'section'} id="faq"></Box>
                <Box component={'section'} id="formulario de contato"></Box>
            </Box>
        </>
    )
}

export default MainContent
