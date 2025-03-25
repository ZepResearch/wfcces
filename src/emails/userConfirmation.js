export const userConfirmationTemplate = (data) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Paper Submission Confirmation</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
        
        body {
            font-family: 'Roboto', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f0f8ff;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
            background-color: #1e90ff;
            color: #ffffff;
            padding: 30px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
            font-weight: 700;
        }
        .content {
            padding: 30px;
        }
        .greeting {
            font-size: 18px;
            font-weight: 500;
            margin-bottom: 20px;
        }
        .submission-details {
            background-color: #f0f8ff;
            border-left: 4px solid #1e90ff;
            padding: 20px;
            margin-top: 20px;
            margin-bottom: 20px;
        }
        .submission-details h2 {
            margin-top: 0;
            font-size: 18px;
            color: #1e90ff;
        }
        .submission-details ul {
            list-style-type: none;
            padding: 0;
            margin: 0;
        }
        .submission-details li {
            margin-bottom: 10px;
        }
        .submission-details strong {
            font-weight: 500;
            color: #555;
        }
        .footer {
            background-color: #f0f8ff;
            color: #666;
            text-align: center;
            padding: 20px;
            font-size: 14px;
            border-top: 1px solid #b0e0e6;
        }
        @media only screen and (max-width: 600px) {
            .container {
                margin: 0;
                border-radius: 0;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>World Forum on Climate Change and Environmental Sustainability</h1>
        </div>
        <div class="content">
            <p class="greeting">Dear ${data.authorName},</p>
            <p>Thank you for submitting your research paper to the World Forum on Climate Change and Environmental Sustainability (WFCCES). We are pleased to confirm that we have received your submission titled:</p>
            <p style="font-weight: 500; font-style: italic; color: #1e90ff;">"${data.paperTitle}"</p>
            
            <div class="submission-details">
                <h2>Submission Details</h2>
                <ul>
                    <li><strong>Paper Type:</strong> ${data.paperType}</li>
                    <li><strong>Presentation Type:</strong> ${data.presentationType}</li>
                    <li><strong>Submission Date:</strong> ${new Date().toLocaleDateString()}</li>
                </ul>
            </div>
            
            <p>Our scientific review committee will carefully evaluate your submission and provide feedback within 5-7 business days. We appreciate your contribution to addressing critical environmental challenges.</p>
            
            <p>Best regards,<br>WFCCES Conference Organizing Committee</p>
        </div>
        <div class="footer">
            <p>This is an automated confirmation. Please do not reply to this email.</p>
        </div>
    </div>
</body>
</html>
`;