import styled from "styled-components";

export const Wrapper = styled.section`
  margin: 0 auto;
  max-width: 600px;
  padding: 16px 8px;
`;

export const H1 = styled.h1`
  font-family: "Amatic SC", cursive;
  color: #001833;
  font-size: 54px;
  text-align: center;
`;

export const Sub = styled.p`
  color: #001833;
  font-size: 18px;
  text-align: center;
`;

export const Heading = () => {
  return (
    <Wrapper>
      <H1>Losomania na US nie wiem co dac</H1>
      <Sub>
        Witamy na pokładzie maszyny losującej! Zakładamy, iż po zapoznaniu się z
        ciągiem infografik - któraś ze specjalizacji zainteresowała Cię
        najbardziej… Aby już teraz zapoznać się z kilkoma pojęciami, związanymi
        z wyżej wymienionymi - kliknij w tę, z którą zechciałbyś poznać się
        nieco bliżej!
      </Sub>
    </Wrapper>
  );
};
