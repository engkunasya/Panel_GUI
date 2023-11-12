// import { useState } from "react";

// const LogoutPopup = () => {
//   const [showPopup, setShowPopup] = useState(false);

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     location.reload();
//     // Additional logic for handling logout
//   };

//   const togglePopup = () => {
//     setShowPopup(!showPopup);
//   };

//   return (
//     <div>
//       <button onClick={togglePopup}>Logout</button>
//       {showPopup && (
//         <div className="popup">
//           <p>Are you sure you want to logout?</p>
//           <button onClick={handleLogout}>Logout</button>
//           <button onClick={togglePopup}>Cancel</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LogoutPopup;
