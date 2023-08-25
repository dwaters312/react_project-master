import React, { Component } from "react";
import styled from "styled-components";

const Title = styled.h2`
font-size: 1.5em;
text-align: center;
color: #000000;
`;

const Wrapper = styled.section`
padding: 2em;
`;

const Body = styled.p`
font-size: 1em;
color: #000000;
text-align: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100px;
  background-color: #f0f0f0;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  color: #555;
`;

class Home extends Component {    

    render() {
        return (
            <Container>
            <div id="home">
                <Wrapper>
               <Title>
                <h2>IMAGINE A PLACE...</h2>
                </Title>
                </Wrapper>

                <Body>
                <Paragraph>
                <p>...where you can belong to a school club, 
                    a gaming group, or a worldwide art community. 
                    Where just you and a handful of friends can spend time 
                    together. A place that makes it easy to talk every day 
                    and hang out more often. 
                </p>
                </Paragraph>
                </Body>
            </div>
            </Container>
        );
    }
}

export default Home;