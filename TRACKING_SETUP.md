# Form Tracking & Notification Setup Guide

This guide will help you set up Google Sheets storage and Email notifications for form submissions.

---

## 📋 Overview

Your form tracking system now:
1. ✅ Tracks when students select a package duration
2. ✅ Sends submission data to Google Sheets
3. ✅ Sends email notifications via EmailJS
4. ✅ Continues WhatsApp flow (unchanged)

---

## Step 1: Set Up Google Sheets (FREE)

### 1A. Create Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Click **"+ Blank"** to create a new spreadsheet
3. Name it: **"PTE Form Submissions"**
4. In the first row, add these column headers:

```
A1: Timestamp
B1: Student Name
C1: Email
D1: Phone
E1: Platform
F1: Duration (Days)
G1: Price (Rs)
H1: Exam Date
I1: Has Passport
J1: Page URL
K1: User Agent
```

### 1B. Create Google Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete all existing code
3. Paste this code:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      data.timestamp ? new Date(data.timestamp) : new Date(),
      data.student_name || '',
      data.student_email || '',
      data.student_phone || '',
      data.platform || '',
      data.duration_days || 0,
      data.price_rs || 0,
      data.exam_date || '',
      data.has_passport ? 'Yes' : 'No',
      data.page_url || '',
      data.user_agent || ''
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({result: 'success'}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({result: 'error', error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click **Save** (💾 icon)
5. Name the project: "Form Submission Tracker"

### 1C. Deploy as Web App

1. Click **Deploy** → **New deployment**
2. Click the gear icon ⚙️ → Select **Web app**
3. Configure:
   - **Description**: "Form Submission Endpoint"
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
4. Click **Deploy**
5. **Copy the Web app URL** (it looks like: `https://script.google.com/macros/s/...../exec`)
6. Click **Done**

---

## Step 2: Set Up EmailJS (FREE)

### 2A. Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click **Sign Up** → Use Google (easiest)
3. Complete signup (free plan: 200 emails/month)

### 2B. Add Email Service

1. In EmailJS dashboard, click **Email Services** → **Add New Service**
2. Select **Gmail** (or your preferred provider)
3. Connect your Gmail account
4. Click **Create**
5. **Copy the Service ID** (e.g., `service_abc123`)

### 2C. Create Email Template

1. Click **Email Templates** → **Create New Template**
2. Click **Create New Template** again
3. Paste this template:

```html
📬 New Practice Package Booking!

Student Details:
━━━━━━━━━━━━━━━━━━━━
Name: {{student_name}}
Email: {{student_email}}
Phone: {{student_phone}}
━━━━━━━━━━━━━━━━━━━━

Package Details:
━━━━━━━━━━━━━━━━━━━━
Platform: {{platform}}
Duration: {{duration}}
Price: {{price}}
━━━━━━━━━━━━━━━━━━━━

Submitted: {{submitted_at}}

---
This is an automated notification from Apeuni Digital Nepal
```

4. Click **Save**
5. **Copy the Template ID** (e.g., `template_xyz789`)

### 2D. Get Your Public Key

1. Click your name (top right) → **Account**
2. Go to **API Keys** section
3. **Copy your Public Key** (e.g., `user_abc123xyz`)

---

## Step 3: Update Your Code

### 3A. Update formTracker.js

Open: `src/utils/formTracker.js`

Replace these lines with your actual keys:

```javascript
const EMAILJS_CONFIG = {
  serviceID: 'YOUR_SERVICE_ID',      // ← Paste from Step 2B
  templateID: 'YOUR_TEMPLATE_ID',    // ← Paste from Step 2C
  publicKey: 'YOUR_PUBLIC_KEY'       // ← Paste from Step 2D
};
```

Replace this line with your Google Script URL:

```javascript
const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL'; // ← Paste from Step 1C
```

### 3B. Commit & Deploy

```bash
git add .
git commit -m "Add form tracking with Google Sheets and EmailJS"
git push
```

Vercel will automatically deploy.

---

## Step 4: Test Your Setup

### Test the Flow:

1. Go to: `https://www.apenepal.com.np/practice-package`
2. Click on any platform (Apeuni/AlfaPTE/Gurully)
3. Select any duration (e.g., 7 days)
4. Fill in the form:
   - Name: Test Student
   - Email: your-email@gmail.com
   - Phone: 9762419564
5. Click **Proceed to Payment**
6. Click **Payment Done — Proceed to WhatsApp**

### Check Results:

✅ **Google Sheets**: Should have a new row with all data  
✅ **Email**: Should receive notification email  
✅ **WhatsApp**: Should open with pre-filled message  

---

## 📊 Viewing Your Data

### Google Sheets Dashboard

Your sheet will automatically populate with:
- All form submissions
- Timestamp (Nepal time)
- Student details
- Package selected
- Price

You can:
- Create charts/graphs
- Filter by platform
- Track conversion rates
- Export to CSV

### Email Notifications

Each submission sends you an email with:
- Student name, email, phone
- Platform and duration selected
- Price
- Submission time (Nepal time)

---

## 🎯 Optional Enhancements

### 1. Add Google Analytics Tracking

In `formTracker.js`, the `trackFormStart` function already supports Google Analytics. Just add your GA4 tag to `index.html`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXX');
</script>
```

### 2. Add WhatsApp Notifications (Advanced)

Use Twilio WhatsApp API to send yourself WhatsApp messages (paid service).

### 3. Create Analytics Dashboard

Use Google Data Studio (free) to connect your Google Sheet and create visual dashboards.

---

## 🆘 Troubleshooting

### "Email not sent" in console
- Check EmailJS keys are correct
- Verify service is active in EmailJS dashboard
- Check template variables match exactly

### "Data not sent to Sheets"
- Verify Google Script URL is correct
- Make sure script is deployed (not just saved)
- Check "Who has access" is set to "Anyone"

### Form submission works but no data
- Open browser console (F12)
- Look for error messages
- Check network tab for failed requests

---

## 📞 Support

If you need help:
1. Check browser console for errors
2. Verify all keys/URLs are correct
3. Test with real data (not just test submissions)

---

## ✅ What You've Built

- ✅ Form tracking system
- ✅ Google Sheets database (auto-updating)
- ✅ Email notifications (instant)
- ✅ WhatsApp integration (unchanged)
- ✅ Analytics ready

**Total Cost: $0** (Free tiers)

**Time to Set Up: ~30 minutes**

---

🎉 **Congratulations!** You now have a professional form tracking system!