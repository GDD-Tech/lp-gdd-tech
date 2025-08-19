import { Button, type ButtonProps } from '@mui/material'
import { type FC } from 'react'

const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
}

interface SectionLinkProps extends ButtonProps {
    id: string
}

const SectionLink: FC<SectionLinkProps> = ({ id, children, ...props }) => {
    return (
        <Button
            onClick={() => {
                scrollToSection(id)
            }}
            {...props}
        >
            {children}
        </Button>
    )
}

export default SectionLink
