import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type Props = {
  slug: string;
};
const AddFormm = (props: Props) => {
  const [id, setId] = useState("");
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [verified, setVerified] = useState(false);

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
          id: Number(id),
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

  // for diffferent fields that attached with many event listeners, just insert directly on JSX without declaring them as const var.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // if (phone !== null && email !== null)
    // setVerified(true);
    phone !== null && email !== null && setVerified(true);
    console.log(verified);

    //add new item
    mutation.mutate();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>ID</label>
        <input
          type="number"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="myID"
        />
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
        <label>email</label>
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
  );
};

export default AddFormm;
