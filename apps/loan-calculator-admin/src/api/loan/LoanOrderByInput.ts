import { SortOrder } from "../../util/SortOrder";

export type LoanOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  interestRate?: SortOrder;
  loanAmount?: SortOrder;
  loanTermMonths?: SortOrder;
  updatedAt?: SortOrder;
};
