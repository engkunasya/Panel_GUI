import "./add.scss";
import { useMutation, useQueryClient } from "@tanstack/react-query";
//REMEMBER TO USE THIS MOMENT LIBRARY FOR MUI ID
// import moment from "moment";
import { useState } from "react";

type Props = {
  slug: string;

  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Add = (props: Props) => {
  // Generating a timestamp-based ID
  // const generateTimestampId = () => {
  //   const timestamp = moment().valueOf(); // Get the current timestamp as a number
  //   const random = Math.floor(Math.random() * 1000); // Generate a random number between 0 and 999
  //   const idString = `${timestamp}${random}`; // Concatenate timestamp and random number
  //   return parseInt(idString); // Convert/Numberize the ID to a number
  // };

  // New generated id
  // const id = generateTimestampId();

  const [firstName, setFirstname] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [verified, setVerified] = useState(false);
  // TEST THE API

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: () => {
      // Alwayssssss double check url religiously, http: SLASH and SLUG !!!!
      return fetch(`http://localhost:8800/${props.slug}`, {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // id: Number(id),
          lastName: lastName,
          firstName: firstName,
          email: email,
          phone: phone,
          verified: verified,
        }),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries([`all${props.slug}s`]);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // if (phone !== "" && email !== "")
    // setVerified(true);
    phone !== "" && email !== "" && setVerified(true);

    console.log(verified);

    //add new item
    mutation.mutate();
    props.setOpen(false);
  };
  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => props.setOpen(false)}>
          X
        </span>
        <h1>Add new {props.slug}</h1>
        <form onSubmit={handleSubmit}>
          <div className="item1">
            <label>First Name</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstname(e.target.value)}
              placeholder="firstName"
            />
            <label>Last Name</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="lastName"
            />
          </div>
          <div className="item2">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
            />
            <label>Phone</label>
            <input
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="phone"
            />
          </div>

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Add;
