import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import '../assets/styles/Auth.css';

export default function Registration() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    verification_document: null,
  });
  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const validatePasswordMatch = () => {
    if (formData.password !== formData.confirmPassword) {
      setErrors(prev => ({ ...prev, confirmPassword: "Passwords do not match!" }));
      return false;
    }
    return true;
  };

  const validateFile = (file) => {
    if (!file) return true;
    
    const validTypes = ['application/pdf', 'image/jpeg', 'image/png'];
    const maxSize = 5 * 1024 * 1024; // 5MB
    
    if (!validTypes.includes(file.type)) {
      setErrors(prev => ({ 
        ...prev, 
        verification_document: "Only PDF, JPG, and PNG files allowed" 
      }));
      return false;
    }
    
    if (file.size > maxSize) {
      setErrors(prev => ({
        ...prev,
        verification_document: "File size must be less than 5MB"
      }));
      return false;
    }
    
    return true;
  };

  const getCSRFToken = () => {
    return document.cookie
      .split('; ')
      .find(row => row.startsWith('csrftoken='))
      ?.split('=')[1] || "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setGeneralError("");
    
    if (!validatePasswordMatch()) return;
    if (!validateFile(formData.verification_document)) return;

    const formPayload = new FormData();
    formPayload.append("username", formData.username);
    formPayload.append("email", formData.email);
    formPayload.append("password", formData.password);
    
    if (formData.verification_document) {
      formPayload.append("verification_document", formData.verification_document);
    }

    try {
      setIsSubmitting(true);
      const response = await axios.post(
        "/api/register/",
        formPayload,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "X-CSRFToken": getCSRFToken(),
          },
          withCredentials: true,
        }
      );

      // Successful registration
      if (response.status === 201) {
        navigate("/login", { 
          state: { registrationSuccess: true } 
        });
      }
    } catch (error) {
      if (error.response?.data?.user) {
        // Special case: Profile exists error means user was created
        navigate("/login", {
          state: { 
            registrationSuccess: true,
            message: "Account created successfully!" 
          }
        });
      } else {
        // Normal error handling
        const errorData = error.response?.data || {};
        const newErrors = {};
        
        // Flatten error messages
        for (const [field, messages] of Object.entries(errorData)) {
          newErrors[field] = Array.isArray(messages) ? messages.join(' ') : messages;
        }
        
        setErrors(newErrors);
        setGeneralError(
          error.response?.data?.detail || 
          "Registration failed. Please try again."
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { id, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: id === "verification_document" ? files[0] : value
    }));
    
    // Clear field-specific error when editing
    if (errors[id]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[id];
        return newErrors;
      });
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Create Account</h2>
        
        {generalError && (
          <div className="error-message">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              {generalError}
            </span>
          </div>
        )}

        <form className="auth-form" onSubmit={handleSubmit}>
          {/* Username Field */}
          <div className="form-group">
            <input
              type="text"
              id="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className={errors.username ? "error" : ""}
              required
            />
            {errors.username && <div className="error-message">{errors.username}</div>}
          </div>

          {/* Email Field */}
          <div className="form-group">
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "error" : ""}
              required
            />
            {errors.email && <div className="error-message">{errors.email}</div>}
          </div>

          {/* Password Fields */}
          <div className="form-group">
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className={errors.password ? "error" : ""}
              required
            />
            {errors.password && <div className="error-message">{errors.password}</div>}
          </div>

          <div className="form-group">
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={errors.confirmPassword ? "error" : ""}
              required
            />
            {errors.confirmPassword && (
              <div className="error-message">{errors.confirmPassword}</div>
            )}
          </div>

          {/* Document Upload */}
          <div className="form-group">
            <label htmlFor="verification_document">
              ID Verification Document (PDF/Image):
            </label>
            <input
              type="file"
              id="verification_document"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={handleChange}
              className={errors.verification_document ? "error" : ""}
            />
            {errors.verification_document && (
              <div className="error-message">{errors.verification_document}</div>
            )}
          </div>

          {/* Submit Button */}
          <div className="form-group">
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Creating Account..." : "Create Account"}
            </button>
          </div>

          {/* Login Link */}
          <div className="form-footer">
            <p className="auth-link">
              Already have an account? <Link to="/login">Login here</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}