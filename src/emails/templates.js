export const userConfirmationTemplate = (data) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Seat Reservation Confirmation</title>
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
            background: linear-gradient(135deg, #10b981 0%, #1e90ff 100%);
            color: #ffffff;
            padding: 40px 30px;
            text-align: center;
            position: relative;
            overflow: hidden;
        }
        .header::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%);
            transform: rotate(45deg);
        }
        .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: 700;
            position: relative;
            z-index: 1;
        }
        .header p {
            margin: 10px 0 0;
            font-size: 16px;
            opacity: 0.9;
            position: relative;
            z-index: 1;
        }
        .content {
            padding: 40px 30px;
        }
        .greeting {
            font-size: 20px;
            font-weight: 500;
            margin-bottom: 20px;
            color: #1e90ff;
        }
        .success-badge {
            display: inline-block;
            background-color: #10b981;
            color: #ffffff;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 14px;
            font-weight: 500;
            margin-bottom: 30px;
        }
        .registration-details {
            background: linear-gradient(to right, #f0f8ff, #e6f7ff);
            border-left: 4px solid #1e90ff;
            padding: 25px;
            margin: 30px 0;
            border-radius: 0 8px 8px 0;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }
        .registration-details h2 {
            margin: 0 0 20px;
            font-size: 20px;
            color: #1e40af;
        }
        .registration-details ul {
            list-style-type: none;
            padding: 0;
            margin: 0;
        }
        .registration-details li {
            margin-bottom: 15px;
            display: flex;
            align-items: center;
        }
        .registration-details .icon {
            width: 24px;
            height: 24px;
            margin-right: 12px;
            fill: #1e90ff;
        }
        .registration-details strong {
            font-weight: 500;
            color: #374151;
            min-width: 120px;
        }
        .highlight-box {
            background-color: #f0f8ff;
            border: 1px solid #bfdbfe;
            border-radius: 8px;
            padding: 20px;
            margin: 30px 0;
            text-align: center;
        }
        .highlight-box h3 {
            color: #1e40af;
            margin: 0 0 10px;
            font-size: 18px;
        }
        .footer {
            background-color: #f0f8ff;
            color: #666;
            text-align: center;
            padding: 30px;
            font-size: 14px;
            border-top: 1px solid #b0e0e6;
        }
        .footer p {
            margin: 5px 0;
        }
        .social-links {
            margin-top: 20px;
        }
        .social-links a {
            color: #1e90ff;
            text-decoration: none;
            margin: 0 10px;
            font-weight: 500;
        }
        @media only screen and (max-width: 600px) {
            .container {
                margin: 0;
                border-radius: 0;
            }
            .header h1 {
                font-size: 24px;
            }
            .content {
                padding: 30px 20px;
            }
            .registration-details {
                padding: 20px;
            }
            .registration-details li {
                flex-direction: column;
                align-items: flex-start;
            }
            .registration-details strong {
                margin-bottom: 5px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Reservation Confirmed!</h1>
            <p>World Forum on Climate Change and Environmental Sustainability</p>
        </div>
        <div class="content">
            <p class="greeting">Dear ${data.name},</p>
            <div class="success-badge">✓ Seat Successfully Reserved</div>
            
            <p>We're thrilled to confirm your seat reservation for the World Forum on Climate Change and Environmental Sustainability. Your participation will contribute to meaningful discussions on our planet's future.</p>
            
            <div class="registration-details">
                <h2>Your Registration Details</h2>
                <ul>
                    <li>
                        <svg class="icon" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                        <strong>Name:</strong> ${data.name}
                    </li>
                    <li>
                        <svg class="icon" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                        <strong>Email:</strong> ${data.email}
                    </li>
                    <li>
                        <svg class="icon" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                        <strong>Phone:</strong> ${data.phone}
                    </li>
                    <li>
                        <svg class="icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                        <strong>Country:</strong> ${data.country}
                    </li>
                    <li>
                        <svg class="icon" viewBox="0 0 24 24"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
                        <strong>Organization:</strong> ${data.organization}
                    </li>
                    <li>
                        <svg class="icon" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                        <strong>Registration Date:</strong> ${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                    </li>
                </ul>
            </div>
            
            <div class="highlight-box">
                <h3>What's Next?</h3>
                <p>We'll send you detailed event information, including the schedule and venue specifics, as we approach the conference date.</p>
            </div>
            
            <p>If you have any questions, please don't hesitate to reach out to our team.</p>
            
            <p>We look forward to your valuable contributions at the forum!</p>
            
            <p>Best regards,<br>
            <strong>The WFCCES Team</strong></p>
        </div>
        <div class="footer">
            <p>© ${new Date().getFullYear()} World Forum on Climate Change and Environmental Sustainability</p>
            <p>This is an automated confirmation. Please do not reply to this email.</p>
            <div class="social-links">
                 <a href="https://www.zepresearch.com/">Website</a> |
                <a href="https://www.linkedin.com/company/zep-research/posts/?feedView=all">LinkedIn</a> |
                <a href="https://x.com/Zepresearch">Twitter</a>
            </div>
        </div>
    </div>
</body>
</html>
`;

export const adminNotificationTemplate = (data) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Conference Registration</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
        
        body {
            font-family: 'Roboto', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f5f5f5;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .header {
            background-color: #1e40af;
            color: #ffffff;
            padding: 25px;
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
        .alert-badge {
            display: inline-block;
            background-color: #e11d48;
            color: #ffffff;
            padding: 6px 12px;
            border-radius: 15px;
            font-size: 12px;
            font-weight: 500;
            margin-bottom: 20px;
            text-transform: uppercase;
        }
        .details-table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        .details-table th,
        .details-table td {
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #e5e7eb;
        }
        .details-table th {
            background-color: #f3f4f6;
            font-weight: 500;
            color: #374151;
            width: 30%;
        }
        .details-table td {
            color: #1f2937;
        }
        .footer {
            background-color: #f8fafc;
            color: #64748b;
            text-align: center;
            padding: 20px;
            font-size: 14px;
            border-top: 1px solid #e2e8f0;
        }
        @media only screen and (max-width: 600px) {
            .container {
                margin: 0;
                border-radius: 0;
            }
            .content {
                padding: 20px;
            }
            .details-table th,
            .details-table td {
                padding: 10px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>New Conference Registration</h1>
        </div>
        <div class="content">
            <div class="alert-badge">New Registration</div>
            
            <p>A new participant has registered for the World Forum on Climate Change and Environmental Sustainability:</p>
            
            <table class="details-table">
                <tr>
                    <th>Name</th>
                    <td>${data.name}</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>${data.email}</td>
                </tr>
                <tr>
                    <th>Phone</th>
                    <td>${data.phone}</td>
                </tr>
                <tr>
                    <th>Country</th>
                    <td>${data.country}</td>
                </tr>
                <tr>
                    <th>Organization</th>
                    <td>${data.organization}</td>
                </tr>
                <tr>
                    <th>Registration Date</th>
                    <td>${new Date().toLocaleString()}</td>
                </tr>
            </table>
            
            <p>Please follow up as necessary.</p>
        </div>
        <div class="footer">
            <p>WFCCES Admin Notification System</p>
        </div>
    </div>
</body>
</html>
`;