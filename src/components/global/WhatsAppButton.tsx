import { WhatsApp } from '@mui/icons-material'
import { Fab, Zoom } from '@mui/material'
import type { FC } from 'react';

const WhatsAppButton: FC = () => {
    const phone = '5551998746202';
    const message = 'Olá. Encontrei seu contato pelo site e gostaria de saber mais sobre os serviços oferecidos.'
    const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

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
