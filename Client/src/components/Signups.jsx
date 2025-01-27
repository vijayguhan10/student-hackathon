import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import image from "../assets/Collab-bro.svg";
import { ToastContainer, toast } from "react-toastify";
function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(true);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

//   const handleSubmit = async () => {
//     try {
//       if (isSignup) {
//         const response = await axios.post("http://your-api-endpoint/signup", {
//           name: formData.name,
//           email: formData.email,
//           password: formData.password,
//           confirmPassword: formData.confirmPassword,
//         });
//         toast.success("Signup successful!");
//       } else {
//         const response = await axios.post(
//           `${process.env.REACT_APP_BASEURL}/userAuth/login`,
//           {
//             email: formData.email,
//             password: formData.password,
//           }
//         );
//         localStorage.setItem("cracker_token", response.data.token);

//         console.log("Response of the Login : ", response);
//         toast.success("Login successful!");

//         navigate("/dashboard");
//       }
//     } catch (error) {
//       console.error("Error", error);

//       if (error.response) {
//         if (error.response.status === 400) {
//           toast.error("Invalid email or password!");
//         } else {
//           toast.error(
//             `Error: ${
//               error.response.data.message ||
//               "An error occurred. Please try again."
//             }`
//           );
//         }
//       } else {
//         toast.error("An error occurred. Please check your network connection.");
//       }
//     }
//   };

  return (
    <div className="flex items-center justify-center p-4">
      <ToastContainer />
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 bg-white rounded-2xl shadow-xl">
        <div className="p-8 lg:p-12">
          <div className="mb-8 h-24 ">
            <h1 className="text-3xl mt-10">
              Welcome to the Crackers Model ERP
            </h1>
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900">
                {isSignup ? "Sign Up" : "Login"}
              </h1>
              <p className="text-gray-500 mt-2">
                {isSignup
                  ? "Secure Your Communications with Easymail"
                  : "Welcome Back"}
              </p>
            </div>

            <div className="space-y-4">
            

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaEyeSlash className="text-gray-500" />
                  ) : (
                    <FaEye className="text-gray-500" />
                  )}
                </button>
              </div>


            </div>

            <div className="mt-10">
              <button
                onClick={()=>navigate('/dashboard')}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
              >
                {isSignup ? "Sign Up" : "Login"}
              </button>
              <p
                className="text-center text-gray-600 mt-4 cursor-pointer"
                onClick={() => setIsSignup(!isSignup)}
              >
                {isSignup
                  ? "Already have an account? Login here"
                  : "Don't have an account? Sign up here"}
              </p>
            </div>
          </div>
        </div>
        <img src={image} className=""/>
      </div>
    </div>
  );
}

export default Signup;
