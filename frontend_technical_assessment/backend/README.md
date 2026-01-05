# Backend Setup

## Installation

1. Install Python dependencies:
```bash
pip install -r requirements.txt
```

## Running the Server

Run the FastAPI server using uvicorn:

```bash
uvicorn main:app --reload --port 8000
```

Or if you're in the backend directory:
```bash
cd backend
uvicorn main:app --reload --port 8000
```

The server will start at `http://localhost:8000`

You can test it by visiting `http://localhost:8000` in your browser or `http://localhost:8000/docs` for the interactive API documentation.

