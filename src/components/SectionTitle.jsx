import { Box } from "@chakra-ui/react";
import ShowInView from "./ShowInView";

export default function SectionTitle({ children, className, as, ...rest }) {
  return (
    <ShowInView {...rest}>
      <Box
        as={as ?? "h2"}
        className={`text-4xl text-Lime font-semibold ${className ?? ""}`}
      >
        {children}
      </Box>
    </ShowInView>
  );
}
