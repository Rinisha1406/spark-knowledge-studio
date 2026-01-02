<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');

// Handle preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Recipient email
$to = 'rinisharini1406@gmail.com';

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
// Send email
$mail_sent = @mail($to, $subject, $email_body, $headers);

// Fallback for localhost debugging (since SMTP might not be configured)
if (!$mail_sent && ($_SERVER['SERVER_NAME'] === 'localhost' || $_SERVER['SERVER_ADDR'] === '127.0.0.1' || $_SERVER['SERVER_ADDR'] === '::1')) {
    $log_file = 'email_log.txt';
    $log_entry = "--- New Submission [" . date('Y-m-d H:i:s') . "] ---\n";
    $log_entry .= "To: $to\nSubject: $subject\nHeaders: $headers\n\nBody:\n$email_body\n\n";
    
    if (file_put_contents($log_file, $log_entry, FILE_APPEND)) {
        $mail_sent = true; // Simulate success
    }
}

if ($mail_sent) {
    echo json_encode(['success' => true, 'message' => 'Thank you for your message. We will get back to you soon!']);
} else {
    $error = error_get_last();
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to send message. Please try again later.', 'debug_error' => $error ? $error['message'] : 'Unknown error']);
}
?>
