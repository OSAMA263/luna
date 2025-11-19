import { Container } from "@chakra-ui/react";

export default function Layout({ children, className, as, size, ...rest }) {
  return (
    <Container
      as={as ?? "div"}
      maxW={{
        base: "100%",
        md: "90%",
        lg: "80%",
        xl: "70%",
        ...(size ?? null),
      }}
      className={`mx-auto! ${className ?? ""}`}
      {...rest}
    >
      {children}
    </Container>
  );
}
