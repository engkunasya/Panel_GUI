import { Link } from "react-router-dom";
import "./Menu.scss";
import { menu } from "../../data";

const Menu = () => {
  function handleLogout() {
    localStorage.removeItem("user");
    location.reload();
  }
  return (
    <div className="menu">
      {menu.map((item) => (
        <div className="Parentitem" key={item.id}>
          <span className="Parenttitle">{item.title}</span>
          {item.listItems.map((listItem) => (
            <Link to={listItem.url} className="listItem" key={listItem.id}>
              <img src={listItem.icon} alt="" />
              <span className="listItemTitle">{listItem.title}</span>
              {listItem.pulse && <div className="pulse" />}
              {listItem.new && <span className="new">NEW</span>}
            </Link>
          ))}
        </div>
      ))}
      {/* // change account */}
      <div className="Parentitem2">
        <Link to={"/"} className="listItemA">
          <span className="listItemTitleA">More</span>
        </Link>
        <Link to={"/"} onClick={handleLogout} className="listItemB">
          <span className="listItemTitleA">Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
