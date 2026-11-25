# LifeLink â€“ Blood Donation Platform

## Running the App

### Option 1 â€” Use the included start script (easiest)
Double-click `start.bat` in this folder.

### Option 2 â€” From terminal
```bash
# Add portable Node to PATH first (one-time per terminal session)
$env:PATH = "C:\Users\user\Desktop\nodejs-portable\node-v20.11.1-win-x64;$env:PATH"

# Then from this folder:
npm run dev
```
Then open http://localhost:5173 in your browser.

## Project Structure
```
lifelink-app/
â”œâ”€â”€ index.html
â”œâ”€â”€ vite.config.js
â”œâ”€â”€ package.json
â””â”€â”€ src/
    â”œâ”€â”€ main.jsx          # Entry point
    â”œâ”€â”€ App.jsx           # Root component
    â”œâ”€â”€ index.css         # Global styles
    â”œâ”€â”€ data/
    â”‚   â””â”€â”€ data.js       # All mock data
    â””â”€â”€ components/
        â”œâ”€â”€ Navbar.jsx
        â”œâ”€â”€ Hero.jsx
        â”œâ”€â”€ SearchBar.jsx
        â”œâ”€â”€ HowItWorks.jsx
        â”œâ”€â”€ Donors.jsx
        â”œâ”€â”€ BloodAvailability.jsx
        â”œâ”€â”€ RequestBlood.jsx
        â”œâ”€â”€ Awareness.jsx
        â”œâ”€â”€ Appreciation.jsx
        â”œâ”€â”€ Hospitals.jsx
        â”œâ”€â”€ FAQ.jsx
        â”œâ”€â”€ Privacy.jsx
        â”œâ”€â”€ Contact.jsx
        â”œâ”€â”€ Modals.jsx
        â”œâ”€â”€ Toast.jsx
        â””â”€â”€ Footer.jsx
```
