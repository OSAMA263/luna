import { Container } from "@chakra-ui/react";

export default function Layout({ children, className }) {
  return (
    <Container
      maxW={{ base: "100%", md: "90%", lg: "80%", xl: "75%" }}
      className={className}
    >
      {children}
    </Container>
  );
}
