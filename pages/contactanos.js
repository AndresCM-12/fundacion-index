import MainLayout from "@/components/layouts/MainLayout";
import ContactoBanner from "@/components/banners/ContactoBanner";
import ContactInfo from "@/components/sections/contacto/ContactInfo";
import ContactForm from "@/components/sections/contacto/ContactForm";
const ContactanosPage = () => {
  return (
    <MainLayout>
      <ContactoBanner className="bg-index-blue-default" />
      <ContactInfo />
      <ContactForm />
    </MainLayout>
  );
};

export default ContactanosPage;
