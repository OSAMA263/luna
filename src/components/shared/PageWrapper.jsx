import { Portal } from "@chakra-ui/react";

export default function PageWrapper({ className, children, ...rest }) {
  const { title, description } = rest;

  return (
    <>
      <Portal>
        <head>
          <title>{title}</title>
          <meta name="description" content={description} />
        </head>
      </Portal>
      <main className={`pb-20 bg-black ${className ?? ""}`}>{children}</main>
    </>
  );
}
