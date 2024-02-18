export const InfoColumns = [
  {
    id: "name",
    label: "Name",
    minWidth: 150,
  },
  {
    id: "desc",
    label: "Description",
    minWidth: 150,
  },
  {
    id: "contact",
    label: "Contact",
    minWidth: 150,
  },
  {
    id: "email",
    label: "Email",
    minWidth: 150,
  },
  {
    id: "cnic",
    label: "CNIC",
    minWidth: 140,
  },
  {
    id: "address",
    label: "Address",
    align: "left",
    minWidth: 150,
    format: (value) => value.toLocaleString("en-US"),
  },
];
export const AccountsColumns = [
  {
    id: "name",
    label: "Name",
    minWidth: 150,
  },
  {
    id: "desc",
    label: "Description",
    minWidth: 150,
  },
  {
    id: "total",
    label: "Total",
    minWidth: 150,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "paid",
    label: "Paid",
    minWidth: 140,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "remaining",
    label: "Remaining",
    align: "left",
    minWidth: 150,
    format: (value) => value.toLocaleString("en-US"),
  },
];
