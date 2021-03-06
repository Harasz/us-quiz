import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid white;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.4);
  margin: 0 12px;
  padding: 24px;
  max-width: 280px;
  margin-bottom: 24px;
  color: #001833;

  svg {
    width: 100%;
    height: 230px;
  }
`;

const Subhead = styled.p`
  margin: 0;
  text-transform: uppercase;
  font-size: 16px;
`;

const Head = styled.h3`
  font-family: "Amatic SC", cursive;
  font-size: 32px;
  margin: 0;
`;

export const Card = ({ title, Image }: CardProps) => {
  return (
    <Wrapper>
      <Image />
      <span>
        <Subhead>Psychologia</Subhead>
        <Head>{title}</Head>
      </span>
    </Wrapper>
  );
};

export interface CardProps {
  title: string;
  Image: string;
}
