import { Route, Routes } from "react-router-dom";
import IndexPage from "./pages/Index";
import ForumPage from "./pages/Forum";
import ContestsPage from "./pages/Contests";
import DownloadsPage from "./pages/Downloads";
import WikiPage from "./pages/Wiki";
import CommunityPage from "./pages/Community";
import MiscPage from "./pages/Misc";
import StagesPage from "./pages/Stages";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path = "/" element = {<IndexPage />} />
      <Route path = "forum" element = {<ForumPage />} />
      <Route path = "contests" element = {<ContestsPage />} />
      <Route path = "downloads" element = {<DownloadsPage />} />
      <Route path = "wiki" element = {<WikiPage />} />
      <Route path = "community" element = {<CommunityPage />} />
      <Route path = "misc" element = {<MiscPage />} />
      <Route path = "stages" element = {<StagesPage />} />
    </Routes>
  );
}

export default App;