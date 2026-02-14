import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import './LoginPrompt.css'

const LoginPrompt = ({ featureName = 'this feature' }) => {
  const { loginWithRedirect } = useAuth0()

  const handleLogin = () => {
    loginWithRedirect()
  }

  return (
    <div className="login-prompt">
      <div className="login-container">
        <div className="login-icon">🔐</div>
        <h2>Login Required</h2>
        <p>You need to be logged in to access {featureName}.</p>
        <p>Please sign in to continue and unlock all our travel planning features.</p>
        
        <button onClick={handleLogin} className="btn btn-primary login-btn">
          Sign In
        </button>
        
        <div className="login-benefits">
          <h3>Why Sign In?</h3>
          <ul>
            <li>✨ Save your favorite destinations</li>
            <li>🗺️ Access AI-powered itinerary planning</li>
            <li>💾 Store your travel preferences</li>
            <li>📱 Sync across all your devices</li>
            <li>🎯 Get personalized recommendations</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default LoginPrompt
