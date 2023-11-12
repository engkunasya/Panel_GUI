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
          src="https://user-images.githubusercontent.com/80636305/126576577-cb07ba84-a4fe-4d63-b43a-e7832c77483d.png"
          alt=""
          className="ether"
        />

        <span>{`${firstName}'s Ethereum`}</span>
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
