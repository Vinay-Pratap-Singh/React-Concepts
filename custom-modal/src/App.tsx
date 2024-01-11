import React from "react";
import Modal from "./components/Modal";

function App() {
  return (
    <div className="container p-5">
      <Modal
        confirmHandler={() => {
          console.log("operation completed successfully");
        }}
        content="Are you sure you want to delete the account ?"
        header="Delete account"
        size="sm"
      />
    </div>
  );
}

export default App;
