import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class SessionRetrieveServlet extends HttpServlet {

    protected void doGet(HttpServletRequest req, HttpServletResponse res)
            throws IOException {

        res.setContentType("text/html;charset=UTF-8");

        PrintWriter out = res.getWriter();

        HttpSession session = req.getSession(false);

        if (session != null) {

            String user = (String) session.getAttribute("uname");
            String pass = (String) session.getAttribute("pwd"); // 🔥 ADD

            if (user != null && pass != null) {
                out.println("<h2>Welcome " + user + "</h2>");
                out.println("<h3>Password: " + pass + "</h3>");
                out.println("<a href='LogoutServlet'>Logout</a>");
            } else {
                out.println("<h3>Session exists but data missing</h3>");
            }

        } else {
            out.println("<h3>No session found. Please login first.</h3>");
        }
    }
}























/* 


###########################
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class SessionRetrieveServlet extends HttpServlet {

    protected void doGet(HttpServletRequest q, HttpServletResponse s)
            throws IOException {

        s.setContentType("text/html;charset=UTF-8");
        PrintWriter o = s.getWriter();

        HttpSession ss = q.getSession(false);

        if (ss != null) {

            String u = (String) ss.getAttribute("uname");
            String p = (String) ss.getAttribute("pwd");

            if (u != null && p != null) {
                o.println("<h2>Welcome " + u + "</h2>");
                o.println("<h3>Password: " + p + "</h3>");
                o.println("<a href='LogoutServlet'>Logout</a>");
            } else
                o.println("<h3>Session exists but data missing</h3>");

        } else
            o.println("<h3>No session found. Please login first.</h3>");
    }
} */