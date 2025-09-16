import { MainLayout } from "@/components/layout/main-layout";
import { TransactionsPage } from "@/components/transactions/transactions-page";

export default function Transactions() {
  return (
    <MainLayout title="Transactions">
      <TransactionsPage />
    </MainLayout>
  );
}
