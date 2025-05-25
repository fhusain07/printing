import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";

interface AuthLinksProps {
  isAuthenticated: boolean;
}

const AuthLinks: React.FC<AuthLinksProps> = ({ isAuthenticated }) => {
  return (
    <div className="flex items-center gap-4">
      {!isAuthenticated ? (
        <>
          <Link
            className="text-sm text-gray-700 hover:text-primary"
            to="/signup"
          >
            Sign Up
          </Link>
          <Link to="/login">
            <Button>Login</Button>
          </Link>
        </>
      ) : (
        <Link className="text-sm font-medium text-gray-700" to="/dashboard">
          Dashboard
        </Link>
      )}
    </div>
  );
};

export default AuthLinks;
