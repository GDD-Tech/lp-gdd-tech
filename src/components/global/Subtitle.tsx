import { Typography, type TypographyProps } from '@mui/material'
import { type FC } from 'react'

interface SubtitleProps extends TypographyProps {
    children: React.ReactNode
}

const Subtitle: FC<SubtitleProps> = ({ children, ...props }) => {
    return (
        <Typography
            variant="body1"
            {...props}
            sx={{
                opacity: 0.7,
                fontSize: { xs: '0.95rem', md: '1rem' },
                ...props.sx,
            }}
        >
            {children}
        </Typography>
    )
}

export default Subtitle