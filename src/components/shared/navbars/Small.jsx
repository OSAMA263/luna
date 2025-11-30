import { Drawer, Portal } from "@chakra-ui/react";

export default function Small() {
  return (
    <>
      <Drawer.Root placement={"top"}>
        <Drawer.Trigger asChild>
          <button >
            Open
          </button>
        </Drawer.Trigger>
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content>
             yo
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </>
  );
}
