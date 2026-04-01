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
        } catch (SQLException e) {
            System.out.println("Error: " + e);
        }
    }

}
