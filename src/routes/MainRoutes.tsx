import HomePage from '@pages/Home';
import NoMatchPage from '@pages/NoMatch';

export const Home = {
  path: `/`,
  element: <HomePage />,
};

export const NoMatch = {
  path: `/*`,
  element: <NoMatchPage />,
};
