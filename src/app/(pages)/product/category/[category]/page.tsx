import CategoryProducts from "./CategoryProducts";

export default async function Products({ params }: { params: { category: string } }) {
  const { category } = await params;
  return (
    <div>
      <CategoryProducts category={category} />
    </div>
  );
}
