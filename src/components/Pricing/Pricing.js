import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { IoCallOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import {
  PricingCard,
  PricingCardFeature,
  PricingCardFeatures,
  PricingCardIcon,
  PricingCardInfo,
  PricingCardPlan,
  PricingContainer,
  PricingHeading,
  PricingSection,
  PricingWrapper
} from './Pricing.elements';

import {
  FooterSubHeading,
  FooterSubText,
  FooterSubscription,
  Form,
  FormInput
} from '../Footer/Footer.elements';

const Pricing = () => {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection id='contacto'>
        <PricingWrapper>
          <PricingHeading>Resuelve tus dudas</PricingHeading>
          <PricingContainer>
            <PricingCard
              href="https://wa.me/3127746612?text=Hola%2e%20Vengo%20desde%20Instalacionesviva%2ecom" target="_blank">
              <PricingCardInfo>
                <PricingCardIcon>
                  <BsWhatsapp />
                </PricingCardIcon>
                <PricingCardPlan>+34 696 72 57 44</PricingCardPlan>
                <PricingCardFeatures>
                  <PricingCardFeature>WhatsApp</PricingCardFeature>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <HiOutlineMail />
                </PricingCardIcon>
                <PricingCardPlan>instalacionesviva@gmail.com</PricingCardPlan>
                <PricingCardFeatures>
                  <PricingCardFeature>Correo</PricingCardFeature>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <IoCallOutline />
                </PricingCardIcon>
                <PricingCardPlan>+34 696 72 57 44</PricingCardPlan>
                <PricingCardFeatures>
                  <PricingCardFeature>Llámanos</PricingCardFeature>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
        <FooterSubscription>
          <FooterSubHeading>
            ...O dejanos tu número o correo y nosotros te contactamos!
          </FooterSubHeading>
          <FooterSubText>Ingresa tu número o correo electrónico</FooterSubText>
          <Form>
            <FormInput name='email' type='email' placeholder='número/correo' />
            <Button fontBig>Contáctame</Button>
          </Form>
        </FooterSubscription>
      </PricingSection>
    </IconContext.Provider>
  );
}

export default Pricing