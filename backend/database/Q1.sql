use test;
create database if not exists test;
show tables;
set sql_safe_updates=0;

-- ======================== DESCRIBE =========================
describe categories;
describe exercise_history;
describe exercise_secondary_muscles;
describe exercises;
describe muscles;
describe units;
describe user_diaries;
describe users;

-- ======================== SELECT * =========================
select * from categories;
select * from exercise_history;
select * from exercise_secondary_muscles order by exercise_id limit 4000;
select * from  exercises limit 2000;
select * from muscles;
select * from units;
select * from user_diaries;
select * from users;

-- ======================== Insert Queries from Workitwise =========================
-- Categories Query
insert into test.categories(
	category_id, category, created_at, image_url, modified_at
) select workitwise.categories.CATEGORY_ID,
	workitwise.categories.CATEGORY,
    now(),
    workitwise.categories.IMAGE_URL,
    now()
from workitwise.categories;
	
-- Units Query
insert into test.units(
	unit_id, created_at, modified_at, unit
) select workitwise.units.UNIT_ID,
	now(),
    now(),
    workitwise.units.UNIT
from workitwise.units;

delete from units where unit_id = 3;

-- Muscles Query
insert into test.muscles(
	muscle, created_at, modified_at
) select distinct workitwise.exercise_information.TARGET_MUSCLE, now(), now() from workitwise.exercise_information;

insert ignore into test.muscles(
	muscle, created_at, modified_at
) SELECT DISTINCT JSON_UNQUOTE(JSON_EXTRACT(SECONDARY_MUSCLES, CONCAT('$."', json_key, '"'))), now(), now()
FROM workitwise.exercise_information
JOIN JSON_TABLE(
  JSON_KEYS(SECONDARY_MUSCLES),
  "$[*]" COLUMNS (json_key INT PATH "$")
) t;

-- Exercise Query
insert into test.exercises
(
	category_id, exercise_id, created_at, modified_at, equipment, exercise_name, gif_url, instructions
)
select workitwise.exercise_information.CATEGORY_ID,
	workitwise.exercise_information.EXERCISE_ID,
	now(),
    now(),
    workitwise.exercise_information.EQUIPMENT,
    workitwise.exercise_information.EXERCISE_NAME,
    workitwise.exercise_information.ANIMATED_IMAGE_URL,
    workitwise.exercise_information.INSTRUCTIONS
from workitwise.exercise_information
;

UPDATE test.exercises
INNER JOIN workitwise.exercise_information ON test.exercises.exercise_id = workitwise.exercise_information.EXERCISE_ID
INNER JOIN test.units ON workitwise.exercise_information.UNIT = test.units.unit
SET test.exercises.unit_id = test.units.unit_id;

update test.exercises
inner join workitwise.exercise_information on test.exercises.exercise_id = workitwise.exercise_information.EXERCISE_ID
inner join test.muscles on workitwise.exercise_information.TARGET_MUSCLE = test.muscles.muscle
set test.exercises.target_muscle_id = test.muscles.muscle_id;

-- Secondary Muscles Query
INSERT INTO test.exercise_secondary_muscles (exercise_id, muscle_id)
SELECT test.exercises.exercise_id, test.muscles.muscle_id
FROM test.exercises
JOIN workitwise.exercise_information ON test.exercises.exercise_id = workitwise.exercise_information.exercise_id
JOIN JSON_TABLE(
  JSON_KEYS(workitwise.exercise_information.SECONDARY_MUSCLES),
  "$[*]" COLUMNS (json_key INT PATH "$")
) jt
JOIN test.muscles ON JSON_UNQUOTE(JSON_EXTRACT(workitwise.exercise_information.SECONDARY_MUSCLES, CONCAT('$."', jt.json_key, '"'))) = test.muscles.muscle;

-- ============================================================ select data queries =================================================
select * from test.exercises
inner join test.exercise_secondary_muscles on test.exercise_secondary_muscles.exercise_id = test.exercises.exercise_id
inner join test.muscles on test.muscles.muscle_id = test.exercise_secondary_muscles.muscle_id order by test.exercises.exercise_id limit 4000;

select test.exercises.exercise_id, test.muscles.muscle from test.exercises
inner join test.exercise_secondary_muscles on test.exercise_secondary_muscles.exercise_id = test.exercises.exercise_id
inner join test.muscles on test.muscles.muscle_id = test.exercise_secondary_muscles.muscle_id order by test.exercises.exercise_id limit 4000;



-- ============================================================ OLD =================================================
select * from workitwise.units;


-- ***********************************************************************



insert into test.categories select * from workitwise.categories;

select * from units;
insert into test.units select * from workitwise.units;
delete from units where unit_id = 3;

-- exercise table

insert into test.exercises
(
	exercise_id, created_at, equipment, exercise_name, gif_url, modified_at, target_muscle
)
select workitwise.exercise_information.EXERCISE_ID,
	now(),
    workitwise.exercise_information.EQUIPMENT,
    workitwise.exercise_information.EXERCISE_NAME,
    workitwise.exercise_information.ANIMATED_IMAGE_URL,
    now(),
    workitwise.exercise_information.TARGET_MUSCLE
from workitwise.exercise_information
;

select * from exercises limit 2000;
describe exercises;
select * from exercises where unit_id_unit_id = 1;

UPDATE test.exercises
INNER JOIN workitwise.exercise_information ON test.exercises.exercise_id = workitwise.exercise_information.EXERCISE_ID
INNER JOIN test.units ON workitwise.exercise_information.UNIT = test.units.unit
SET test.exercises.unit_id_unit_id = test.units.unit_id;


select * from user_diaries;
describe user_diaries;

update test.exercises
inner join workitwise.exercise_information on test.exercises.exercise_id = workitwise.exercise_information.EXERCISE_ID
set test.exercises.category_id_category_id = workitwise.exercise_information.CATEGORY_ID;

select * from exercises limit 2000;
select * from exercises where category_id_category_id = 21;

select * from exercise_secondary_muscles;