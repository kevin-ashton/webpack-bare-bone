import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

export function HomePage(): ReactElement {
  return (
    <div>
      Home <Link to="example">Example</Link>{" "}
    </div>
  );
}
