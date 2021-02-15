import React from 'react';
import {Navbar, Nav, NavDropdown} from "react-bootstrap";

function NavbarComp() {
	return (
        <section id="features" class="pt-5">
        <div class="container">
            <div class="row mt-5 mr-10">
                <div class="col-md-4 text-center  border-right pt-4">
                    <div class="feature ">
                        <div class="led">
                            <i class="fa fa-users fa-3x rounded-circle" aria-hidden="true"></i>
                        </div>
                        <h3 class="mt-3">HERKES İÇİN IEEE</h3>
                        <p> IEEE, mühendislik, bilgi işlem ve teknoloji profesyonelleri için dünyanın en güvenilir
                            kaynağıdır.
                            Dernek, küresel bir topluluk olarak insanlığın yararına teknolojik yeniliği
                            desteklemektedir.
                            Üye iş birliği ve derneğin çeşitli yayın, konferans, eğitim kaynakları ve standart
                            geliştirme seçimi sayesinde IEEE gelecek nesillere
                            ilham verirken yenilik ve teknolojik mükemmelliği geliştirir.

                        </p>
                    </div>
                </div>

                <div class="col-md-4 text-center  border-right pt-4">
                    <div class="feature">
                        <div class="led">
                            <i class="fa fa-university fa-3x"></i>
                        </div>
                        <h3 class="mt-3">IEEE YAŞAR</h3>

                        <p> IEEE Yaşar Öğrenci Kolu, 2007 yılında Elektromekanik Topluluğu’nun feshedilmesiyle
                            kurulmuştur. O yıldan bu yana Yaşar Üniversitesi içerisinde farklı isim ve
                            niteliklerde kariyer günü etkinlikleri, sayısız teknik eğitim, sektöründe öncü firmalara
                            teknik geziler ve gelişmiş teknolojileri içeren birçok teknik projeye
                            imzasını atmıştır.

                        </p>


                    </div>

                </div>

                <div class="col-md-4 text-center">
                    <div class="feature">
                        <div class="led">
                            <i class="fa fa-book fa-3x"></i>
                        </div>
                        <h3 class="mt-3">HER ŞEY DERS DEĞİL</h3>
                        <p> IEEE Yaşar olarak biz, üyelerimiz için okul içerisinde öğrenilen teorik dersleri pratiğe
                            dönüştürmelerine yardımcı olmayı,
                            sosyal yaşantılarına olumlu katkıda bulunmayı ve farklı mühendislik dallarını bünyesinde
                            barındırarak diğer bölümler ile fikir
                            alışverişinde bulunmalarını hedefliyoruz. Geleceği şekillendiren mühendisler olabilmek için
                            haydi sen de IEEE Yaşar'a katıl!

                        </p>


                    </div>

                </div>



            </div>

        </div>

    </section>

	)
}