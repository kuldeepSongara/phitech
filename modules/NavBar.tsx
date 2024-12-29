"use client";

import * as React from "react";
import Link from "next/link";

import { cn, getAvatar } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "@/components/ui/modeToggle";

function NavBar() {
  return (
    <div className="w-full py-2 flex justify-between items-center relative">
      <div>logo</div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="font-semibold text-lg">
              About
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <Avatar>
                        <AvatarImage src={getAvatar(0)} />
                        <AvatarFallback>#</AvatarFallback>
                      </Avatar>
                      <div className="mb-2 mt-4 text-lg font-medium">
                        phi / tech
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Empowering Businesses with Tailored IT Solutions.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/docs" title="Work">
                  Work Work Work Work Work Work Work Work Work Work Work Work
                </ListItem>
                <ListItem href="/docs/installation" title="Services">
                  Services Services Services Services Services Services Services
                  Services Services
                </ListItem>
                <ListItem
                  href="/docs/primitives/typography"
                  title="Testimonials"
                >
                  Testimonials Testimonials Testimonials Testimonials
                  Testimonials Testimonials Testimonials
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/contact" legacyBehavior passHref>
              <NavigationMenuLink
                className={`font-semibold text-lg ${navigationMenuTriggerStyle()}`}
              >
                Contact
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/blog" legacyBehavior passHref>
              <NavigationMenuLink
                className={`font-semibold text-lg ${navigationMenuTriggerStyle()}`}
              >
                Blog
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <ModeToggle className="border-none" />
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default NavBar;
