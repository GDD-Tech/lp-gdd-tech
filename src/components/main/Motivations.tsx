import {
    Box,
    Button,
    Container,
    List,
    ListItem,
    Typography,
} from '@mui/material'
import { type FC } from 'react'
import image_desc1 from '../../assets/image_desc1.png'
import image_desc2 from '../../assets/image_desc2.png'
import Section from '../global/Section'
import SectionContext from '../global/SectionContext'
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
                            Otimize seus processos com tecnologia
                        </Title>
                        <Subtitle textAlign={'left'}>
                            Automatize fluxos de trabalho e aumente a eficiência
                            da sua equipe.
                        </Subtitle>

                        <List sx={{ gap: 2 }}>
                            <CustomListItem
                                index="01"
                                title="Desenvolvimento sob medida"
                                description="Aplicações web, mobile e sistemas escaláveis, criados para atender às necessidades específicas do seu negócio."
                            />
                            <CustomListItem
                                index="02"
                                title="Integrações inteligentes"
                                description="Conecte plataformas, APIs e serviços em um ecossistema digital totalmente integrado."
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
                            Decisões guiadas por tecnologia
                        </Title>
                        <Subtitle textAlign={'left'} mb={3}>
                            Transformamos dados em insights para melhorar
                            resultados e aumentar a performance.
                        </Subtitle>
                        <Box display={'flex'} justifyContent={'left'}>
                            <Button variant="contained" disableElevation>
                                Know more
                            </Button>
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
                                bottom: 0,
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
