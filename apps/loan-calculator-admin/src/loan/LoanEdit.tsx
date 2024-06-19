import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const LoanEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="interestRate" source="interestRate" />
        <NumberInput label="loanAmount" source="loanAmount" />
        <NumberInput step={1} label="loanTermMonths" source="loanTermMonths" />
      </SimpleForm>
    </Edit>
  );
};
