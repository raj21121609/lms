const Error_404 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
      {/* Inline animation (NO extra files) */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
      `}</style>

      <div className="text-center px-6">
        {/* Animated 404 */}
        <h1
          className="text-[120px] font-bold text-blue-600 tracking-tight"
          style={{ animation: "float 3s ease-in-out infinite" }}
        >
          404
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-gray-600 mb-6">
          Oops. The page you’re looking for doesn’t exist.
        </p>

        {/* Action */}
        <a
          href="/"
          className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-white
                     transition-all duration-300
                     hover:bg-blue-700 hover:scale-105"
        >
          Go back home
        </a>
      </div>
    </div>
  );
};

export default Error_404;
