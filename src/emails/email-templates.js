export function getUserEmailTemplate(data) {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <title>Paper Submission Confirmation</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        color: #333;
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
      }
      .header {
        background-color: #2E7D32;
        color: white;
        padding: 20px;
        text-align: center;
        border-radius: 5px 5px 0 0;
      }
      .content {
        padding: 20px;
        border: 1px solid #ddd;
        border-top: none;
        border-radius: 0 0 5px 5px;
      }
      .footer {
        text-align: center;
        margin-top: 20px;
        font-size: 12px;
        color: #666;
      }
      h1 {
        color: #2E7D32;
        margin-top: 0;
      }
      .highlight {
        font-weight: bold;
        color: #2E7D32;
      }
    </style>
  </head>
  <body>
    <div class="header">
      <h1>World Forum on Climate Change and Environmental Sustainability</h1>
    </div>
    <div class="content">
      <p>Dear ${data.author},</p>
      
      <p>Thank you for submitting your paper titled <span class="highlight">"${data.paper_title}"</span> to the World Forum on Climate Change and Environmental Sustainability.</p>
      
      <p>We have received your submission and our review committee will evaluate it shortly. You will be notified about the status of your submission in the coming weeks.</p>
      
      <p>Here's a summary of your submission:</p>
      <ul>
        <li><strong>Paper Title:</strong> ${data.paper_title}</li>
        <li><strong>Paper Type:</strong> ${data.paper_type}</li>
        <li><strong>Presentation Type:</strong> ${data.presentation_type}</li>
        <li><strong>Submission Date:</strong> ${new Date().toLocaleDateString()}</li>
      </ul>
      
      <p>If you have any questions or need to make changes to your submission, please contact us at info@wfcces.com.</p>
      
      <p>Best regards,<br>
      Conference Organizing Committee<br>
      World Forum on Climate Change and Environmental Sustainability</p>
    </div>
    <div class="footer">
      <p>© 2025 World Forum on Climate Change and Environmental Sustainability. All rights reserved.</p>
    </div>
  </body>
  </html>
  `
}

export function getAdminEmailTemplate(data, fileUrl) {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <title>New Paper Submission</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        color: #333;
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
      }
      .header {
        background-color: #2E7D32;
        color: white;
        padding: 20px;
        text-align: center;
        border-radius: 5px 5px 0 0;
      }
      .content {
        padding: 20px;
        border: 1px solid #ddd;
        border-top: none;
        border-radius: 0 0 5px 5px;
      }
      .footer {
        text-align: center;
        margin-top: 20px;
        font-size: 12px;
        color: #666;
      }
      h1 {
        color: #2E7D32;
        margin-top: 0;
      }
      table {
        width: 100%;
        border-collapse: collapse;
        margin: 20px 0;
      }
      table, th, td {
        border: 1px solid #ddd;
      }
      th, td {
        padding: 10px;
        text-align: left;
      }
      th {
        background-color: #f2f2f2;
      }
      .file-link {
        color: #2E7D32;
        text-decoration: underline;
      }
    </style>
  </head>
  <body>
    <div class="header">
      <h1>New Paper Submission</h1>
    </div>
    <div class="content">
      <p>A new paper has been submitted to the World Forum on Climate Change and Environmental Sustainability.</p>
      
      <h2>Submission Details:</h2>
      <table>
        <tr>
          <th>Field</th>
          <th>Value</th>
        </tr>
        <tr>
          <td>Author</td>
          <td>${data.author}</td>
        </tr>
        <tr>
          <td>Email</td>
          <td>${data.email}</td>
        </tr>
        <tr>
          <td>Phone Number</td>
          <td>${data.phone_number}</td>
        </tr>
        <tr>
          <td>Country</td>
          <td>${data.country}</td>
        </tr>
        <tr>
          <td>Co-Author</td>
          <td>${data.co_author}</td>
        </tr>
        <tr>
          <td>Paper Title</td>
          <td>${data.paper_title}</td>
        </tr>
        <tr>
          <td>Department</td>
          <td>${data.department}</td>
        </tr>
        <tr>
          <td>Organization</td>
          <td>${data.organization}</td>
        </tr>
        <tr>
          <td>Paper Type</td>
          <td>${data.paper_type}</td>
        </tr>
        <tr>
          <td>Presentation Type</td>
          <td>${data.presentation_type}</td>
        </tr>
        <tr>
          <td>Message</td>
          <td>${data.message}</td>
        </tr>
        <tr>
          <td>How they heard about us</td>
          <td>${data.know_to_you}</td>
        </tr>
        <tr>
          <td>Submission Date</td>
          <td>${new Date().toLocaleDateString()}</td>
        </tr>
        ${
          fileUrl
            ? `
        <tr>
          <td>Uploaded File</td>
          <td><a href="${fileUrl}" class="file-link">View/Download File</a></td>
        </tr>
        `
            : ""
        }
      </table>
      
      <p>Please review this submission at your earliest convenience.</p>
    </div>
    <div class="footer">
      <p>© 2025 World Forum on Climate Change and Environmental Sustainability. All rights reserved.</p>
    </div>
  </body>
  </html>
  `
}