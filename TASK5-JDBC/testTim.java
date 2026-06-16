import java.sql.*;
import java.util.Scanner;

public class testTim {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/jdbc_exam";
        String user = "root";
        String password = "password";
        try {
            Connection c = DriverManager.getConnection(url, user, password);

            String sql = "INSERT INTO bank VALUES (?,?)";
            /*
             * 1. WRITE SQL
             * 2. MAKE PS
             * 3. INPUT VALUES IN PS
             * 4. EXE PS
             */
            PreparedStatement ps = c.prepareStatement(sql);
            Scanner sc = new Scanner(System.in);
            System.out.println("enter cust id");
            int custID = sc.nextInt();
            sc.nextLine();

            System.out.println("enter balance");
            int money = sc.nextInt();
            sc.nextLine();

            ps.setInt(1, custID);
            ps.setInt(2, money);

            ps.executeUpdate();

        } catch (SQLException e) {
            System.out.println(e);
        }
    }
}