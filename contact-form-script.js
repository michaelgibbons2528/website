function doGet(e) {
  try {
    // Get the form data from URL parameters
    const formData = e.parameter;
    
    // Log the received data for debugging
    console.log('Received form data:', JSON.stringify(formData));
    
    // Extract form data
    const name = formData.name || 'Unknown';
    const email = formData.email || 'No email provided';
    const subject = formData.subject || 'Contact Form Submission';
    const message = formData.message || 'No message provided';
    
    // Get current timestamp
    const timestamp = new Date().toLocaleString();
    
    // Get the specific spreadsheet by ID
    const spreadsheetId = '1XzvBZY27I2U30H5d1vzyRRKT9_6FUd8Hb2jdFTaUi4Y';
    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    const sheet = spreadsheet.getActiveSheet();
    
    // Add data to the spreadsheet
    sheet.appendRow([timestamp, name, email, subject, message]);
    
         // Send email notification to mgibbons@a4all.org
     const adminEmailBody = `
New Contact Form Submission

Name: ${name}
Email: ${email}
Subject: ${subject}
Message: ${message}

Timestamp: ${timestamp}

This message was sent from the A4A website contact form.
     `;
     
     const adminEmailSubject = `New Contact Form Submission: ${subject}`;
     
     // Send email to mgibbons@a4all.org
     MailApp.sendEmail({
       to: 'mgibbons@a4all.org',
       subject: adminEmailSubject,
       body: adminEmailBody
     });
     
     // Send confirmation email to the person who filled out the form
     const confirmationEmailBody = `
Dear ${name},

Thank you for contacting A4A (Adaptive 4 All)! We have received your message and will get back to you within 24-48 hours.

Here's a copy of your submission:

Subject: ${subject}
Message: ${message}

If you have any urgent questions, please don't hesitate to contact us directly at mgibbons@a4all.org.

Best regards,
The A4A Team
     `;
     
     const confirmationEmailSubject = `Thank you for contacting A4A - We received your message`;
     
     // Send confirmation email to the form submitter
     console.log('Attempting to send confirmation email to:', email);
     try {
       MailApp.sendEmail({
         to: email,
         subject: confirmationEmailSubject,
         body: confirmationEmailBody
       });
       console.log('Confirmation email sent successfully to:', email);
     } catch (emailError) {
       console.error('Error sending confirmation email:', emailError);
       console.error('Email details - To:', email, 'Subject:', confirmationEmailSubject);
     }
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'message': 'Form submitted successfully' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error processing form submission:', error);
    
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'message': 'An error occurred while processing your submission' }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Function to set up the spreadsheet headers (run this once to initialize)
function setupContactFormSpreadsheet() {
  try {
    const spreadsheetId = '1XzvBZY27I2U30H5d1vzyRRKT9_6FUd8Hb2jdFTaUi4Y';
    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    const sheet = spreadsheet.getActiveSheet();
    
    // Set up headers for the contact form
    const headers = [
      'Timestamp',
      'Name',
      'Email',
      'Subject',
      'Message'
    ];
    
    // Clear existing content and add headers
    sheet.clear();
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    
    // Format headers
    sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
    sheet.getRange(1, 1, 1, headers.length).setBackground('#a30000');
    sheet.getRange(1, 1, 1, headers.length).setFontColor('white');
    
    // Auto-resize columns
    for (let i = 1; i <= headers.length; i++) {
      sheet.autoResizeColumn(i);
    }
    
    console.log('Contact form spreadsheet setup complete with headers!');
    return true;
  } catch (error) {
    console.error('Error setting up spreadsheet:', error);
    return false;
  }
}

// Function to check if spreadsheet is properly set up
function checkContactFormSpreadsheet() {
  try {
    const spreadsheetId = '1XzvBZY27I2U30H5d1vzyRRKT9_6FUd8Hb2jdFTaUi4Y';
    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    const sheet = spreadsheet.getActiveSheet();
    
    console.log('Spreadsheet name:', spreadsheet.getName());
    console.log('Sheet name:', sheet.getName());
    console.log('Sheet URL:', spreadsheet.getUrl());
    
    // Check if headers exist (5 columns)
    const firstRow = sheet.getRange(1, 1, 1, 5).getValues()[0];
    console.log('First row (headers):', firstRow);
    
    // Check current row count
    const lastRow = sheet.getLastRow();
    console.log('Last row number:', lastRow);
    
    return true;
  } catch (error) {
    console.error('Error checking spreadsheet:', error);
    return false;
  }
}

// Test function to simulate a contact form submission
function testContactFormSubmission() {
  console.log('=== TESTING CONTACT FORM SUBMISSION ===');
  
     // Create test data
   const testData = {
     name: 'Test User',
     email: 'mgibbons@a4all.org', // Using a real email for testing confirmation
     subject: 'Test Contact Form Submission',
     message: 'This is a test message to verify the contact form is working properly.'
   };
  
  console.log('Test data being created:', JSON.stringify(testData));
  
  // Create a mock event object
  const mockEvent = {
    parameter: testData
  };
  
  console.log('=== CALLING doGet FUNCTION ===');
  try {
    const result = doGet(mockEvent);
    console.log('Test result:', result.getContent());
    console.log('Test completed successfully!');
  } catch (error) {
    console.error('Error in test:', error);
    console.error('Error details:', error.toString());
  }
  console.log('=== CONTACT FORM TEST COMPLETE ===');
}
