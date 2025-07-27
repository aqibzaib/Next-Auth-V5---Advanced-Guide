const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="h-full flex items-center justify-center
      bg-[radial-gradient(ellipse_at_top,_#38bdf8,_#1e3a8a)] from-sky-400 to-blue-800"
    >
      {children}
    </div>
  );
};

export default AuthLayout;
