import { useEffect, useState } from "react";
import styled from "styled-components";
import { Question } from "../interfaces";

const Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
`;

const Wrapper = styled.div`
  background-color: white;
  padding: 32px;
  border-radius: 16px;

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
  flex-wrap: wrap;
`;

const Item = styled.div`
  flex: 1;

  :nth-child(2) {
    margin: 0 32px;
  }

  h3 {
    font-family: "Amatic SC", cursive;
    font-size: 32px;
    margin: 8px 0;
  }

  p {
    max-width: 300px;
  }
`;

type Props = {
  id: string;
  data: Question[];
};

const Modal = ({ id, data }: Props) => {
  const [list, setList] = useState<Question[]>([]);

  useEffect(() => {
    const cache = localStorage.getItem("cache");

    if (cache) {
      const d = JSON.parse(cache);

      setList(d);
    } else {
      const result = [];
      for (let index = 0; index < data.length; index++) {
        if (data[index].id === id) {
          result.push(data[index]);

          if (result.length === 3) {
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
