import { MainLayout } from "@/components/layout/main-layout";
import { CaptureTransactionForm } from "@/components/forms/capture-transaction-form";

export default function CaptureTransaction() {
  return (
    <MainLayout title="Capture Transaction">
      <div className="p-6">
        <CaptureTransactionForm />
      </div>
    </MainLayout>
  );
}
