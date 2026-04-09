import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class CookieLoginServlet extends HttpServlet {

    protected void doPost(HttpServletRequest req, HttpServletResponse res)
            throws IOException {

        res.setContentType("text/html;charset=UTF-8");

        PrintWriter out = res.getWriter();

        String username = req.getParameter("username");
        String password = req.getParameter("password");

        // Validation
        if (username == null || username.isEmpty() ||
                password == null || password.isEmpty()) {

            out.println("<h3 style='color:red;'>Invalid input! Please try again.</h3>");
            return;
        }

        // Create cookies (INCLUDING password as per requirement)
        Cookie userCookie = new Cookie("uname", username);
        Cookie passCookie = new Cookie("pwd", password);

        // Expiry
        userCookie.setMaxAge(60 * 60 * 24); // 1 day
        passCookie.setMaxAge(2 * 60); // 2 minutes

        // Basic security improvement (still allowed)
        userCookie.setHttpOnly(true);
        passCookie.setHttpOnly(true);

        res.addCookie(userCookie);
        res.addCookie(passCookie);

        out.println("<h2>Cookies Created Successfully</h2>");
        out.println("<a href='retrieve'>Retrieve Cookie Details</a>");
    }
}