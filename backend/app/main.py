from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes.upload import router
from app.routes.report import router as report_router
app = FastAPI()
app.include_router(router)
app.include_router(report_router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(report_router)

@app.get("/")
def home():
    return {
        "message": "CortexOne Backend Running"
    }