import { Button, type ButtonProps } from '@mui/material'
import { type FC } from 'react'

const { VITE_WHATSAPP_NUMBER } = import.meta.env

const ContactButton: FC<ButtonProps> = (props) => {
    return (
        <Button
            variant="contained"
            disableElevation
            href={`https://wa.me/${VITE_WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
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
