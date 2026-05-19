from fastapi import APIRouter, UploadFile, File
from pypdf import PdfReader

router = APIRouter()

@router.post("/upload-pdf")
async def upload_pdf(file: UploadFile = File(...)):

    pdf = PdfReader(file.file)

    text = ""

    for page in pdf.pages:
        text += page.extract_text()

    return {
        "content": text[:3000]
    }