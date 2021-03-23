import React from "react";
import "../../styles/Contact.css";

function Contact() {
  return (
    <div class="contact-form">
      <h1 class="baslik border-bottom pb-5">Contact Us</h1>
      <div class="txtb">
        <input
          type="text"
          name=""
          value=""
          placeholder="ADINIZ VE SOYADINIZ"
        ></input>
      </div>
      <div class="txtb">
        <input
          type="email"
          name=""
          value=""
          placeholder="E-POSTA ADRESİNİZ"
        ></input>
      </div>
      <div class="txtb">
        <textarea placeholder="MESAJINIZIN KONUSU"></textarea>
      </div>
      <button class="btn">MESAJI GÖNDER</button>
    </div>
    );
  }

export default Contact
