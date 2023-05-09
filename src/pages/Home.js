import { Link } from "react-router-dom";
import styled from "styled-components";
import main from "../assets/lab-main.svg";
import { useGlobalContext } from "../context/appContext";
import { Redirect } from "react-router-dom";
import logo from "../assets/lab-logo.png";
function Home() {
  const { user } = useGlobalContext();

  return (
    <>
      {user && <Redirect to="/dashboard" />}
      <Wrapper>
        <nav>
          <img src={logo} alt="jobs app" className="lab-logo" />
        </nav>
        <div className="container page">
          <div className="info">
            <h1>Library Management App</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Cupiditate, nihil praesentium a pariatur et mollitia sequi
              laudantium officiis eius neque similique debitis aut repellat,
              earum amet! Blanditiis nisi ipsa modi!
            </p>

            <Link to="/register" className="btn hero-btn">
              Login / Register
            </Link>
          </div>
          <img src={main} alt="job hunt" className="img main-img" />
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  .container {
    min-height: calc(100vh - 6rem);
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }

  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: 6rem;
    display: flex;
    align-items: center;
  }
  h1 {
    font-weight: 700;
  }
  .main-img {
    display: none;
  }
  .lab-logo {
    margin-top: 40px;
  }
  @media (min-width: 992px) {
    .container {
      grid-template-columns: 1fr 1fr;
      column-gap: 6rem;
    }
    .main-img {
      display: block;
    }
  }
`;

export default Home;
