import { FlexView, Text, Link } from '@components/Common';
import { useTranslation } from 'react-i18next';
import { Route, Routes } from 'react-router-dom';

const Navbar = () => {
  const [t] = useTranslation(`header`);

  return (
    <FlexView
      content="between"
      css={{
        width: `100vw`,
        height: `3rem`,
        padding: `0 10%`,
        borderBottom: `1px solid #D5D5D5`,
      }}
      items="center"
      row
    >
      <Link to="/">
        <Text>{t(`title`)}</Text>
      </Link>
    </FlexView>
  );
};

export default () => (
  <Routes>
    <Route element={<Navbar />} path="/*" />
  </Routes>
);
