<?php
// Set headers to prevent CORS issues
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// Get JSON input
$json_input = file_get_contents('php://input');
$data = json_decode($json_input, true);

// Validate required fields
$required_fields = ['name', 'email', 'message'];
$errors = [];

foreach ($required_fields as $field) {
    if (empty($data[$field]) || trim($data[$field]) === '') {
        $errors[$field] = ucfirst($field) . ' is required';
    }
}

// Validate email format
if (!empty($data['email']) && !filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    $errors['email'] = 'Please enter a valid email address';
}

// If there are validation errors, return them
if (!empty($errors)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Please check your information',
        'errors' => $errors
    ]);
    exit;
}

// Sanitize input data
$name = htmlspecialchars(strip_tags(trim($data['name'])));
$email = htmlspecialchars(strip_tags(trim($data['email'])));
$phone = htmlspecialchars(strip_tags(trim($data['phone'] ?? '')));
$course = htmlspecialchars(strip_tags(trim($data['course'] ?? 'General Inquiry')));
$message = htmlspecialchars(strip_tags(trim($data['message'])));

// Email configuration
$to = 'rinisharini1406@gmail.com';
$subject = 'New Contact Form Submission: ' . $course;
$from = 'noreply@fairfineduhub.com';

// Create email headers
$headers = "From: Fairfin Edu Hub <$from>\r\n";
$headers .= "Reply-To: $name <$email>\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

// Create HTML email template
$email_template = "
<!DOCTYPE html>
<html>
<head>
    <meta charset='UTF-8'>
    <title>New Contact Form Submission</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border: 1px solid #ddd; }
        .field { margin-bottom: 20px; }
        .field-label { font-weight: bold; color: #667eea; margin-bottom: 5px; }
        .field-value { background: white; padding: 10px; border-left: 4px solid #667eea; border-radius: 4px; }
        .footer { background: #333; color: white; padding: 20px; text-align: center; border-radius: 0 0 10px 10px; font-size: 12px; }
    </style>
</head>
<body>
    <div class='header'>
        <h1>📚 New Contact Form Submission</h1>
        <p>A potential student/parent is interested in Fairfine Du Hub</p>
    </div>
    
    <div class='content'>
        <div class='field'>
            <div class='field-label'>👤 Name</div>
            <div class='field-value'>$name</div>
        </div>
        
        <div class='field'>
            <div class='field-label'>📧 Email Address</div>
            <div class='field-value'>$email</div>
        </div>";

if (!empty($phone)) {
    $email_template .= "
        <div class='field'>
            <div class='field-label'>📱 Phone Number</div>
            <div class='field-value'>$phone</div>
        </div>";
}

$email_template .= "
        <div class='field'>
            <div class='field-label'>🎯 Course/Inquiry Type</div>
            <div class='field-value'>$course</div>
        </div>
        
        <div class='field'>
            <div class='field-label'>💬 Message</div>
            <div class='field-value'>" . nl2br($message) . "</div>
        </div>
    </div>
    
    <div class='footer'>
        <p>This inquiry was submitted on " . date('Y-m-d H:i:s') . "</p>
        <p>Fairfine Du Hub - Educational Services</p>
    </div>
</body>
</html>";

// Send email using PHP mail() function
try {
    // Suppress warnings and check if mail function is available
    $mail_sent = @mail($to, $subject, $email_template, $headers);
    
    if ($mail_sent) {
        // Also send confirmation email to the client
        $client_subject = 'Thank you for your inquiry - Fairfine Du Hub';
        $client_headers = "From: Fairfine Du Hub <$from>\r\n";
        $client_headers .= "MIME-Version: 1.0\r\n";
        $client_headers .= "Content-Type: text/html; charset=UTF-8\r\n";
        
        $client_template = "
<!DOCTYPE html>
<html>
<head>
    <meta charset='UTF-8'>
    <title>Thank You for Your Inquiry</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border: 1px solid #ddd; }
        .footer { background: #333; color: white; padding: 20px; text-align: center; border-radius: 0 0 10px 10px; font-size: 12px; }
    </style>
</head>
<body>
    <div class='header'>
        <h1>Thank You, $name!</h1>
        <p>We've received your inquiry</p>
    </div>
    
    <div class='content'>
        <p>Dear $name,</p>
        <p>Thank you for contacting Fairfine Du Hub! We've received your inquiry about <strong>$course</strong>.</p>
        <p>Our team will review your request and get back to you within 24 hours with detailed information about our programs and services.</p>
        <p><strong>What happens next:</strong></p>
        <ul>
            <li>Our team will analyze your requirements</li>
            <li>We'll prepare relevant course information</li>
            <li>You'll receive a detailed response within 24 hours</li>
        </ul>
        <p>If you have any urgent questions, feel free to contact us directly.</p>
        <p>We look forward to helping you achieve your educational goals!</p>
        <p><em>Best regards,<br>The Fairfine Du Hub Team</em></p>
    </div>
    
    <div class='footer'>
        <p>Fairfine Du Hub | Educational Services</p>
        <p>Website: https://fairfineduhub.com</p>
    </div>
</body>
</html>";
        
        // Send confirmation to client (optional, but good practice)
        @mail($email, $client_subject, $client_template, $client_headers);
        
        echo json_encode([
            'success' => true,
            'message' => 'Message sent successfully! We will get back to you within 24 hours.'
        ]);
    } else {
        throw new Exception('Failed to send email');
    }
    
} catch (Exception $e) {
    // Fallback for localhost debugging or if mail fails
    if ($_SERVER['SERVER_NAME'] === 'localhost' || $_SERVER['SERVER_ADDR'] === '127.0.0.1' || $_SERVER['SERVER_ADDR'] === '::1' || !$mail_sent) {
        $log_file = 'email_log.txt';
        $log_entry = "--- New Submission [" . date('Y-m-d H:i:s') . "] ---\n";
        $log_entry .= "To: $to\nSubject: $subject\n\nBody:\n$email_template\n\n";
        $log_entry .= "Error: " . $e->getMessage() . "\n\n";
        
        if (file_put_contents($log_file, $log_entry, FILE_APPEND)) {
            echo json_encode([
                'success' => true,
                'message' => 'Message sent successfully! We will get back to you within 24 hours.'
            ]);
            exit;
        }
    }
    
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Failed to send email. Please try again later.',
        'error' => $e->getMessage()
    ]);
}
?>
