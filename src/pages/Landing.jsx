import styled from "styled-components";

import { Link } from "react-router-dom";
import { HiAdjustmentsHorizontal, HiArchiveBox, HiKey } from "react-icons/hi2";

import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Button from "../ui/Button";
import Card from "../ui/Card";
import Container from "../ui/Container";
import Tabbed from "../ui/Tabbed";
import MiniSpinner from "../ui/MiniSpinner";

import { useUser } from "../features/auth/useUser";

const StyledPage = styled.div`
  padding: 1rem 0.5rem;
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 1.5rem;
`;

const HeroSection = styled.header`
  width: 100%;
  min-height: 90vh;
  border-bottom: 2px solid;
  border-image: linear-gradient(
      to right,
      var(--color-primary-400) 25%,
      var(--color-primary-600) 50%,
      var(--color-primary-700) 75%
    )
    5;
  clip-path: polygon(0% 0%, 0% 100%, 100% 80%, 100% 0%);
  background: linear-gradient(45deg, #00000082, #00000025), url("/herosection_cover.jpg");
  background-position: center 70%;
  /* filter: blur(1px); */
`;

const HeroSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
`;

const TextContainer = styled.div`
  min-width: 50vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 3rem 6rem;
  backdrop-filter: blur(5px);
`;

const RowGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const JoinNowContainer = styled.div`
  padding: 3rem 2rem;
  background-color: var(--color-primary-300);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  & h2,
  & p {
    color: var(--color-gray-700);
  }
