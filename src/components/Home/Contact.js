import React from "react";
import cls from "../../styles/Contact.module.css";

function Contact() {
  return (
    <div className={cls.contactForm} id="contact">
      <h1 className={`${cls.baslik} border-bottom pb-5`}>İletişim</h1>
      <div className={cls.txtb}>
        <input
          type="text"
          name=""
          value=""
          placeholder="ADINIZ VE SOYADINIZ"
        ></input>
      </div>
      <div className={cls.txtb}>
        <input
          type="email"
          name=""
          value=""
          placeholder="E-POSTA ADRESİNİZ"
        ></input>
      </div>
      <div className={cls.txtb}>
        <textarea placeholder="MESAJINIZIN KONUSU"></textarea>
      </div>
      <button className={cls.mybtn}>MESAJI GÖNDER</button>
    </div>
  );
}

export default Contact;
