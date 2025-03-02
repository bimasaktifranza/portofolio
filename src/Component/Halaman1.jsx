function Halaman1() {
  return (
    <div
      className="section container mx-auto max-w-[1200px] item-center "
      id="halaman1"
    >
      <div className="w-full">
        <div className="flex justify-center">
          <img
            src="./src/image/fotobima.png"
            alt=""
            className="w-[300px] h-[300px] border-4 border-black rounded-full "
          />
        </div>

        <div className="mt-4 font-bold text-2xl transiti">
          <p>Hallo! Saya Bima Sakti Franza</p>
        </div>
        <div className="mt-8 text-center w-full max-w-[600px] mx-auto font-bold">
          <p className="text-black text-[18px] font-serif">
            Selamat datang di website portofolio saya. Saya seorang mahasiswa
            prodi Teknik Informatika Universitas Islam Negeri Sultan Syarif
            Kasim Riau
          </p>
        </div>
      </div>
    </div>
  );
}

export default Halaman1;
