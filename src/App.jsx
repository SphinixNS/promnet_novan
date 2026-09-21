import foto from "./assets/poto.jpeg";
import gallery1 from "./assets/gallery1.png";
import gallery2 from "./assets/gallery2.png";
import gallery3 from "./assets/gallery3.png";
import gallery4 from "./assets/gallery4.png";
function App() {
  return (
    <div className="main">
      <section id="beranda">
        <div className="profile">
          <div className="">
            <p className="halo">Halo, Saya</p>

            <h1>
              Novan Arrijal
              <br />
              Ghifari Hakim
            </h1>
            <p>
              Mahasiswa Pendidikan Ilmu Komputer di Universitas Pendidikan
              Indonesia, Kelas B Angkatan 2025. Lulusan dari SMK Negeri 11
              Bandung. Domisili Kopo Sayati
            </p>
          </div>
          <img src={foto} alt="Foto" />
        </div>
      </section>
      <hr />
  
      <section id="tentang">
        <div class="tentang">
          <h3>Tentang Saya</h3>
          <div class="detail">
            <p>
              Saya sedang menempuh studi
              <strong> Pendidikan Ilmu Komputer</strong> di Universitas
              Pendidikan Indonesia, Saya Masuk Universita ini pada tahun 2025.
            </p>
            <hr />
            <p>
              Di luar perkuliahan, saya suka belajar tentang coding. Saya
              memiliki keinginan untuk
              <strong> freelance web developer</strong> disaat ada waktu kosong.
            </p>
            <hr />
            <p>
              Saya juga aktif sebagai <strong>asisten praktikum</strong> untuk
              mata kuliah algoritma pemrograman untuk tingkat 1 di jurusan
              <strong> Pendidikan Ilmu Komputer</strong>
            </p>
          </div>
        </div>
      </section>

       <hr />
      <section id="gallery">
        <div class="gallery">
          <h3>Gallery</h3>
          <hr />
          <div class="tabel">
            <table>
              <tr>
                <td>
                   <img class="gambar" src={gallery1} alt="gallery1" />
                  {/* <img class="gambar" src="gallery1.png" /> */}
                </td>
                <td>
                   <img class="gambar" src={gallery2} alt="gallery2" />

                  {/* <img class="gambar" src="gallery2.png" /> */}
                </td>
              </tr>
              <tr>
                <td>
                   <img class="gambar" src={gallery3} alt="gallery3" />

                  {/* <img class="gambar" src="gallery3.png" /> */}
                </td>
                <td>
                   <img class="gambar" src={gallery4} alt="gallery4" />

                  {/* <img class="gambar" src="gallery4.png" /> */}
                </td>
              </tr>
            </table>
          </div>
        </div>
      </section>
      <hr />
      <section id="kontak">
        <div class="kontak">
          <h3>Kontak</h3>

          <table>
            <tr>
              <td width="80%" >Email</td>
              <td><strong>aghif1126@student.upi.edu</strong></td>
            </tr>
            <tr>
              <td width="80%">Telepon / WhatsApp</td>
              <td><strong>+62 8531 4678 713</strong></td>
            </tr>
            <tr>
              <td width="80%">Github</td>
              <td><strong>github.com/SphinixNS</strong></td>
            </tr>
            <tr>
              <td width="80%">LinkedIn</td>
              <td><strong>linkedin.com/in/novan</strong></td>
            </tr>
           
          </table>
        </div>

      </section>
    </div>
  
    
  );
}

export default App;
