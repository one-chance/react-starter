import { FlexView, Text, Icon } from '@components/Common';
import { Colors } from '@styles/Theme';

export default () => (
  <FlexView gap={16}>
    <Text>홈</Text>

    <Icon color={Colors.primary} name="logo" size={18} />
  </FlexView>
);
