import { Typography, type TypographyProps } from '@mui/material'
import { type FC } from 'react'

interface TitleProps extends TypographyProps {
    children: React.ReactNode
}

const Title: FC<TitleProps> = ({ children, ...props }) => {
    return (
        <Typography
            variant="h2"
            component="h1"
            {...props}
            sx={{
                fontWeight: 'bold',
                fontSize: { xs: '2rem', md: '3rem' },
                lineHeight: 1.2,
                ...props.sx,
            }}
        >
            {children}
        </Typography>
    )
}

export default Title
