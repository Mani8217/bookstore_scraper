# Bookstore Scraper Project

This project consists of a Django backend, a Scrapy-based web scraper, and a React frontend. It scrapes book data from [Books to Scrape](https://books.toscrape.com/), stores it in a MySQL database, and displays it on the frontend.

## Project Structure

```
backend/
│-- bookstore/  # Django project (Main Backend)
│-- books/      # Django app (Handles book data)
│-- book_scraper/ # Scrapy project (Scrapes book data)
frontend/       # React project (Displays books)
```

## Technologies Used

### Backend
- **Django** (Web framework)
- **MySQL** (Database)
- **mysqlclient & mysql-connector** (Database connectors)
- **Django REST Framework** (API for frontend)
- **Virtual Environment (.venv)** (Dependency management)

### Scraping
- **Scrapy** (For web scraping from Books to Scrape)
- **pymysql** (MySQL integration for storing scraped data)

### Frontend
- **React with Vite** (Fast frontend setup)
- **Axios** (For API requests)
- **React Router DOM** (Client-side routing)

## Installation and Setup

### Backend
```sh
cd backend
python -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### Scrapy (Book Scraper)
```sh
cd backend/book_scraper
scrapy crawl bookspider -o books.csv  # Scrapes data and saves to CSV
```

To store data in MySQL:
```sh
scrapy crawl bookspider
```

### Frontend
```sh
cd frontend
npm install
npm run dev  # Starts React development server
```

## API Endpoints (Django Backend)
- `GET /api/books/` → Fetch all books
- `POST /api/books/` → Add a new book
- `GET /api/books/<id>/` → Get book details
- `PUT /api/books/<id>/` → Update a book
- `DELETE /api/books/<id>/` → Delete a book

## Notes
- Ensure MySQL is running before running migrations and scraper.
- Update `DATABASES` settings in `bookstore/settings.py` with correct MySQL credentials.

## License
This project is open-source and free to use.

