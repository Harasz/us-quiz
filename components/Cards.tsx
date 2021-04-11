import styled from "styled-components";
import { Card, CardProps } from "./Card";
import teamSvg from "../assets/teamwork.svg";
import fatherhoodSvg from "../assets/fatherhood.svg";
import judgeSvg from "../assets/judge.svg";
import medicineSvg from "../assets/medicine.svg";
import natureFunSvg from "../assets/nature_fun.svg";

const Wrapper = styled.div`
  display: flex;
  margin: 48px 8px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Cards = () => {
  return (
    <Wrapper>
      {data.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </Wrapper>
  );
};

const data: CardProps[] = [
  {
    id: "kliniczna",
    title: "Kliniczna człowieka dorosłego",
    Image: medicineSvg,
  },
  {
    id: "sądowa",
    title: "Sądowa",
    Image: judgeSvg,
  },
  {
    id: "rozwoju",
    title: "Rozwoju człowieka i rodziny w cyklu życia",
    Image: fatherhoodSvg,
  },
  {
    id: "zdrowia",
    title: "Zdrowia i jakości życia",
    Image: natureFunSvg,
  },
  {
    id: "pracy",
    title: "Pracy i organizacji",
    Image: teamSvg,
  },
];
