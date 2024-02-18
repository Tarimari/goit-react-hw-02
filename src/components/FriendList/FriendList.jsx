import FriendListItem from "../FriendListItem/FriendListItem.jsx";
import css from "./FriendList.module.css";
import clsx from "clsx";
console.log(css);
console.log(clsx);
export default function FriendList(friends) {
  return (
    <ul>
      {friends.map((friend) => {
        <li key={friend.id}>
          <FriendListItem friend={friend} />
        </li>;
      })}
    </ul>
  );
}
