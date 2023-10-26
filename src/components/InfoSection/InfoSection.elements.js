import styled from 'styled-components';


export const InfoSec = styled.div`
    color: #fff;
    padding: 160px 0;
    background: ${({ lightBg }) => (lightBg ? '#fff' : '#101522')};
`

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: flex-start;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media (min-width: 480px) and (max-width: 1200px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media (min-width: 480px) and (max-width: 1200px) {
    padding-bottom: 65px;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    padding-bottom: 65px;  
  }
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`;

export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? '#a9b3c1' : '#4B59F7')};
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
  filter: ${({ imgDropShadowColor }) => imgDropShadowColor ? `drop-shadow(-7px 7px 0px ${imgDropShadowColor});` : ''}
  border: ${({ imgDropShadowColor }) => imgDropShadowColor ? `1px solid ${imgDropShadowColor};` : ''}
  }; 
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#1c2237')};
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? '#a9b3c1' : '#1c2237')};
`;

// For services
export const ServiceInfoSec = styled.div`
    color: #fff;
    padding-top: 160px;
    padding-bottom: 70px;
    background: ${({ lightBg }) => (lightBg ? '#fff' : '#101522')};
`

export const ServiceTitle = styled.h2`
  margin-bottom: 12px;
  font-size: 24px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#1c2237')};
`;

export const ServiceSubtitle = styled.p`
  max-width: 440px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? '#a9b3c1' : '#1c2237')};
`;

export const ServiceTextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;

  @media (min-width: 480px) and (max-width: 1200px) {
  }

  @media (min-width: 320px) and (max-width: 480px) {
    padding-bottom: 65px;  
  }
`;

export const InfoColumnWithIcon = styled.div`
  padding-right: 120px;
  padding-left: 15px;
  padding-bottom: 130px;

  display: flex;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media (min-width: 480px) and (max-width: 1200px) {
    padding-right: 15px;
    padding-bottom: 70px;
    max-width: 100%;
    flex-basis: 100%;
    flex-direction: row;
    display: flex;
    justify-content: center;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    padding-right: 15px;
    padding-bottom: 15px;
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

export const InfoColumnIcon = styled.div`
padding-right: 20px;
display: flex;
align-items: center;
font-size: 6rem;
opacity: 1;

@media (min-width: 480px) and (max-width: 1200px) {
  
}

@media (min-width: 320px) and (max-width: 480px) {
  display: none;
}
`;