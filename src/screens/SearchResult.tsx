import ScreenContainer from '../components/ScreenContainer';
import DashBoard from './NewsList';
import AppToolBar from '../components/AppToolBar';
import SearchBar from '../components/SearchBar';
const SearchResultScreen = () => {
  return (
    <ScreenContainer>
      <AppToolBar />
      <SearchBar />
      <DashBoard />
    </ScreenContainer>
  );
};
export default SearchResultScreen;
