/* java –cp “mysql-connector-j-9.6.0.jar;.” InsertData */

//InsertData.java
import java.sql.*;
import java.util.Scanner;

public class InsertData {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/timr4";
        String user = "root";
        String password = "password";
        try {
            Connection con = DriverManager.getConnection(url, user, password);
            System.out.println("Connected to Database");
            String sql = "INSERT INTO students(id, name, age, email) VALUES (?, ?, ?, ?)";
            PreparedStatement ps = con.prepareStatement(sql);
            Scanner sc = new Scanner(System.in);
            System.out.println("Inserting Data into student table.");

            System.out.print("Enter student ID: ");
            int sid = sc.nextInt();
            sc.nextLine();

            System.out.print("Enter student name: ");
            String sname = sc.nextLine();

            System.out.print("Enter student Age: ");
            int sage = sc.nextInt();
            sc.nextLine();

            System.out.print("Enter student Email: ");
            String semail = sc.nextLine();

            ps.setInt(1, sid);
            ps.setString(2, sname);
            ps.setInt(3, sage);
            ps.setString(4, semail);

            int rowsAffected = ps.executeUpdate();
            if (rowsAffected > 0) {
                System.out.println("Record Inserted Successfully.");
            } else {
                System.out.println("Record insertion failed.");
            }
            sc.close();
        } catch (SQLException e) {
            System.out.println("Error: " + e);
        }
    }

}

// ReadData.java
// ReadData.java
import java.sql.*;

public class ReadData {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/timr4";
        String user = "root";
        String password = "password";
        try {
            Connection con = DriverManager.getConnection(url, user, password);
            System.out.println("Connected to Database");

            String sql = "SELECT * FROM students";
            PreparedStatement ps = con.prepareStatement(sql);
            ResultSet rs = ps.executeQuery();

            System.out.println("ID\tName\t\tAge\tEmail");
            System.out.println("--------------------------------------------------");
            while (rs.next()) {
                int id = rs.getInt("id");
                String name = rs.getString("name");
                int age = rs.getInt("age");
                String email = rs.getString("email");
                System.out.println(id + "\t" + name + "\t\t" + age + "\t" + email);
            }
        } catch (SQLException e) {
            System.out.println("Error: " + e);
        }
    }
}

// UpdateData.java
import java.sql.*;
import java.util.Scanner;

public class UpdateData {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/timr4";
        String user = "root";
        String password = "password";
        try {
            Connection con = DriverManager.getConnection(url, user, password);
            System.out.println("Connected to Database");

            Scanner sc = new Scanner(System.in);

            System.out.print("Enter student ID to update: ");
            int sid = sc.nextInt();
            sc.nextLine();

            System.out.print("Enter new name: ");
            String sname = sc.nextLine();

            System.out.print("Enter new age: ");
            int sage = sc.nextInt();
            sc.nextLine();

            System.out.print("Enter new email: ");
            String semail = sc.nextLine();

            String sql = "UPDATE students SET name=?, age=?, email=? WHERE id=?";
            PreparedStatement ps = con.prepareStatement(sql);
            ps.setString(1, sname);
            ps.setInt(2, sage);
            ps.setString(3, semail);
            ps.setInt(4, sid);

            int rowsAffected = ps.executeUpdate();
            if (rowsAffected > 0) {
                System.out.println("Record Updated Successfully.");
            } else {
                System.out.println("No record found with ID: " + sid);
            }
            sc.close();
        } catch (SQLException e) {
            System.out.println("Error: " + e);
        }
    }
}

// DeleteData.java
import java.sql.*;
import java.util.Scanner;

public class DeleteData {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/timr4";
        String user = "root";
        String password = "password";
        try {
            Connection con = DriverManager.getConnection(url, user, password);
            System.out.println("Connected to Database");

            Scanner sc = new Scanner(System.in);

            System.out.print("Enter student ID to delete: ");
            int sid = sc.nextInt();

            String sql = "DELETE FROM students WHERE id=?";
            PreparedStatement ps = con.prepareStatement(sql);
            ps.setInt(1, sid);

            int rowsAffected = ps.executeUpdate();
            if (rowsAffected > 0) {
                System.out.println("Record Deleted Successfully.");
            } else {
                System.out.println("No record found with ID: " + sid);
            }
            sc.close();
        } catch (SQLException e) {
            System.out.println("Error: " + e);
        }
    }
}