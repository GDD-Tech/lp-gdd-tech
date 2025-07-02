import { Button, type ButtonProps } from '@mui/material'
import { type FC } from 'react'

const ContactButton: FC<ButtonProps> = (props) => {
    return (
        <Button
            variant="contained"
            disableElevation
            sx={{
                height: 44,
                px: 3,
                borderRadius: 2,
                textTransform: 'none',
                fontWeight: 600,
                fontSize: 16,
                ...props.sx,
            }}
        >
            Entre em contato
        </Button>
    )
}

export default ContactButton
