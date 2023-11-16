import React from "react";
import Link from "next/link";

export const Menu: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav" style={{ margin: "0.5em 1em" }}>
          <li className="nav-item">
            <Link href="/" className="navbar-brand">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/LivroLista" className="navbar-brand">
              Catálogo
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/LivroDados" className="navbar-brand">
              Novo
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
