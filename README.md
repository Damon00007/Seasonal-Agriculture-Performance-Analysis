$targetFolder = "C:\Users\asus\Downloads\Projects\AI Project"
if (!(Test-Path -Path $targetFolder)) {
    New-Item -ItemType Directory -Force -Path $targetFolder
}

@'
# ♻️ EcoSort AI – Smart Waste Segregation & Circular Recovery Assistant
> An AI-powered source-level waste classification engine aligned with UN SDG 12. Built for the **1M1B AI for Sustainability Virtual Internship in collaboration with IBM SkillsBuild & AICTE**.

---

## 📌 Project Overview
Mixed commingled waste in campuses and households ruins over 70% of recyclable material and creates hazardous conditions for sanitation workers. **EcoSort AI** is an intelligent assistant designed to classify waste at the exact point of disposal, advising users on color-coded bins, mandatory pre-cleaning steps, and environmental savings.

- **Primary SDG:** [SDG 12: Responsible Consumption and Production](https://sdgs.un.org/goals/goal12) (Target 12.5)
- **Secondary SDG:** [SDG 11: Sustainable Cities and Communities](https://sdgs.un.org/goals/goal11)
- **Core Technology:** Python, Streamlit, IBM Granite / LLM Classification Logic

---

## 🚀 Key Features
- **Instant Point-of-Disposal Guidance:** Accurate categorization into Green (Wet/Compost), Blue (Dry Recyclable), and Red/Black (Hazardous/E-Waste).
- **Mandatory Pre-Disposal Protocols:** Educates users to rinse bottles, crush containers, and insulate battery terminals to maintain recyclable purity.
- **Responsible AI by Design:** Calibrated for regional/Indian waste types (chai kulhads, organic shells, composite laminates) with zero personal telemetry or biometric tracking.

---

## 🛠️ Architecture & Pipeline
```text
[User Input: Item Query / Image]
               │
               ▼
   [Material & Hazard Parsing]
               │
               ▼
    [Municipal Triage Rules]
               │
               ▼
[Output: Bin Color + Preparation Action + Impact]