import { useEffect } from "react";
import { WOW } from "wowjs";

import "../../styles/FeaturesSection.css";

function Features() {
  useEffect(() => {
    const wow = new WOW({ live: false }); // disables sync requirement
    wow.init();
  }, []);

  return (
    <section id="features" className="pt-5">
      <div className="container-fluid features-margin">
        <div className="row mt-5 mr-10">
          <div className="col-md-4 text-center border-right pt-4">
            <div className="feature wow animate__animated animate__lightSpeedInLeft">
              <div className="led">
                <i
                  className="fa fa-users fa-3x rounded-circle"
                  aria-hidden="true"
                ></i>
              </div>
              <h3 className="mt-3">IEEE NEDIR</h3>
              <p>
                {" "}
                The Institute of Electrical and Electronics Engineers ya da
                kısaca IEEE, elektrik, elektronik, bilgisayar, otomasyon,
                telekomünikasyon ve diğer birçok alanda, mühendislik teori ve
                uygulamalarının gelişimi için çalışan, kâr amacı olmayan,
                dünyanın önde gelen teknik organizasyonudur. 1884 yılında
                Alexander Graham Bell ve Thomas Edison gibi dönemin büyük bilim
                adamlarınca temelleri atılmıştır.
              </p>
            </div>
          </div>

          <div className="col-md-4 text-center  border-right pt-4">
            <div
              className="feature wow animate__animated animate__jello"
              data-wow-delay="0.35s"
            >
              <div className="led">
                <i className="fa fa-university fa-3x"></i>
              </div>
              <h3 className="mt-3">IEEE YAŞAR</h3>

              <p>
                {" "}
                IEEE Yaşar Öğrenci Kolu, 2009 yılında kurulmuştur. IEEE Yaşar
                olarak bünyemizde 6 tane (RAS, PES, WIE, AESS, CS) topluluğumuz
                (society) mevcuttur. Kolumuzdaki üyelerimizin kişisel
                gelişimleri için bir çok etkinlik düzenlenmektedir.
              </p>
            </div>
          </div>

          <div className="col-md-4 text-center">
            <div className="feature wow animate__animated animate__lightSpeedInRight">
              <div className="led">
                <i className="fa fa-book fa-3x"></i>
              </div>
              <h3 className="mt-3">HER ŞEY DERS DEĞİL</h3>
              <p>
                {" "}
                IEEE Yaşar olarak biz, üyelerimiz için okul içerisinde öğrenilen
                teorik dersleri pratiğe dönüştürmelerine yardımcı olmayı, sosyal
                yaşantılarına olumlu katkıda bulunmayı ve farklı mühendislik
                dallarını bünyesinde barındırarak diğer bölümler ile fikir
                alışverişinde bulunmalarını hedefliyoruz. Geleceği şekillendiren
                mühendisler olabilmek için haydi sen de IEEE Yaşar'a katıl!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
