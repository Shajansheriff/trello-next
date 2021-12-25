import { FC } from "react";
import { styled } from "stitches.config";

const Avatar = styled("div", {
  display: "block",
});

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
