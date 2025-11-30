import { Container } from "@chakra-ui/react";

export default function Layout({ children, className, as, size, ...rest }) {
  return (
    <Container
      as={as ?? "div"}
      maxW={{
        base: "98%",
        lg: "95%",
        xl: "85%",
        "2xl": "75%",
        ...(size ?? null),
      }}
      className={`mx-auto! px-0! ${className ?? ""}`}
      {...rest}
    >
      {children}
    </Container>
  );
}
