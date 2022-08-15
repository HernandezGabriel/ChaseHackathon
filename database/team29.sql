BEGIN TRANSACTION;

--user table--

DROP TABLE IF EXISTS users;

CREATE TABLE users (
	user_id int NOT NULL,
	firstname varchar(50) NOT NULL,
	lastname varchar(50) NOT NULL,
	passw varchar(50) NOT NULL,
	birthdate date NOT NULL,
	points int NOT NULL,
	email varchar(50) NOT NULL,
	zipcode varchar(10) NOT NULL,
	picture varchar(255) NOT NULL,
	CONSTRAINT PK_user PRIMARY KEY (user_id)
);

INSERT INTO users (user_id, firstname,lastname, passw, birthdate, points, email, zipcode, picture)
VALUES (1000, 'DefaultF','DefaultL', '1234', '2000-01-01', 0,'default@gmail.com', '11111', 'defaultlink'),
(1001, 'Firstname','Lastname', '1234', '1998-01-01',0,'1@gmail.com', '78610', 'link'),
(1002, 'Firstname2','Lastname2', '1234', '1998-01-01',0,'2@gmail.com', '78610', 'link'),
(1003, 'Firstname3','Lastname3', '1234', '1998-01-01',0,'3@gmail.com', '78610', 'link');

--event table--

DROP TABLE IF EXISTS events;

CREATE TABLE events (
	event_id int NOT NULL, --event id
	eventname varchar(50) NOT NULL, --event name
	eventstart date NOT NULL, --event start time
	eventend date NOT NULL, --event end time
	points int NOT NULL, --points the event reward
	school varchar(50) NOT NULL, --school event is at
	zipcode varchar(10) NOT NULL, --zipcode of school
	host varchar(50) NOT NULL, --event host
	descr varchar(200) NOT NULL, --event description
	CONSTRAINT PK_event PRIMARY KEY (event_id)
);

INSERT INTO events (event_id,eventname,eventstart,eventend,points,school,zipcode,host,descr)
VALUES (2000, 'Dummy Event', '2022-01-01 14:00:00','2022-09-09 15:00:00',5,'School X', '11111',
'Default Host','Distribute school supplies to new class.'),
(2001, 'help1', '2022-09-09 14:00:00','2022-09-09 15:00:00',25,'School A', '23332',
'Ms. Teacher','Distribute school supplies to new class.'),
(2002, 'help2', '2022-09-09 17:00:00','2022-09-09 19:00:00',50,'School B', '23332',
'Mr. Teacher','Pack lunches for 5th graders.'),
(2003, 'help3', '2022-09-10 12:00:00','2022-09-10 13:00:00','25','School C', '78610','Mrs. Teacher', 'testdesc');


--event log--

DROP TABLE IF EXISTS eventlog;

CREATE TABLE eventlog (
	log_id int NOT NULL,
	user_id int NOT NULL,
	event_id int NOT NULL,
	CONSTRAINT PK_log PRIMARY KEY (log_id)
);

INSERT INTO eventlog (log_id,user_id,event_id)
VALUES (3000, 1000, 2000);

--rewards table--

DROP TABLE IF EXISTS rewards;

CREATE TABLE rewards (
	reward_id int NOT NULL,
	rewardname varchar(50) NOT NULL,
	points int NOT NULL,
	CONSTRAINT PK_reward PRIMARY KEY (reward_id)
);

INSERT INTO rewards (reward_id,rewardname,points)
VALUES (4000, 'Pizza Party', 25),
(4001, 'Field Trip', 50),
(4002, 'Donate Book', 10);

--redemptions log--

DROP TABLE IF EXISTS redemption;

CREATE TABLE redemption (
	redem_id int NOT NULL,
	user_id int NOT NULL,
	reward_id int NOT NULL,
	school varchar(50) NOT NULL,
	CONSTRAINT PK_redem PRIMARY KEY (redem_id)
);

INSERT INTO redemption (redem_id,user_id,reward_id,school)
VALUES (5000, 1000, 4000,'School X');

COMMIT;

