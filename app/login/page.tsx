import LoginForm from "@/components/login/LoginForm";

const LoginPage = () => {
  return (
    <div className="w-full max-w-md mx-auto mt-10 bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
