import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const basicStyles = css`
  background-color: white;
  color: cornflowerblue;
  border: 1px solid lightgreen;
  border-right: none;
  border-bottom: none;
  box-shadow: 5px 5px 0 0 lightgreen, 10px 10px 0 0 lightyellow;
  transition: all 0.1s linear;
  margin: 3rem 0;
  padding: 1rem 0.5rem;
`;

const hoverStyles = css`
  &:hover {
    color: white;
    background-color: lightgray;
    border-color: aqua;
    box-shadow: -15px -15px 0 0 aqua, -30px -30px 0 0 cornflowerblue;
  }
`;

const bounce = keyframes`
  from {
    transform: scale(1.01);
  }
  to {
    transform: scale(0.99);
  }
`;

const Basic = styled.div`
  ${basicStyles};
`;

const Combined = styled.div`
  ${basicStyles};
  ${hoverStyles};
  & code {
    background-color: linen;
  }
`;

const Animated = styled.div<any>`
  ${basicStyles};
  ${hoverStyles};
  & code {
    background-color: linen;
  }
  animation: ${({ animation }) => animation} 0.2s infinite ease-in-out alternate;
`;

function EmotionDemo() {
  return (
    <div
      css={css`
        padding: 3rem 1rem;
        background: papayawhip;
        font-family: Helvetica, Arial, sans-serif;
        font-size: 24px;
      `}
    >
      <Basic>Cool Styles</Basic>
      <Combined>
        With <code>:hover</code>.
      </Combined>
      <Animated animation={bounce}>{`Let's bounce.`}</Animated>
    </div>
  );
}

export default EmotionDemo;
