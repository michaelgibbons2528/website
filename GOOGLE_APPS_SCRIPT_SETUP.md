# Google Apps Script Setup for Contact Form

This guide will help you set up Google Sheets and Google Apps Script to handle contact form submissions from your A4A website.

## Step 1: Create Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "A4A Contact Form Submissions"
4. **Note**: Headers will be automatically added by the script (see Step 4)

## Step 2: Create Google Apps Script

1. Go to [Google Apps Script](https://script.google.com)
2. Click "New Project"
3. Name it "A4A Contact Form Handler"
4. Replace the default code with the contents of `contact-form-script.js`
5. Save the project

## Step 3: Set Up Spreadsheet Headers

1. In your Google Apps Script project, go to the "Functions" dropdown
2. Select `setupContactFormSpreadsheet`
3. Click the "Run" button
4. This will automatically add the following headers to your Google Sheet:
   - Column A: Timestamp
   - Column B: Name
   - Column C: Email
   - Column D: Subject
   - Column E: Message
5. The headers will be formatted with A4A's red color (#a30000)

## Step 4: Deploy as Web App

1. In your Apps Script project, click "Deploy" → "New deployment"
2. Choose "Web app" as the type
3. Set the following options:
   - **Execute as**: Me (your Google account)
   - **Who has access**: Anyone
4. Click "Deploy"
5. Copy the Web App URL that is generated

## Step 5: Update Website Code

1. Open `src/components/Contact/Contact.js`
2. Replace `YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL` with the actual Web App URL from Step 4
3. Save the file

## Step 6: Test the Setup

1. Deploy your website
2. Go to the Contact page
3. Fill out and submit the contact form
4. Check:
   - The Google Sheet for new entries
   - Your email (mgibbons@a4all.org) for notification emails

## Additional Functions

The script includes these additional functions for testing and maintenance:

- **`checkContactFormSpreadsheet()`**: Check if the spreadsheet is properly set up
- **`setupContactFormSpreadsheet()`**: Set up headers (run once initially)

## How It Works

1. When someone submits the contact form, it sends a POST request to your Google Apps Script
2. The script:
   - Saves the form data to your Google Sheet
   - Sends an email notification to mgibbons@a4all.org
   - Returns a success/error response to the website
3. The website shows a success message or error alert accordingly

## Troubleshooting

- **CORS Issues**: Make sure your Apps Script is deployed as a web app with "Anyone" access
- **Email Notifications**: Check that your Google account has permission to send emails
- **Sheet Access**: Ensure the Apps Script has access to the Google Sheet

## Security Notes

- The web app URL will be public, but the script only accepts POST requests with proper JSON data
- Consider adding additional validation in the Apps Script if needed
- The script includes error handling and logging for debugging
