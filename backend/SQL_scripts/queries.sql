USE WORKITWISE;

DROP TABLE USERS;

CREATE TABLE USERS(
	USER_NAME VARCHAR(30) NOT NULL,
    USER_EMAIL VARCHAR(40) PRIMARY KEY NOT NULL,
    USER_PASSWORD VARCHAR(30) NOT NULL
);

SELECT * FROM USERS;

INSERT INTO USERS VALUES(
	"Shashwat Singh",
    "vnsshashwat@gmail.com",
    "Qwerty"
);

SELECT USER_PASSWORD FROM USERS WHERE USER_EMAIL = "email" AND USER_PASSWORD = "passw";

SELECT * FROM USERS WHERE USER_EMAIL = "test@gmail.com" AND USER_PASSWORD = "password";

ALTER TABLE USERS MODIFY COLUMN USER_PASSWORD VARCHAR(100) NOT NULL;

SELECT USER_NAME FROM USERS WHERE USER_EMAIL = "test@gmail.com";


-- exercies categories table
-- image, category



CREATE TABLE CATEGORIES(
	CATEGORY VARCHAR(60) PRIMARY KEY NOT NULL,
    IMAGE_URL VARCHAR(100) NOT NULL

);

SELECT * FROM CATEGORIES;

INSERT INTO CATEGORIES VALUES
("back","back"),
("chest","chest"),
("lower arms","lowerarms"),
("lower legs","lowerlegs"),
("neck","neck"),
("shoulders","shoulders"),
("upper arms","upperarms"),
("upper legs","upperlegs"),
("waist","waist"),
("cardio","cardio");


-- exercise info table

CREATE TABLE EXERCISE_INFO(
    EXERCISE_NAME VARCHAR(100) PRIMARY KEY NOT NULL,
    BODY_PART VARCHAR(100) NOT NULL,
    EQUIPMENT VARCHAR(100),
    ANIMATED_IMAGE_URL VARCHAR(100),
    TARGET_MUSCLE VARCHAR(100),
    SECONDARY_MUSCLES JSON,
    INSTRUCTIONS JSON,
    FOREIGN KEY (BODY_PART) REFERENCES CATEGORIES(CATEGORY)
);

DROP TABLE EXERCISE_INFO;

SELECT * FROM EXERCISE_INFO limit 2000;

INSERT INTO EXERCISE_INFO VALUES(
"alternate lateral pulldown",
"back",
"cable",
"TESTurl",
"lats",
'{ "1": "biceps", "2": "rhomboids" }',
'{ "1": "Sit on the cable machine with your back straight and feet flat on the ground.", "2": "Grasp the handles with an overhand grip, slightly wider than shoulder-width apart." ,"3": "Lean back slightly and pull the handles towards your chest, squeezing your shoulder blades together.", "4": "Pause for a moment at the peak of the movement, then slowly release the handles back to the starting position.", "5": "Repeat for the desired number of repetitions." }'
);

INSERT INTO EXERCISE_INFO VALUES('push-up (wall) v. 2', 'chest', 'body weight', 'chest/137push-up(wall)v.2', 'pectorals', '{"1": "triceps", "2": "shoulders"}', '{"1": "Stand facing a wall, about arm\'s length away.", "2": "Place your hands on the wall at shoulder height, slightly wider than shoulder-width apart.", "3": "Step back with your feet, keeping them hip-width apart.", "4": "Engage your core and keep your body in a straight line from head to heels.", "5": "Bend your elbows and lower your chest towards the wall, keeping your body straight.", "6": "Pause for a moment, then push yourself back to the starting position.", "7": "Repeat for the desired number of repetitions."}');

select * from exercise_info where exercise_name = "self assisted inverse leg curl";

INSERT INTO EXERCISE_INFO VALUES('barbell seated calf raise', 'lower legs', 'barbell', 'lowerlegs/8barbellseatedcalfraise', 'calves', '{"1": "hamstrings"}', '{"1": "Sit on a bench with your feet flat on the floor and a barbell resting on your thighs.", "2": "Place the balls of your feet on a raised platform, such as a block or step.", "3": "Lower your heels as far as possible, feeling a stretch in your calves.", "4": "Raise your heels as high as possible, contracting your calves.", "5": "Repeat for the desired number of repetitions."}');

DELETE FROM EXERCISE_INFO WHERE BODY_PART = "waise";

COMMIT;