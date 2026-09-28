document.addEventListener("DOMContentLoaded", () => {
    // Seasonal performance data
    const seasons = ["Kharif", "Rabi", "Zaid"];

    const yieldData = [5.628612, 5.039435, 4.641313];
    const profitData = [178914.647555, 87689.470191, -24804.824916];
    const marginData = [25.173751, 14.577834, -4.777767];

    const waterData = [6102.201237, 5846.987093, 6419.893939];
    const efficiencyData = [5.891834, 5.186122, 4.413239];

    // Crop x Season yield
    const crops = [
        "Chilli",
        "Cotton",
        "Groundnut",
        "Maize",
        "Pulses",
        "Rice",
        "Sugarcane",
        "Wheat"
    ];

    const cropSeasonData = {
        Kharif: [1.731459, 1.374512, 1.484974, 2.966410, 1.036063, 2.698376, 53.459120, 2.253664],
        Rabi:   [1.465031, 1.198358, 1.233164, 2.603648, 0.875962, 2.322847, 43.286124, 2.057468],
        Zaid:   [1.195312, 0.960217, 1.037778, 2.290952, 0.669677, 1.900490, 38.423922, 1.748588]
    };

    // Helper: safely create a chart
    function createChart(id, config) {
        const canvas = document.getElementById(id);

        if (!canvas || typeof Chart === "undefined") {
            console.warn(`Chart could not be created: ${id}`);
            return;
        }

        new Chart(canvas, config);
    }

    // Average Yield by Season
    createChart("yieldChart", {
        type: "bar",
        data: {
            labels: seasons,
            datasets: [{
                label: "Average Yield (Tonnes/Ha)",
                data: yieldData,
                borderRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Average Profit by Season
    createChart("profitChart", {
        type: "bar",
        data: {
            labels: seasons,
            datasets: [{
                label: "Average Profit (INR)",
                data: profitData,
                borderRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: context =>
                            "₹" + Number(context.raw).toLocaleString("en-IN")
                    }
                }
            }
        }
    });

    // Profit Margin
    createChart("marginChart", {
        type: "line",
        data: {
            labels: seasons,
            datasets: [{
                label: "Profit Margin (%)",
                data: marginData,
                tension: 0.35,
                fill: false,
                pointRadius: 5
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    ticks: {
                        callback: value => value + "%"
                    }
                }
            }
        }
    });

    // Crop x Season Yield
    createChart("cropChart", {
        type: "bar",
        data: {
            labels: crops,
            datasets: [
                {
                    label: "Kharif",
                    data: cropSeasonData.Kharif,
                    borderRadius: 5
                },
                {
                    label: "Rabi",
                    data: cropSeasonData.Rabi,
                    borderRadius: 5
                },
                {
                    label: "Zaid",
                    data: cropSeasonData.Zaid,
                    borderRadius: 5
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: "Yield (Tonnes/Ha)"
                    }
                }
            }
        }
    });

    // Water Usage
    createChart("waterChart", {
        type: "bar",
        data: {
            labels: seasons,
            datasets: [{
                label: "Water Used (m³)",
                data: waterData,
                borderRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });

    // Water Efficiency
    createChart("effChart", {
        type: "line",
        data: {
            labels: seasons,
            datasets: [{
                label: "Water Efficiency (t / 1000m³)",
                data: efficiencyData,
                tension: 0.35,
                pointRadius: 5
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });

    // Smooth navigation for internal links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", event => {
            const targetId = link.getAttribute("href");
            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    console.log("Seasonal Agriculture website loaded successfully.");
});
