import React from "react";

import Button from "@mui/material/Button";

import "./App.css";

const App: React.FC = () => {
  const currentURL = window.location.href;
  const urlStringParams = new URL(currentURL).searchParams;
  const params = Object.fromEntries(urlStringParams.entries());

  const ewmURL = params["LINK"];

  const [showModal, setShowModal] = React.useState<boolean>(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="App">
      <div
        className="header"
        style={{ height: "100px", backgroundColor: "grey" }}
      >
        Header
      </div>

      <div
        className="content"
        style={{ minHeight: "calc(100vh - 200px)", margin: 0 }}
      >
        <h1>Hello world!</h1>

        <Button variant="contained">
          <a href={ewmURL}>Cancel</a>
        </Button>

        <ul className="param-preview">
          <h4>List of passed parameters via query string:</h4>
          {Object.keys(params).map((keyName, i) => (
            <li key={i}>
              {keyName}: <span>{params[keyName]}</span>
            </li>
          ))}
        </ul>
      </div>
      <footer
        className="footer"
        style={{ height: "100px", backgroundColor: "grey" }}
      >
        {showModal && <NotModal onPrint={handlePrint} onClose={toggleModal} />}

        <Button variant="contained" onClick={toggleModal}>
          Open modal
        </Button>
      </footer>
    </div>
  );
};

export default App;

interface ModalProps {
  onClose: () => void;
  onPrint: () => void;
}

const NotModal: React.FC<ModalProps> = ({ children, onClose, onPrint }) => {
  return (
    <div className="NotModal">
      <div>{children}</div>
      <ul style={{ padding: "50px" }}>
        {" "}
        <li>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.{" "}
        </li>
        <li>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.{" "}
        </li>{" "}
        <li>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.{" "}
        </li>
        <li>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.{" "}
        </li>
      </ul>
      <div className="button-container">
        <Button variant="contained" onClick={onClose}>
          CLOSE
        </Button>
        <Button
          variant="contained"
          onClick={onPrint}
          style={{ backgroundColor: "green" }}
        >
          PRINT
        </Button>
      </div>
    </div>
  );
};
// export default Modal;
