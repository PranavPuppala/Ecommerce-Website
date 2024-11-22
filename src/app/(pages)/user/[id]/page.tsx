export default function User({ params }: { params: { id: string } }) {
  return (
    <div>
      <p>User profile for id #{params.id}</p>
    </div>
  );
}
