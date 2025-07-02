import bannerImg from "../../assets/bookBanner.png";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-80 mb-5 rounded-xl ">
      <div className="m-6">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={bannerImg} />
          <div>
            <h1 className="playfair text-5xl font-bold">
              Books to freshen up your bookselfs
            </h1>

            <button
              className="btn mt-12 work-sans text-white"
              style={{ backgroundColor: "#23BE0A" }}
            >
              View The List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
