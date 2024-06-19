import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const LoanCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="interestRate" source="interestRate" />
        <NumberInput label="loanAmount" source="loanAmount" />
        <NumberInput step={1} label="loanTermMonths" source="loanTermMonths" />
      </SimpleForm>
    </Create>
  );
};
