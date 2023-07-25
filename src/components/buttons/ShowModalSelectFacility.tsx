import { Image, Text, TouchableOpacity } from 'react-native';
import { AppIcons } from '../../constant/AppAsset';
import { buttonGeneralStyle } from './GenaralStyles';
import { PoppinsText } from '../text/StyledText';
interface ShowModalSelectFacilityButtonProps {
  onPress: Function;
  label: string;
}
const ShowModalSelectFacilityButton = ({
  label,
  onPress,
}: ShowModalSelectFacilityButtonProps): React.JSX.Element => {
  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
      }}
      style={buttonGeneralStyle.container}>
      <Image style={buttonGeneralStyle.icon} source={AppIcons.poly} />
      <PoppinsText style={buttonGeneralStyle.text}>
        {label ? label : 'Chọn cơ sở đào tạo'}
      </PoppinsText>
    </TouchableOpacity>
  );
};

export default ShowModalSelectFacilityButton;
