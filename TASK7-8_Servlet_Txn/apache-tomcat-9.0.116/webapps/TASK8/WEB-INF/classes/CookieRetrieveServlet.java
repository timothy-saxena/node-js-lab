import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class CookieRetrieveServlet extends HttpServlet {

    protected void doGet(HttpServletRequest req, HttpServletResponse res)
            throws IOException {

        res.setContentType("text/html;charset=UTF-8");

        PrintWriter out = res.getWriter();

        Cookie[] cookies = req.getCookies();

        String username = null;
        String password = null;

        if (cookies != null) {
            for (Cookie c : cookies) {

                if ("uname".equals(c.getName())) {
                    username = c.getValue();
                }

                if ("pwd".equals(c.getName())) {
                    password = c.getValue();
                }
            }
        }

        if (username != null && password != null) {
            out.println("<h2>Welcome " + username + "</h2>");
            out.println("<h3>Password: " + password + "</h3>");
        } else {
            out.println("<h3>No cookies found. Please login first.</h3>");
        }
    }
}