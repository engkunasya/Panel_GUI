import "./navbar.scss";

const Navbar = () => {
  const firstName = JSON.parse(localStorage.getItem("user") || "{}").data
    ?.given_name;
  const userImg = JSON.parse(localStorage.getItem("user") || "{}").data
    ?.picture;
  // const lastName = JSON.parse(localStorage.getItem("user") || "{}").data
  //   ?.family_name;
  const fullName = JSON.parse(localStorage.getItem("user") || "{}").data?.name;

  return (
    <div className="navbar">
      <div className="logo">
        <img
          className="wheel"
          src="/tyre.PNG"
          alt="1588433178436"
          width="40"
          height="40"
          loading="lazy"
        />

        <span>{` Go Electric > ${firstName}'s Account`}</span>
        {/* <img src="twitter.svg" alt="" className="tick" /> */}
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img src={userImg} alt="" />
          <span>{fullName}</span>
        </div>
        <img src="/settings.svg" alt="" className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
