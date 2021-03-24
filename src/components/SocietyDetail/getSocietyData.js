import ieee from "../../resources/ieee_yasar.jpg";
import aess from "../../resources/committees/AESS.jpg";
import cs from "../../resources/committees/CS.png";
import kok from "../../resources/committees/KOK.jpg";
import pes from "../../resources/committees/PES.jpg";
import ras from "../../resources/committees/RAS.png";
import wie from "../../resources/committees/WIE.png";

export default function getSocietyData(slug) {
  const data = {
    title: "",
    detail: "",
    admin: "",
    logo: "",
    isRedirect: false,
  };
  switch (slug) {
    case "aess":
      data.logo = aess;
      data.admin = "Ayça Akçapınar";
      data.title = "IEEE Aerospace and Electronic Systems Society";
      data.detail = "geforce now tr'ye geliyor";
      break;
    case "cs":
      data.logo = cs;
      data.admin = "Çetin Kaan Taşkıngenç";
      data.title = "Computer Society";
      data.detail = "geforce now tr'ye geliyor";
      break;
    case "kok":
      data.logo = kok;
      data.admin = "Tüm Türkiye";
      data.title = "Kardeş Öğrenci Kollar";
      data.detail = "geforce now tr'ye geliyor";
      break;
    case "pes":
      data.logo = pes;
      data.admin = "Çetin Kaan Taşkıngenç";
      data.title = "Power And Engineering Society";
      data.detail = "geforce now tr'ye geliyor";
      break;
    case "ras":
      data.logo = ras;
      data.admin = "Yaren Çilek";
      data.title = "Robotics and Automation Society";
      data.detail = "geforce now tr'ye geliyor";
      break;
    case "wie":
      data.logo = wie;
      data.admin = "Çetin Kaan Taşkıngenç";
      data.title = "Women In Engineering";
      data.detail = "geforce now tr'ye geliyor";
      break;
    default:
      data.isRedirect = true;
      break;
  }
  return data;
}
