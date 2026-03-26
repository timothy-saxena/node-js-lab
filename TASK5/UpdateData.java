import java.sql.*;
import java.util.Scanner;

public class UpdateData {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/timr4";
        String user = "root";
        String password = "Dooop#321";
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
        } catch (SQLException e) {
            System.out.println("Error: " + e);
        }
    }
}