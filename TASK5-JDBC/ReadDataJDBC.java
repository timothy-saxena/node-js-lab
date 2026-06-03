import java.sql.*;

public class ReadDataJDBC {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/jdbc";
        String u = "root";
        String p = "password";

        try {
            Connection c = DriverManager.getConnection(url, u, p);
            String sql = "SELECT * FROM Student";
            PreparedStatement ps = c.prepareStatement(sql);
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                System.out.println("Name: " + rs.getString("name"));
                System.out.println("Age: " + rs.getInt("age"));
            }
        } catch (Exception e) {
            // TODO: handle exception
        }
    }
}