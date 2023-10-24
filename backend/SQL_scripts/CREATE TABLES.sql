CREATE DATABASE IF NOT EXISTS WORKITWISE;
USE WORKITWISE;
SHOW tables;

CREATE TABLE IF NOT EXISTS USERS(
	USER_ID  INT PRIMARY KEY NOT NULL auto_increment,
    USER_NAME VARCHAR(100) NOT NULL,
    USER_EMAIL VARCHAR(100) NOT NULL UNIQUE,
    USER_PASSWORD VARCHAR(100) NOT NULL
);

select * FROM USERS;
 
CREATE TABLE IF NOT EXISTS CATEGORIES(
	CATEGORY_ID INT PRIMARY KEY NOT NULL auto_increment,
    CATEGORY VARCHAR(100) NOT NULL UNIQUE,
    IMAGE_URL VARCHAR(100) NOT NULL
);

SELECT * FROM CATEGORIES;

CREATE TABLE IF NOT EXISTS EXERCISE_INFORMATION(
	EXERCISE_ID INT PRIMARY KEY NOT NULL auto_increment,
    EXERCISE_NAME VARCHAR(100) UNIQUE NOT NULL,
    CATEGORY_ID INT NOT NULL,
    EQUIPMENT VARCHAR(100),
    ANIMATED_IMAGE_URL VARCHAR(100),
    TARGET_MUSCLE VARCHAR(100),
    SECONDARY_MUSCLES JSON,
    INSTRUCTIONS JSON,
    UNIT VARCHAR(100),
    FOREIGN KEY (CATEGORY_ID) REFERENCES CATEGORIES(CATEGORY_ID),
    FOREIGN KEY (UNIT) REFERENCES UNITS(UNIT)
);

SELECT * FROM 
EXERCISE_INFORMATION limit 2000;

CREATE TABLE IF NOT EXISTS USER_DIARIES(
	DIARY_ID INT PRIMARY KEY NOT NULL auto_increment,
    USER_ID INT NOT NULL,
    DIARY_NAME VARCHAR(100) NOT NULL,
    DIARY_DESCRIPTION VARCHAR(200),
    FOREIGN KEY (USER_ID) REFERENCES USERS(USER_ID)
);

-- SELECT * FROM USER_DIARIES;

CREATE TABLE IF NOT EXISTS EXERCISE_HISTORY(
	HISTORY_ID INT PRIMARY KEY NOT NULL auto_increment,
    DIARY_ID INT NOT NULL,
    EXERCISE_DATE DATETIME NOT NULL,
    EXERCISE_ID INT NOT NULL,
    REPETITIONS VARCHAR(100),
    FOREIGN KEY (DIARY_ID) REFERENCES USER_DIARIES(DIARY_ID),
    FOREIGN KEY (EXERCISE_ID) REFERENCES EXERCISE_INFORMATION(EXERCISE_ID)
);

-- SELECT * FROM EXERCISE_HISTORY;

commit;

CREATE TABLE IF NOT EXISTS UNITS(
	UNIT_ID INT PRIMARY KEY NOT NULL auto_increment,
	UNIT VARCHAR(100) NOT NULL UNIQUE
);

SELECT * FROM UNITS;

-- SET SQL_SAFE_UPDATES = 0;