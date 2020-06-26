import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

export function ExamplePage(): ReactElement {
  return (
    <div>
      Example <Link to="home">Home</Link>{" "}
    </div>
  );
}
