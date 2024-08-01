import * as React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

export interface IAppProps {}

export function Header(props: IAppProps) {
  return (
    <div className="w-full h-20  flex justify-between items-center">
      <Navbar>
        <NavbarBrand>
          {/* <AcmeLogo /> */}
          <p className="font-bold text-inherit cursor-pointer">SANTO</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem className="cursor-pointer font-sans font-semibold hover:text-blue-600/100 transition delay-150  ">
            Features
          </NavbarItem>
          <NavbarItem className="cursor-pointer font-sans font-semibold hover:text-blue-600/100 delay-150">
            Customers
          </NavbarItem>
          <NavbarItem className="cursor-pointer font-sans font-semibold hover:text-blue-600/100 delay-150">
            Integrations
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
}
