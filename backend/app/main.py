from contextlib import asynccontextmanager

from fastapi import FastAPI # pyright: ignore[reportMissingImports]
from fastapi.middleware.cors import CORSMiddleware

from app.api.exception_handler import register_exception_handlers
from app.api.v1.router import api_router
from app.database.base import Base
from app.database.session import engine


@asynccontextmanager
async def lifespan(app: FastAPI):
    # Create all database tables
    Base.metadata.create_all(bind=engine)
    yield


app = FastAPI(
    title="MediSense AI",
    version="1.0.0",
    description="AI-Powered Medical Report Interpreter",
    lifespan=lifespan,
)

# ============================
# CORS Configuration
# ============================

origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ============================

# Register global exception handlers
register_exception_handlers(app)

# Include API routes
app.include_router(api_router, prefix="/api/v1")


@app.get("/")
def root():
    return {
        "message": "Welcome to MediSense AI 🚀"
    }