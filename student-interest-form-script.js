// Google Apps Script for A4A Student Interest Form
// This script handles student interest form submissions and saves data to Google Sheets

function doGet(e) {
  try {
    // Get the form data from URL parameters
    const formData = e.parameter;
    
    // Log the received data for debugging
    console.log('Received student interest form data:', JSON.stringify(formData));
    console.log('Form data type:', typeof formData);
    console.log('Form data keys:', Object.keys(formData));
    console.log('Email directly from e.parameter:', e.parameter.email);
    console.log('Email from formData:', formData.email);
    
    // Validate that we have the required data
    if (!formData.firstName || !formData.email || !formData.university) {
      throw new Error('Missing required fields: firstName, email, and university');
    }
    
    // Get the active spreadsheet (Student Interest Form Google Sheet)
    const spreadsheetId = '1S_1L6E04ggF5wjpXBok6cTs3tjzBLw1zgugFG89bB0w';
    console.log('Attempting to open student interest spreadsheet with ID:', spreadsheetId);
    
    try {
      const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
      console.log('Successfully opened spreadsheet:', spreadsheet.getName());
      
      const sheet = spreadsheet.getActiveSheet();
      console.log('Active sheet name:', sheet.getName());
      
      // Prepare the data row for student interest form
      const timestamp = new Date().toISOString();
      
      // Handle interests field - it might come as a string or array
      let interestsString = '';
      if (formData.interests) {
        if (Array.isArray(formData.interests)) {
          interestsString = formData.interests.join(', ');
        } else {
          // If it's already a string (comma-separated), use it as is
          interestsString = formData.interests;
        }
      }
      
      const rowData = [
        timestamp,
        formData.firstName || '',
        formData.lastName || '',
        formData.email || '',
        formData.phone || '',
        formData.university || '',
        formData.major || '',
        formData.graduationYear || '',
        interestsString,
        formData.experience || '',
        formData.availability || '',
        formData.message || ''
      ];
      
      console.log('Prepared student interest row data:', JSON.stringify(rowData));
      
      // Append the data to the sheet
      const lastRow = sheet.getLastRow();
      const targetRow = lastRow + 1;
      
      console.log('Last row in sheet:', lastRow);
      console.log('Targeting row:', targetRow);
      
      // Set values in the target row
      sheet.getRange(targetRow, 1, 1, rowData.length).setValues([rowData]);
      console.log('Successfully added student interest data to row', targetRow);
      
    } catch (spreadsheetError) {
      console.error('Error accessing spreadsheet:', spreadsheetError);
      throw new Error('Failed to access Google Sheet: ' + spreadsheetError.message);
    }
    
    // Send confirmation email to the student
    console.log('Email from formData:', formData.email);
    console.log('FirstName from formData:', formData.firstName);
    console.log('Email validation check:', formData.email && formData.email.trim() !== '');
    console.log('All formData keys:', Object.keys(formData));
    console.log('All formData values:', Object.values(formData));
    
    if (formData.email && formData.email.trim() !== '') {
      console.log('About to call sendStudentConfirmationEmail with:', formData.email, formData.firstName);
      const confirmationResult = sendStudentConfirmationEmail(formData.email, formData.firstName);
      console.log('Student confirmation email function completed');
    } else {
      console.error('No valid email address provided in form data');
    }
    
    // Send notification email to A4A team
    sendTeamNotification(formData);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'message': 'Student interest form submitted successfully' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error processing student interest form submission:', error);
    
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'message': 'An error occurred while processing your submission' }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function sendStudentConfirmationEmail(email, firstName) {
  try {
    console.log('=== STARTING sendStudentConfirmationEmail FUNCTION ===');
    console.log('Parameters received - email:', email, 'firstName:', firstName);
    
    // Validate email parameter
    if (!email || email.trim() === '') {
      console.error('Invalid email address provided:', email);
      return false;
    }
    
    console.log('Email validation passed. Attempting to send student confirmation email to:', email);
    
    const subject = 'A4A Student Interest Form Received - Thank You!';
    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #a30000;">Thank You for Your Interest in A4A!</h2>
        
        <p>Dear ${firstName},</p>
        
        <p>We've received your student interest form and are excited about your interest in joining Accessible 4 All!</p>
        
        <h3>What happens next?</h3>
        <ul>
          <li>Our team will review your information within 48 hours</li>
          <li>We'll contact you to discuss your interests and how you can get involved</li>
          <li>We'll provide information about upcoming training sessions and project opportunities</li>
        </ul>
        
        <h3>About Accessible 4 All</h3>
        <p>We're a student-run organization dedicated to creating custom adaptive equipment for children with disabilities. As a student volunteer, you'll gain hands-on engineering experience while making a real difference in children's lives.</p>
        
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
    console.log('Student confirmation email sent successfully to:', email);
    console.log('=== sendStudentConfirmationEmail FUNCTION COMPLETED SUCCESSFULLY ===');
    return true;
    
  } catch (error) {
    console.error('=== ERROR IN sendStudentConfirmationEmail FUNCTION ===');
    console.error('Error sending student confirmation email:', error);
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
    const subject = 'New Student Interest Form - ' + formData.firstName + ' ' + formData.lastName;
    
    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #a30000;">New Student Interest Form Submission</h2>
        
        <h3>Student Information:</h3>
        <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
        
        <h3>Academic Information:</h3>
        <p><strong>University:</strong> ${formData.university}</p>
        <p><strong>Major:</strong> ${formData.major || 'Not specified'}</p>
        <p><strong>Expected Graduation:</strong> ${formData.graduationYear || 'Not specified'}</p>
        
        <h3>Areas of Interest:</h3>
        <p>${formData.interests ? (Array.isArray(formData.interests) ? formData.interests.join(', ') : formData.interests) : 'None selected'}</p>
        
        <h3>Experience:</h3>
        <p>${formData.experience || 'No experience provided'}</p>
        
        <h3>Availability:</h3>
        <p>${formData.availability || 'Not specified'}</p>
        
        <h3>Why Interested in A4A:</h3>
        <p>${formData.message || 'No message provided'}</p>
        
        <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
        
        <hr style="margin: 30px 0;">
        <p style="font-size: 12px; color: #666;">
          This notification was automatically generated from the A4A student interest form.
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

// Function to set up the student interest spreadsheet headers (run this once to initialize)
function setupStudentInterestSpreadsheet() {
  const spreadsheetId = '1S_1L6E04ggF5wjpXBok6cTs3tjzBLw1zgugFG89bB0w';
  const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
  const sheet = spreadsheet.getActiveSheet();
  
  // Set up headers for the student interest form
  const headers = [
    'Timestamp',
    'First Name',
    'Last Name',
    'Email',
    'Phone',
    'University',
    'Major',
    'Graduation Year',
    'Areas of Interest',
    'Experience',
    'Availability',
    'Why Interested in A4A'
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
  
  console.log('Student interest spreadsheet setup complete with headers!');
}

// Test function to debug the student interest form
function testStudentInterestForm() {
  console.log('=== TESTING STUDENT INTEREST FORM ===');
  
  const testData = {
    firstName: 'Test',
    lastName: 'Student',
    email: 'teststudent@example.com',
    phone: '555-1234',
    university: 'Test University',
    major: 'Engineering',
    graduationYear: '2025',
    interests: 'team-member,project-lead',
    experience: 'Some engineering experience',
    availability: '3-5 hours/week',
    message: 'I want to help children with disabilities'
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
  console.log('=== STUDENT INTEREST FORM TEST COMPLETE ===');
}

// Simple test function to verify script is accessible
function testScriptAccess() {
  console.log('=== TESTING SCRIPT ACCESS ===');
  console.log('Script is accessible and running!');
  return 'Script is working!';
}


