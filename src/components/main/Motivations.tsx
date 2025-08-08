import { Box, Container } from '@mui/material'
import { type FC } from 'react'
import Section from '../global/Section'

const Motivations: FC = () => {
    return (
        <Section
            id="motivations"
            py={4}
            sx={{
                background: 'linear-gradient(180deg, #FFF0EC 50%, white 100%)',
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
                    gap={2}
                >
                    <Box flex={1}>
                        <p>image</p>
                    </Box>
                    <Box flex={1}>
                        <p>track audience activities</p>
                        <p>Track your audience activities</p>
                        <p>
                            Schedule your posts for times when your audience is
                            most active. Choose from our best-time predictions,
                            or create your own publishing schedule.
                        </p>
                        <Box>
                            <p>lst item 1</p>
                            <p>lst item 2</p>
                        </Box>
                    </Box>
                </Box>
                <Box
                    display={'flex'}
                    flexDirection={{ xs: 'column', md: 'row' }}
                    gap={2}
                >
                    <Box flex={1} border={1}>
                        <p>track audience activities</p>
                        <p>Track your audience activities</p>
                        <p>
                            Schedule your posts for times when your audience is
                            most active. Choose from our best-time predictions,
                            or create your own publishing schedule.
                        </p>
                        <Box>
                            <p>lst item 1</p>
                            <p>lst item 2</p>
                        </Box>
                    </Box>
                    <Box flex={1}>
                        <p>image</p>
                    </Box>
                </Box>
            </Container>
        </Section>
    )
}

export default Motivations
