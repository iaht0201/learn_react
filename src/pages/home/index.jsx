import CategorySection from "@/components/category";
import Hero from "@/components/hero";
import ProductsCategory from "@/components/product";
import HomeMainLayout from "@/layouts/home-main";

export default function HomePage() {
  return (
    <HomeMainLayout>
      <Hero />
      <CategorySection />
      <ProductsCategory />
    </HomeMainLayout>
  );
}
