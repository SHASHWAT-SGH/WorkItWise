use workitwise_app;

show tables;
-- set sql_safe_updates=0;

-- ======================== DESCRIBE =========================
describe workitwise_app.categories;
describe workitwise_app.exercise_history;
describe workitwise_app.exercise_secondary_muscles;
describe workitwise_app.exercises;
describe workitwise_app.muscles;
describe workitwise_app.units;
describe workitwise_app.user_diaries;
describe workitwise_app.users;

-- ======================== SELECT * =========================
select * from workitwise_app.categories;
select * from workitwise_app.exercise_history;
select * from workitwise_app.exercise_secondary_muscles order by exercise_id limit 4000;
select * from workitwise_app.exercises limit 2000;
select * from workitwise_app.muscles;
select * from workitwise_app.units;
select * from workitwise_app.user_diaries;
select * from workitwise_app.users;


-- ======================== DELETE =========================
-- drop table workitwise_app.categories;
-- drop table workitwise_app.exercise_history;
-- drop table workitwise_app.exercise_secondary_muscles;
-- drop table workitwise_app.exercises;
-- drop table workitwise_app.muscles;
-- drop table workitwise_app.units;
-- drop table workitwise_app.user_diaries;
-- drop table workitwise_app.users;