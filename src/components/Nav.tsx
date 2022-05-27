import React from 'react';
import { NavLink } from 'react-router-dom';
import UIPaths from '../routes/paths/UiPaths';

export default function Nav() {
  const { home, about, posts } = UIPaths;

  return (
    <div>
      <NavLink to={home}>Home</NavLink>
      <NavLink to={about}>About</NavLink>
      <NavLink to={posts.root}>Posts</NavLink>
    </div>
  );
}
