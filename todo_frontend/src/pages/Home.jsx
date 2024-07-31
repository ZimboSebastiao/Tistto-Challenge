import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  document.body.style.margin = "0";
  document.body.style.height = "100vh";
  document.body.style.background =
    "linear-gradient(80deg, rgba(191,113,209,1) 0%, rgba(224, 134, 207, 0.9) 40%, rgba(255, 152, 216, 0.9) 60%, rgba(255, 152, 216, 1) 100%)";

  return (
    <StyledHome>
      <div>
        <p>Home!</p>
      </div>
    </StyledHome>
  );
}

const StyledHome = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`;
