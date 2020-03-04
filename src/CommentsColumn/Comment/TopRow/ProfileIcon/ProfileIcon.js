import React from "react";
import "./ProfileIcon.css";

export function ProfileIcon({ src, author }) {
  return src ? (
    <img className="profile-picture" src={src} alt={author} />
  ) : (
    <div className="initials">
      {author
        .split(" ")
        .filter((_, i, names) => i === 0 || i === names.length - 1)
        .map(name => name[0].toLocaleUpperCase())
        .join("")}
    </div>
  );
}