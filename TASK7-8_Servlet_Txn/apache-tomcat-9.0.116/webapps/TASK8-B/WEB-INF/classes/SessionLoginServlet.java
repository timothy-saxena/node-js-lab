import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class SessionLoginServlet extends HttpServlet {

    protected void doPost(HttpServletRequest req, HttpServletResponse res)
            throws IOException {

        res.setContentType("text/html;charset=UTF-8");

        PrintWriter out = res.getWriter();

        String username = req.getParameter("username");
        String password = req.getParameter("password");

        if (username == null || username.isEmpty()) {
            out.println("<h3 style='color:red;'>Invalid Login!</h3>");
            return;
        }

        HttpSession session = req.getSession();

        session.setAttribute("uname", username);
        session.setAttribute("pwd", password); // 🔥 ADDED

        session.setMaxInactiveInterval(30 * 60);

        out.println("<h2>Login Successful (Session Created)</h2>");
        out.println("<a href='retrieve1'>Retrieve Session Details</a>");
    }
}