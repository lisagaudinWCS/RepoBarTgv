export default function ConfirmationPage({ title, pagename, name, action }) {
  // toto

  return (
    <div>
      <div className="container-title-menu">
        <h1 className="title-menu-blue">{title}</h1>
      </div>
      <h2 className="shoplist-title">{pagename}</h2>
      <p className="empty-cart">
        Votre {name} a été {action}.
      </p>
    </div>
  );
}
