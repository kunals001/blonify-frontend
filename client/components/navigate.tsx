"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const NavigationBreadcrumb = () => {
  const pathname = usePathname();
  const pathParts = pathname.split("/").filter((part) => part);

  const generateHref = (index: number) => {
    return "/" + pathParts.slice(0, index + 1).join("/");
  };

  return (
    <div className="py-[.5vw] md:py-[.3vw]">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem >
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>

          {pathParts.map((part, index) => {
            const isLast = index === pathParts.length - 1;
            const formatted = decodeURIComponent(part).replace(/-/g, " ");
            const shortened = truncate(capitalize(formatted), 25); // Max 25 chars

            return (
              <React.Fragment key={index}>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  {isLast ? (
                    <BreadcrumbPage>{shortened}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink href={generateHref(index)}>
                      {shortened}
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </React.Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function truncate(str: string, length = 25) {
  return str.length > length ? str.slice(0, length) + "..." : str;
}

export default NavigationBreadcrumb;
