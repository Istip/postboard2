import React from "react";
import { useLocation } from "react-router";
import {
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

const DrawerFooterTitle = () => {
  const { pathname } = useLocation();

  const titles = [
    {
      route: "/",
      title: "shopping list",
      prefix: "Add new item to your",
      description: "Place your items here to buy them later",
    },
    {
      route: "/notes",
      title: "note",
      prefix: "Create a new",
      description: "Create and manage your group of notes here",
    },
    {
      route: "/private",
      title: "private list",
      prefix: "Manage items of your",
      description: "Your private list of notes and tasks",
    },
  ];

  return (
    <DrawerHeader>
      {titles.map(
        (item, index) =>
          pathname === item.route && (
            <React.Fragment key={index}>
              <DrawerTitle>
                <p key={index}>
                  {item.prefix}
                  <span className="font-black text-primary"> {item.title}</span>
                </p>
              </DrawerTitle>
              <DrawerDescription asChild>
                <div>{item.description}</div>
              </DrawerDescription>
            </React.Fragment>
          )
      )}
    </DrawerHeader>
  );
};

export default DrawerFooterTitle;
