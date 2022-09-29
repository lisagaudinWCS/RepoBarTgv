import "./loader.css";

export default function Loader({ inputForm }) {
  return (
    <div className={inputForm ? "pointDiv-activate" : "pointDiv"}>
      <span className="msgAfter" />
      <span className="msgAfter1" />
      <span className="msgAfter2" />
    </div>
  );
}
