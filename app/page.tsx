import DashBoard from "./dashBoard/page";
import AuthLayout from "./components/layouts/AuthLayout";

export default function Home() {
  return (
    <AuthLayout>
      <DashBoard />
    </AuthLayout>
  );
}
