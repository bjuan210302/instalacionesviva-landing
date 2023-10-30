import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube
} from 'react-icons/fa';
import {
  FooterContainer,
  SocialIcon,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights
} from './Footer.elements';

function Footer() {

  const date = new Date();

  return (
    <FooterContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to='/'>
            <SocialIcon />
            Instalaciones Viva
          </SocialLogo>
          <WebsiteRights>Instalaciones Viva © {date.getFullYear()} </WebsiteRights>
          <SocialIcons>
            <SocialIconLink href='https://www.facebook.com/profile.php?id=61552746037128' target='_blank' aria-label='Facebook'>
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='YouTube' >
              <FaYoutube />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;