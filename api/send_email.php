<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Recipient email
$to = 'fairfineduhubacademy@outlook.com';

// Get form data
$data = json_decode(file_get_contents('php://input'), true);

// Validate input
if (empty($data['name']) || empty($data['email']) || empty($data['message'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please fill in all required fields.']);
    exit;
}

// Sanitize input
$name = filter_var($data['name'], FILTER_SANITIZE_STRING);
$email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
$phone = isset($data['phone']) ? filter_var($data['phone'], FILTER_SANITIZE_STRING) : '';
$course = isset($data['course']) ? filter_var($data['course'], FILTER_SANITIZE_STRING) : 'General Inquiry';
$message = filter_var($data['message'], FILTER_SANITIZE_STRING);

// Email subject
$subject = "New Contact Form Submission: " . $course;

// Email headers
$headers = "From: " . $name . " <" . $email . ">\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

// Email body
$email_body = "
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #f8f9fa; padding: 15px; border-radius: 5px; }
            .content { margin: 20px 0; }
            .footer { margin-top: 30px; font-size: 0.9em; color: #6c757d; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h2>New Contact Form Submission</h2>
            </div>
            <div class='content'>
                <p><strong>Name:</strong> " . $name . "</p>" .
                "<p><strong>Email:</strong> " . $email . "</p>" .
                ($phone ? "<p><strong>Phone:</strong> " . $phone . "</p>" : "") .
                "<p><strong>Course/Inquiry Type:</strong> " . $course . "</p>" .
                "<p><strong>Message:</strong><br>" . nl2br($message) . "</p>" .
            "</div>
            <div class='footer'>
                <p>This email was sent from the contact form on your website.</p>
            </div>
        </div>
    </body>
    </html>";

// Send email
if (mail($to, $subject, $email_body, $headers)) {
    echo json_encode(['success' => true, 'message' => 'Thank you for your message. We will get back to you soon!']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to send message. Please try again later.']);
}
?>
