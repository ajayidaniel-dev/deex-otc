import { MainLayout } from "@/components/layout/main-layout";
import { SettingsPage } from "@/components/settings/settings-page";

export default function Settings() {
  return (
    <MainLayout title="Settings">
      <SettingsPage />
    </MainLayout>
  );
}
