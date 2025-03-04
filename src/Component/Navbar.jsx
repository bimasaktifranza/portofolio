function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full bg-black flex items-center justify between px-5 py-2 shadow-md gap-5 font-bold">
      <img
        src="/image/Solutions-website-logo-png.png"
        alt="logo"
        className="h-10 w-10 object-containt"
      />

      <ul className="text-white text-2xl flex gap-10">
        <a href="#"><li>HOME</li></a>
        <a href="#about"><li>ABOUT ME</li></a>
        <a href="#halaman3"><li>PERFORMANCE</li></a>
        <a href="#Halaman5"><li>CONTACT</li></a>
      </ul>
    </div>
  );
}

export default Navbar;
