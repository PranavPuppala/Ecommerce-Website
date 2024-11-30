export default async function Products({ params }: { params: { category: string } }) {
  const { category } = await params;
  return (
    <div>
      <p>display products relating to categories i guess {category}</p>
    </div>
  );
}