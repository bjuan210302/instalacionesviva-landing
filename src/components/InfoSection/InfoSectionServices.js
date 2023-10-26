import React from 'react'
import { AiOutlineBuild } from 'react-icons/ai'
import { CgSize } from 'react-icons/cg'
import { GoLaw } from 'react-icons/go'
import { RiListSettingsLine } from 'react-icons/ri'
import { Container } from '../../globalStyles'
import {
    InfoColumnIcon,
    InfoColumnWithIcon,
    InfoRow, ServiceInfoSec,
    ServiceSubtitle,
    ServiceTextWrapper,
    ServiceTitle
} from './InfoSection.elements'

// eslint-disable-next-line
const InfoSectionServices = ({

    primary,
    lightBg,
    topLine,
    lightTopLine,
    lightText,
    lightTextDesc,
    headline,
    description,
    buttonLabel,
    img,
    alt,
    imgStart,
    start,
    imgDropShadowColor,
}) => {

    // eslint-disable-next-line
    const scrollTo = (id) => {
        document.getElementById(id).scrollIntoView({
            behavior: 'smooth'
        });
    }

    return (
        <>
            <ServiceInfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumnWithIcon>
                            <InfoColumnIcon>
                                <CgSize color='#28365c' />
                            </InfoColumnIcon>
                            <ServiceTextWrapper>
                                <ServiceTitle lightText={lightText}>Dimensionamiento</ServiceTitle>
                                <ServiceSubtitle lightTextDesc={lightTextDesc}>
                                    Nuestro equipo de expertos analizará tus requerimientos energéticos y diseñará un sistema a medida que se adapte a tus necesidades.
                                </ServiceSubtitle>
                            </ServiceTextWrapper>
                        </InfoColumnWithIcon>
                        <InfoColumnWithIcon>
                            <InfoColumnIcon>
                                <AiOutlineBuild color='#28365c' />
                            </InfoColumnIcon>
                            <ServiceTextWrapper>
                                <ServiceTitle lightText={lightText}>Instalación</ServiceTitle>
                                <ServiceSubtitle lightTextDesc={lightTextDesc}>
                                    Contamos con un equipo de instaladores altamente capacitados que se encargarán de llevar a cabo la instalación de tu sistema de manera eficiente y segura.
                                </ServiceSubtitle>
                            </ServiceTextWrapper>
                        </InfoColumnWithIcon>
                    </InfoRow>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumnWithIcon>
                            <InfoColumnIcon>
                                <RiListSettingsLine color='#28365c' />
                            </InfoColumnIcon>
                            <ServiceTextWrapper>
                                <ServiceTitle lightText={lightText}>Mantenimiento</ServiceTitle>
                                <ServiceSubtitle lightTextDesc={lightTextDesc}>Ofrecemos servicios de mantenimiento regulares que incluyen inspecciones, limpieza y reparaciones.</ServiceSubtitle>
                            </ServiceTextWrapper>
                        </InfoColumnWithIcon>
                        <InfoColumnWithIcon>
                            <InfoColumnIcon>
                                <GoLaw color='#28365c' />
                            </InfoColumnIcon>
                            <ServiceTextWrapper>
                                <ServiceTitle lightText={lightText}>Legalización</ServiceTitle>
                                <ServiceSubtitle lightTextDesc={lightTextDesc}>
                                    Ofrecemos asesoramiento y apoyo en todo el proceso, desde la obtención de los permisos necesarios hasta la conexión a la red eléctrica. Nuestro objetivo es hacer que el proceso sea lo más rápido y sencillo posible para ti.
                                </ServiceSubtitle>
                            </ServiceTextWrapper>
                        </InfoColumnWithIcon>
                    </InfoRow>
                </Container>
            </ServiceInfoSec>
        </>
    )
}

export default InfoSectionServices;