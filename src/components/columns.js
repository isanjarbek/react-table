// import ColumnFilter from "./ColumnFilter";

export const COLUMNS = [
  {
    Header: "id",
    Footer: "id",
    accessor: "id",
    // Filter: ColumnFilter,
    disableFilters: true,
  },
  {
    Header: "FirstName",
    Footer: "FirstName",
    accessor: "firstName",
    // Filter: ColumnFilter,
  },
  {
    Header: "LastName",
    Footer: "LastName",
    accessor: "lastName",
    // Filter: ColumnFilter,
  },
  {
    Header: "Email",
    Footer: "Email",
    accessor: "email",
    // Filter: ColumnFilter,
  },
  {
    Header: "Age",
    Footer: "Age",
    accessor: "age",
    // Filter: ColumnFilter,
  },
  {
    Header: "Phone",
    accessor: "phoneNumber",
    // Filter: ColumnFilter,
  },
];

export const GROUPED_COLUMNS = [
  {
    Header: "id",
    Footer: "id",
    accessor: "id",
  },
  {
    Header: "Name",
    Footer: "Name",
    columns: [
      {
        Header: "FirstName",
        Footer: "FirstName",
        accessor: "firstName",
      },
      {
        Header: "LastName",
        Footer: "LastName",
        accessor: "lastName",
      },
    ],
  },
  {
    Header: "Info",
    Footer: "Info",
    columns: [
      {
        Header: "Email",
        Footer: "Email",
        accessor: "email",
      },
      {
        Header: "Age",
        Footer: "Age",
        accessor: "age",
      },
      {
        Header: "Phone",
        accessor: "phoneNumber",
      },
    ],
  },
];
