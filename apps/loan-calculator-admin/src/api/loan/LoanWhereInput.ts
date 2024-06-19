import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type LoanWhereInput = {
  id?: StringFilter;
  interestRate?: FloatNullableFilter;
  loanAmount?: FloatNullableFilter;
  loanTermMonths?: IntNullableFilter;
};
