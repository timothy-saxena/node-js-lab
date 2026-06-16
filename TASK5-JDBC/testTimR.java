import java.sql.*;
import java.util.Scanner;

public class testTimR {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/jdbc_exam";
        String user = "root";
        String password = "password";
        try {
            Connection c = DriverManager.getConnection(url, user, password);

            String sql = "SELECT * FROM BANK;";
            PreparedStatement ps = c.prepareStatement(sql);
            ResultSet rs = ps.executeQuery();
            /*
             * 1. WRITE SQL
             * 2. MAKE PS
             * 3. EXE PS
             * 4. DISPLAY
             */
            System.out.println("CUSTID\tBALANCE");
            while (rs.next()) {
                int id = rs.getInt("cID");
                int bale = rs.getInt("bal");
                System.out.println(id + "\t" + bale);
            }

        } catch (SQLException e) {
            System.out.println(e);
        }
    }
}