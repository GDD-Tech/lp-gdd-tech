import { Box, Container, List, ListItem, Typography } from '@mui/material'
import { type FC } from 'react'
import image_desc1 from '../../assets/image_desc1.png'
import image_desc2 from '../../assets/image_desc2.png'
import Section from '../global/Section'
import SectionContext from '../global/SectionContext'
import SectionLink from '../global/SectionLink'
import Subtitle from '../global/Subtitle'
import Title from '../global/Title'

interface CustomListItemProps {
    index: string
    title: string
    description: string
}

const CustomListItem: FC<CustomListItemProps> = ({
    index,
    title,
    description,
}) => {
    return (
        <ListItem disableGutters>
            <Box
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                border={1}
                borderRadius={'50%'}
                flex={'0 0 auto'}
                sx={{ borderColor: 'rgba(0, 0, 0, 0.2)' }}
                width={60}
                height={60}
                mr={2}
            >
                <Typography fontWeight={'medium'}>{index}</Typography>
            </Box>
            <Box>
                <Typography
                    variant="h6"
                    fontWeight={'medium'}
                    fontSize={'1.25rem'}
                >
                    {title}
                </Typography>
                <Typography variant="body1" fontSize={'1rem'}>
                    {description}
                </Typography>
            </Box>
        </ListItem>
    )
}

const Motivations: FC = () => {
    return (
        <Section
            id="sobre"
            py={4}
            sx={{
                background: 'linear-gradient(180deg, #FFF0EC 10%, white 100%)',
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
                <Box
                    display={'flex'}
                    flexDirection={{ xs: 'column', md: 'row' }}
                    gap={3}
                    mb={8}
                >
                    <Box
                        flex={1}
                        sx={{
                            textAlign: 'center',
                            position: 'relative',
                        }}
                    >
                        <img
                            src={image_desc2}
                            alt="Tecnologia"
                            style={{
                                maxWidth: '80%',
                                height: 'auto',
                                position: 'relative',
                                zIndex: 2,
                            }}
                        />
                        <Box
                            width="100%"
                            height={{ xs: 100, md: 200 }}
                            bgcolor="red"
                            borderRadius={6}
                            sx={{
                                background:
                                    'linear-gradient(90deg, #165DAA 10%, #A8D3F8 100%)',
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                zIndex: 1,
                            }}
                        />
                    </Box>

                    <Box flex={1}>
                        <SectionContext
                            textAlign={'left'}
                            color="#004583"
                            gutterBottom
                        >
                            Inovação e Performance
                        </SectionContext>
                        <Title textAlign={'left'} gutterBottom>
                            Tecnologia que cresce junto com você
                        </Title>
                        <Subtitle textAlign={'left'}>
                            Não entregamos apenas software: acompanhamos sua
                            jornada para garantir que sua solução continue
                            eficiente e segura.
                        </Subtitle>

                        <List sx={{ gap: 2 }}>
                            <CustomListItem
                                index="01"
                                title="Soluções sob medida"
                                description="Sistemas ágeis, seguros e escaláveis, adaptados à realidade do seu negócio."
                            />
                            <CustomListItem
                                index="02"
                                title="Integrações inteligentes"
                                description="Conectamos plataformas e automatizamos fluxos para eliminar retrabalho."
                            />
                            <CustomListItem
                                index="03"
                                title="Suporte contínuo"
                                description="Monitoramento, manutenção e atendimento especializado para garantir tranquilidade após a entrega."
                            />
                        </List>
                    </Box>
                </Box>
                <Box
                    display={'flex'}
                    flexDirection={{ xs: 'column-reverse', md: 'row' }}
                    gap={2}
                >
                    <Box flex={1}>
                        <SectionContext
                            textAlign={'left'}
                            color="#004583"
                            gutterBottom
                        >
                            Dados e Inteligência
                        </SectionContext>
                        <Title textAlign={'left'} gutterBottom>
                            Decisões guiadas por dados reais
                        </Title>
                        <Subtitle textAlign={'left'} mb={3}>
                            Transformamos informações em insights estratégicos
                            para otimizar sua performance e apoiar decisões mais
                            assertivas.
                        </Subtitle>
                        <Box display={'flex'} justifyContent={'left'}>
                            <SectionLink
                                id="contato"
                                variant="contained"
                                size="large"
                                disableElevation
                                sx={{
                                    backgroundColor: '#004583',
                                    ':hover': {
                                        backgroundColor: '#005bb5',
                                    },
                                }}
                            >
                                Saiba mais
                            </SectionLink>
                        </Box>
                    </Box>
                    <Box
                        flex={1}
                        sx={{
                            textAlign: 'center',
                            position: 'relative',
                        }}
                    >
                        <img
                            src={image_desc1}
                            alt="Tecnologia"
                            style={{
                                maxWidth: '80%',
                                height: 'auto',
                                position: 'relative',
                                zIndex: 2,
                            }}
                        />
                        <Box
                            width="100%"
                            height={{ xs: 100, md: 200 }}
                            bgcolor="red"
                            borderRadius={6}
                            sx={{
                                background:
                                    'linear-gradient(90deg, #165DAA 10%, #A8D3F8 100%)',
                                position: 'absolute',
                                bottom: 6,
                                left: 0,
                                zIndex: 1,
                            }}
                        />
                    </Box>
                </Box>
            </Container>
        </Section>
    )
}

export default Motivations
