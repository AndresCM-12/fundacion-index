import Footer from "@/components/layouts/MainLayout/Footer";
import Header from "@/components/layouts/MainLayout/Header";
import Seo from "@/components/common/Seo";

const MainLayout = ({ headerType = "aqua", title, navData, children }) => {
  return (
    <>
      <Header navData={navData} type={headerType} />
      <Seo title={title} />
      {children}
      <Footer navData={navData} />
    </>
  );
};

export default MainLayout;
