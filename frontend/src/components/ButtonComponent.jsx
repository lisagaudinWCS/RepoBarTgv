export default function ButtonComponent({ name }) {
  return (
    <div>
      <button type="button" className="button-component">
        {name}
      </button>
    </div>
  );
}
