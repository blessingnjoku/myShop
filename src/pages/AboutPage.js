import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
// import aboutImg from "../assets/hero-bcg.jpeg";
import shopAout from "../assets/shopAout.png";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={shopAout} alt="shopping bag" />
        <article>
          <div className="title">
            <h2>About us</h2>
            <div className="underline"></div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              labore, aperiam, a quibusdam ut aut reiciendis, laboriosam amet
              odio voluptate dolores officia eligendi vero commodi quod minima
              placeat atque hic. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Sint possimus saepe, repellat quo quasi ipsum
              nemo rem nesciunt atque reiciendis quae accusantium animi velit
              quaerat ipsa. Tempora consequuntur eos similique.
            </p>
          </div>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
