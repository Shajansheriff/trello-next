import { Avatar, AvatarFallback } from "@atoms";
import { ListItem } from "@molecules";
import { AvatarImage } from "@radix-ui/react-avatar";
const doer = {
  id: "1",
  firstName: "Andrew",
  lastName: "Hyde",
  profilePic: "https://i.pravatar.cc/100",
};

const doer2 = {
  id: "2",
  firstName: "John",
  lastName: "Doe",
  profilePic: "",
};
const sampleData = [
  {
    id: 1,
    doer,
    updatedAt: 1640429280,
  },
  {
    id: 2,
    doer,
    updatedAt: 1640429280,
  },
  {
    id: 3,
    doer,
    updatedAt: 1640429280,
  },
  {
    id: 4,
    doer: doer2,
    updatedAt: 1640429280,
  },
];

export const ActivityList = () => {
  return (
    <div>
      {sampleData.map((activity) => (
        <ListItem>
          <ListItem.Avatar>
            <Avatar>
              <AvatarImage
                src={activity.doer.profilePic}
                alt={activity.doer.firstName}
              ></AvatarImage>
              <AvatarFallback>
                {activity.doer.firstName.slice(0, 2)}
              </AvatarFallback>
            </Avatar>
          </ListItem.Avatar>
          <ListItem.Description>
            {activity.doer.firstName} Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </ListItem.Description>
          <ListItem.Meta>{activity.updatedAt}</ListItem.Meta>
        </ListItem>
      ))}
    </div>
  );
};
