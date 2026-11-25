-- Database Setup
CREATE DATABASE IF NOT EXISTS nbs_lms CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE nbs_lms;

-- Branches Table
CREATE TABLE IF NOT EXISTS branches (
  code VARCHAR(32) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  region VARCHAR(100) NULL,
  is_active TINYINT(1) NOT NULL DEFAULT 1,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO branches (code, name, region, is_active) VALUES
  ('2438', 'NBS SM North Edsa', 'NCR - North', 1),
  ('2445', 'NBS Robinsons Ortigas', 'NCR - East', 1),
  ('2447', 'NBS Shangrila', 'NCR - Central', 1),
  ('2448', 'NBS SM Megamall', 'NCR - Central', 1),
  ('2211', 'NBS SM Clark', 'Region III - Central Luzon', 1),
  ('2213', 'NBS SM Pampanga', 'Region III - Central Luzon', 1),
  ('2206', 'NBS SM Baguio', 'CAR - Cordillera', 1),
  ('2201', 'NBS Abanao Baguio', 'CAR - Cordillera', 1),
  ('2208', 'NBS SM Hypermarket Laoag', 'Region I - Ilocos', 1),
  ('2360', 'NBS Robinsons Ilocos Norte', 'Region I - Ilocos', 1),
  ('2204', 'NBS Vigan', 'Region I - Ilocos', 1),
  ('HQ01', 'NBS Head Office (Quad Alpha)', 'NCR - Mandaluyong', 1)
ON DUPLICATE KEY UPDATE name = VALUES(name), region = VALUES(region), is_active = VALUES(is_active);

-- Users Table
CREATE TABLE IF NOT EXISTS users (
  id VARCHAR(64) PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  contact_no VARCHAR(32) NOT NULL,
  branch_code VARCHAR(32) NOT NULL,
  staff_track ENUM('branch_cashier', 'hq_office') NOT NULL DEFAULT 'branch_cashier',
  password_hash VARCHAR(255) NOT NULL,
  role ENUM('trainee', 'branch_admin', 'super_admin') NOT NULL DEFAULT 'trainee',
  status ENUM('pending', 'active', 'rejected', 'deactivated') NOT NULL DEFAULT 'pending',
  employee_id VARCHAR(64) NULL,
  access_expires_at DATETIME NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_lms_users_branch (branch_code),
  INDEX idx_lms_users_status (status),
  CONSTRAINT fk_lms_users_branch FOREIGN KEY (branch_code) REFERENCES branches(code) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Courses Table
CREATE TABLE IF NOT EXISTS courses (
  id VARCHAR(64) PRIMARY KEY,
  code VARCHAR(32) NOT NULL UNIQUE,
  title VARCHAR(255) NOT NULL,
  category VARCHAR(100) NOT NULL,
  passing_score INT NOT NULL DEFAULT 80,
  total_chapters INT NOT NULL DEFAULT 8,
  is_published TINYINT(1) NOT NULL DEFAULT 1,
  sort_order INT NOT NULL DEFAULT 1,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO courses (id, code, title, category, passing_score, total_chapters, is_published, sort_order) VALUES
  ('cybersecurity-awareness', 'NBS-SEC-101', 'Cybersecurity Awareness Training', 'Information Security & PCI DSS', 80, 8, 1, 1),
  ('data-privacy-npc', 'NBS-DPA-102', 'Data Privacy Act & Customer Records', 'Compliance & Legal', 80, 6, 0, 2),
  ('retail-loss-prevention', 'NBS-OPS-103', 'Store Safety & Retail Loss Prevention', 'Store Operations', 80, 5, 0, 3)
ON DUPLICATE KEY UPDATE title = VALUES(title), is_published = VALUES(is_published);

-- Course Progress Table
CREATE TABLE IF NOT EXISTS user_course_progress (
  user_id VARCHAR(64) NOT NULL,
  course_id VARCHAR(64) NOT NULL,
  completed_chapters LONGTEXT NOT NULL,
  best_quiz_score INT NULL,
  quiz_passed TINYINT(1) NOT NULL DEFAULT 0,
  certificate_id VARCHAR(64) NULL UNIQUE,
  certified_at DATETIME NULL,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (user_id, course_id),
  CONSTRAINT fk_ucp_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  CONSTRAINT fk_ucp_course FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Quiz Attempts Table
CREATE TABLE IF NOT EXISTS quiz_attempts (
  id VARCHAR(64) PRIMARY KEY,
  user_id VARCHAR(64) NOT NULL,
  course_id VARCHAR(64) NOT NULL,
  score INT NOT NULL,
  passed TINYINT(1) NOT NULL DEFAULT 0,
  time_spent_seconds INT DEFAULT 0,
  station_results LONGTEXT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_qa_user_course (user_id, course_id),
  CONSTRAINT fk_qa_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  CONSTRAINT fk_qa_course FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
