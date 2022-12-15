import Footer from "@/components/layouts/MainLayout/Footer";
import Header from "@/components/layouts/MainLayout/Header";
import Seo from "@/components/common/Seo";

const MainLayout = ({ headerType = "aqua", title, children }) => {
  return (
    <>
      <Header type={headerType} />
      <Seo title={title} />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
