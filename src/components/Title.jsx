import React from "react";
import Container from "./Container";

const Title = ({ title }) => {
  return (
    <Container>
      <h2 className="mb-4 text-3xl font-bold">{title}</h2>
    </Container>
  );
};

export default Title;
