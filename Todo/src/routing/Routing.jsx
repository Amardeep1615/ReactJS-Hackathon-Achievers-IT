import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomePage from "../pages/HomePage";
import MyList from "../pages/MyList";
import Tasks from "../pages/Tasks";
import Goal from "../pages/Goal";

const Routing = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mylist" element={<MyList />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/goal" element={<Goal />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Routing;
