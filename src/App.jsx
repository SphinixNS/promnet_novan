import foto from "./assets/poto.jpeg";
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
    </div>
  );
}

export default App;
