import '../index.css';
import { EHR } from '../assets'
import ResponsiveAppBar from './ResponsiveAppBar'
import OverviewPage from './Overview/OverviewPage';


function MainPage() {

  return (
    <>
      <ResponsiveAppBar />
      <OverviewPage />
    </>
  );
}

export default MainPage;
