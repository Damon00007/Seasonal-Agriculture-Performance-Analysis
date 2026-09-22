# Seasonal Agriculture Performance Analysis

## 📌 Project Overview

This project analyzes seasonal agricultural performance across **Kharif, Rabi, and Zaid** seasons using a dataset containing **4,000 farm records and 28 attributes**.

The analysis focuses on crop yield, production, revenue, cost, profit, environmental conditions, and resource usage to understand how agricultural performance varies across seasons.

## 🎯 Objectives

- Analyze agricultural performance across different seasons.
- Compare crop yield and production.
- Study revenue, cost, and profit by season.
- Analyze environmental conditions such as rainfall, temperature, humidity, and soil moisture.
- Evaluate fertilizer, pesticide, and water usage.
- Study relationships between agricultural variables using correlation analysis.
- Identify outliers in profit data.
- Apply statistical tests to examine differences in seasonal performance.
- Present findings through data visualizations.

## 📊 Dataset

- **Records:** 4,000
- **Features:** 28
- **Seasons:** Kharif, Rabi, Zaid
- **Crops:** Rice, Wheat, Maize, Cotton, Pulses, Groundnut, Chilli, Sugarcane
- **Missing values:** Handled during preprocessing
- **Duplicate records:** Checked during data cleaning

### Main Variables

The dataset includes information related to:

- Farm and geographical details
- Crop and season
- Farm area
- Rainfall and temperature
- Humidity and sunlight
- Soil conditions
- Nutrient usage
- Irrigation and fertilizer
- Crop yield and production
- Market price
- Revenue, cost, and profit
- Water usage and water efficiency
- Disease and pest risk

## 🛠️ Technologies Used

- **Python**
- **Pandas**
- **NumPy**
- **Matplotlib**
- **Seaborn**
- **SciPy**
- **Jupyter Notebook**

## 🔍 Methodology

1. Data loading
2. Data inspection
3. Data cleaning
4. Missing-value handling
5. Duplicate checking
6. Exploratory Data Analysis
7. Season-wise analysis
8. Crop-wise analysis
9. Economic performance analysis
10. Resource usage analysis
11. Correlation analysis
12. Outlier detection
13. Statistical testing
14. Data visualization
15. Interpretation of results

## 📈 Key Results

### 1. Economic Performance

Average profit by season:

| Season | Average Profit |
|---|---:|
| Kharif | ₹178,914.65 |
| Rabi | ₹87,689.47 |
| Zaid | -₹24,804.82 |

The analysis also shows differences in average production, revenue, and cost across the three seasons.

### 2. Crop Yield

Sugarcane recorded the highest average yield among the analyzed crops.

Average Sugarcane yield:

- **Kharif:** 53.46 tonnes/ha
- **Rabi:** 43.29 tonnes/ha
- **Zaid:** 38.42 tonnes/ha

The analyzed crops showed higher average yield values in Kharif compared with Rabi and Zaid in this dataset.

### 3. Resource Usage

Average water efficiency:

| Season | Water Efficiency (t/1000 m³) |
|---|---:|
| Kharif | 5.89 |
| Rabi | 5.19 |
| Zaid | 4.41 |

Average water usage was highest in Zaid at approximately **6,419.89 m³**.

### 4. Statistical Analysis

A one-way ANOVA was performed on **Profit by Season**.

- **F-statistic:** 34.2918
- **p-value:** 1.71 × 10⁻¹⁵

At the 5% significance level, the ANOVA result indicates a statistically significant difference in mean profit among the seasons in this dataset.

Pairwise Welch's t-tests were also performed for:

- Kharif vs Rabi
- Kharif vs Zaid
- Rabi vs Zaid

All three pairwise comparisons produced statistically significant results.

## 📊 Visualizations

The project includes visualizations for:

- Average Profit by Season
- Average Crop Yield by Season
- Water Usage by Season
- Water Efficiency by Season
- Profit Distribution by Season

The visualizations were created using **Matplotlib and Seaborn**.

## 📁 Project Structure

```text
Seasonal-Agriculture-Performance-Analysis/
│
├── Seasonal_Agriculture_Analysis.ipynb
├── README.md
├── dataset/
│   └── agriculture_dataset.csv
├── presentation/
│   └── Seasonal_Agriculture_Performance_Analysis.pptx
└── screenshots/
    ├── charts/
    └── code/
```

> File and folder names may vary depending on the final GitHub repository structure.

## 🚀 How to Run the Project

### 1. Clone the repository

```bash
git clone https://github.com/Damon00007/Seasonal-Agriculture-Performance-Analysis.git
cd Seasonal-Agriculture-Performance-Analysis
```

### 2. Install the required libraries

```bash
pip install pandas numpy matplotlib seaborn scipy jupyter
```

### 3. Open the notebook

Open:

```text
Seasonal_Agriculture_Analysis.ipynb
```

using **Jupyter Notebook** or **VS Code**.

### 4. Run the notebook

Run the cells from top to bottom to reproduce the analysis and visualizations.

## 👥 End Users

The analysis can be useful for:

- Farmers and Farm Managers
- Agricultural Analysts
- Agricultural Planning Teams

## 🔮 Future Scope

Possible extensions of this project include:

- Adding real-time agricultural data.
- Incorporating weather forecasting data.
- Developing crop-yield prediction models.
- Building interactive agricultural dashboards.
- Extending the analysis to additional regions and time periods.
- Applying machine-learning models for prediction and classification.

## 👨‍💻 Author

**Pawan Tiwari**

**College:** Ambalika Institute of Management & Technology

**Project:** Seasonal Agriculture Performance Analysis

## 📜 License

This project is created for **academic and educational purposes**.
