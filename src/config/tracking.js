// 🔧 CONFIGURATION FILE
// Follow TRACKING_SETUP.md to get your keys

export const TRACKING_CONFIG = {
  // Set to true for local testing (logs to console only)
  TEST_MODE: false,  // ← Change to false when you add real keys
  
  // Get from EmailJS.com
  EMAILJS: {
    serviceID: 'service_bnudzcp',      // Replace with your EmailJS Service ID
    templateID: 'template_06ifqdf',    // Replace with your EmailJS Template ID
    publicKey: 'nG0qgS1dlSjcnEBjz'       // Replace with your EmailJS Public Key
  },
  
  // Get from Google Apps Script deployment
  GOOGLE_SHEETS: {
    webhookURL: 'https://script.google.com/macros/s/AKfycbyQfEyko7TzCAgR0F_QCt6fMJyd2_-s1b-h-xFDbvGIVDODk5nzTMX85SJejKPqyeRA/exec' // Replace with your Google Script URL
  }
};

// 📧 Your email address for notifications
export const NOTIFICATION_EMAIL = 'hemkanta04@gmail.com';