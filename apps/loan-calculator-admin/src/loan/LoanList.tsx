import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const LoanList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Loans"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="interestRate" source="interestRate" />
        <TextField label="loanAmount" source="loanAmount" />
        <TextField label="loanTermMonths" source="loanTermMonths" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
