INSERT INTO tickets (customer_id, title, description, completed, tech, created_at, updated_at) VALUES
(1, 'Internet not working', 'Customer reports no internet connectivity since yesterday.', false, 'John Doe', NOW(), NOW()),
(1, 'Router reset', 'Requested a reset of the home router.', true, 'Alex White', NOW(), NOW()),

(2, 'Email setup', 'Needs help setting up email on new device.', true, 'Jane Smith', NOW(), NOW()),
(2, 'VPN access', 'VPN not connecting from home network.', false, 'unassigned', NOW(), NOW()),

(3, 'Printer issue', 'Printer is not printing in color.', false, 'Mike Brown', NOW(), NOW()),
(3, 'Scanner not detected', 'Scanner stopped working after update.', true, 'Tina Blue', NOW(), NOW()),

(4, 'Software installation', 'Install antivirus on customer device.', true, 'Alex White', NOW(), NOW()),
(4, 'Zoom crashing', 'Zoom app crashes when joining meetings.', false, 'Chris Green', NOW(), NOW()),

(5, 'Computer slow', 'System performance is very poor.', false, 'Chris Green', NOW(), NOW()),
(5, 'System update', 'Needs to update OS to latest version.', true, 'Tina Blue', NOW(), NOW()),

(6, 'Network setup', 'Set up secure WiFi network.', true, 'Tina Blue', NOW(), NOW()),
(6, 'Cable issues', 'Ethernet cable is not detected.', false, 'John Doe', NOW(), NOW()),

(7, 'Password reset', 'Customer forgot login credentials.', false, 'unassigned', NOW(), NOW()),
(7, 'Email recovery', 'Lost access to work email.', true, 'Jane Smith', NOW(), NOW()),

(8, 'Hardware replacement', 'Replace faulty hard drive.', true, 'John Doe', NOW(), NOW()),
(8, 'Fan noise', 'Laptop fan is making unusual noise.', false, 'Mike Brown', NOW(), NOW()),

(9, 'Data recovery', 'Try to recover deleted files.', false, 'Jane Smith', NOW(), NOW()),
(9, 'USB not recognized', 'USB devices not showing up.', true, 'Alex White', NOW(), NOW()),

(10, 'New user onboarding', 'Set up laptop and accounts for new employee.', true, 'Mike Brown', NOW(), NOW()),
(10, 'Security training', 'Customer wants cybersecurity training.', false, 'Chris Green', NOW(), NOW());
