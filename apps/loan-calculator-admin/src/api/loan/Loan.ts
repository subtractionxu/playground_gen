export type Loan = {
  createdAt: Date;
  id: string;
  interestRate: number | null;
  loanAmount: number | null;
  loanTermMonths: number | null;
  updatedAt: Date;
};
