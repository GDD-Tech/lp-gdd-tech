import { Box, type BoxProps } from '@mui/material'
import type { FC } from 'react'

interface SectionProps extends BoxProps {
    id: string
    children: React.ReactNode
}

const Section: FC<SectionProps> = ({ id, children, ...props }) => (
    <Box
        id={id}
        component={'section'}
        {...props}
        sx={{
            scrollMarginTop: {
                xs: '56px',
                sm: '64px',
            },
        }}
    >
        {children}
    </Box>
)

export default Section
