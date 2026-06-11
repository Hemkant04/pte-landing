// 🔧 CONFIGURATION FILE
// Follow TRACKING_SETUP.md to get your keys

export const TRACKING_CONFIG = {
  // Set to true for local testing (logs to console only)
  TEST_MODE: false,  // ← Change to false when you add real keys
  
  // Get from EmailJS.com
  EMAILJS: {
    serviceID: 'service_id_here',      // Replace with your EmailJS Service ID
    templateID: 'template_id_here',    // Replace with your EmailJS Template ID
    publicKey: 'public_key_here'       // Replace with your EmailJS Public Key
  },
  
  // Get from Google Apps Script deployment
  GOOGLE_SHEETS: {
    webhookURL: 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec' // Replace with your Google Script URL
  }
};

// 📧 Your email address for notifications
export const NOTIFICATION_EMAIL = 'apeuninepal01@gmail.com';