import styled from "styled-components";
import { Card, CardProps } from "./Card";
import teamSvg from "../assets/teamwork.svg";
import fatherhoodSvg from "../assets/fatherhood.svg";
import judgeSvg from "../assets/judge.svg";
import medicineSvg from "../assets/medicine.svg";
import natureFunSvg from "../assets/nature_fun.svg";
import Modal from "./Modal";
import { useEffect, useState } from "react";
import { Question } from "../interfaces";

const Wrapper = styled.div`
  display: flex;
  margin: 48px 8px;
  flex-wrap: wrap;
  justify-content: center;
`;

type Props = {
  data: Question[];
};

export const Cards = ({ data }: Props) => {
  const [open, setOpen] = useState<string | null>(null);

  useEffect(() => {
    const cache = localStorage.getItem("cache");
    if (cache) {
      setOpen("cache");
    }
  }, []);

  const showModal = (id: string) => () => {
    setOpen(id);
  };

  return (
    <Wrapper>
      {list.map((item) => (
        <Card key={item.id} showModal={showModal(item.id)} {...item} />
      ))}
      {open && <Modal id={open} data={data} />}
    </Wrapper>
  );
};

const list: Omit<CardProps & { id: string }, "showModal">[] = [
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
