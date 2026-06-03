import java.sql.*;
import java.util.*;

public class InsertDataJDBC {
    public static void main(String args[]) {
        String url = "jdbc:mysql://localhost:3306/jdbc";
        String u = "root";
        String p = "password";
        Scanner sc = new Scanner(System.in);
        try {
            Connection c = DriverManager.getConnection(url, u, p);
            String sql = "INSERT INTO STUDENT VALUES (?,?)";
            PreparedStatement ps = c.prepareStatement(sql);

            System.out.println("Enter student name: ");
            String name = sc.nextLine();

            System.out.println("Enter student age: ");
            int age = sc.nextInt();

            ps.setString(1, name);
            ps.setInt(2, age);
            ps.executeUpdate();
            sc.close();
        } catch (SQLException e) {
            System.out.println("SQL error" + e.getMessage());
        }

    }
}
