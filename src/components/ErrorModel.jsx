import "./ErrorModel.css";
import Container from "./Container";
function ErrorModel(props) {
  return (
    <>
      <div className="screendisable" onClick={props.errorhandler}></div>
      <Container className="errorclass">
        <header>
          <h2 className="heading">{props.title}</h2>
        </header>

        <div className="content">
          <p>{props.message}</p>
        </div>

        <footer>
          <button
            type="submit"
            class="btn btn-primary"
            onClick={props.errorhandler}
          >
            Okay
          </button>
        </footer>
      </Container>
    </>
  );
}
export default ErrorModel;
