export default function Order({ params }: { params: { id: string } }) {
  return (
    <div>
      <p>Page will display single Order with id#{params.id}</p>
    </div>
  );
}
