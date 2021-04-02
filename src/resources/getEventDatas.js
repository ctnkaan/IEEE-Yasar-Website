import git from "../resources/eventImages/eventcs.jpg";
import iot from "../resources/eventImages/aess-iot.jpg";
import wie0 from "../resources/eventImages/wie.jpg";
import autocad from "../resources/eventImages/autocad.jpg";
import wie1 from "../resources/eventImages/wie2.jpg";
import wie2 from "../resources/eventImages/wie3.jpg";
import aess from "../resources/eventImages/aess-havelsan.jpg";
import wie3 from "../resources/eventImages/wie4.jpg";

export default function getEventDatas() {
  //2d array with at most 4 jsons in each array
  return [
    //first row
    [
      {
        title: "Tutorial: Network Protocols for the Internet of Things(IoT)",
        description: `IEEE Yaşar Üniversitesi AESS komitesi olarak 25 Mart Perşembe saat 20:00’da Tutorial: 
        Network Protocols for the Internet of Things(IoT) eğitimi okulumuzun çok değerli hocalarından Doç. Dr. 
        Volkan Rodoplu tarafından verilecektir.Tutorial Google Meets üzerinden gerçekleştirilicektir ve eğitimin dili İngilizce olacaktır. 
        Katılım linki eğitimimize 15 dakika kala paylaşılıcaktır, aynı zamanda ieeeyasaraess Instagram hesabımızda bio’dan da ulaşabilirsiniz.`,
        image: iot,
        date: "25.03.2021",
        link: "https://www.instagram.com/p/CMzvFKPMyz7/"
      },
      {
        title: "Connect Support Inspire",
        description: "8 Mart Dünya Kadınlar gününde, IEEE Turkey Student Branch Women in Engineering ekibi tarafından başlatılan Connect-Support-Inspire (CSI) Talks Mini Seminer serisine IEEE Yaşar Üniversitesi WIE olarak Connect konseptine ev sahipliği yapacağız. Konuğumuz, MAN Türkiye A.Ş.'de Proje Yönetimi Mühendisi olarak çalışmakta olan Selen Tulum bizlerle olacaktır. Selen Hanım bizlerle bilgi ve tecrübelerini paylaşacak ve sorularımızı yanıtlayacaktır.",
        image: wie0,
        date: "08.03.2021",
        link: "https://www.instagram.com/p/CMCujjGsTqX/"
      },
      {
        title: "Git ve Github 101",
        description: ` 07.03.2021 Pazar günü saat 19:00 da Zoom üzerinden Git ve GitHub eğitimimiz olacaktır.
        Git bilgisayar bilimlerinin hangi alanında çalışırsanız çalışın kullanacağınız sayılı teknolojilerden biridir. Düzenlediğimiz
        bu online eğitimde, projelerde versiyon kontrolünün nasıl kullanıldığını öğreneceğiz.`,
        image: git, //must be imported at top
        date: "07.03.2021",
        link: "https://www.instagram.com/p/CL9ZgJsMTYp/"
      },
      {
        title: "AutoCAD 101",
        description: "IEEE Yaşar Üniversitesi PES ailesi olarak dönemin ilk online eğitimi ile karşınızdayız. Eğitimimiz her cuma saat 13.30 - 14.30 arasında AutoCAD 101 adı altında Erkan Durmazgezer hocamızın katkılarıyla gerçekleşecektir. Zoom linki her dersten 15 dakika önce sizinle paylaşılacaktır. İlgilenen herkesi bekliyoruz.💚💚💚",
        image: autocad,
        date: "24.02.2021",
        link: "https://www.instagram.com/p/CLrA63XspqK/"
      },
      
    ],

    //second row
    [
      {
        title: "WIE Coffie Klatch",
        description: "23 Şubat Salı günü 20.30’da Wie Coffee klatch serimize devam ediyoruz. Konuğumuz Dr. Öğr. Görevlisi Efthymia Staiou ve moderatörümüz Eylül Appak ile Yaşar Üniversitesi Kadın Öğretim Üyeleri ile Online Söyleşi webinarımızda Efthymia Hanım bizlerle deneyimlerini paylaşacak ve sorularımızı yanıtlayacaktır. Webinarımız IEEE Yaşar Üniversitesi Öğrenci Kolu YouTube hesabımızdan gerçekleştirilecektir. Katılım linki yayına 15 dakika kala paylaşılacak aynı zamanda da ieeeyasarwie hesabımızın biosundan ulaşabilirsiniz.",
        image: wie1,
        date: "23.02.2021",
        link: "https://www.instagram.com/p/CLodMOdsh90/"
      },
      {
        title: "Etkili LinkedIn Kullanımı",
        description: "Dijital Marka Direktörü/ Linkedin Eğitmeni Gamze Nurluoğlu ile Etkili Linkedin Kullanımı konulu etkinliğimiz 8 Şubat Pazartesi günü 18.00’da gerçekleştirilecektir. Etkinliğimiz Bennur Amaç moderatörlüğünde Zoom üzerinden gerçekleştirilecektir. Etkinlik linki etkinliğimiz başlamadan 10 dakika önce atılacaktır.",
        image: wie2,
        date: "06.02.2021",
        link: "https://www.instagram.com/p/CK9OMpgs3pU/"
      },
      {
        title: "Havelsan'da Sistem Mühendisinin Bir Günü",
        description: "8 Ocak Cuma 20.00'da Sistem Mühendisi Merve Gamze Oruç ile Havelsan'da Sistem Mühendisinin Bir Günü adlı webinarımızı gerçekleştireceğiz. Merve Hanım bizlerle alanda olan deneyimlerini paylaşacak ve sorularınızı yanıtlayacaktır. Katılım linki 10dk önce paylaşılıcak olup aynı zamanda ieeeyasaraess instagram hesabımızda bio' dan ulaşabilirsiniz.",
        image: aess,
        date: "08.01.2021",
        link: "https://www.instagram.com/p/CJtp-m7MLwV/"
      },
      {
        title: "WIE Coffie Klatch",
        description: "23 Aralık Çarşamba 20.00’da Wie Coffee Klatch serimizin ilk konuğu Dr. Öğr. Üyesi Nalan Özkurt ve Moderatörümüz Selin Gezen ile Yaşar Üniversitesi Kadın Öğretim Üyeleri ile Online Söyleşi webinarımızda Nalan Hanım bizlerle akademik alanda olan deneyimlerini paylaşacak ve sorularımızı yanıtlayacaktır.Webinarımız IEEE Yaşar Üniversitesi Öğrenci Kolu YouTube hesabimizdan gerçekleştirilicektir. Katılım linki yayına 15 dakika kala paylaşılıcak olunup aynı zamanda ieeeyasarwie Instagram hesabımızda bio’dan ulaşabilirsiniz.",
        image: wie3,
        date: "23.12.2021",
        link: "https://www.instagram.com/p/CJEUAoysZqs/"
      },
    ],

    //add new rows correspondingly...
  ];
}
