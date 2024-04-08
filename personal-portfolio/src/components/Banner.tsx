const Banner = () => {
  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('your-image-url.jpg')" }}
    >
      <div className="flex items-center justify-center h-full">
        <h1 className="text-4xl text-white font-bold">BANNER</h1>
      </div>
    </div>
  );
};
export default Banner;
