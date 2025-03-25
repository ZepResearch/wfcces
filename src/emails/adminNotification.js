export const adminNotificationTemplate = (data) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Paper Submission - World Forum on Climate Change and Environmental Sustainability</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');
        
        body {
            font-family: 'Poppins', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 0;
            background-color: #f0f8ff;
        }
        .container {
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
            margin: 20px;
        }
        .header {
            background-color: #1e90ff;
            padding: 30px 20px;
            text-align: center;
            color: white;
        }
        .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: 600;
        }
        .header p {
            margin: 10px 0 0;
            font-size: 16px;
            font-weight: 300;
        }
        .submission-details {
            padding: 30px;
        }
        .field {
            margin-bottom: 20px;
        }
        .field-label {
            font-weight: 600;
            color: #1e90ff;
            display: block;
            margin-bottom: 5px;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        .field-value {
            font-size: 16px;
            color: #333;
            background-color: #f0f8ff;
            padding: 10px;
            border-radius: 4px;
            border-left: 3px solid #1e90ff;
        }
        .pdf-link {
            color: #1e90ff;
            text-decoration: none;
            font-weight: 600;
        }
        .pdf-link:hover {
            text-decoration: underline;
        }
        .footer {
            background-color: #1e90ff;
            color: #fff;
            text-align: center;
            padding: 20px;
            font-size: 14px;
        }
        .icon {
            width: 20px;
            height: 20px;
            vertical-align: middle;
            margin-right: 5px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>New Paper Submission</h1>
            <p>World Forum on Climate Change and Environmental Sustainability</p>
        </div>
        <div class="submission-details">
            <div class="field">
                <span class="field-label">Author</span>
                <div class="field-value">${data.authorName}</div>
            </div>
            <div class="field">
                <span class="field-label">Email</span>
                <div class="field-value">${data.email}</div>
            </div>
            <div class="field">
                <span class="field-label">Phone</span>
                <div class="field-value">${data.number}</div>
            </div>
            <div class="field">
                <span class="field-label">Country</span>
                <div class="field-value">${data.country}</div>
            </div>
            <div class="field">
                <span class="field-label">Paper Title</span>
                <div class="field-value">${data.paperTitle}</div>
            </div>
            <div class="field">
                <span class="field-label">Department</span>
                <div class="field-value">${data.department}</div>
            </div>
            <div class="field">
                <span class="field-label">University/Organization</span>
                <div class="field-value">${data.universityOrganization}</div>
            </div>
            <div class="field">
                <span class="field-label">Paper Type</span>
                <div class="field-value">${data.paperType}</div>
            </div>
            <div class="field">
                <span class="field-label">Presentation Type</span>
                <div class="field-value">${data.presentationType}</div>
            </div>
            <div class="field">
                <span class="field-label">PDF URL</span>
                <div class="field-value">
                    <a href="${data.pdfUrl}" class="pdf-link">${data.pdfUrl}</a>
                </div>
            </div>
            <div class="field">
                <span class="field-label">Message</span>
                <div class="field-value">${data.message}</div>
            </div>
        </div>
    </div>
    <div class="footer">
        <p>New paper submission received for the World Forum on Climate Change and Environmental Sustainability!</p>
    </div>
</body>
</html>
`;