import css from "./Profile.module.css";
import clsx from "clsx";
export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.item}>
      <div>
        <img src={image} alt={name} />
        <p className={css.teamPerson}>{name}</p>
        <p className={css.teamJob}>@{tag}</p>
        <p className={css.teamJob}>{location}</p>
      </div>

      <ul className={css.data}>
        <li className={css.teamList}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={css.teamList}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={css.teamList}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
