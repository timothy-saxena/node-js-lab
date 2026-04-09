import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;
import java.sql.*;

public class RegisterServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        response.setContentType("text/html");
        PrintWriter pw = response.getWriter();

        String name = request.getParameter("name");
        String password = request.getParameter("password");
        String email = request.getParameter("email");
        String contact = request.getParameter("contact");

        String url = "jdbc:mysql://localhost:3306/registration_DB_5R4";
        String user = "root";
        String pwd = "password";

        try {
            // ✅ Correct driver
            Class.forName("com.mysql.cj.jdbc.Driver");

            Connection con = DriverManager.getConnection(url, user, pwd);

            // ✅ SQL matches form fields
            String sql = "INSERT INTO students(name, password, email, contact) VALUES (?, ?, ?, ?)";
            PreparedStatement ps = con.prepareStatement(sql);

            // ✅ Use form data (NOT Scanner)
            ps.setString(1, name);
            ps.setString(2, password);
            ps.setString(3, email);
            ps.setString(4, contact);

            int rows = ps.executeUpdate();

            if (rows > 0) {
                pw.println("<h2>Registration Successful!</h2>");
            } else {
                pw.println("<h2>Registration Failed</h2>");
            }

            con.close();

        } catch (Exception e) {
            pw.println("Error: " + e.getMessage());
        }

        pw.close();
    }
}