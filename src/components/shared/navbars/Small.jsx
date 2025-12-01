import { Drawer, Portal } from "@chakra-ui/react";
import { Navlinks } from "../Navbar";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Small() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <Drawer.Root
      open={open}
      onOpenChange={(e) => setOpen(e.open)}
      placement={"start"}
    >
      <Drawer.Trigger asChild>
        {/* nav btn toggler */}
        <button aria-label="nav-menu-toggler" className="small-nav-toggler">
          <span style={{ width: 32 }}></span>
          <span style={{ width: open ? 20 : 32 }}></span>
          <span style={{ width: open ? 14 : 32 }}></span>
        </button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content className="py-4 w-fit! px-14 justify-center">
            <Navlinks
              className={"flex-col gap-6 [&_a]:py-px [&_a]:px-2"}
              pathname={pathname}
            />
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
}
