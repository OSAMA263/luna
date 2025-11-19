import { Box } from "@chakra-ui/react";

export default function SectionTitle({ children, className, as }) {
  return (
    <Box
      as={as ?? "h2"}
      className={`text-4xl text-Lime font-semibold ${className ?? ""}`}
    >
      {children}
    </Box>
  );
}
