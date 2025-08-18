import { Box, Typography } from '@mui/material'
import type { FC } from 'react'
import Subtitle from './Subtitle'

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

export default FeatureItem
