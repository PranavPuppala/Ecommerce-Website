export default async function Products({ params }: { params: { id: string } }) {
  const { id } = await params;
  return (
    <div>
      <p>display single product page {id}</p>
    </div>
  );
}
