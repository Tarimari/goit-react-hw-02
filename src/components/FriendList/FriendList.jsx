import FriendListItem from "../FriendListItem/FriendListItem.jsx";
import css from "./FriendList.module.css";
import clsx from "clsx";
console.log(css);
console.log(clsx);
export default function FriendList(friends) {
  return (
    <ul>
      {friends.map(({ avatar, name, isOnline, id }) => {
        console.log(avatar);
        return (
          <li>
            key={id}
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
          </li>
        );
      })}
    </ul>
  );
}
