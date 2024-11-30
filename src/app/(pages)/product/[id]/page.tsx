import { ProductDisplay } from "@/components/products/page/ProductDisplay";

export default async function Products({ params }: { params: { id: string } }) {
  const { id } = await params;

  return (
    <div>
      <ProductDisplay id={id} />
    </div>
  );
}
