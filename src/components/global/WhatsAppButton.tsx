import { WhatsApp } from '@mui/icons-material'
import { Fab, Zoom } from '@mui/material'
import type { FC } from 'react';

const { VITE_WHATSAPP_NUMBER } = import.meta.env

const WhatsAppButton: FC = () => {
    const message = 'Olá. Encontrei seu contato pelo site e gostaria de saber mais sobre os serviços oferecidos.'
    const whatsappLink = `https://wa.me/${VITE_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    return (
        <Zoom in>
            <Fab
                color="success"
                aria-label="whatsapp"
                sx={{
                    position: 'fixed',
                    bottom: 20,
                    right: 20,
                    zIndex: 1500,
                }}
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
            >
                <WhatsApp />
            </Fab>
        </Zoom>
    )
}

export default WhatsAppButton
