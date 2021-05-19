import { useEffect, useState } from "react";
import styled from "styled-components";
import { Question } from "../interfaces";

const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
`;

const Wrapper = styled.div`
  background-color: #d1ecb5;
  border: 3px solid white;
  padding: 48px;
  border-radius: 16px;
  max-width: 1300px;
  width: 100%;

  h2 {
    font-family: "Amatic SC", cursive;
    font-size: 48px;
    flex-basis: 100%;
    text-align: center;
    margin: 24px 0;
  }
`;

const List = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Item = styled.div`
  :nth-child(1) {
    margin-right: 128px;
  }

  h3 {
    font-family: "Amatic SC", cursive;
    font-size: 32px;
    margin: 8px 0;
  }

  p {
    max-width: 300px;
  }

  span {
    height: 44px;
    vertical-align: bottom;
    display: table-cell;
    font-weight: 600;
  }

  @media (max-width: 800px) {
    :nth-child(1) {
      margin-right: 0;
      margin-bottom: 24px;
    }
  }
`;

type Props = {
  data: Question[];
};

const Modal = ({ data }: Props) => {
  const [list, setList] = useState<Question[]>([]);

  useEffect(() => {
    const cache = localStorage.getItem("cache");

    if (cache) {
      const d = JSON.parse(cache);

      setList(d);
    } else {
      const result = [] as Question[];
      for (let index = 0; index < data.length; index++) {
        if (!result.find((item) => item.id === data[index].id)) {
          result.push(data[index]);

          if (result.length === 2) {
            break;
          }
        }
      }
      setList(result);
      localStorage.setItem("cache", JSON.stringify(result));
    }
  }, []);

  return (
    <Overlay>
      <Wrapper>
        <h2>Wylosowane słowa</h2>
        <List>
          {list.map((item) => (
            <Item key={item.word}>
              <span>Psychologia {names[item.id.trim()]}</span>
              <h3>{item.word}</h3>
              <p>{item.description}</p>
            </Item>
          ))}
        </List>
      </Wrapper>
    </Overlay>
  );
};

export default Modal;

const names: Record<string, string> = {
  kliniczna: "kliniczna człowieka dorosłego",
  sądowa: "sądowa",
  rozwoju: "rozwoju człowieka i rodziny w cyklu życia",
  zdrowia: "zdrowia i jakości życia",
  pracy: "pracy i organizacji",
};
