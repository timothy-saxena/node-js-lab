# Result Analysis System — Project Briefing
> Paste this entire document at the start of a new Claude chat to resume development.

---

## What This Project Is

A full-stack academic result analysis web app for MGIT's CSE department.
Three roles: Student (view marks/SGPA/CGPA/marksheet), Faculty (manage marks, view analytics), Admin (department-wide dashboard).

---

## Live URLs

| Service | URL |
|---|---|
| Frontend (Vercel) | https://result-analysis-three.vercel.app |
| Backend (Render) | https://result-analysis-backend.onrender.com |
| GitHub Repo | https://github.com/timothy-saxena/result-analysis |
| Active Branch | `dev` (default branch — Vercel + Render both deploy from here) |

---

## Tech Stack

| Layer | Tech |
|---|---|
| Frontend | React + Vite (no React Router — custom pathname router in App.jsx) |
| Backend | Node.js + Express |
| Database | MySQL (hosted on Railway) |
| Auth | JWT (jsonwebtoken + bcryptjs) |
| PDF | pdfkit (replaced Puppeteer — incompatible with Render free tier) |
| CSV Export | json2csv |
| Hosting | Vercel (frontend), Render (backend), Railway (MySQL) |

---

## Database (Railway MySQL)

**Connection:**
- Host: `ballast.proxy.rlwy.net`
- Port: `54145`
- DB name: `railway`
- Credentials stored in Render environment variables

**Tables:**

```
students    — ht_no (PK), password_hash, branch, year, section
results     — id, ht_no (FK), semester, course_code, course_name,
              cie_marks, see_marks (nullable), total_marks,
              grade_letter, grade_points, credits
              UNIQUE KEY on (ht_no, semester, course_code)
faculty     — id, username, password_hash, name, course_code
admins      — id, username, password_hash
```

**Data:**
- 1,090 students, 35,582 result rows
- Multiple batches: 21, 22, 23, 24, 25 (year prefix in HT number)
- Branches: 261A05 (CSE), 265A05 (IT — assigned to IT-1 section)
- Sections assigned via RIGHT(ht_no, 2) roll ranges:
  - CSE-1: 01–64
  - CSE-2: 65–99 + A0–C8
  - CSE-3: C9–K3
  - CSE-4: K4–R7
  - CSE-5: R8–Z1

**GPA formula:**
```
SGPA = SUM(grade_points * credits) / SUM(credits)  — credits > 0 only
CGPA = same formula across all semesters
```

---

## Folder Structure

```
result-analysis/
├── backend/
│   ├── app.js                  — Express entry point, CORS, route mounting
│   ├── config/db.js            — mysql2 connection pool
│   ├── middleware/auth.js      — verifyToken, requireRole (JWT middleware)
│   ├── routes/
│   │   ├── auth.js             — POST /api/auth/student|faculty|admin-login
│   │   ├── student.js          — GET results, sgpa, cgpa, failed, marksheet PDF
│   │   ├── faculty.js          — class-results, update-marks, analytics, export CSV
│   │   └── admin.js            — dashboard, toppers, subject-analysis, cgpa-distribution, section/:section, export
│   ├── utils/
│   │   ├── gpa.js              — calculateSGPA, calculateCGPA, getSGPAPerSemester, getFailedSubjects
│   │   └── pdf.js              — generateMarksheet using pdfkit (NOT puppeteer)
│   └── scripts/
│       └── import.js           — one-time Excel → MySQL importer (node import.js file.xlsx semNumber)
├── frontend/
│   ├── src/
│   │   ├── App.jsx             — custom router using window.location.pathname
│   │   ├── utils/api.js        — fetch wrapper, token attachment, logout on 401
│   │   ├── pages/
│   │   │   ├── Login.jsx       — role tabs (student/admin only — faculty removed)
│   │   │   ├── student/        — StudentDashboard, StudentResults, StudentMarksheet, StudentLayout
│   │   │   ├── faculty/        — FacultyDashboard (full analytics + mark editing)
│   │   │   └── admin/          — AdminDashboard (4 tabs: dashboard/toppers/subjects/cgpa-dist)
│   │   └── components/
│   │       └── Sidebar.jsx     — shared sidebar (unused in current friend's architecture)
│   └── vercel.json             — SPA rewrite rule: all routes → index.html
└── database/
    └── schema.sql
```

---

## Frontend Architecture (Important)

Your teammate rewrote the frontend away from React Router + AuthContext toward a simpler custom approach:

- **Routing:** `App.jsx` checks `window.location.pathname` manually — no React Router
- **Auth:** Token stored in `localStorage` as `ra_token` and `ra_user` (JSON)
- **API:** All calls go through `frontend/src/utils/api.js` — exports `api.get`, `api.post`, `api.blob`
- **Navigation:** `window.location.href = '/student'` (full page reload)
- **Login:** `frontend/src/pages/Login.jsx` (not LoginPage.jsx) — uses `?role=student` URL param
- **AdminDashboard and FacultyDashboard** have their own sidebar built in — they do NOT use the shared Sidebar.jsx or layout wrappers

---

## Test Credentials

| Role | Username | Password |
|---|---|---|
| Student | Any HT number e.g. `24261A0501` | `24261A0501@123` |
| Faculty | `prof_test` | `password` |
| Admin | `admin` | `password` |

Faculty `prof_test` is scoped to course `CS301PC` — the course_code is embedded in their JWT at login.

---

## Known Issues / Fixed Bugs

1. **PDF marksheet** — Puppeteer failed on Render free tier. Replaced with `pdfkit`. Fixed.
2. **Faculty analytics 500 error** — MySQL `ONLY_FULL_GROUP_BY` strict mode rejected `ORDER BY grade_points` in a GROUP BY query. Fixed by using `MAX(grade_points)` instead.
3. **CORS** — Backend was only allowing localhost. Added Vercel production URL to CORS whitelist in `backend/app.js`.
4. **Vercel 404 on direct URL** — Added `frontend/vercel.json` with rewrite rule for SPA routing.
5. **Faculty/Admin login crash** — `api.js` returned `undefined` on 401, crashing `data.token` read. Fixed to throw proper error instead.
6. **Section mapping** — Import script used a rough heuristic. Corrected via SQL UPDATE using actual roll number boundary ranges.

---

## Git Workflow

```
main        — stable, no direct pushes
dev         — active development, Vercel + Render deploy from here
feature/xxx — branch off dev, PR back into dev when done
```

Team: Timothy (tim0633) + one teammate (geekified05 on GitHub)

---

## What's Done

- [x] Full backend: auth, student, faculty, admin routes
- [x] Data import script + 35,582 rows imported
- [x] Student dashboard (SGPA chart, results, failed subjects, PDF marksheet)
- [x] Faculty dashboard (class results, inline mark editing, analytics, CSV export)
- [x] Admin dashboard (dept overview, toppers/ranklist, subject analysis, CGPA distribution, CSV export)
- [x] JWT auth with role-based access control
- [x] Deployed and live (Vercel + Render + Railway)
- [x] Section assignment fixed for all 1,090 students

## What's Pending / Could Be Improved

- [ ] Student name column (not in original Excel — to be added later)
- [ ] Password change feature for students
- [ ] Faculty login currently hidden from UI but backend exists
- [ ] Mobile responsiveness polish
- [ ] Render free tier spins down after 15min idle — first request is slow (~30s)
- [ ] Add more semester data (currently only some semesters imported)
- [ ] Admin: section drill-down page (/admin/section/:section route exists in backend but no frontend page)
