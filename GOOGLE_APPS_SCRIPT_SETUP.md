# Google Apps Script Setup for Student Interest Form

This guide will help you connect your Student Interest Form to the Google Sheet at: `https://docs.google.com/spreadsheets/d/1S_1L6E04ggF5wjpXBok6cTs3tjzBLw1zgugFG89bB0w/edit?gid=0#gid=0`

## Step 1: Set Up Google Apps Script

1. **Go to Google Apps Script**
   - Visit: https://script.google.com/
   - Sign in with your Google account

2. **Create a New Project**
   - Click "New Project"
   - Give it a name like "A4A Student Interest Form Handler"

3. **Copy the Script Code**
   - Delete the default `Code.gs` content
   - Copy the entire content from `student-interest-form-script.js` in your project
   - Paste it into the Google Apps Script editor

## Step 2: Deploy the Script

1. **Save the Project**
   - Click the save icon or press Ctrl+S
   - Give your project a name if prompted

2. **Deploy as Web App**
   - Click "Deploy" → "New deployment"
   - Choose "Web app" as the type
   - Set the following options:
     - **Execute as**: "Me" (your Google account)
     - **Who has access**: "Anyone" (for now, you can restrict this later)
   - Click "Deploy"

3. **Authorize the Script**
   - Google will ask for permissions
   - Click "Continue" and authorize the script to:
     - Read/write to your Google Sheets
     - Send emails on your behalf

4. **Get the Script URL**
   - After deployment, you'll get a URL like:
     `https://script.google.com/macros/s/AKfycbz.../exec`
   - Copy this URL - you'll need it for the next step

## Step 3: Update Your React Component

1. **Open the Interest Form Component**
   - Navigate to `src/components/Students/InterestForm.js`

2. **Replace the Script URL**
   - Find the line: `// const scriptUrl = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';`
   - Replace `YOUR_SCRIPT_ID` with the actual script ID from your deployment URL
   - Uncomment the fetch code block

3. **The updated code should look like this:**
   ```javascript
   const scriptUrl = 'https://script.google.com/macros/s/AKfycbz.../exec';
   
   const response = await fetch(scriptUrl, {
     method: 'POST',
     mode: 'no-cors',
     headers: {
       'Content-Type': 'application/x-www-form-urlencoded',
     },
     body: submissionData.toString()
   });
   ```

## Step 4: Set Up the Google Sheet

1. **Open Your Google Sheet**
   - Go to: https://docs.google.com/spreadsheets/d/1S_1L6E04ggF5wjpXBok6cTs3tjzBLw1zgugFG89bB0w/edit?gid=0#gid=0

2. **Set Up Headers (Optional)**
   - If the sheet is empty, you can run the setup function
   - In Google Apps Script, go to the "Functions" dropdown
   - Select `setupStudentInterestSpreadsheet`
   - Click the "Run" button
   - This will create the proper headers for your form data

3. **Verify Permissions**
   - Make sure your Google account has edit access to the sheet
   - The script will need to write to this sheet

## Step 5: Test the Connection

1. **Test Individual Components First**
   - In Google Apps Script, go to the "Functions" dropdown
   - First, run `testSpreadsheetOnly` to test spreadsheet access
   - Then, run `testEmailOnly` to test email functionality
   - Check the execution logs for each test

2. **Test the Full Form**
   - Select `testStudentInterestForm` from the Functions dropdown
   - Click "Run"
   - Check the execution log to see if it works

2. **Test the Form**
   - Fill out your Student Interest Form on your website
   - Submit the form
   - Check your Google Sheet to see if the data appears
   - Check your email for confirmation messages

## Step 6: Security Considerations

1. **Restrict Access (Optional)**
   - In your Google Apps Script deployment settings
   - Change "Who has access" to "Anyone with Google account" for better security

2. **Add CAPTCHA (Recommended)**
   - Consider adding reCAPTCHA to prevent spam submissions
   - This can be done by modifying the form to include reCAPTCHA

## Troubleshooting

### Common Issues:

1. **"Script not found" error**
   - Make sure you copied the correct script ID from the deployment URL
   - Verify the script is deployed and accessible

2. **"Permission denied" error**
   - Make sure you authorized the script properly
   - Check that your Google account has access to the sheet

3. **Data not appearing in sheet**
   - Check the execution logs in Google Apps Script
   - Verify the spreadsheet ID is correct
   - Make sure the sheet is not protected

4. **Emails not sending**
   - Check if your Google account has email sending permissions
   - Verify the email addresses are correct

### Debugging:

1. **Check Execution Logs**
   - In Google Apps Script, click "Executions" in the left sidebar
   - View the logs for any error messages

2. **Test Individual Functions**
   - Use the test functions provided in the script
   - Run them one by one to isolate issues

## File Structure

Your project should now have:
- `student-interest-form-script.js` - The Google Apps Script code
- `src/components/Students/InterestForm.js` - Updated React component
- `GOOGLE_APPS_SCRIPT_SETUP.md` - This setup guide

## Next Steps

Once everything is working:
1. Test the form thoroughly
2. Consider adding form validation
3. Add reCAPTCHA for spam protection
4. Set up email notifications for your team
5. Monitor the Google Sheet for new submissions

## Support

If you encounter issues:
1. Check the Google Apps Script execution logs
2. Verify all URLs and IDs are correct
3. Test with the provided test functions
4. Check Google's Apps Script documentation for more help
