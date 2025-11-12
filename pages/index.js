import Card from "@/components/modules/modules/Card/Card";
import ServicesGrid from "@/components/modules/modules/services";
import MenuGrid from "@/components/modules/modules/menu";

export default function Home({ data }) { 
  return (
    <>
      <Card />
      <ServicesGrid services={data.services} />
      <MenuGrid data={data.menu} />

    </>
  );
}

export async function getStaticProps() {
  const servicesResponse = await fetch("http://localhost:4000/services");
  const servicesData = await servicesResponse.json();

  const menuResponse=await fetch('http://localhost:4000/menu');
  const menuData=await menuResponse.json();

  return {
    props: {
      data: {
        services: servicesData,
        menu:menuData
      },

    },
    revalidate: 60 * 60 * 12, // 12 ساعت
  };
}
