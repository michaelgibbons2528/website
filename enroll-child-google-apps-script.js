// Google Apps Script for A4A Student Interest Form
// This script handles form submissions and saves data to Google Sheets

function doGet(e) {
  try {
    // Get the form data from URL parameters
    const formData = e.parameter;
    
    // Log the received data for debugging
    console.log('Received form data:', JSON.stringify(formData));
    console.log('Form data type:', typeof formData);
    console.log('Form data keys:', Object.keys(formData));
    console.log('Email directly from e.parameter:', e.parameter.email);
    console.log('Email from formData:', formData.email);
    
    // Validate that we have the required data
    if (!formData.childFirstName || !formData.email) {
      throw new Error('Missing required fields: childFirstName and email');
    }
    
    // Get the active spreadsheet
    const spreadsheetId = '1S_1L6E04ggF5wjpXBok6cTs3tjzBLw1zgugFG89bB0w';
    console.log('Attempting to open spreadsheet with ID:', spreadsheetId);
    
    try {
      const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
      console.log('Successfully opened spreadsheet:', spreadsheet.getName());
      
      const sheet = spreadsheet.getActiveSheet();
      console.log('Active sheet name:', sheet.getName());
      
      // Prepare the data row with all new fields
      const timestamp = new Date().toISOString();
      const rowData = [
        timestamp,
        formData.parentFirstName || '',
        formData.parentLastName || '',
        formData.childFirstName || '',
        formData.childLastName || '',
        formData.phoneNumber || '',
        formData.email || '',
        formData.permission || '',
        formData.childAge || '',
        formData.ptGroup || '',
        formData.childHeight || '',
        formData.childWeight || '',
        formData.healthConditions || '',
        formData.childInterests || '',
        formData.adaptiveTechnologyInterest || ''
      ];
      
      console.log('Prepared row data:', JSON.stringify(rowData));
      
      // Append the data to the sheet using a more robust method
      const lastRow = sheet.getLastRow();
      const targetRow = lastRow + 1;
      
      console.log('Last row in sheet:', lastRow);
      console.log('Targeting row:', targetRow);
      
      // Set values in the target row
      sheet.getRange(targetRow, 1, 1, rowData.length).setValues([rowData]);
      console.log('Successfully added data to row', targetRow);
      
    } catch (spreadsheetError) {
      console.error('Error accessing spreadsheet:', spreadsheetError);
      throw new Error('Failed to access Google Sheet: ' + spreadsheetError.message);
    }
    
    // Send confirmation email to the parent
    console.log('Email from formData:', formData.email);
    console.log('ChildFirstName from formData:', formData.childFirstName);
    console.log('ParentFirstName from formData:', formData.parentFirstName);
    console.log('Email validation check:', formData.email && formData.email.trim() !== '');
    console.log('All formData keys:', Object.keys(formData));
    console.log('All formData values:', Object.values(formData));
    
    if (formData.email && formData.email.trim() !== '') {
      console.log('About to call sendConfirmationEmail with:', formData.email, formData.childFirstName, formData.parentFirstName);
      const confirmationResult = sendConfirmationEmail(formData.email, formData.childFirstName, formData.parentFirstName);
      console.log('Confirmation email function completed');
    } else {
      console.error('No valid email address provided in form data');
    }
    
    // Send notification email to A4A team
    sendTeamNotification(formData);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'message': 'Form submitted successfully' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error processing form submission:', error);
    console.error('Error details:', error.toString());
    console.error('Error stack:', error.stack);
    
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'message': 'An error occurred while processing your submission' }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function sendConfirmationEmail(email, childFirstName, parentFirstName) {
  try {
    console.log('=== STARTING sendConfirmationEmail FUNCTION ===');
    console.log('Parameters received - email:', email, 'childFirstName:', childFirstName, 'parentFirstName:', parentFirstName);
    
    // Validate email parameter
    if (!email || email.trim() === '') {
      console.error('Invalid email address provided:', email);
      return false;
    }
    
    console.log('Email validation passed. Attempting to send confirmation email to:', email);
    
    const subject = 'A4A Enrollment Request Received - Thank You!';
    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #a30000;">Thank You for Your Enrollment Request!</h2>
        
        <p>Dear ${parentFirstName},</p>
        
        <p>We've received your enrollment request for <strong>${childFirstName}</strong> and are excited to work with your family!</p>
        
        <h3>What happens next?</h3>
        <ul>
          <li>Our team will review your information within 48 hours</li>
          <li>We'll contact you to discuss your child's specific needs</li>
          <li>We'll work together to create a custom solution for your child</li>
        </ul>
        
        <h3>About Accessible 4 All</h3>
        <p>We're a student-run organization dedicated to creating custom adaptive equipment for children with disabilities. All our services are completely free for families.</p>
        
        <p>If you have any questions or need to update your information, please don't hesitate to reach out to us at mgibbons@a4all.org.</p>
        
        <p>Best regards,<br>
        The A4A Team</p>
        
        <hr style="margin: 30px 0;">
        <p style="font-size: 12px; color: #666;">
          This is an automated confirmation email. Please do not reply to this message.
        </p>
      </div>
    `;
    
    console.log('Email content prepared. Sending email with subject:', subject);
    console.log('Email recipient:', email);
    console.log('About to call MailApp.sendEmail...');
    console.log('Email configuration:', {
      to: email,
      subject: subject,
      hasHtmlBody: !!htmlBody
    });
    
    const emailResult = MailApp.sendEmail({
      to: email,
      subject: subject,
      htmlBody: htmlBody
    });
    
    console.log('MailApp.sendEmail completed successfully!');
    console.log('Email result:', emailResult);
    console.log('Email result type:', typeof emailResult);
    console.log('Confirmation email sent successfully to:', email);
    console.log('=== sendConfirmationEmail FUNCTION COMPLETED SUCCESSFULLY ===');
    return true;
    
  } catch (error) {
    console.error('=== ERROR IN sendConfirmationEmail FUNCTION ===');
    console.error('Error sending confirmation email:', error);
    console.error('Error details:', error.toString());
    console.error('Error stack:', error.stack);
    console.error('=== END ERROR ===');
    return false;
  }
}

function sendTeamNotification(formData) {
  try {
    console.log('Attempting to send team notification to:', 'mgibbons@a4all.org');
    
    const teamEmail = 'mgibbons@a4all.org';
    const subject = 'New A4A Enrollment Request - ' + formData.childFirstName;
    
    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #a30000;">New Enrollment Request</h2>
        
        <h3>Child Information:</h3>
        <p><strong>Name:</strong> ${formData.childFirstName} ${formData.childLastName}</p>
        <p><strong>Age:</strong> ${formData.childAge}</p>
        <p><strong>Height:</strong> ${formData.childHeight}</p>
        <p><strong>Weight:</strong> ${formData.childWeight}</p>
        
        <h3>Parent Information:</h3>
        <p><strong>Name:</strong> ${formData.parentFirstName} ${formData.parentLastName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phoneNumber || 'Not provided'}</p>
        
        <h3>Referral Source:</h3>
        <p><strong>How they heard about us:</strong> ${formData.ptGroup}</p>
        
        <h3>Child's Health & Mobility:</h3>
        <p>${formData.healthConditions}</p>
        
        <h3>Child's Interests:</h3>
        <p>${formData.childInterests}</p>
        
        <h3>Permission:</h3>
        <p><strong>Permission granted:</strong> ${formData.permission}</p>
        
        ${formData.adaptiveTechnologyInterest ? `
        <h3>Additional Technology Interest:</h3>
        <p>${formData.adaptiveTechnologyInterest}</p>
        ` : ''}
        
        <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
        
        <hr style="margin: 30px 0;">
        <p style="font-size: 12px; color: #666;">
          This notification was automatically generated from the A4A enrollment form.
        </p>
      </div>
    `;
    
    console.log('Sending team notification with subject:', subject);
    
    MailApp.sendEmail({
      to: teamEmail,
      subject: subject,
      htmlBody: htmlBody
    });
    
    console.log('Team notification sent successfully to:', teamEmail);
    
  } catch (error) {
    console.error('Error sending team notification:', error);
    console.error('Error details:', error.toString());
    console.error('Error stack:', error.stack);
  }
}

// Function to set up the spreadsheet headers (run this once to initialize)
function setupSpreadsheet() {
  const spreadsheetId = '1M-907dzSlPG8Q9Foz6p2FIUHQNLuB5pZwFCQn3mVxCY';
  const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
  const sheet = spreadsheet.getActiveSheet();
  
  // Set up headers for the new form structure
  const headers = [
    'Timestamp',
    'Parent First Name',
    'Parent Last Name',
    'Child First Name',
    'Child Last Name',
    'Phone Number',
    'Email',
    'Permission',
    'Child Age',
    'How They Heard About Us',
    'Child Height',
    'Child Weight',
    'Health/Mobility Conditions',
    'Child Interests',
    'Additional Technology Interest'
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
  
  console.log('Spreadsheet setup complete with new headers!');
}

// Function to check if spreadsheet is properly set up
function checkSpreadsheetSetup() {
  try {
    const spreadsheetId = '1M-907dzSlPG8Q9Foz6p2FIUHQNLuB5pZwFCQn3mVxCY';
    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    const sheet = spreadsheet.getActiveSheet();
    
    console.log('Spreadsheet name:', spreadsheet.getName());
    console.log('Sheet name:', sheet.getName());
    console.log('Sheet URL:', spreadsheet.getUrl());
    
    // Check if headers exist (now 15 columns)
    const firstRow = sheet.getRange(1, 1, 1, 15).getValues()[0];
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

// Test function to debug the enrollment form
function testEnrollmentForm() {
  console.log('=== TESTING ENROLLMENT FORM ===');
  
  const testData = {
    parentFirstName: 'Test',
    parentLastName: 'Parent',
    childFirstName: 'Test',
    childLastName: 'Child',
    phoneNumber: '555-1234',
    email: 'testparent@example.com',
    permission: 'Yes',
    childAge: '5',
    ptGroup: 'Social Media',
    childHeight: '3 feet',
    childWeight: '40 lbs',
    healthConditions: 'None',
    childInterests: 'Cars, toys',
    adaptiveTechnologyInterest: 'None'
  };
  
  console.log('Test data being created:', JSON.stringify(testData));
  
  const mockEvent = {
    parameter: testData
  };
  
  console.log('=== CALLING doGet FUNCTION ===');
  try {
    const result = doGet(mockEvent);
    console.log('Test result:', result.getContent());
  } catch (error) {
    console.error('Error in test:', error);
    console.error('Error details:', error.toString());
  }
  console.log('=== ENROLLMENT FORM TEST COMPLETE ===');
}
