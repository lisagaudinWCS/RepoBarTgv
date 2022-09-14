export default function UserInformations() {
  return (
    <div>
      <div className="avatar-container">
        <img
          src="#"
          alt="avatar"
          className="avatar"
          //   alt={`avatar of ${client.name}`}
        />
        <button type="button" className="avatar-btn" id="avatar-btn">
          Modifier l'avatar
        </button>
      </div>
      <div className="info-container" />
    </div>
  );
}
