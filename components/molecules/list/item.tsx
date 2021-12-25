import { Avatar, AvatarImage, AvatarFallback } from "@atoms";
import { FC } from "react";
import { styled } from "stitches.config";

const Creator = () => (
  <Avatar>
    <AvatarImage
      src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
      alt="Pedro Duarte"
    />
    <AvatarFallback delayMs={600}>JD</AvatarFallback>
  </Avatar>
);

const Description = styled("div", {
  display: "block",
  margin: 0,
  wordBreak: "break-word",
});

const Meta = styled("div", {
  fontSize: "$1",
  margin: 0,
});

const Item = styled("div", {
  position: "relative",
});

interface ListItemProps {
  avatar?: React.ReactNode;
  description?: React.ReactNode;
  meta?: React.ReactNode;
}

type ListItemComponent = typeof Item & {
  Avatar: typeof Avatar;
  Description: typeof Description;
  Meta: typeof Meta;
};

const ListItem: ListItemComponent = Item as any;
ListItem.Avatar = Avatar;
ListItem.Description = Description;
ListItem.Meta = Meta;

export { ListItem };
