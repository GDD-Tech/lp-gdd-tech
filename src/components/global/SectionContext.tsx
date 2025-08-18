import { Typography, type TypographyProps } from '@mui/material'
import React, { type FC } from 'react'

interface SectionContextProps extends TypographyProps {
    children: React.ReactNode
}

const SectionContext: FC<SectionContextProps> = ({ children, ...props }) => {
    return (
        <Typography
            {...props}
            sx={{
                fontWeight: 'medium',
                fontSize: { xs: '1.12rem', md: '1.37rem' },
                ...props.sx,
            }}
        >
            {children}
        </Typography>
    )
}

export default SectionContext
