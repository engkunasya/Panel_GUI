import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/DataTable/DataTable";
import "./Users.scss";
import { useState } from "react";
import Add from "../../components/add/Add";
import { useQuery } from "@tanstack/react-query";
// import AddFormm from "../../components/add/AddForm";

const columns: GridColDef[] = [
  {
    field: "id",
    type: "string",
    headerName: "ID",
    width: 150,
  },
  {
    field: "img",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "firstName",
    type: "string",
    headerName: "First name",
    width: 150,
  },
  {
    field: "lastName",
    type: "string",
    headerName: "Last name",
    width: 150,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 200,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 200,
    type: "string",
  },
  {
    field: "verified",
    headerName: "Verified",
    width: 150,
    type: "boolean",
  },
];

const Users = () => {
  const [open, setOpen] = useState(false);

  // PROMISE BLOCK FUNCTION
  const queryFn = async () => {
    const response = await fetch("http://localhost:8800/user/");
    const dataApi = await response.json();

    const mappedData = dataApi.map((item: any) => ({
      // Use the "_id" property as the unique identifier
      id: item._id,
      img: item.img,
      firstName: item.firstName,
      lastName: item.lastName,
      email: item.email,
      phone: item.phone,
      verified: item.verified,
      createdAt: item.createdAt,

      // Other properties...
    }));

    return mappedData;
  };

  // TEST THE API
  const { isLoading, data } = useQuery({
    queryKey: ["allusers"],
    queryFn,
    // queryFn: () =>
    //   fetch("http://localhost:8800/user/").then((res) => res.json()),
  });

  return (
    <>
      <div className="users">
        <div className="info">
          <h1>Users</h1>
          <button onClick={() => setOpen(true)}>Add New User</button>
        </div>

        {/* PULL THE API */}

        {isLoading ? (
          "Loading..."
        ) : (
          <DataTable slug="user" columns={columns} rows={data} />
        )}
        {open && <Add slug="user" setOpen={setOpen} />}
      </div>
      {/* <AddFormm slug="user" /> */}
    </>
  );
};

export default Users;
