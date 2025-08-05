export type Transaction = {
  id: string;
  date: string;
  remark: string;
  amount: number;
  currency: string;
  type: "Credit" | "Debit";
};

export type ColumnSort = {
  id: string;
  desc: boolean;
};

export type SortingState = ColumnSort[];

// interface DashboardSummary {
//   totalBalance: number;
//   totalCredits: number;
//   totalDebits: number;
//   transactionCount: number;
//   balanceChange: number;
//   creditsChange: number;
//   debitsChange: number;
//   transactionChange: number;
// }
