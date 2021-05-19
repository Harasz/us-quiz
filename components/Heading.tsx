import { useEffect, useState } from "react";
import styled from "styled-components";
import { Question } from "../interfaces";
import Modal from "./Modal";

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
  font-weight: 600;
`;

const Button = styled.button`
  display: block;
  padding: 12px 24px;
  font-size: 32px;
  border-radius: 24px;
  color: #ffffff;
  background-color: #ec4f43;
  text-align: center;
  transition: all 0.2s;
  border: none;
  cursor: pointer;
  margin-top: 24px;
  margin: 0 auto;
  margin-top: 32px;
  width: 150px;

  :hover {
    background-color: #b3111b;
  }

  :focus {
    outline: none;
  }
`;

type Props = {
  data: Question[];
};

export const Heading = ({ data }: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const cache = localStorage.getItem("cache");
    if (cache) {
      setOpen(true);
    }
  }, []);

  const showModal = () => {
    setOpen(true);
  };
  return (
    <Wrapper>
      <H1>Losomania UŚ</H1>
      <Sub>
        Witamy na pokładzie maszyny losującej! <br /> Zakładamy, iż po
        zapoznaniu się z ciągiem infografik - któraś ze specjalizacji
        zainteresowała Cię najbardziej… <br />
        Aby już teraz zaznajomić się z kilkoma pojęciami, związanymi z
        poprzednio wymienionymi - kliknij w tę, z którą chcesz zapoznać się
        nieco bliżej!
      </Sub>
      <Button onClick={showModal}>Losuj</Button>
      {open && <Modal data={data} />}
    </Wrapper>
  );
};
