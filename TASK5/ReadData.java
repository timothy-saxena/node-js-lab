import java.sql.*;

public class ReadData {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/timr4";
        String user = "root";
        String password = "Dooop#321";
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