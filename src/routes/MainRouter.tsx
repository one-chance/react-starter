import { FlexView } from '@components/Common';
import { Route, Routes } from 'react-router-dom';

import * as MainRoutes from './MainRoutes';

export default () => (
  <FlexView fill>
    <Routes>
      {Object.entries(MainRoutes).map(([key, value]) => (
        <Route key={key} {...value} />
      ))}
    </Routes>
  </FlexView>
);
