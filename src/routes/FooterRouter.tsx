import { FlexView, Text, Link } from '@components/common';
import { useTranslation } from 'react-i18next';
import { Route, Routes } from 'react-router-dom';

const Footer = () => {
  const [t] = useTranslation(`footer`);

  return (
    <FlexView
      content="between"
      css={{
        width: `100%`,
        height: `3rem`,
        borderTop: `1px solid #D5D5D5`,
        backgroundColor: `#22252C`,
        padding: `0 10%`,
      }}
      items="center"
      row
    >
      <Link to="/">
        <Text color="white">{t(`title`)}</Text>
      </Link>
    </FlexView>
  );
};

export default () => (
  <Routes>
    <Route element={<Footer />} path="/*" />
  </Routes>
);
