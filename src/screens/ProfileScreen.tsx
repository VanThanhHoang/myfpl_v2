import AppToolBar from '../components/AppToolBar';
import ScreenContainer from '../components/ScreenContainer';
import StudentCard from '../components/StudentCard';
import LogoutButton from '../components/buttons/LogoutButton';
const ProfileScreen = () => {
  return (
    <ScreenContainer>
      <AppToolBar />
      <StudentCard />
      <LogoutButton />
    </ScreenContainer>
  );
};

export default ProfileScreen;
