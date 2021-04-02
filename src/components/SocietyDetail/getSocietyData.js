//import ieee from "../../resources/ieee_yasar.jpg";
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
    coAdmin: "",
    logo: "",
    isRedirect: false,
  };
  switch (slug) {
    case "aess":
      data.logo = aess;
      data.admin = "Ayça Akçapınar";
      data.title = "IEEE Aerospace and Electronic Systems Society";
      data.detail = "AESS(AeroSpace and Electronic Systems)"
      +"Türkçe açılımı havacılık ve elektronik sistemler olan IEEE teknik alt komitesidir." 
      +"Temel amacı sizlere havacılık - uzay, uzay sistemleri, radar, sinyal işleme, uçuş simülasyon sistemleri," 
      +"havacılık elektroniği ve temel aerodinamik hakkında bilgiler vermektir. Bahsedilen alanlar hakkında webinarlar" 
      +"düzenleyerek ilgili üyelerimizi bilgilendirmeyi, ayrıca gelişmekte olan havacılık ve uzay teknolojisi ile alakalı araştırmalar" 
      +"yaparak bu alandaki yazıları IEEE aracılığı ile yayınlamayı hedefliyoruz. Sizden gelen talepleri inceleyerek eğitimler düzenlemek" 
      +"istiyoruz. Bu eğitimlere katılarak kendinizi geliştirebilir ve yeni bilim dalları öğrenebilirsiniz. Bir diğer hedefimiz ise yarışma takımları" 
      +"kurup TEKNOFEST World Drone Cup yarışmasına katılmaktır. Siz de havacılık ve uzay alanına ilgiliyseniz ve bu alanda çalışmalar yapmak isterseniz"
      +"IEEE AESS ailesinin bir parçası olabilirsiniz.";
      break;
    case "cs":
      data.logo = cs;
      data.admin = "Çetin Kaan Taşkıngenç";
      data.coAdmin = "Ayça Bilik"
      data.title = "Computer Society";
      data.detail = "IEEE Computer Society bilgisayar bilimlerine tutkulu insanlardan oluşan bir teknik komitedir." 
      +"Bu komite içerisinde üyelerin bilgisayar bilimlerinin çeşitli dallarındaki profesyonel gelişimi için eğitimler," 
      +"etkinlikler ve yarışmalar düzenlenir. Bu dallara örnek olarak Siber Güvenlik, Web Geliştiricilik, Oyun Geliştiricilik" 
      +"ve Yapay Zeka örnek verilebilir. IEEE Computer Society içinde bulundurduğu proje ve yarışma ekipleri ile de üyelerinin"
      +"teknik bilgilerini ve takım olarak çalışmaya yatkınlıklarını arttırır. Yarışma ekipleri ekstradan Teknofest gibi teknik" 
      +"yarışmlara da hazırlanır. Yarışma ekibinin katılabileceği yarışmalara GameJam, Hack Zeugma, Türkçe Doğal Dil İşleme Yarışması" 
      +"ve Robotics and Automation Society ve Aerospace and Electronic Systems Society ile birlikte katılınabilicek Robotik Yarışmaları" 
      +"ve Model Uydu Yarışması örnek olarak verilebilir.";
      break;
    case "kok":
      data.logo = kok;
      data.admin = "Tüm Türkiye";
      data.title = "Kardeş Öğrenci Kollar";
      data.detail = "Kardeş Öğrenci Kolları Projesi (KÖK) , IEEE Türkiye'de var olan kollar arasında karşılıklı bilgi paylaşımını ve iletişimi arttırmayı amaçlayan" 
      +"ve son yıllarda IEEE Türkiye Öğrenci Kollarının , Türkiye'deki en önemli ve başarılı öğrenci networķü olmasını sağlayan projedir. Ayrıca KÖK yıl içerisinde ," 
      +"çeşitli zamanlarda bir araya gelip , kollar arasındaki etkileşimi güçlü tutmayı hedefler. Bu seneyi kardeş okullarımız @ieeemcbusb ve @ieeebaunsb ile dolu dolu" 
      +"fakat bir o kadar uzaktan geçirmeyi düşünüyoruz 🤗. Planlarımız arasında ise teatalklar , eğitimler , kardeş / kuzen okul öğrencilerini kaynaştırmak amacıyla" 
      +"yapılacak discord sohbetleri, kaynaştırma oyunları, bolca challengelar ve daha niceleri var 😊";
      break;
    case "pes":
      data.logo = pes;
      data.admin = "Fethiye Gül Dikyak";
      data.title = "Power And Engineering Society";
      data.detail = "IEEE Güç ve Enerji Komitesi ( IEEE PES ), Elektrik ve Elektronik Mühendisleri Enstitüsü'nün (IEEE) elektrik gücü ve enerji hakkındaki" 
      +"bilimsel ve mühendislik bilgisine odaklanan en eski komitesidir. Misyonumuz güç ve enerji konuları üzerine çalışarak üyelerine ve çevresine bilgi kaynağı ve destek olmaktır." 
      +"Vizyonumuz, alanında ve sektörde uzman kişilerle güç ve enerji konuları üzerine çeşitli eğitim, workshop, projeler, etkinlikler (ve koşullar uygun olursa teknik geziler)" 
      +"düzenlemektir. Üyelerimizle kaliteli, eğlenceli ve verimli zaman geçirirken bir yandan da network ağı oluşturmaktayız. Komitemiz güç ve enerji alanına meraklı, yeni şeyler" 
      +"öğrenmek ve kendini geliştirmek isteyen herkese açıktır. Burada sizleri görmekten ve sizlerle birlikte büyüyüp gelişmekten büyük mutluluk duyarız.";
      break;
    case "ras":
      data.logo = ras;
      data.admin = "Yaren Çilek";
      data.title = "Robotics and Automation Society";
      data.detail = "IEEE Robotics and Automation Society (RAS) ; robotik, elektrik, elektronik, yazılım ve otomasyon gibi çeşitli alanlarda çalışan ve bu alanlardaki sektörel" 
      +"gelişmelere bağlı olarak çeşitli projelerde yer alan teknik bir komitedir. Ayrıca bu alanlardaki teorik bilgileri uygulama yoluyla pratiğe dökebilme becerisi katar."
      +"Bu yıl üyelerin istekleri doğrultusunda çeşitli eğitimler düzenlemeyi, bu eğitimler doğrultusunda yarışma takımları kurup çeşitli Teknofest vb. yarışmalara katılmayı planlıyoruz."
      +"Eğer siz de bu alanlara ilgi duyuyorsanız hem öğrenip hem de üretebilceğiniz IEEE Yaşar Üniversitesi RAS tam size göre!";
      break;
    case "wie":
      data.logo = wie;
      data.admin = "Selin Gezen";
      data.title = "Women In Engineering";
      data.detail = "IEEE Women in Engineering Affinity Group (WIE); bilim, teknoloji, mühendislik ve matematik dallarında kadınların ilerleme göstermesi ve sektördeki yerinin vurgulanması" 
      +"için kurulmuş en büyük uluslararası profesyonel organizasyondur. IEEE WIE’nin misyonu, teknik disiplinlerdeki kadınların kariyer alanında iş bulmalarını ve iş hayatlarındaki" 
      +"sürdürülebilirliklerini kolaylaştırmaktır.Bu sene de IEEE Yaşar WIE olarak biz de bu güzel organizasyonun bir parçası olmaya geldik. Düzenlemeyi planladığımız webinarlar,konuşmalar," 
      +"teknik geziler, paneller ve daha niceleri ile kadınların mühendislikteki yerlerini vurgulayarak bu konudaki farkındalığı artırmayı sağlamayı amaçlıyoruz.";
      break;
    default:
      data.isRedirect = true;
      break;
  }
  return data;
}
