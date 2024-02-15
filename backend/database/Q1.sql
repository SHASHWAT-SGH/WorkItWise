use test;
show tables;
set sql_safe_updates=0;

select * from users;

-- ***********************************************************************

select * from exercises;
select * from exercises_instructions;
select * from exercises_secondary_muscles;

select * from categories;
insert into test.categories select * from workitwise.categories;
update categories_seq set next_val = 31;
select * from categories_seq;

select * from units;
insert into test.units select * from workitwise.units;
delete from units where unit_id = 3;
update units_seq set next_val = 3;
select * from units_seq;

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

alter table exercises drop constraint UK_bw3y2njitjaw9p1uov5x3uuft;
alter table exercises add constraint foreign key(unit_id_unit_id) references units(unit_id);

UPDATE test.exercises
INNER JOIN workitwise.exercise_information ON test.exercises.exercise_id = workitwise.exercise_information.EXERCISE_ID
INNER JOIN test.units ON workitwise.exercise_information.UNIT = test.units.unit
SET test.exercises.unit_id_unit_id = test.units.unit_id;


select * from user_diaries;
describe user_diaries;