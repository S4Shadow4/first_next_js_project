import TradeHubLogo from '@/app/ui/tradehub-logo';
import LoginForm from '@/app/ui/login-form';

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32 bg-[#F2F2F2] rounded-lg">
        <div className="flex h-20 w-full items-end rounded-lg bg-[#8DC03F] p-3 md:h-36 bg-[#8DC03F]">
          <div className="w-32 text-white md:w-36">
            <TradeHubLogo/>
          </div>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
  