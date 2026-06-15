-- Q1
CREATE TABLE ACCOUNT(
    acc_no number Primary Key,
    holder_name varchar(20) UNIQUE,
    balance number check(balance > 0),
    acc_type varchar(20)
);

-- Q2
CREATE TABLE EMPLOYEE(
    emp_id number Primary Key,
    emp_name varchar(20),
    manager_id number,
    salary number,
    foreign key (manager_id)
    references EMPLOYEE(emp_id)
);

-- Q3
ALTER TABLE EMPLOYEE ADD doj Date;

--Q4
ALTER TABLE EMPLOYEE MODIFY emp_name varchar(20) NOT NULL;
-- why can't I do this
-- ALTER TABLE EMPLOYEE ADD CONSTRAINT c_name varhchar(20) not null;

--Q5
ALTER TABLE EMPLOYEE DROP COLUMN manager_id;
