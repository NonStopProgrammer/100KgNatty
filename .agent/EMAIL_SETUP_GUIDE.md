# Email Configuration Guide for 100KG Natty Contact Form

## Overview
The contact form now sends emails using **EmailJS** - a free service that allows sending emails directly from the client-side without a backend server.

## Setup Instructions

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### Step 2: Add Email Service
1. After logging in, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Follow the instructions to connect your email account
5. **Important**: Use the email `coach@aravindhfitness.com` or your preferred coach email
6. Note down the **Service ID** (e.g., `service_100kgnatty`)

### Step 3: Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template configuration:

**Template Name**: Contact Form Submission

**Subject**: New Enquiry from {{from_name}} - 100KG Natty

**Content**:
```
New enquiry received from 100KG Natty website!

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Goal: {{goal}}

Message:
{{message}}

---
This email was sent from the 100KG Natty contact form.
```

4. Save the template and note down the **Template ID** (e.g., `template_contact`)

### Step 4: Get Your Public Key
1. Go to **Account** → **General**
2. Find your **Public Key** (also called User ID)
3. Copy this key (e.g., `YOUR_EMAILJS_PUBLIC_KEY`)

### Step 5: Update the Contact Component
Open `components/Contact.tsx` and replace these values on lines 32-34:

```typescript
service_id: 'service_100kgnatty', // Replace with your Service ID
template_id: 'template_contact',   // Replace with your Template ID
user_id: 'YOUR_EMAILJS_PUBLIC_KEY', // Replace with your Public Key
```

**Example**:
```typescript
service_id: 'service_abc123',
template_id: 'template_xyz789',
user_id: 'user_def456ghi789',
```

### Step 6: Test the Form
1. Save the changes
2. Go to your website's contact form
3. Fill out the form and submit
4. Check the configured email inbox for the message
5. Verify all fields are populated correctly

## EmailJS Free Tier Limits
- **200 emails per month** (free plan)
- Upgrade to paid plan if you need more

## Security Notes
✅ **Phone number removed** from public display (security improvement)
✅ Phone field is now **optional** in the form
✅ All form data is sent securely via HTTPS
✅ Privacy notice added to inform users

## Troubleshooting

### Form not sending emails?
1. Check browser console for errors
2. Verify all three IDs are correct (service_id, template_id, user_id)
3. Make sure EmailJS service is connected and active
4. Check EmailJS dashboard for error logs

### Emails going to spam?
1. Add your domain to EmailJS allowed domains
2. Set up SPF/DKIM records (advanced)
3. Ask users to check spam folder initially

### Need more emails per month?
- Upgrade to EmailJS Pro plan ($15/month for 1000 emails)
- Or implement a backend solution with Nodemailer

## Alternative: Backend Solution (Advanced)
If you prefer a backend solution instead of EmailJS:
1. Create a Node.js/Express backend
2. Use Nodemailer to send emails
3. Deploy backend to Vercel/Railway/Heroku
4. Update Contact.tsx to call your backend API

## Support
For EmailJS support: https://www.emailjs.com/docs/
For issues with the contact form: Check browser console and EmailJS dashboard
