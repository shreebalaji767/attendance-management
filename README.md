# Attendly — Attendance Management

A free static attendance manager built with HTML5, CSS3 and vanilla JavaScript. GitHub Pages hosting; browser LocalStorage only; no backend, database, account, paid service or external API.

## Features
- People register and detailed employee profiles (employment type, location, reporting manager and last working day)
- Employee profile history and attendance summaries
- Department/status filters and safe bulk CSV import with duplicate skipping
- Employee CSV template and expanded export
- Daily attendance, check-in/out and remarks
- Monthly calendar
- Configurable paid/unpaid leave policies, annual entitlements and carry-forward caps
- Employee-specific leave balances, adjustments and available-balance calculations
- Full-day, half-day and hourly leave requests; public holidays excluded from day counts
- Approval/rejection history and safe attendance integration (existing records are never overwritten)
- Public holiday calendar
- Shift patterns with overnight shift calculations and grace periods
- Dated employee shift assignments and configurable weekly-off days
- Attendance regularization requests with approval/rejection and applied change history
- Department/location-filtered reports for late arrivals, early departures, overtime and missing punches
- Overtime and payroll-ready attendance CSV exports (operational data, not payroll calculations)
- Shift management
- Attendance reports and CSV exports
- Monthly payroll drafts with configurable base salary, allowances, bonus, advance recovery and other deductions
- Calendar-day pro-rata payroll estimates using present, half-day, paid leave and unpaid absence units
- Finalized monthly payroll snapshots that retain the figures used at finalization
- Employee-wise payslip view with browser print / Save as PDF
- Monthly payroll CSV export; payroll figures remain operational estimates, not statutory calculations
- Local activity history
- JSON backup and restore
- Responsive PWA shell with offline caching

## GitHub Pages
Repository Settings → Pages → Deploy from a branch → `main` → `/(root)` → Save. Then visit https://shreebalaji767.github.io/attendance-management/.

## Data notice
Records remain in this browser's LocalStorage. There is no cloud sync or multi-device sharing. Clearing browser site data can erase records. Export JSON backups regularly. Salary figures are estimates, not statutory payroll calculations.