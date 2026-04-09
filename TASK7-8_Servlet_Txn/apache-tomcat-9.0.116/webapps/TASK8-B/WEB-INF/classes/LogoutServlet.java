import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class LogoutServlet extends HttpServlet {

    protected void doGet(HttpServletRequest req, HttpServletResponse res)
            throws IOException {

        res.setContentType("text/html;charset=UTF-8");

        PrintWriter out = res.getWriter();

        HttpSession session = req.getSession(false);

        if (session != null) {
            session.invalidate(); // 🔥 destroy session!!!!!!!
        }

        out.println("<h2>Logged out successfully</h2>");
        out.println("<a href='session.html'>Login Again</a>");
    }
}