`;

export default function Landing() {
  const { isLoading, isAuthenticated } = useUser();

  return (
    <StyledPage>
      {/* HERO SECTION */}
      <HeroSection>
        {/* NAV */}
        <StyledNav>
          <Logo />
          {isLoading ? (
            <MiniSpinner />
          ) : (
            <>
              <Link to={isAuthenticated ? "/diary" : "/auth"}>
                <Button type="underline" size="small">
                  {isAuthenticated ? "See all diaries" : "Create account"}
                </Button>
              </Link>
            </>
          )}
        </StyledNav>
        <HeroSectionContainer>
          <TextContainer>
            <Heading as="h1" color="white" position="center">
              Your life is like a boat!
            </Heading>
            <Heading as="h2" color="white" position="center">
              you should log its entire journey
            </Heading>
            <Row>
              {isLoading ? (
                <MiniSpinner />
              ) : (
                <>
                  {!isAuthenticated && (
                    <Button type="underline" size="medium">
                      Find more
                    </Button>
                  )}
                  <Link to={isAuthenticated ? "/diary" : "/auth"}>
                    <Button type="primary" size="medium">
                      {isAuthenticated ? "go to the home page" : "Start now"}
                    </Button>
                  </Link>
                </>
              )}
            </Row>
          </TextContainer>
        </HeroSectionContainer>
      </HeroSection>

      {/* logIT advantages */}
      <Container>
        <Heading as="h2" position="center">
          <Logo icon={false} /> advantages
        </Heading>

        <Tabbed defaultValue="security">
          <Tabbed.ButtonRow>
            <Tabbed.ButtonElement opens="security">Security</Tabbed.ButtonElement>
            <Tabbed.ButtonElement opens="flexibility">Flexibility</Tabbed.ButtonElement>
            <Tabbed.ButtonElement opens="storage">Storage</Tabbed.ButtonElement>
          </Tabbed.ButtonRow>
          <Tabbed.Tab id="security">
            <Card Icon={<HiKey />} orientation="row" animation={false}>
              <Heading as="h2" position="center">
                Security
              </Heading>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit non saepe sed
                numquam laboriosam modi quia iusto repellat, consectetur tenetur quaerat. Officia
                maiores accusamus omnis nostrum quam nobis dolorum qui deserunt ipsa, earum a
                repellendus dicta suscipit id? Repellat accusamus vitae, quasi quaerat tempora fuga
                libero a quia quas dolore aperiam doloremque expedita voluptas, totam saepe
                laudantium consectetur, repudiandae eius esse eligendi ab nostrum hic necessitatibus
                molestiae? Voluptates culpa est repudiandae beatae necessitatibus delectus minima
                illum sed, saepe quasi dolore cupiditate non cumque. Culpa sit omnis nulla labore,
                rem inventore blanditiis, earum eaque illum, beatae odio exercitationem! Aliquid, ut
                incidunt!
              </p>
            </Card>
          </Tabbed.Tab>
          <Tabbed.Tab id="flexibility">
            <Card Icon={<HiAdjustmentsHorizontal />} orientation="row" animation={false}>
              <Heading as="h2" position="center">
                Flexibility
              </Heading>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit non saepe sed
                numquam laboriosam modi quia iusto repellat, consectetur tenetur quaerat. Officia
                maiores accusamus omnis nostrum quam nobis dolorum qui deserunt ipsa, earum a
                repellendus dicta suscipit id? Repellat accusamus vitae, quasi quaerat tempora fuga
                libero a quia quas dolore aperiam doloremque expedita voluptas, totam saepe
                laudantium consectetur, repudiandae eius esse eligendi ab nostrum hic necessitatibus
                molestiae? Voluptates culpa est repudiandae beatae necessitatibus delectus minima
                illum sed, saepe quasi dolore cupiditate non cumque. Culpa sit omnis nulla labore,
                rem inventore blanditiis, earum eaque illum, beatae odio exercitationem! Aliquid, ut
                incidunt!
              </p>
            </Card>
          </Tabbed.Tab>
          <Tabbed.Tab id="storage">
            <Card Icon={<HiArchiveBox />} orientation="row" animation={false}>
              <Heading as="h2" position="center">
                Storage
              </Heading>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit non saepe sed
                numquam laboriosam modi quia iusto repellat, consectetur tenetur quaerat. Officia
                maiores accusamus omnis nostrum quam nobis dolorum qui deserunt ipsa, earum a
                repellendus dicta suscipit id? Repellat accusamus vitae, quasi quaerat tempora fuga
                libero a quia quas dolore aperiam doloremque expedita voluptas, totam saepe
                laudantium consectetur, repudiandae eius esse eligendi ab nostrum hic necessitatibus
                molestiae? Voluptates culpa est repudiandae beatae necessitatibus delectus minima
                illum sed, saepe quasi dolore cupiditate non cumque. Culpa sit omnis nulla labore,
                rem inventore blanditiis, earum eaque illum, beatae odio exercitationem! Aliquid, ut
                incidunt!
              </p>
            </Card>
          </Tabbed.Tab>
        </Tabbed>
      </Container>

      {/* FAQs */}
      <Container>
        <Heading as="h2" position="center">
          FAQs
        </Heading>
        <RowGrid>
          <Card Icon={<HiArchiveBox />} iconColor="green">
            <Heading as="h3" position="center">
              Is logIT secure?
            </Heading>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit non saepe sed numquam
              laboriosam modi quia iusto repellat, consectetur tenetur quaerat. Officia maiores
              accusamus omnis nostrum quam nobis dolorum qui deserunt ipsa, earum a repellendus
              dicta suscipit id? Repellat accusamus vitae, quasi quaerat tempora fuga libero a quia
              quas dolore aperiam doloremque expedita voluptas, totam saepe laudantium consectetur,
              repudiandae eius esse eligendi ab nostrum hic necessitatibus molestiae? Voluptates
              culpa est repudiandae beatae necessitatibus delectus minima illum sed, saepe quasi
              dolore cupiditate non cumque. Culpa sit omnis nulla labore, rem inventore blanditiis,
              earum eaque illum, beatae odio exercitationem! Aliquid, ut incidunt!
            </p>
          </Card>

          <Card Icon={<HiKey />} iconColor="green">
            <Heading as="h3" position="center">
              How much does it cost?
            </Heading>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit non saepe sed numquam
              laboriosam modi quia iusto repellat, consectetur tenetur quaerat. Officia maiores
              accusamus omnis nostrum quam nobis dolorum qui deserunt ipsa, earum a repellendus
              dicta suscipit id? Repellat accusamus vitae, quasi quaerat tempora fuga libero a quia
              quas dolore aperiam doloremque expedita voluptas, totam saepe laudantium consectetur,
              repudiandae eius esse eligendi ab nostrum hic necessitatibus molestiae? Voluptates
              culpa est repudiandae beatae necessitatibus delectus minima illum sed, saepe quasi
              dolore cupiditate non cumque. Culpa sit omnis nulla labore, rem inventore blanditiis,
              earum eaque illum, beatae odio exercitationem! Aliquid, ut incidunt!
            </p>
          </Card>

          <Card Icon={<HiAdjustmentsHorizontal />} iconColor="green">
            <Heading as="h3" position="center">
              Maximum storage available for each user?
            </Heading>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit non saepe sed numquam
              laboriosam modi quia iusto repellat, consectetur tenetur quaerat. Officia maiores
              accusamus omnis nostrum quam nobis dolorum qui deserunt ipsa, earum a repellendus
              dicta suscipit id? Repellat accusamus vitae, quasi quaerat tempora fuga libero a quia
              quas dolore aperiam doloremque expedita voluptas, totam saepe laudantium consectetur,
              repudiandae eius esse eligendi ab nostrum hic necessitatibus molestiae? Voluptates
              culpa est repudiandae beatae necessitatibus delectus minima illum sed, saepe quasi
              dolore cupiditate non cumque. Culpa sit omnis nulla labore, rem inventore blanditiis,
              earum eaque illum, beatae odio exercitationem! Aliquid, ut incidunt!
            </p>
          </Card>
        </RowGrid>
      </Container>

      {/* JOIN NOW SECTION */}
      {!isAuthenticated && (
        <JoinNowContainer>
          <Heading as="h2" position="start">
            Your best chance to sign up was yesterday... The second chance is TODAY!
          </Heading>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, magnam. Aspernatur,
            quibusdam sunt corporis non at exercitationem laborum voluptatum odit, vitae molestias
            id nemo nostrum deserunt optio modi dolores adipisci ipsum recusandae mollitia
            reprehenderit omnis laudantium officiis aliquam! Blanditiis repudiandae fugit
            consequatur ex fugiat voluptate distinctio repellat eveniet minima explicabo.
          </p>
          <Row>
            <Button size="medium">Create account</Button>
            <Button type="underline" size="medium">
              Log in
            </Button>
          </Row>
        </JoinNowContainer>
      )}
    </StyledPage>
  );
}
