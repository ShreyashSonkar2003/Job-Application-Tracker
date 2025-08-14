CREATE TABLE job_applications (
    id INT PRIMARY KEY AUTO_INCREMENT,
    company VARCHAR(255),
    role VARCHAR(255),
    status VARCHAR(100)
);

INSERT INTO job_applications (company, role, status) VALUES
('TCS', 'Software Engineer', 'Applied'),
('Infosys', 'Front End Developer', 'Interview');
