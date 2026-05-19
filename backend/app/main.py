from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app.include_router(upload_router)

app = FastAPI()

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