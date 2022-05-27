import { Routes, Route } from 'react-router-dom';
import React from 'react';
import About from '../../components/About';
import Home from '../../components/Home';
import Posts from '../../components/Posts';
import UIPaths from '../paths/UiPaths';

export default function AppRoutes() {
  const { home, about, posts } = UIPaths;
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path={home} element={<Home />} />
      <Route path={about} element={<About />} />
      <Route path={posts.root} element={<Posts />} />
      {/* <Route path="teams" element={<Teams />}>
              <Route path=":teamId" element={<Team />} />
              <Route path="new" element={<NewTeamForm />} />
              <Route index element={<LeagueStandings />} />
            </Route> */}
      <Route path="*" element={<p>Error 404</p>} />
    </Routes>
  );
}
