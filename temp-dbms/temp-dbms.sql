-- Procedure to add two numbers
CREATE OR REPLACE PROCEDURE add_numbers(
    a IN NUMBER,
    b IN NUMBER
)
AS
    sum_result NUMBER;
BEGIN
    sum_result := a + b;
    DBMS_OUTPUT.PUT_LINE('Sum = ' || sum_result);
END;
/

-- Calling the procedure
BEGIN
    add_numbers(10, 20);
END;
/

-- Create Employee Table
CREATE TABLE emp (
    emp_id NUMBER,
    sal NUMBER
);

-- Insert Sample Data
INSERT INTO emp VALUES (1, 100);
INSERT INTO emp VALUES (2, 200);

COMMIT;

-- Procedure to update salary
CREATE OR REPLACE PROCEDURE update_sal(
    emp_id_check IN NUMBER,
    new_sal IN NUMBER
)
AS
BEGIN
    UPDATE emp
    SET sal = new_sal
    WHERE emp_id = emp_id_check;

    DBMS_OUTPUT.PUT_LINE('Salary updated to ' || new_sal);
END;
/

-- Calling the procedure
BEGIN
    update_sal(2, 102324);
END;
/

-- Procedure using IN OUT and also DECLARE keyword
CREATE OR REPLACE PROCEDURE CUBE_NUM(
    num IN OUT NUMBER
)
AS
BEGIN
    num := num ** 3;
END;
/

-- Calling the procedure
DECLARE
    num NUMBER := 9;
BEGIN
    CUBE_NUM(num);
    DBMS_OUTPUT.PUT_LINE(num);
END;
/

-- Creating student table for trigger
CREATE TABLE student(
    sid NUMBER,
    sname VARCHAR2(20)
);

-- Creating trigger
CREATE OR REPLACE TRIGGER student_trigger
AFTER INSERT
ON student
FOR EACH ROW
BEGIN
    DBMS_OUTPUT.PUT_LINE('New Student Added');
END;
/

-- Cursor Example
DECLARE
    CURSOR c IS
        SELECT boyname FROM boys;
    var boys.boyname%TYPE;
BEGIN
    OPEN c;
    LOOP
        FETCH c INTO var;
        EXIT WHEN c%NOTFOUND;
        DBMS_OUTPUT.PUT_LINE(var);
    END LOOP;
    CLOSE c;
END;
/