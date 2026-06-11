import emailjs from '@emailjs/browser';
import { TRACKING_CONFIG } from '../config/tracking';

/**
 * Track form submission - sends to Google Sheets AND Email
 */
export const trackFormSubmission = async (formData) => {
  const submissionData = {
    timestamp: new Date().toISOString(),
    student_name: formData.name,
    student_email: formData.email,
    student_phone: formData.phone,
    platform: formData.platform,
    duration_days: formData.duration,
    price_rs: formData.price,
    exam_date: formData.exam_date || '',
    has_passport: formData.has_passport || false,
    page_url: window.location.href,
    user_agent: navigator.userAgent
  };

  console.log('🎯 TRACKING TEST - Form Submission Data:');
  console.table(submissionData);

  // If TEST_MODE is true, only log to console (don't send)
  if (TRACKING_CONFIG.TEST_MODE) {
    console.log('⚠️  TEST MODE: Data not sent to Google Sheets or Email');
    console.log('ℹ️  To enable real tracking:');
    console.log('   1. Set TEST_MODE: false in src/config/tracking.js');
    console.log('   2. Add your EmailJS keys');
    console.log('   3. Add your Google Sheets webhook URL');
    return submissionData;
  }

  // Send to Google Sheets
  await sendToGoogleSheets(submissionData);

  // Send email notification via EmailJS
  await sendEmailNotification(submissionData);

  console.log('✅ Form submission tracked successfully!');
  return submissionData;
};

/**
 * Send data to Google Sheets via Google Apps Script Web App
 */
const sendToGoogleSheets = async (data) => {
  const url = TRACKING_CONFIG.GOOGLE_SHEETS.webhookURL;
  
  if (!url || url.includes('YOUR_SCRIPT_ID')) {
    console.warn('⚠️ Google Sheets not configured. Data logged to console only.');
    console.log('📋 Submission data:', data);
    return;
  }

  try {
    await fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    console.log('✅ Data sent to Google Sheets');
  } catch (error) {
    console.error('❌ Error sending to Google Sheets:', error);
  }
};

/**
 * Send email notification via EmailJS
 */
const sendEmailNotification = async (data) => {
  const config = TRACKING_CONFIG.EMAILJS;
  
  if (!config.serviceID || config.serviceID.includes('service_id')) {
    console.warn('⚠️ EmailJS not configured. Email not sent.');
    return;
  }

  try {
    const templateParams = {
      to_email: 'sahmanoj647@gmail.com',
      student_name: data.student_name,
      student_email: data.student_email,
      student_phone: data.student_phone,
      platform: data.platform,
      duration: `${data.duration_days} days`,
      price: `Rs. ${data.price_rs}`,
      submitted_at: new Date(data.timestamp).toLocaleString('en-NP', {
        timeZone: 'Asia/Kathmandu'
      })
    };
    
    console.log('📧 Sending email with params:', templateParams);
    
    await emailjs.send(
      config.serviceID,
      config.templateID,
      templateParams,
      config.publicKey
    );
    console.log('✅ Email notification sent to', TRACKING_CONFIG.NOTIFICATION_EMAIL);
  } catch (error) {
    console.error('❌ Error sending email:', error);
  }
};

/**
 * Track page view / form start (optional analytics)
 */
export const trackFormStart = (packageName) => {
  const eventData = {
    event: 'form_started',
    package: packageName,
    timestamp: new Date().toISOString(),
    page_url: window.location.href
  };

  console.log('📊 Form started:', eventData);
  
  // Send to Google Analytics if available
  if (window.gtag) {
    window.gtag('event', 'form_started', {
      event_category: 'engagement',
      event_label: packageName
    });
  }
};