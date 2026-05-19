from fastapi import APIRouter
from pydantic import BaseModel

from app.services.openrouter_service import generate_ai_response

router = APIRouter()

class ReportRequest(BaseModel):
    topic: str

@router.post("/generate-report")
def generate_report(request: ReportRequest):

    prompt = f"""
    Generate an enterprise executive report about:

    {request.topic}

    Include:
    - Executive Summary
    - Key Insights
    - Risks
    - Opportunities
    - Strategic Recommendations
    """

    response = generate_ai_response(prompt)

    return {
        "report": response
    }