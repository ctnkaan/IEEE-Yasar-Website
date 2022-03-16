import React from "react";

function Footer() {
  return (
    <footer>
    <h1>Test </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "5px 15px",
          backgroundColor: "#fefefe",
        }}
      >
        <span>Yaşar Üniversitesi IEEE Websitesi</span>
        <span className="text-muted">
          Made with &#10084;&#65039; by Çetin Kaan Taşkıngenç | Kardelen Şimşek
          | Mustafa Çığ Gökpınar
        </span>
        <span>2021©</span>
      </div>
    </footer>
  );
}

export default Footer;
