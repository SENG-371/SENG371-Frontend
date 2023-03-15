import '../index.css';
import { EHR } from '../assets'
import ResponsiveAppBar from './ResponsiveAppBar'
import OverviewPage from './overviewpage/OverviewPage';


function MainPage() {

  return (
    <>
      <ResponsiveAppBar />
      <OverviewPage />
    </>
  );
}

export default MainPage;
