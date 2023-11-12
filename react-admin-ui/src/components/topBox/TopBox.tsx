import "./topBox.scss";
import { topDealUsers } from "../../data.ts";

const TopBox = () => {
  return (
    <div className="topBox">
      <h1>Top Deals</h1>
      <div className="list">
        {topDealUsers.map((user) => (
          <div className="listItem" key={user.id}>
            <div className="user">
              <img src={user.img} alt="" className="userimg" />
              <div className="userTexts">
                <div className="userVerified">
                  <span className="userName">{user.username}</span>
                  <img src={user.verified} alt="" className="verifiedTick" />
                </div>
                <span className="email">{user.email}</span>
              </div>
            </div>
            <span className="amount">${user.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBox;
