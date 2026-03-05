import { CheckCircle, LogOut } from 'lucide-react';

interface WelcomeProps {
  username: string;
  onLogout: () => void;
}

function Welcome({ username, onLogout }: WelcomeProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md text-center">
        <div className="flex items-center justify-center mb-6">
          <CheckCircle className="w-16 h-16 text-green-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome, {username}!
        </h1>
        <p className="text-gray-600 mb-8">
          You have successfully logged in to the application.
        </p>
        <button
          onClick={onLogout}
          className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
    </div>
  );
}

export default Welcome;
