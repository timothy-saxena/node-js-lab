import java.sql.*;
import java.util.Scanner;

public class DeleteData {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/timr4";
        String user = "root";
        String password = "Dooop#321";
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
        } catch (SQLException e) {
            System.out.println("Error: " + e);
        }
    }
}