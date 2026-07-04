// GENERATED FILE — do not edit by hand.
// Produced by scripts/fetch-life-expectancy.mjs on 2026-07-04.
// Source: WHO Global Health Observatory (GHO), indicator WHOSIS_000001
// "Life expectancy at birth (years)", https://ghoapi.azureedge.net/api/WHOSIS_000001
// Values are the WHO-reported estimates per country/year/sex, rounded to 2 decimals.
// Re-run: node scripts/fetch-life-expectancy.mjs

export interface CountryLifeExpectancy {
  name: string;
  nameTh: string;
  years: Record<number, { male: number; female: number; unspecified: number }>;
}

export const DEFAULT_COUNTRY = "THA";

export const LIFE_EXPECTANCY_DATA: Record<string, CountryLifeExpectancy> = {
  "THA": {
    "name": "Thailand",
    "nameTh": "ไทย",
    "years": {
      "2000": {
        "female": 74.82,
        "unspecified": 71.01,
        "male": 67.34
      },
      "2001": {
        "unspecified": 71.73,
        "female": 75.47,
        "male": 68.11
      },
      "2002": {
        "unspecified": 71.71,
        "female": 75.36,
        "male": 68.2
      },
      "2003": {
        "unspecified": 72.04,
        "female": 75.68,
        "male": 68.52
      },
      "2004": {
        "female": 75.5,
        "unspecified": 72.04,
        "male": 68.7
      },
      "2005": {
        "female": 76.31,
        "male": 69.48,
        "unspecified": 72.84
      },
      "2006": {
        "unspecified": 73.41,
        "male": 70.14,
        "female": 76.79
      },
      "2007": {
        "unspecified": 73.94,
        "female": 77.24,
        "male": 70.73
      },
      "2008": {
        "female": 77.71,
        "unspecified": 74.46,
        "male": 71.31
      },
      "2009": {
        "female": 78.26,
        "male": 71.93,
        "unspecified": 75.05
      },
      "2010": {
        "female": 78.52,
        "unspecified": 75.29,
        "male": 72.14
      },
      "2011": {
        "unspecified": 75.72,
        "male": 72.5,
        "female": 79.02
      },
      "2012": {
        "male": 72.9,
        "unspecified": 76.18,
        "female": 79.54
      },
      "2013": {
        "unspecified": 76.54,
        "male": 73.23,
        "female": 79.93
      },
      "2014": {
        "male": 73.43,
        "female": 80.16,
        "unspecified": 76.76
      },
      "2015": {
        "female": 80.43,
        "male": 73.6,
        "unspecified": 76.97
      },
      "2016": {
        "female": 80.52,
        "unspecified": 77,
        "male": 73.56
      },
      "2017": {
        "male": 73.75,
        "unspecified": 77.23,
        "female": 80.79
      },
      "2018": {
        "unspecified": 77.15,
        "female": 80.74,
        "male": 73.64
      },
      "2019": {
        "unspecified": 76.92,
        "female": 80.64,
        "male": 73.3
      },
      "2020": {
        "unspecified": 76.51,
        "male": 73.24,
        "female": 79.91
      },
      "2021": {
        "male": 71.76,
        "unspecified": 75.29,
        "female": 78.97
      }
    }
  },
  "VNM": {
    "name": "Vietnam",
    "nameTh": "เวียดนาม",
    "years": {
      "2000": {
        "male": 67.64,
        "unspecified": 71.87,
        "female": 76.07
      },
      "2001": {
        "unspecified": 71.98,
        "male": 67.74,
        "female": 76.19
      },
      "2002": {
        "female": 76.29,
        "unspecified": 72.06,
        "male": 67.81
      },
      "2003": {
        "male": 67.85,
        "unspecified": 72.11,
        "female": 76.37
      },
      "2004": {
        "male": 67.88,
        "female": 76.44,
        "unspecified": 72.15
      },
      "2005": {
        "unspecified": 72.18,
        "female": 76.5,
        "male": 67.89
      },
      "2006": {
        "female": 76.57,
        "unspecified": 72.24,
        "male": 67.95
      },
      "2007": {
        "female": 76.67,
        "unspecified": 72.3,
        "male": 67.99
      },
      "2008": {
        "male": 68.03,
        "unspecified": 72.35,
        "female": 76.76
      },
      "2009": {
        "male": 68.06,
        "unspecified": 72.41,
        "female": 76.86
      },
      "2010": {
        "male": 68.13,
        "unspecified": 72.49,
        "female": 76.95
      },
      "2011": {
        "female": 77.09,
        "male": 68.25,
        "unspecified": 72.61
      },
      "2012": {
        "unspecified": 72.74,
        "male": 68.38,
        "female": 77.21
      },
      "2013": {
        "female": 77.31,
        "male": 68.48,
        "unspecified": 72.84
      },
      "2014": {
        "female": 77.4,
        "male": 68.61,
        "unspecified": 72.95
      },
      "2015": {
        "unspecified": 73.03,
        "female": 77.47,
        "male": 68.71
      },
      "2016": {
        "unspecified": 73.21,
        "female": 77.6,
        "male": 68.93
      },
      "2017": {
        "male": 69.15,
        "unspecified": 73.4,
        "female": 77.74
      },
      "2018": {
        "male": 69.34,
        "female": 77.87,
        "unspecified": 73.56
      },
      "2019": {
        "unspecified": 73.71,
        "male": 69.51,
        "female": 78
      },
      "2020": {
        "unspecified": 74.78,
        "female": 79.2,
        "male": 70.41
      },
      "2021": {
        "female": 77.96,
        "male": 69.73,
        "unspecified": 73.8
      }
    }
  },
  "MYS": {
    "name": "Malaysia",
    "nameTh": "มาเลเซีย",
    "years": {
      "2000": {
        "female": 75.48,
        "male": 70.7,
        "unspecified": 73.01
      },
      "2001": {
        "female": 75.9,
        "unspecified": 73.52,
        "male": 71.28
      },
      "2002": {
        "female": 76.01,
        "male": 71.69,
        "unspecified": 73.78
      },
      "2003": {
        "male": 71.46,
        "female": 75.95,
        "unspecified": 73.62
      },
      "2004": {
        "female": 76.16,
        "unspecified": 73.82,
        "male": 71.66
      },
      "2005": {
        "female": 76.29,
        "unspecified": 74.06,
        "male": 72.01
      },
      "2006": {
        "unspecified": 74.3,
        "male": 72.35,
        "female": 76.45
      },
      "2007": {
        "female": 76.59,
        "unspecified": 74.44,
        "male": 72.49
      },
      "2008": {
        "female": 76.47,
        "unspecified": 74.19,
        "male": 72.16
      },
      "2009": {
        "female": 76.31,
        "male": 71.98,
        "unspecified": 74.01
      },
      "2010": {
        "unspecified": 74.03,
        "male": 72.07,
        "female": 76.24
      },
      "2011": {
        "male": 72.28,
        "female": 76.44,
        "unspecified": 74.23
      },
      "2012": {
        "female": 76.74,
        "unspecified": 74.62,
        "male": 72.76
      },
      "2013": {
        "unspecified": 74.72,
        "male": 73.06,
        "female": 76.74
      },
      "2014": {
        "unspecified": 74.65,
        "female": 76.72,
        "male": 72.94
      },
      "2015": {
        "female": 76.44,
        "male": 72.49,
        "unspecified": 74.28
      },
      "2016": {
        "male": 72.58,
        "unspecified": 74.42,
        "female": 76.66
      },
      "2017": {
        "male": 72.68,
        "female": 76.49,
        "unspecified": 74.4
      },
      "2018": {
        "male": 72.61,
        "unspecified": 74.53,
        "female": 76.81
      },
      "2019": {
        "unspecified": 74.68,
        "female": 76.99,
        "male": 72.71
      },
      "2020": {
        "female": 78.61,
        "unspecified": 76.79,
        "male": 75.5
      },
      "2021": {
        "male": 70.64,
        "unspecified": 72.81,
        "female": 75.32
      }
    }
  },
  "SGP": {
    "name": "Singapore",
    "nameTh": "สิงคโปร์",
    "years": {
      "2000": {
        "unspecified": 78.52,
        "female": 80.77,
        "male": 76.26
      },
      "2001": {
        "unspecified": 79.14,
        "male": 76.85,
        "female": 81.42
      },
      "2002": {
        "female": 81.49,
        "male": 77.14,
        "unspecified": 79.34
      },
      "2003": {
        "unspecified": 79.61,
        "female": 81.95,
        "male": 77.24
      },
      "2004": {
        "male": 77.98,
        "female": 82.59,
        "unspecified": 80.34
      },
      "2005": {
        "unspecified": 80.54,
        "male": 78.23,
        "female": 82.76
      },
      "2006": {
        "female": 83.08,
        "male": 78.76,
        "unspecified": 80.98
      },
      "2007": {
        "female": 82.97,
        "unspecified": 80.58,
        "male": 78.11
      },
      "2008": {
        "female": 83.2,
        "male": 78.67,
        "unspecified": 80.98
      },
      "2009": {
        "unspecified": 81.58,
        "male": 79.26,
        "female": 83.82
      },
      "2010": {
        "female": 84.04,
        "male": 79.41,
        "unspecified": 81.76
      },
      "2011": {
        "male": 79.76,
        "unspecified": 81.96,
        "female": 84.09
      },
      "2012": {
        "male": 80.04,
        "female": 84.31,
        "unspecified": 82.22
      },
      "2013": {
        "male": 80.18,
        "female": 84.5,
        "unspecified": 82.37
      },
      "2014": {
        "unspecified": 82.6,
        "male": 80.46,
        "female": 84.71
      },
      "2015": {
        "unspecified": 82.85,
        "male": 80.75,
        "female": 84.92
      },
      "2016": {
        "male": 81.04,
        "female": 85.4,
        "unspecified": 83.24
      },
      "2017": {
        "unspecified": 83.22,
        "male": 81.08,
        "female": 85.34
      },
      "2018": {
        "female": 85.62,
        "unspecified": 83.51,
        "male": 81.4
      },
      "2019": {
        "male": 81.81,
        "unspecified": 83.9,
        "female": 85.98
      },
      "2020": {
        "unspecified": 84,
        "male": 81.69,
        "female": 86.33
      },
      "2021": {
        "female": 86.25,
        "male": 81.58,
        "unspecified": 83.86
      }
    }
  },
  "IDN": {
    "name": "Indonesia",
    "nameTh": "อินโดนีเซีย",
    "years": {
      "2000": {
        "unspecified": 67.21,
        "female": 68.41,
        "male": 65.99
      },
      "2001": {
        "unspecified": 67.44,
        "male": 66.22,
        "female": 68.66
      },
      "2002": {
        "male": 66.37,
        "unspecified": 67.65,
        "female": 68.93
      },
      "2003": {
        "male": 66.51,
        "female": 69.18,
        "unspecified": 67.85
      },
      "2004": {
        "female": 67.27,
        "unspecified": 66.25,
        "male": 65.2
      },
      "2005": {
        "unspecified": 68.23,
        "female": 69.7,
        "male": 66.76
      },
      "2006": {
        "female": 69.88,
        "unspecified": 68.4,
        "male": 66.92
      },
      "2007": {
        "male": 67.07,
        "female": 70.2,
        "unspecified": 68.64
      },
      "2008": {
        "male": 67.23,
        "female": 70.45,
        "unspecified": 68.84
      },
      "2009": {
        "female": 70.68,
        "unspecified": 69.02,
        "male": 67.37
      },
      "2010": {
        "female": 70.93,
        "unspecified": 69.24,
        "male": 67.54
      },
      "2011": {
        "unspecified": 69.52,
        "male": 67.82,
        "female": 71.23
      },
      "2012": {
        "unspecified": 69.79,
        "female": 71.52,
        "male": 68.07
      },
      "2013": {
        "female": 71.8,
        "male": 68.32,
        "unspecified": 70.05
      },
      "2014": {
        "unspecified": 70.3,
        "male": 68.54,
        "female": 72.07
      },
      "2015": {
        "female": 72.32,
        "male": 68.76,
        "unspecified": 70.54
      },
      "2016": {
        "female": 72.57,
        "male": 68.99,
        "unspecified": 70.78
      },
      "2017": {
        "male": 69.2,
        "unspecified": 71,
        "female": 72.81
      },
      "2018": {
        "unspecified": 71.18,
        "male": 69.36,
        "female": 73
      },
      "2019": {
        "female": 73.26,
        "male": 69.55,
        "unspecified": 71.4
      },
      "2020": {
        "unspecified": 69.7,
        "female": 71.89,
        "male": 67.6
      },
      "2021": {
        "unspecified": 68.26,
        "male": 66.41,
        "female": 70.18
      }
    }
  },
  "PHL": {
    "name": "Philippines",
    "nameTh": "ฟิลิปปินส์",
    "years": {
      "2000": {
        "unspecified": 69.97,
        "female": 74,
        "male": 66.38
      },
      "2001": {
        "female": 73.82,
        "male": 65.93,
        "unspecified": 69.63
      },
      "2002": {
        "female": 73.5,
        "unspecified": 69.42,
        "male": 65.8
      },
      "2003": {
        "male": 65.69,
        "unspecified": 69.52,
        "female": 73.9
      },
      "2004": {
        "unspecified": 69.29,
        "male": 65.57,
        "female": 73.51
      },
      "2005": {
        "male": 65.54,
        "female": 73.72,
        "unspecified": 69.36
      },
      "2006": {
        "male": 65.33,
        "unspecified": 69.23,
        "female": 73.68
      },
      "2007": {
        "unspecified": 69.58,
        "female": 74.05,
        "male": 65.66
      },
      "2008": {
        "male": 65.63,
        "female": 74,
        "unspecified": 69.55
      },
      "2009": {
        "unspecified": 69.4,
        "male": 65.42,
        "female": 73.93
      },
      "2010": {
        "unspecified": 69.69,
        "male": 65.71,
        "female": 74.18
      },
      "2011": {
        "unspecified": 69.78,
        "male": 65.91,
        "female": 74.13
      },
      "2012": {
        "male": 65.75,
        "female": 73.79,
        "unspecified": 69.54
      },
      "2013": {
        "female": 73.66,
        "unspecified": 69.45,
        "male": 65.69
      },
      "2014": {
        "unspecified": 69.8,
        "female": 74.07,
        "male": 66
      },
      "2015": {
        "unspecified": 69.52,
        "male": 65.81,
        "female": 73.68
      },
      "2016": {
        "unspecified": 69.25,
        "male": 65.62,
        "female": 73.31
      },
      "2017": {
        "female": 73.74,
        "male": 65.99,
        "unspecified": 69.64
      },
      "2018": {
        "unspecified": 69.68,
        "female": 73.46,
        "male": 66.28
      },
      "2019": {
        "female": 73.22,
        "male": 66.05,
        "unspecified": 69.43
      },
      "2020": {
        "unspecified": 69.64,
        "female": 73.82,
        "male": 65.99
      },
      "2021": {
        "male": 63.4,
        "unspecified": 66.41,
        "female": 69.88
      }
    }
  },
  "MMR": {
    "name": "Myanmar",
    "nameTh": "เมียนมา",
    "years": {
      "2000": {
        "female": 61.87,
        "unspecified": 59.38,
        "male": 57.02
      },
      "2001": {
        "unspecified": 59.78,
        "male": 57.41,
        "female": 62.27
      },
      "2002": {
        "unspecified": 60.2,
        "female": 62.73,
        "male": 57.79
      },
      "2003": {
        "male": 58.26,
        "female": 63.13,
        "unspecified": 60.64
      },
      "2004": {
        "female": 63.66,
        "male": 58.6,
        "unspecified": 61.07
      },
      "2005": {
        "unspecified": 61.62,
        "female": 64.28,
        "male": 59.08
      },
      "2006": {
        "female": 64.84,
        "unspecified": 62.16,
        "male": 59.59
      },
      "2007": {
        "male": 60.13,
        "female": 65.54,
        "unspecified": 62.78
      },
      "2008": {
        "male": 55.57,
        "female": 58.24,
        "unspecified": 56.91
      },
      "2009": {
        "unspecified": 63.99,
        "female": 66.94,
        "male": 61.18
      },
      "2010": {
        "female": 67.7,
        "male": 61.74,
        "unspecified": 64.64
      },
      "2011": {
        "unspecified": 65.23,
        "male": 62.19,
        "female": 68.45
      },
      "2012": {
        "female": 69.17,
        "unspecified": 65.87,
        "male": 62.75
      },
      "2013": {
        "male": 63.34,
        "female": 69.73,
        "unspecified": 66.45
      },
      "2014": {
        "unspecified": 67.04,
        "male": 63.94,
        "female": 70.3
      },
      "2015": {
        "male": 64.3,
        "female": 70.71,
        "unspecified": 67.43
      },
      "2016": {
        "female": 71.12,
        "unspecified": 67.86,
        "male": 64.75
      },
      "2017": {
        "female": 71.29,
        "unspecified": 67.95,
        "male": 64.76
      },
      "2018": {
        "unspecified": 68.56,
        "female": 71.79,
        "male": 65.45
      },
      "2019": {
        "male": 65.69,
        "unspecified": 68.81,
        "female": 72.04
      },
      "2020": {
        "male": 65.65,
        "unspecified": 68.87,
        "female": 72.26
      },
      "2021": {
        "female": 71.15,
        "unspecified": 67.85,
        "male": 64.71
      }
    }
  },
  "KHM": {
    "name": "Cambodia",
    "nameTh": "กัมพูชา",
    "years": {
      "2000": {
        "unspecified": 59.1,
        "female": 61.18,
        "male": 56.78
      },
      "2001": {
        "female": 62.18,
        "male": 57.63,
        "unspecified": 60.03
      },
      "2002": {
        "male": 58.54,
        "unspecified": 60.99,
        "female": 63.2
      },
      "2003": {
        "male": 59.38,
        "unspecified": 61.89,
        "female": 64.17
      },
      "2004": {
        "male": 60.15,
        "unspecified": 62.73,
        "female": 65.09
      },
      "2005": {
        "male": 60.93,
        "unspecified": 63.58,
        "female": 66
      },
      "2006": {
        "female": 66.88,
        "male": 61.69,
        "unspecified": 64.39
      },
      "2007": {
        "male": 62.31,
        "female": 67.64,
        "unspecified": 65.08
      },
      "2008": {
        "male": 62.92,
        "female": 68.38,
        "unspecified": 65.75
      },
      "2009": {
        "male": 63.4,
        "unspecified": 66.29,
        "female": 68.98
      },
      "2010": {
        "male": 63.81,
        "unspecified": 66.74,
        "female": 69.49
      },
      "2011": {
        "male": 64.35,
        "unspecified": 67.25,
        "female": 69.99
      },
      "2012": {
        "male": 64.82,
        "unspecified": 67.72,
        "female": 70.46
      },
      "2013": {
        "female": 70.8,
        "male": 65.23,
        "unspecified": 68.09
      },
      "2014": {
        "unspecified": 68.41,
        "female": 71.1,
        "male": 65.57
      },
      "2015": {
        "female": 71.36,
        "unspecified": 68.67,
        "male": 65.84
      },
      "2016": {
        "female": 71.57,
        "unspecified": 68.91,
        "male": 66.12
      },
      "2017": {
        "unspecified": 69.13,
        "female": 71.78,
        "male": 66.36
      },
      "2018": {
        "unspecified": 69.36,
        "male": 66.63,
        "female": 71.98
      },
      "2019": {
        "male": 66.87,
        "unspecified": 69.56,
        "female": 72.16
      },
      "2020": {
        "unspecified": 69.84,
        "female": 72.52,
        "male": 67.09
      },
      "2021": {
        "female": 71.45,
        "male": 66.35,
        "unspecified": 68.92
      }
    }
  },
  "LAO": {
    "name": "Laos",
    "nameTh": "ลาว",
    "years": {
      "2000": {
        "male": 56.46,
        "unspecified": 58.28,
        "female": 60.18
      },
      "2001": {
        "female": 60.82,
        "unspecified": 58.89,
        "male": 57.04
      },
      "2002": {
        "female": 61.57,
        "unspecified": 59.61,
        "male": 57.75
      },
      "2003": {
        "female": 62.25,
        "male": 58.26,
        "unspecified": 60.2
      },
      "2004": {
        "male": 58.75,
        "female": 62.87,
        "unspecified": 60.74
      },
      "2005": {
        "male": 59.32,
        "unspecified": 61.35,
        "female": 63.53
      },
      "2006": {
        "female": 64.24,
        "male": 59.89,
        "unspecified": 61.98
      },
      "2007": {
        "female": 64.88,
        "male": 60.49,
        "unspecified": 62.61
      },
      "2008": {
        "male": 61.05,
        "unspecified": 63.19,
        "female": 65.49
      },
      "2009": {
        "female": 66.14,
        "male": 61.62,
        "unspecified": 63.8
      },
      "2010": {
        "female": 66.82,
        "unspecified": 64.42,
        "male": 62.2
      },
      "2011": {
        "male": 62.83,
        "female": 67.41,
        "unspecified": 65.04
      },
      "2012": {
        "unspecified": 65.53,
        "female": 67.9,
        "male": 63.32
      },
      "2013": {
        "male": 63.76,
        "unspecified": 65.97,
        "female": 68.34
      },
      "2014": {
        "male": 64.24,
        "unspecified": 66.43,
        "female": 68.8
      },
      "2015": {
        "male": 64.66,
        "unspecified": 66.87,
        "female": 69.26
      },
      "2016": {
        "unspecified": 67.33,
        "female": 69.71,
        "male": 65.12
      },
      "2017": {
        "female": 70.08,
        "unspecified": 67.72,
        "male": 65.52
      },
      "2018": {
        "unspecified": 68.05,
        "male": 65.87,
        "female": 70.39
      },
      "2019": {
        "male": 66.14,
        "unspecified": 68.36,
        "female": 70.72
      },
      "2020": {
        "female": 71.58,
        "unspecified": 68.74,
        "male": 66.2
      },
      "2021": {
        "male": 66.09,
        "unspecified": 68.23,
        "female": 70.51
      }
    }
  },
  "BRN": {
    "name": "Brunei",
    "nameTh": "บรูไน",
    "years": {
      "2000": {
        "unspecified": 75.51,
        "female": 77.11,
        "male": 74.11
      },
      "2001": {
        "female": 77.16,
        "male": 74.38,
        "unspecified": 75.68
      },
      "2002": {
        "female": 77.28,
        "male": 74.68,
        "unspecified": 75.91
      },
      "2003": {
        "female": 77.46,
        "unspecified": 76.11,
        "male": 74.89
      },
      "2004": {
        "unspecified": 76.3,
        "male": 75.05,
        "female": 77.68
      },
      "2005": {
        "male": 75.17,
        "female": 77.93,
        "unspecified": 76.48
      },
      "2006": {
        "male": 75.23,
        "unspecified": 76.58,
        "female": 78.1
      },
      "2007": {
        "male": 75.3,
        "unspecified": 76.66,
        "female": 78.18
      },
      "2008": {
        "unspecified": 76.72,
        "male": 75.36,
        "female": 78.21
      },
      "2009": {
        "female": 78.36,
        "unspecified": 76.88,
        "male": 75.51
      },
      "2010": {
        "unspecified": 76.97,
        "female": 78.43,
        "male": 75.61
      },
      "2011": {
        "male": 75.6,
        "unspecified": 76.99,
        "female": 78.47
      },
      "2012": {
        "male": 75.48,
        "female": 78.39,
        "unspecified": 76.9
      },
      "2013": {
        "unspecified": 76.82,
        "male": 75.39,
        "female": 78.33
      },
      "2014": {
        "female": 78.1,
        "male": 75.28,
        "unspecified": 76.66
      },
      "2015": {
        "unspecified": 76.56,
        "male": 75.24,
        "female": 77.93
      },
      "2016": {
        "unspecified": 76.42,
        "female": 77.72,
        "male": 75.16
      },
      "2017": {
        "unspecified": 76.41,
        "female": 77.7,
        "male": 75.16
      },
      "2018": {
        "unspecified": 76.41,
        "male": 75.17,
        "female": 77.7
      },
      "2019": {
        "female": 78.16,
        "male": 75.25,
        "unspecified": 76.68
      },
      "2020": {
        "female": 78.29,
        "male": 75.29,
        "unspecified": 76.76
      },
      "2021": {
        "female": 78.57,
        "unspecified": 76.92,
        "male": 75.34
      }
    }
  },
  "USA": {
    "name": "United States",
    "nameTh": "สหรัฐอเมริกา",
    "years": {
      "2000": {
        "female": 79.06,
        "unspecified": 76.66,
        "male": 74.16
      },
      "2001": {
        "male": 74.28,
        "unspecified": 76.75,
        "female": 79.14
      },
      "2002": {
        "male": 74.4,
        "female": 79.22,
        "unspecified": 76.85
      },
      "2003": {
        "male": 74.57,
        "female": 79.33,
        "unspecified": 76.99
      },
      "2004": {
        "female": 79.7,
        "male": 75.02,
        "unspecified": 77.4
      },
      "2005": {
        "unspecified": 77.38,
        "male": 75.01,
        "female": 79.7
      },
      "2006": {
        "unspecified": 77.68,
        "male": 75.31,
        "female": 79.99
      },
      "2007": {
        "unspecified": 77.94,
        "male": 75.59,
        "female": 80.23
      },
      "2008": {
        "female": 80.28,
        "male": 75.76,
        "unspecified": 78.05
      },
      "2009": {
        "unspecified": 78.42,
        "male": 76.16,
        "female": 80.63
      },
      "2010": {
        "male": 76.37,
        "unspecified": 78.61,
        "female": 80.79
      },
      "2011": {
        "unspecified": 78.65,
        "female": 80.8,
        "male": 76.47
      },
      "2012": {
        "unspecified": 78.77,
        "male": 76.6,
        "female": 80.91
      },
      "2013": {
        "male": 76.61,
        "unspecified": 78.76,
        "female": 80.89
      },
      "2014": {
        "male": 76.67,
        "unspecified": 78.8,
        "female": 80.93
      },
      "2015": {
        "male": 76.48,
        "female": 80.76,
        "unspecified": 78.61
      },
      "2016": {
        "male": 76.37,
        "unspecified": 78.56,
        "female": 80.77
      },
      "2017": {
        "male": 76.31,
        "female": 80.73,
        "unspecified": 78.5
      },
      "2018": {
        "unspecified": 78.63,
        "male": 76.44,
        "female": 80.86
      },
      "2019": {
        "female": 80.98,
        "male": 76.53,
        "unspecified": 78.74
      },
      "2020": {
        "female": 79.51,
        "male": 74.38,
        "unspecified": 76.89
      },
      "2021": {
        "male": 73.72,
        "unspecified": 76.37,
        "female": 79.15
      }
    }
  },
  "GBR": {
    "name": "United Kingdom",
    "nameTh": "สหราชอาณาจักร",
    "years": {
      "2000": {
        "unspecified": 77.86,
        "female": 80.09,
        "male": 75.49
      },
      "2001": {
        "unspecified": 77.95,
        "male": 75.61,
        "female": 80.18
      },
      "2002": {
        "male": 75.77,
        "unspecified": 78.08,
        "female": 80.29
      },
      "2003": {
        "female": 80.22,
        "male": 75.98,
        "unspecified": 78.15
      },
      "2004": {
        "female": 80.74,
        "male": 76.52,
        "unspecified": 78.68
      },
      "2005": {
        "male": 76.81,
        "unspecified": 78.91,
        "female": 80.93
      },
      "2006": {
        "male": 77.12,
        "unspecified": 79.23,
        "female": 81.24
      },
      "2007": {
        "male": 77.36,
        "female": 81.4,
        "unspecified": 79.42
      },
      "2008": {
        "male": 77.55,
        "unspecified": 79.54,
        "female": 81.45
      },
      "2009": {
        "unspecified": 80.03,
        "male": 78.02,
        "female": 81.97
      },
      "2010": {
        "male": 78.34,
        "female": 82.09,
        "unspecified": 80.25
      },
      "2011": {
        "unspecified": 80.64,
        "male": 78.76,
        "female": 82.45
      },
      "2012": {
        "female": 82.34,
        "male": 78.88,
        "unspecified": 80.64
      },
      "2013": {
        "male": 78.9,
        "unspecified": 80.69,
        "female": 82.41
      },
      "2014": {
        "female": 82.65,
        "male": 79.17,
        "unspecified": 80.94
      },
      "2015": {
        "female": 82.34,
        "male": 78.93,
        "unspecified": 80.66
      },
      "2016": {
        "female": 82.49,
        "unspecified": 80.81,
        "male": 79.09
      },
      "2017": {
        "male": 79.2,
        "female": 82.62,
        "unspecified": 80.92
      },
      "2018": {
        "unspecified": 80.62,
        "male": 78.9,
        "female": 82.33
      },
      "2019": {
        "unspecified": 81.22,
        "male": 79.5,
        "female": 82.92
      },
      "2020": {
        "male": 78.26,
        "female": 82.03,
        "unspecified": 80.14
      },
      "2021": {
        "unspecified": 80.1,
        "female": 81.93,
        "male": 78.27
      }
    }
  },
  "DEU": {
    "name": "Germany",
    "nameTh": "เยอรมนี",
    "years": {
      "2000": {
        "male": 75.04,
        "unspecified": 78.11,
        "female": 80.92
      },
      "2001": {
        "female": 81.18,
        "male": 75.48,
        "unspecified": 78.44
      },
      "2002": {
        "female": 81.1,
        "unspecified": 78.46,
        "male": 75.62
      },
      "2003": {
        "male": 75.66,
        "female": 81.1,
        "unspecified": 78.46
      },
      "2004": {
        "unspecified": 79.03,
        "female": 81.59,
        "male": 76.32
      },
      "2005": {
        "female": 81.72,
        "unspecified": 79.21,
        "male": 76.57
      },
      "2006": {
        "unspecified": 79.6,
        "female": 82.07,
        "male": 77.02
      },
      "2007": {
        "male": 77.21,
        "unspecified": 79.79,
        "female": 82.27
      },
      "2008": {
        "female": 82.26,
        "male": 77.41,
        "unspecified": 79.88
      },
      "2009": {
        "unspecified": 79.99,
        "male": 77.55,
        "female": 82.37
      },
      "2010": {
        "female": 82.54,
        "unspecified": 80.18,
        "male": 77.78
      },
      "2011": {
        "female": 82.75,
        "unspecified": 80.46,
        "male": 78.13
      },
      "2012": {
        "unspecified": 80.59,
        "female": 82.84,
        "male": 78.32
      },
      "2013": {
        "unspecified": 80.29,
        "male": 77.94,
        "female": 82.59
      },
      "2014": {
        "unspecified": 80.76,
        "female": 83.07,
        "male": 78.41
      },
      "2015": {
        "female": 82.71,
        "unspecified": 80.43,
        "male": 78.12
      },
      "2016": {
        "male": 78.35,
        "unspecified": 80.69,
        "female": 83
      },
      "2017": {
        "unspecified": 80.75,
        "male": 78.51,
        "female": 82.97
      },
      "2018": {
        "male": 78.42,
        "unspecified": 80.65,
        "female": 82.86
      },
      "2019": {
        "male": 78.75,
        "unspecified": 80.97,
        "female": 83.19
      },
      "2020": {
        "unspecified": 80.8,
        "female": 83.08,
        "male": 78.52
      },
      "2021": {
        "female": 82.86,
        "male": 78.15,
        "unspecified": 80.49
      }
    }
  },
  "FRA": {
    "name": "France",
    "nameTh": "ฝรั่งเศส",
    "years": {
      "2000": {
        "unspecified": 78.91,
        "male": 75.24,
        "female": 82.52
      },
      "2001": {
        "unspecified": 79.01,
        "male": 75.39,
        "female": 82.56
      },
      "2002": {
        "female": 82.57,
        "unspecified": 79.14,
        "male": 75.64
      },
      "2003": {
        "male": 75.71,
        "female": 82.39,
        "unspecified": 79.09
      },
      "2004": {
        "male": 76.59,
        "female": 83.27,
        "unspecified": 80
      },
      "2005": {
        "unspecified": 80,
        "male": 76.64,
        "female": 83.25
      },
      "2006": {
        "unspecified": 80.53,
        "female": 83.78,
        "male": 77.14
      },
      "2007": {
        "unspecified": 80.8,
        "female": 84.06,
        "male": 77.4
      },
      "2008": {
        "female": 84.01,
        "unspecified": 80.87,
        "male": 77.6
      },
      "2009": {
        "female": 84.17,
        "male": 77.78,
        "unspecified": 81.04
      },
      "2010": {
        "unspecified": 81.22,
        "male": 77.96,
        "female": 84.34
      },
      "2011": {
        "male": 78.36,
        "unspecified": 81.58,
        "female": 84.66
      },
      "2012": {
        "male": 78.49,
        "female": 84.53,
        "unspecified": 81.58
      },
      "2013": {
        "male": 78.78,
        "unspecified": 81.82,
        "female": 84.72
      },
      "2014": {
        "unspecified": 82.25,
        "female": 85.06,
        "male": 79.28
      },
      "2015": {
        "unspecified": 81.91,
        "female": 84.72,
        "male": 78.96
      },
      "2016": {
        "female": 84.89,
        "unspecified": 82.13,
        "male": 79.24
      },
      "2017": {
        "male": 79.41,
        "unspecified": 82.17,
        "female": 84.81
      },
      "2018": {
        "unspecified": 82.38,
        "male": 79.58,
        "female": 85.04
      },
      "2019": {
        "female": 85.15,
        "unspecified": 82.53,
        "male": 79.77
      },
      "2020": {
        "female": 84.6,
        "unspecified": 81.87,
        "male": 79.06
      },
      "2021": {
        "male": 79.08,
        "female": 84.69,
        "unspecified": 81.92
      }
    }
  },
  "ITA": {
    "name": "Italy",
    "nameTh": "อิตาลี",
    "years": {
      "2000": {
        "male": 76.41,
        "unspecified": 79.37,
        "female": 82.15
      },
      "2001": {
        "unspecified": 79.68,
        "male": 76.7,
        "female": 82.47
      },
      "2002": {
        "male": 77.01,
        "unspecified": 79.96,
        "female": 82.71
      },
      "2003": {
        "unspecified": 79.82,
        "male": 77.02,
        "female": 82.45
      },
      "2004": {
        "female": 83.16,
        "male": 77.7,
        "unspecified": 80.53
      },
      "2005": {
        "unspecified": 80.51,
        "male": 77.78,
        "female": 83.06
      },
      "2006": {
        "female": 83.62,
        "male": 78.31,
        "unspecified": 81.06
      },
      "2007": {
        "male": 78.51,
        "unspecified": 81.18,
        "female": 83.65
      },
      "2008": {
        "unspecified": 81.37,
        "female": 83.8,
        "male": 78.75
      },
      "2009": {
        "female": 83.87,
        "male": 78.98,
        "unspecified": 81.52
      },
      "2010": {
        "male": 79.38,
        "unspecified": 81.9,
        "female": 84.22
      },
      "2011": {
        "male": 79.35,
        "female": 84.12,
        "unspecified": 81.83
      },
      "2012": {
        "unspecified": 81.84,
        "male": 79.44,
        "female": 84.06
      },
      "2013": {
        "unspecified": 82.29,
        "male": 79.9,
        "female": 84.5
      },
      "2014": {
        "female": 84.75,
        "male": 80.29,
        "unspecified": 82.61
      },
      "2015": {
        "female": 84.26,
        "unspecified": 82.2,
        "male": 80
      },
      "2016": {
        "female": 84.87,
        "male": 80.7,
        "unspecified": 82.87
      },
      "2017": {
        "female": 84.51,
        "unspecified": 82.52,
        "male": 80.39
      },
      "2018": {
        "female": 84.77,
        "unspecified": 82.78,
        "male": 80.66
      },
      "2019": {
        "female": 84.91,
        "unspecified": 82.99,
        "male": 80.94
      },
      "2020": {
        "male": 79.76,
        "unspecified": 81.94,
        "female": 84.05
      },
      "2021": {
        "female": 84.33,
        "unspecified": 82.2,
        "male": 79.98
      }
    }
  },
  "ESP": {
    "name": "Spain",
    "nameTh": "สเปน",
    "years": {
      "2000": {
        "unspecified": 79.09,
        "male": 75.69,
        "female": 82.48
      },
      "2001": {
        "female": 82.76,
        "unspecified": 79.39,
        "male": 76.02
      },
      "2002": {
        "male": 76.16,
        "unspecified": 79.49,
        "female": 82.81
      },
      "2003": {
        "female": 82.65,
        "unspecified": 79.41,
        "male": 76.17
      },
      "2004": {
        "male": 76.73,
        "female": 83.25,
        "unspecified": 80
      },
      "2005": {
        "unspecified": 80.01,
        "male": 76.8,
        "female": 83.22
      },
      "2006": {
        "male": 77.51,
        "unspecified": 80.67,
        "female": 83.82
      },
      "2007": {
        "unspecified": 80.68,
        "female": 83.78,
        "male": 77.56
      },
      "2008": {
        "male": 77.98,
        "female": 83.95,
        "unspecified": 80.97
      },
      "2009": {
        "unspecified": 81.33,
        "male": 78.39,
        "female": 84.24
      },
      "2010": {
        "male": 78.76,
        "unspecified": 81.69,
        "female": 84.58
      },
      "2011": {
        "male": 78.96,
        "unspecified": 81.81,
        "female": 84.62
      },
      "2012": {
        "female": 84.71,
        "unspecified": 81.96,
        "male": 79.16
      },
      "2013": {
        "unspecified": 82.48,
        "female": 85.15,
        "male": 79.73
      },
      "2014": {
        "female": 85.21,
        "male": 79.88,
        "unspecified": 82.58
      },
      "2015": {
        "female": 84.94,
        "unspecified": 82.33,
        "male": 79.66
      },
      "2016": {
        "unspecified": 82.73,
        "male": 80.04,
        "female": 85.36
      },
      "2017": {
        "male": 80.08,
        "female": 85.21,
        "unspecified": 82.68
      },
      "2018": {
        "male": 80.15,
        "unspecified": 82.77,
        "female": 85.32
      },
      "2019": {
        "male": 80.54,
        "unspecified": 83.14,
        "female": 85.66
      },
      "2020": {
        "unspecified": 81.92,
        "male": 79.32,
        "female": 84.51
      },
      "2021": {
        "male": 79.99,
        "unspecified": 82.66,
        "female": 85.3
      }
    }
  },
  "CAN": {
    "name": "Canada",
    "nameTh": "แคนาดา",
    "years": {
      "2000": {
        "male": 76.53,
        "unspecified": 79.09,
        "female": 81.54
      },
      "2001": {
        "female": 81.71,
        "male": 76.8,
        "unspecified": 79.31
      },
      "2002": {
        "female": 81.7,
        "male": 77.03,
        "unspecified": 79.42
      },
      "2003": {
        "male": 77.16,
        "female": 81.89,
        "unspecified": 79.58
      },
      "2004": {
        "female": 82.08,
        "male": 77.51,
        "unspecified": 79.85
      },
      "2005": {
        "male": 77.64,
        "unspecified": 79.95,
        "female": 82.15
      },
      "2006": {
        "male": 78.1,
        "female": 82.53,
        "unspecified": 80.37
      },
      "2007": {
        "male": 78.13,
        "unspecified": 80.38,
        "female": 82.54
      },
      "2008": {
        "unspecified": 80.56,
        "female": 82.66,
        "male": 78.36
      },
      "2009": {
        "unspecified": 80.88,
        "male": 78.74,
        "female": 82.92
      },
      "2010": {
        "unspecified": 81.14,
        "female": 83.14,
        "male": 79.05
      },
      "2011": {
        "female": 83.3,
        "male": 79.41,
        "unspecified": 81.4
      },
      "2012": {
        "male": 79.51,
        "female": 83.39,
        "unspecified": 81.49
      },
      "2013": {
        "female": 83.42,
        "unspecified": 81.56,
        "male": 79.62
      },
      "2014": {
        "male": 79.65,
        "female": 83.47,
        "unspecified": 81.59
      },
      "2015": {
        "male": 79.76,
        "female": 83.48,
        "unspecified": 81.65
      },
      "2016": {
        "female": 83.59,
        "unspecified": 81.74,
        "male": 79.85
      },
      "2017": {
        "female": 83.62,
        "male": 79.76,
        "unspecified": 81.71
      },
      "2018": {
        "female": 83.61,
        "male": 79.84,
        "unspecified": 81.73
      },
      "2019": {
        "male": 80.12,
        "unspecified": 82.02,
        "female": 83.9
      },
      "2020": {
        "unspecified": 81.3,
        "male": 79.28,
        "female": 83.32
      },
      "2021": {
        "male": 79.37,
        "unspecified": 81.58,
        "female": 83.81
      }
    }
  },
  "AUS": {
    "name": "Australia",
    "nameTh": "ออสเตรเลีย",
    "years": {
      "2000": {
        "male": 77.12,
        "female": 82.24,
        "unspecified": 79.7
      },
      "2001": {
        "female": 82.62,
        "male": 77.6,
        "unspecified": 80.13
      },
      "2002": {
        "male": 77.79,
        "female": 82.55,
        "unspecified": 80.19
      },
      "2003": {
        "unspecified": 80.57,
        "female": 82.9,
        "male": 78.2
      },
      "2004": {
        "male": 78.42,
        "female": 83.05,
        "unspecified": 80.76
      },
      "2005": {
        "unspecified": 80.84,
        "male": 78.53,
        "female": 83.12
      },
      "2006": {
        "unspecified": 81.04,
        "male": 78.79,
        "female": 83.27
      },
      "2007": {
        "male": 79.22,
        "female": 83.5,
        "unspecified": 81.37
      },
      "2008": {
        "female": 83.45,
        "male": 79.18,
        "unspecified": 81.32
      },
      "2009": {
        "female": 83.86,
        "male": 79.63,
        "unspecified": 81.75
      },
      "2010": {
        "unspecified": 81.91,
        "female": 83.99,
        "male": 79.84
      },
      "2011": {
        "male": 79.9,
        "female": 83.95,
        "unspecified": 81.93
      },
      "2012": {
        "unspecified": 82.27,
        "male": 80.36,
        "female": 84.16
      },
      "2013": {
        "male": 80.53,
        "unspecified": 82.46,
        "female": 84.38
      },
      "2014": {
        "unspecified": 82.37,
        "female": 84.22,
        "male": 80.51
      },
      "2015": {
        "female": 84.17,
        "male": 80.41,
        "unspecified": 82.29
      },
      "2016": {
        "unspecified": 82.59,
        "female": 84.5,
        "male": 80.69
      },
      "2017": {
        "female": 84.52,
        "male": 80.84,
        "unspecified": 82.68
      },
      "2018": {
        "male": 81.16,
        "female": 84.88,
        "unspecified": 83.02
      },
      "2019": {
        "unspecified": 82.64,
        "female": 84.57,
        "male": 80.72
      },
      "2020": {
        "unspecified": 83.37,
        "male": 81.5,
        "female": 85.23
      },
      "2021": {
        "female": 84.9,
        "unspecified": 83.1,
        "male": 81.31
      }
    }
  },
  "JPN": {
    "name": "Japan",
    "nameTh": "ญี่ปุ่น",
    "years": {
      "2000": {
        "female": 84.8,
        "unspecified": 81.53,
        "male": 78.08
      },
      "2001": {
        "male": 78.41,
        "unspecified": 81.84,
        "female": 85.09
      },
      "2002": {
        "male": 78.67,
        "female": 85.34,
        "unspecified": 82.1
      },
      "2003": {
        "male": 78.71,
        "female": 85.4,
        "unspecified": 82.14
      },
      "2004": {
        "female": 85.58,
        "male": 78.98,
        "unspecified": 82.37
      },
      "2005": {
        "unspecified": 82.24,
        "female": 85.48,
        "male": 78.84
      },
      "2006": {
        "male": 79.27,
        "female": 85.75,
        "unspecified": 82.59
      },
      "2007": {
        "male": 79.46,
        "female": 85.9,
        "unspecified": 82.76
      },
      "2008": {
        "male": 79.57,
        "unspecified": 82.83,
        "female": 85.95
      },
      "2009": {
        "unspecified": 83.16,
        "male": 79.88,
        "female": 86.29
      },
      "2010": {
        "male": 79.87,
        "unspecified": 83.08,
        "female": 86.18
      },
      "2011": {
        "female": 85.73,
        "male": 79.8,
        "unspecified": 82.83
      },
      "2012": {
        "male": 80.28,
        "female": 86.27,
        "unspecified": 83.33
      },
      "2013": {
        "female": 86.45,
        "unspecified": 83.56,
        "male": 80.56
      },
      "2014": {
        "male": 80.85,
        "unspecified": 83.79,
        "female": 86.63
      },
      "2015": {
        "unspecified": 84,
        "male": 81.09,
        "female": 86.8
      },
      "2016": {
        "female": 86.92,
        "unspecified": 84.16,
        "male": 81.29
      },
      "2017": {
        "unspecified": 84.26,
        "female": 87.02,
        "male": 81.4
      },
      "2018": {
        "female": 87.06,
        "male": 81.56,
        "unspecified": 84.35
      },
      "2019": {
        "male": 81.7,
        "unspecified": 84.47,
        "female": 87.15
      },
      "2020": {
        "unspecified": 84.66,
        "female": 87.37,
        "male": 81.88
      },
      "2021": {
        "unspecified": 84.46,
        "female": 87.16,
        "male": 81.71
      }
    }
  },
  "KOR": {
    "name": "South Korea",
    "nameTh": "เกาหลีใต้",
    "years": {
      "2000": {
        "unspecified": 75.86,
        "female": 79.35,
        "male": 72.24
      },
      "2001": {
        "male": 72.98,
        "unspecified": 76.57,
        "female": 80
      },
      "2002": {
        "female": 80.24,
        "unspecified": 76.94,
        "male": 73.48
      },
      "2003": {
        "male": 73.97,
        "unspecified": 77.44,
        "female": 80.74
      },
      "2004": {
        "unspecified": 77.93,
        "female": 81.22,
        "male": 74.47
      },
      "2005": {
        "female": 81.53,
        "unspecified": 78.37,
        "male": 75.01
      },
      "2006": {
        "male": 75.6,
        "female": 82.12,
        "unspecified": 78.97
      },
      "2007": {
        "unspecified": 79.38,
        "male": 76.03,
        "female": 82.49
      },
      "2008": {
        "male": 76.45,
        "female": 83.12,
        "unspecified": 79.91
      },
      "2009": {
        "male": 76.9,
        "female": 83.56,
        "unspecified": 80.36
      },
      "2010": {
        "female": 83.76,
        "male": 77.07,
        "unspecified": 80.54
      },
      "2011": {
        "female": 84.16,
        "male": 77.5,
        "unspecified": 80.95
      },
      "2012": {
        "male": 77.74,
        "female": 84.28,
        "unspecified": 81.13
      },
      "2013": {
        "male": 78.33,
        "unspecified": 81.69,
        "female": 84.77
      },
      "2014": {
        "female": 85.23,
        "male": 78.81,
        "unspecified": 82.16
      },
      "2015": {
        "male": 79.14,
        "female": 85.38,
        "unspecified": 82.4
      },
      "2016": {
        "female": 85.66,
        "unspecified": 82.73,
        "male": 79.53
      },
      "2017": {
        "unspecified": 83.09,
        "male": 79.94,
        "female": 85.98
      },
      "2018": {
        "female": 86.03,
        "unspecified": 83.15,
        "male": 80.03
      },
      "2019": {
        "male": 80.56,
        "female": 86.56,
        "unspecified": 83.69
      },
      "2020": {
        "female": 86.64,
        "unspecified": 83.8,
        "male": 80.7
      },
      "2021": {
        "unspecified": 83.8,
        "male": 80.71,
        "female": 86.66
      }
    }
  },
  "CHN": {
    "name": "China",
    "nameTh": "จีน",
    "years": {
      "2000": {
        "unspecified": 70.84,
        "male": 68.59,
        "female": 73.33
      },
      "2001": {
        "male": 68.86,
        "unspecified": 71.13,
        "female": 73.67
      },
      "2002": {
        "male": 69.14,
        "female": 74.05,
        "unspecified": 71.45
      },
      "2003": {
        "unspecified": 71.69,
        "male": 69.34,
        "female": 74.35
      },
      "2004": {
        "female": 74.64,
        "male": 69.55,
        "unspecified": 71.93
      },
      "2005": {
        "unspecified": 72.44,
        "male": 70.02,
        "female": 75.19
      },
      "2006": {
        "unspecified": 73.29,
        "male": 70.81,
        "female": 76.09
      },
      "2007": {
        "unspecified": 73.84,
        "male": 71.29,
        "female": 76.72
      },
      "2008": {
        "unspecified": 74,
        "female": 76.9,
        "male": 71.44
      },
      "2009": {
        "male": 71.74,
        "female": 77.4,
        "unspecified": 74.39
      },
      "2010": {
        "unspecified": 74.65,
        "female": 77.72,
        "male": 71.98
      },
      "2011": {
        "unspecified": 75.04,
        "male": 72.35,
        "female": 78.1
      },
      "2012": {
        "male": 72.7,
        "unspecified": 75.48,
        "female": 78.67
      },
      "2013": {
        "unspecified": 75.84,
        "male": 73.04,
        "female": 79.07
      },
      "2014": {
        "female": 79.41,
        "male": 73.39,
        "unspecified": 76.2
      },
      "2015": {
        "unspecified": 76.51,
        "male": 73.67,
        "female": 79.76
      },
      "2016": {
        "female": 79.94,
        "unspecified": 76.72,
        "male": 73.89
      },
      "2017": {
        "male": 74.16,
        "female": 80.09,
        "unspecified": 76.95
      },
      "2018": {
        "male": 74.39,
        "unspecified": 77.14,
        "female": 80.22
      },
      "2019": {
        "unspecified": 77.31,
        "female": 80.36,
        "male": 74.58
      },
      "2020": {
        "male": 74.59,
        "unspecified": 77.48,
        "female": 80.74
      },
      "2021": {
        "female": 80.52,
        "unspecified": 77.62,
        "male": 74.95
      }
    }
  },
  "IND": {
    "name": "India",
    "nameTh": "อินเดีย",
    "years": {
      "2000": {
        "female": 64.29,
        "unspecified": 63.2,
        "male": 62.18
      },
      "2001": {
        "male": 62.54,
        "unspecified": 63.66,
        "female": 64.86
      },
      "2002": {
        "male": 63.05,
        "unspecified": 64.17,
        "female": 65.37
      },
      "2003": {
        "male": 63.37,
        "unspecified": 64.58,
        "female": 65.89
      },
      "2004": {
        "unspecified": 65.06,
        "male": 63.68,
        "female": 66.57
      },
      "2005": {
        "male": 64.18,
        "unspecified": 65.53,
        "female": 67
      },
      "2006": {
        "female": 67.33,
        "unspecified": 65.88,
        "male": 64.54
      },
      "2007": {
        "female": 67.67,
        "unspecified": 66.09,
        "male": 64.66
      },
      "2008": {
        "female": 68.13,
        "male": 64.88,
        "unspecified": 66.43
      },
      "2009": {
        "female": 68.81,
        "unspecified": 67.05,
        "male": 65.45
      },
      "2010": {
        "female": 69.37,
        "male": 65.77,
        "unspecified": 67.48
      },
      "2011": {
        "female": 69.76,
        "male": 66.09,
        "unspecified": 67.84
      },
      "2012": {
        "male": 66.64,
        "unspecified": 68.23,
        "female": 69.96
      },
      "2013": {
        "female": 70.2,
        "unspecified": 68.52,
        "male": 66.97
      },
      "2014": {
        "unspecified": 68.92,
        "male": 67.35,
        "female": 70.64
      },
      "2015": {
        "unspecified": 69.38,
        "male": 67.9,
        "female": 70.99
      },
      "2016": {
        "male": 68.36,
        "female": 71.31,
        "unspecified": 69.78
      },
      "2017": {
        "male": 68.66,
        "unspecified": 70.06,
        "female": 71.57
      },
      "2018": {
        "male": 68.88,
        "unspecified": 70.35,
        "female": 71.95
      },
      "2019": {
        "female": 72.41,
        "male": 69.18,
        "unspecified": 70.73
      },
      "2020": {
        "unspecified": 70.19,
        "female": 72.18,
        "male": 68.41
      },
      "2021": {
        "unspecified": 67.31,
        "male": 65.77,
        "female": 69.02
      }
    }
  },
  "RUS": {
    "name": "Russia",
    "nameTh": "รัสเซีย",
    "years": {
      "2000": {
        "unspecified": 65.16,
        "male": 58.83,
        "female": 72.14
      },
      "2001": {
        "female": 72.08,
        "male": 58.8,
        "unspecified": 65.1
      },
      "2002": {
        "unspecified": 64.86,
        "male": 58.62,
        "female": 71.82
      },
      "2003": {
        "male": 58.45,
        "unspecified": 64.72,
        "female": 71.72
      },
      "2004": {
        "female": 72.17,
        "male": 58.79,
        "unspecified": 65.14
      },
      "2005": {
        "female": 72.26,
        "male": 58.8,
        "unspecified": 65.19
      },
      "2006": {
        "female": 73.11,
        "male": 60.3,
        "unspecified": 66.49
      },
      "2007": {
        "female": 73.81,
        "unspecified": 67.42,
        "male": 61.34
      },
      "2008": {
        "female": 74.08,
        "male": 61.76,
        "unspecified": 67.79
      },
      "2009": {
        "male": 62.67,
        "female": 74.58,
        "unspecified": 68.56
      },
      "2010": {
        "male": 62.98,
        "female": 74.76,
        "unspecified": 68.83
      },
      "2011": {
        "unspecified": 69.77,
        "female": 75.55,
        "male": 63.99
      },
      "2012": {
        "female": 75.83,
        "unspecified": 70.19,
        "male": 64.5
      },
      "2013": {
        "unspecified": 70.7,
        "male": 65.05,
        "female": 76.25
      },
      "2014": {
        "male": 65.04,
        "female": 76.27,
        "unspecified": 70.69
      },
      "2015": {
        "male": 65.84,
        "female": 76.61,
        "unspecified": 71.3
      },
      "2016": {
        "unspecified": 71.62,
        "female": 76.81,
        "male": 66.25
      },
      "2017": {
        "unspecified": 72.5,
        "male": 67.3,
        "female": 77.45
      },
      "2018": {
        "unspecified": 72.66,
        "male": 67.5,
        "female": 77.58
      },
      "2019": {
        "unspecified": 73.22,
        "female": 78,
        "male": 68.17
      },
      "2020": {
        "female": 76.15,
        "male": 66.45,
        "unspecified": 71.38
      },
      "2021": {
        "female": 74.34,
        "male": 65.57,
        "unspecified": 70.02
      }
    }
  },
  "BRA": {
    "name": "Brazil",
    "nameTh": "บราซิล",
    "years": {
      "2000": {
        "female": 74.98,
        "unspecified": 71.5,
        "male": 68.16
      },
      "2001": {
        "unspecified": 71.8,
        "female": 75.33,
        "male": 68.41
      },
      "2002": {
        "female": 75.55,
        "male": 68.64,
        "unspecified": 72.04
      },
      "2003": {
        "unspecified": 72.3,
        "male": 68.88,
        "female": 75.85
      },
      "2004": {
        "unspecified": 72.5,
        "female": 76.03,
        "male": 69.08
      },
      "2005": {
        "female": 76.62,
        "unspecified": 73.15,
        "male": 69.76
      },
      "2006": {
        "male": 69.96,
        "unspecified": 73.33,
        "female": 76.77
      },
      "2007": {
        "unspecified": 73.58,
        "female": 77.03,
        "male": 70.19
      },
      "2008": {
        "female": 77.2,
        "unspecified": 73.71,
        "male": 70.29
      },
      "2009": {
        "unspecified": 73.84,
        "male": 70.42,
        "female": 77.32
      },
      "2010": {
        "female": 77.43,
        "unspecified": 73.92,
        "male": 70.48
      },
      "2011": {
        "male": 70.6,
        "unspecified": 74.02,
        "female": 77.48
      },
      "2012": {
        "female": 77.78,
        "male": 70.84,
        "unspecified": 74.28
      },
      "2013": {
        "female": 77.92,
        "unspecified": 74.42,
        "male": 70.97
      },
      "2014": {
        "unspecified": 74.64,
        "male": 71.17,
        "female": 78.15
      },
      "2015": {
        "unspecified": 74.71,
        "male": 71.32,
        "female": 78.14
      },
      "2016": {
        "male": 71.1,
        "female": 78.07,
        "unspecified": 74.56
      },
      "2017": {
        "unspecified": 74.99,
        "female": 78.47,
        "male": 71.54
      },
      "2018": {
        "female": 78.71,
        "male": 71.94,
        "unspecified": 75.32
      },
      "2019": {
        "male": 72.22,
        "unspecified": 75.48,
        "female": 78.73
      },
      "2020": {
        "unspecified": 74.11,
        "male": 70.67,
        "female": 77.65
      },
      "2021": {
        "male": 69.04,
        "female": 75.85,
        "unspecified": 72.39
      }
    }
  },
  "MEX": {
    "name": "Mexico",
    "nameTh": "เม็กซิโก",
    "years": {
      "2000": {
        "female": 76.69,
        "male": 71.73,
        "unspecified": 74.22
      },
      "2001": {
        "unspecified": 74.55,
        "female": 76.92,
        "male": 72.16
      },
      "2002": {
        "unspecified": 74.59,
        "male": 72.18,
        "female": 76.99
      },
      "2003": {
        "female": 77,
        "unspecified": 74.63,
        "male": 72.24
      },
      "2004": {
        "female": 77.37,
        "unspecified": 75.04,
        "male": 72.69
      },
      "2005": {
        "male": 72.58,
        "unspecified": 74.93,
        "female": 77.26
      },
      "2006": {
        "male": 72.94,
        "female": 77.71,
        "unspecified": 75.34
      },
      "2007": {
        "unspecified": 75.52,
        "male": 73.15,
        "female": 77.88
      },
      "2008": {
        "female": 77.63,
        "unspecified": 75.09,
        "male": 72.53
      },
      "2009": {
        "female": 77.74,
        "unspecified": 75.14,
        "male": 72.53
      },
      "2010": {
        "female": 77.66,
        "male": 72.23,
        "unspecified": 74.95
      },
      "2011": {
        "male": 72.66,
        "female": 78.18,
        "unspecified": 75.43
      },
      "2012": {
        "male": 72.92,
        "unspecified": 75.64,
        "female": 78.36
      },
      "2013": {
        "female": 78.57,
        "male": 73.27,
        "unspecified": 75.93
      },
      "2014": {
        "male": 73.32,
        "unspecified": 75.91,
        "female": 78.48
      },
      "2015": {
        "unspecified": 75.94,
        "female": 78.54,
        "male": 73.32
      },
      "2016": {
        "male": 73,
        "female": 78.52,
        "unspecified": 75.76
      },
      "2017": {
        "unspecified": 75.87,
        "male": 72.98,
        "female": 78.77
      },
      "2018": {
        "unspecified": 75.92,
        "female": 78.93,
        "male": 72.92
      },
      "2019": {
        "unspecified": 75.83,
        "female": 78.89,
        "male": 72.8
      },
      "2020": {
        "female": 75.09,
        "unspecified": 70.95,
        "male": 67.12
      },
      "2021": {
        "female": 74.69,
        "male": 67.2,
        "unspecified": 70.83
      }
    }
  },
  "SAU": {
    "name": "Saudi Arabia",
    "nameTh": "ซาอุดีอาระเบีย",
    "years": {
      "2000": {
        "male": 69.43,
        "female": 71.93,
        "unspecified": 70.57
      },
      "2001": {
        "unspecified": 70.8,
        "female": 72.14,
        "male": 69.72
      },
      "2002": {
        "male": 70.06,
        "female": 72.36,
        "unspecified": 71.08
      },
      "2003": {
        "unspecified": 71.31,
        "male": 70.32,
        "female": 72.6
      },
      "2004": {
        "unspecified": 71.6,
        "female": 72.93,
        "male": 70.64
      },
      "2005": {
        "male": 70.9,
        "female": 73.12,
        "unspecified": 71.82
      },
      "2006": {
        "male": 71.11,
        "female": 73.41,
        "unspecified": 72.04
      },
      "2007": {
        "male": 71.45,
        "unspecified": 72.35,
        "female": 73.73
      },
      "2008": {
        "male": 72.1,
        "female": 74.39,
        "unspecified": 73
      },
      "2009": {
        "female": 75.28,
        "male": 73.02,
        "unspecified": 73.9
      },
      "2010": {
        "male": 74.02,
        "unspecified": 74.9,
        "female": 76.28
      },
      "2011": {
        "male": 75.3,
        "unspecified": 76.13,
        "female": 77.48
      },
      "2012": {
        "male": 76.28,
        "unspecified": 77.03,
        "female": 78.27
      },
      "2013": {
        "unspecified": 77.33,
        "female": 78.46,
        "male": 76.68
      },
      "2014": {
        "female": 78.3,
        "unspecified": 77.22,
        "male": 76.62
      },
      "2015": {
        "unspecified": 76.89,
        "female": 77.84,
        "male": 76.36
      },
      "2016": {
        "unspecified": 76.75,
        "male": 76.38,
        "female": 77.44
      },
      "2017": {
        "male": 76.44,
        "female": 77.31,
        "unspecified": 76.74
      },
      "2018": {
        "male": 76.42,
        "female": 77.49,
        "unspecified": 76.81
      },
      "2019": {
        "male": 76.45,
        "unspecified": 76.93,
        "female": 77.75
      },
      "2020": {
        "male": 74.9,
        "female": 77.92,
        "unspecified": 76.06
      },
      "2021": {
        "female": 77.37,
        "male": 75.73,
        "unspecified": 76.43
      }
    }
  },
  "ARE": {
    "name": "United Arab Emirates",
    "nameTh": "สหรัฐอาหรับเอมิเรตส์",
    "years": {
      "2000": {
        "unspecified": 78.12,
        "female": 78.03,
        "male": 78.58
      },
      "2001": {
        "female": 78.18,
        "male": 78.72,
        "unspecified": 78.28
      },
      "2002": {
        "unspecified": 78.35,
        "female": 78.24,
        "male": 78.79
      },
      "2003": {
        "female": 78.5,
        "unspecified": 78.56,
        "male": 78.94
      },
      "2004": {
        "female": 78.89,
        "male": 79.2,
        "unspecified": 78.89
      },
      "2005": {
        "female": 79.52,
        "unspecified": 79.38,
        "male": 79.57
      },
      "2006": {
        "female": 80.46,
        "unspecified": 80.09,
        "male": 80.09
      },
      "2007": {
        "male": 80.45,
        "female": 81.12,
        "unspecified": 80.6
      },
      "2008": {
        "male": 80.57,
        "unspecified": 80.8,
        "female": 81.35
      },
      "2009": {
        "male": 80.51,
        "female": 81.38,
        "unspecified": 80.74
      },
      "2010": {
        "female": 81.19,
        "unspecified": 80.45,
        "male": 80.25
      },
      "2011": {
        "unspecified": 80.26,
        "male": 80.06,
        "female": 80.93
      },
      "2012": {
        "female": 80.99,
        "male": 80.09,
        "unspecified": 80.31
      },
      "2013": {
        "male": 80.32,
        "unspecified": 80.56,
        "female": 81.25
      },
      "2014": {
        "unspecified": 80.65,
        "female": 81.38,
        "male": 80.35
      },
      "2015": {
        "unspecified": 80.71,
        "male": 80.38,
        "female": 81.49
      },
      "2016": {
        "female": 81.63,
        "unspecified": 80.78,
        "male": 80.43
      },
      "2017": {
        "unspecified": 80.93,
        "male": 80.53,
        "female": 81.82
      },
      "2018": {
        "male": 80.76,
        "unspecified": 81.17,
        "female": 82.05
      },
      "2019": {
        "unspecified": 81.41,
        "male": 80.98,
        "female": 82.29
      },
      "2020": {
        "unspecified": 80.13,
        "male": 78.94,
        "female": 82.16
      },
      "2021": {
        "female": 80.02,
        "unspecified": 78.31,
        "male": 77.18
      }
    }
  },
  "ZAF": {
    "name": "South Africa",
    "nameTh": "แอฟริกาใต้",
    "years": {
      "2000": {
        "unspecified": 57.12,
        "male": 54.15,
        "female": 59.62
      },
      "2001": {
        "male": 53.29,
        "female": 57.98,
        "unspecified": 55.87
      },
      "2002": {
        "female": 56.05,
        "male": 52.14,
        "unspecified": 54.32
      },
      "2003": {
        "unspecified": 52.93,
        "female": 54.34,
        "male": 51.09
      },
      "2004": {
        "female": 53.41,
        "unspecified": 52.25,
        "male": 50.64
      },
      "2005": {
        "unspecified": 52.03,
        "male": 50.4,
        "female": 53.22
      },
      "2006": {
        "male": 50.36,
        "unspecified": 52.11,
        "female": 53.43
      },
      "2007": {
        "unspecified": 52.91,
        "female": 54.43,
        "male": 50.96
      },
      "2008": {
        "unspecified": 53.91,
        "male": 51.78,
        "female": 55.63
      },
      "2009": {
        "unspecified": 55.27,
        "male": 52.96,
        "female": 57.16
      },
      "2010": {
        "male": 54.64,
        "unspecified": 57.1,
        "female": 59.13
      },
      "2011": {
        "unspecified": 59.1,
        "male": 56.41,
        "female": 61.36
      },
      "2012": {
        "female": 63.43,
        "male": 57.78,
        "unspecified": 60.82
      },
      "2013": {
        "female": 64.92,
        "male": 58.85,
        "unspecified": 62.08
      },
      "2014": {
        "female": 65.65,
        "male": 59.54,
        "unspecified": 62.78
      },
      "2015": {
        "male": 60.01,
        "female": 66.18,
        "unspecified": 63.26
      },
      "2016": {
        "unspecified": 63.88,
        "male": 60.56,
        "female": 66.86
      },
      "2017": {
        "unspecified": 64.75,
        "female": 67.73,
        "male": 61.41
      },
      "2018": {
        "female": 68.31,
        "unspecified": 65.32,
        "male": 61.98
      },
      "2019": {
        "unspecified": 65.84,
        "male": 62.5,
        "female": 68.85
      },
      "2020": {
        "unspecified": 64.3,
        "male": 61.88,
        "female": 66.59
      },
      "2021": {
        "female": 64.02,
        "male": 58.9,
        "unspecified": 61.5
      }
    }
  },
  "NGA": {
    "name": "Nigeria",
    "nameTh": "ไนจีเรีย",
    "years": {
      "2000": {
        "female": 55.39,
        "male": 52.78,
        "unspecified": 54.06
      },
      "2001": {
        "unspecified": 54.47,
        "female": 55.76,
        "male": 53.24
      },
      "2002": {
        "unspecified": 54.96,
        "female": 56.24,
        "male": 53.73
      },
      "2003": {
        "male": 54.35,
        "unspecified": 55.58,
        "female": 56.86
      },
      "2004": {
        "unspecified": 56.19,
        "female": 57.51,
        "male": 54.91
      },
      "2005": {
        "female": 58.23,
        "unspecified": 56.92,
        "male": 55.65
      },
      "2006": {
        "unspecified": 57.55,
        "female": 58.9,
        "male": 56.25
      },
      "2007": {
        "unspecified": 58.18,
        "male": 56.88,
        "female": 59.52
      },
      "2008": {
        "male": 57.43,
        "female": 60.11,
        "unspecified": 58.75
      },
      "2009": {
        "male": 57.95,
        "female": 60.7,
        "unspecified": 59.3
      },
      "2010": {
        "male": 58.42,
        "female": 61.2,
        "unspecified": 59.79
      },
      "2011": {
        "unspecified": 60.2,
        "male": 58.83,
        "female": 61.62
      },
      "2012": {
        "male": 59.23,
        "unspecified": 60.64,
        "female": 62.11
      },
      "2013": {
        "unspecified": 61.04,
        "female": 62.62,
        "male": 59.53
      },
      "2014": {
        "male": 59.8,
        "unspecified": 61.38,
        "female": 63.03
      },
      "2015": {
        "male": 60.2,
        "unspecified": 61.73,
        "female": 63.33
      },
      "2016": {
        "male": 60.59,
        "unspecified": 62.05,
        "female": 63.57
      },
      "2017": {
        "unspecified": 62.36,
        "male": 60.93,
        "female": 63.86
      },
      "2018": {
        "male": 61.26,
        "unspecified": 62.69,
        "female": 64.17
      },
      "2019": {
        "male": 61.68,
        "unspecified": 63.07,
        "female": 64.51
      },
      "2020": {
        "female": 64.44,
        "male": 61.32,
        "unspecified": 62.84
      },
      "2021": {
        "male": 62.07,
        "female": 64.78,
        "unspecified": 63.4
      }
    }
  },
  "EGY": {
    "name": "Egypt",
    "nameTh": "อียิปต์",
    "years": {
      "2000": {
        "male": 66.39,
        "unspecified": 69.15,
        "female": 71.94
      },
      "2001": {
        "unspecified": 68.85,
        "female": 71.63,
        "male": 66.11
      },
      "2002": {
        "male": 66.16,
        "female": 71.62,
        "unspecified": 68.85
      },
      "2003": {
        "female": 71.53,
        "unspecified": 68.78,
        "male": 66.12
      },
      "2004": {
        "male": 66.5,
        "unspecified": 69.18,
        "female": 71.94
      },
      "2005": {
        "male": 66.9,
        "unspecified": 69.52,
        "female": 72.2
      },
      "2006": {
        "male": 66.93,
        "female": 72.28,
        "unspecified": 69.57
      },
      "2007": {
        "female": 72.51,
        "unspecified": 69.75,
        "male": 67.07
      },
      "2008": {
        "male": 67.12,
        "unspecified": 69.77,
        "female": 72.51
      },
      "2009": {
        "male": 67.12,
        "female": 72.57,
        "unspecified": 69.79
      },
      "2010": {
        "male": 67.2,
        "female": 72.57,
        "unspecified": 69.83
      },
      "2011": {
        "unspecified": 70.08,
        "female": 73.06,
        "male": 67.25
      },
      "2012": {
        "female": 72.65,
        "unspecified": 69.83,
        "male": 67.14
      },
      "2013": {
        "male": 67.65,
        "female": 73.44,
        "unspecified": 70.47
      },
      "2014": {
        "female": 73.24,
        "unspecified": 70.46,
        "male": 67.78
      },
      "2015": {
        "unspecified": 70.06,
        "male": 67.5,
        "female": 72.71
      },
      "2016": {
        "female": 73.46,
        "unspecified": 70.7,
        "male": 68.04
      },
      "2017": {
        "male": 68.62,
        "unspecified": 71.25,
        "female": 73.96
      },
      "2018": {
        "unspecified": 71.36,
        "female": 73.97,
        "male": 68.81
      },
      "2019": {
        "unspecified": 71.59,
        "male": 68.97,
        "female": 74.3
      },
      "2020": {
        "female": 72.6,
        "male": 67.75,
        "unspecified": 70.12
      },
      "2021": {
        "unspecified": 69.11,
        "male": 66.69,
        "female": 71.71
      }
    }
  },
  "KEN": {
    "name": "Kenya",
    "nameTh": "เคนยา",
    "years": {
      "2000": {
        "female": 55.22,
        "unspecified": 54.09,
        "male": 52.94
      },
      "2001": {
        "unspecified": 54.33,
        "male": 53.19,
        "female": 55.45
      },
      "2002": {
        "male": 53.44,
        "unspecified": 54.59,
        "female": 55.7
      },
      "2003": {
        "male": 53.74,
        "female": 56.06,
        "unspecified": 54.91
      },
      "2004": {
        "male": 54.25,
        "unspecified": 55.51,
        "female": 56.76
      },
      "2005": {
        "male": 55,
        "female": 57.78,
        "unspecified": 56.4
      },
      "2006": {
        "unspecified": 57.46,
        "female": 59.01,
        "male": 55.92
      },
      "2007": {
        "unspecified": 58.55,
        "male": 56.89,
        "female": 60.21
      },
      "2008": {
        "female": 61.28,
        "unspecified": 59.48,
        "male": 57.7
      },
      "2009": {
        "female": 62.31,
        "unspecified": 60.49,
        "male": 58.68
      },
      "2010": {
        "male": 59.44,
        "female": 63.13,
        "unspecified": 61.28
      },
      "2011": {
        "unspecified": 61.98,
        "female": 64.12,
        "male": 59.88
      },
      "2012": {
        "female": 65.11,
        "unspecified": 62.62,
        "male": 60.21
      },
      "2013": {
        "female": 65.65,
        "unspecified": 63.12,
        "male": 60.66
      },
      "2014": {
        "female": 66.14,
        "unspecified": 63.64,
        "male": 61.21
      },
      "2015": {
        "unspecified": 64.3,
        "male": 61.87,
        "female": 66.8
      },
      "2016": {
        "unspecified": 65.03,
        "female": 67.53,
        "male": 62.6
      },
      "2017": {
        "female": 68.14,
        "unspecified": 65.61,
        "male": 63.15
      },
      "2018": {
        "male": 63.63,
        "unspecified": 66.07,
        "female": 68.57
      },
      "2019": {
        "female": 68.99,
        "male": 64.07,
        "unspecified": 66.5
      },
      "2020": {
        "male": 64.06,
        "unspecified": 66.79,
        "female": 69.67
      },
      "2021": {
        "female": 69.22,
        "male": 64.4,
        "unspecified": 66.76
      }
    }
  },
  "PAK": {
    "name": "Pakistan",
    "nameTh": "ปากีสถาน",
    "years": {
      "2000": {
        "male": 60.98,
        "unspecified": 61.41,
        "female": 61.89
      },
      "2001": {
        "male": 61.23,
        "female": 62.18,
        "unspecified": 61.68
      },
      "2002": {
        "unspecified": 61.93,
        "female": 62.46,
        "male": 61.45
      },
      "2003": {
        "female": 62.7,
        "male": 61.64,
        "unspecified": 62.15
      },
      "2004": {
        "unspecified": 62.44,
        "female": 63.09,
        "male": 61.86
      },
      "2005": {
        "female": 62.53,
        "male": 61.5,
        "unspecified": 61.99
      },
      "2006": {
        "female": 63.83,
        "unspecified": 63.07,
        "male": 62.38
      },
      "2007": {
        "female": 64.16,
        "male": 62.67,
        "unspecified": 63.38
      },
      "2008": {
        "female": 64.47,
        "unspecified": 63.66,
        "male": 62.91
      },
      "2009": {
        "unspecified": 63.92,
        "female": 64.77,
        "male": 63.14
      },
      "2010": {
        "male": 63.32,
        "unspecified": 64.15,
        "female": 65.04
      },
      "2011": {
        "female": 65.37,
        "unspecified": 64.54,
        "male": 63.77
      },
      "2012": {
        "female": 65.66,
        "male": 64.03,
        "unspecified": 64.82
      },
      "2013": {
        "male": 64.33,
        "unspecified": 65.11,
        "female": 65.93
      },
      "2014": {
        "female": 66.23,
        "unspecified": 65.39,
        "male": 64.6
      },
      "2015": {
        "female": 66.54,
        "unspecified": 65.7,
        "male": 64.9
      },
      "2016": {
        "unspecified": 66.05,
        "male": 65.28,
        "female": 66.86
      },
      "2017": {
        "male": 65.63,
        "unspecified": 66.38,
        "female": 67.16
      },
      "2018": {
        "unspecified": 66.74,
        "female": 67.5,
        "male": 66
      },
      "2019": {
        "female": 67.79,
        "unspecified": 67.03,
        "male": 66.3
      },
      "2020": {
        "male": 64.7,
        "unspecified": 65.85,
        "female": 67.03
      },
      "2021": {
        "male": 65.08,
        "unspecified": 65.99,
        "female": 66.93
      }
    }
  },
  "BGD": {
    "name": "Bangladesh",
    "nameTh": "บังกลาเทศ",
    "years": {
      "2000": {
        "male": 63.71,
        "female": 67.4,
        "unspecified": 65.36
      },
      "2001": {
        "male": 64.31,
        "female": 67.98,
        "unspecified": 65.96
      },
      "2002": {
        "unspecified": 66.35,
        "female": 68.24,
        "male": 64.78
      },
      "2003": {
        "unspecified": 66.78,
        "female": 68.67,
        "male": 65.2
      },
      "2004": {
        "male": 65.74,
        "female": 69.34,
        "unspecified": 67.37
      },
      "2005": {
        "female": 69.87,
        "male": 66.09,
        "unspecified": 67.79
      },
      "2006": {
        "unspecified": 68.09,
        "female": 70.28,
        "male": 66.31
      },
      "2007": {
        "unspecified": 68.43,
        "male": 66.61,
        "female": 70.61
      },
      "2008": {
        "unspecified": 69.03,
        "male": 67.22,
        "female": 71.15
      },
      "2009": {
        "unspecified": 69.6,
        "female": 71.6,
        "male": 67.86
      },
      "2010": {
        "female": 71.87,
        "unspecified": 70.06,
        "male": 68.45
      },
      "2011": {
        "unspecified": 71.08,
        "male": 69.66,
        "female": 72.62
      },
      "2012": {
        "female": 73.27,
        "unspecified": 72.09,
        "male": 70.97
      },
      "2013": {
        "unspecified": 72.59,
        "male": 71.51,
        "female": 73.72
      },
      "2014": {
        "female": 74.01,
        "unspecified": 72.78,
        "male": 71.59
      },
      "2015": {
        "unspecified": 73.19,
        "male": 72.07,
        "female": 74.35
      },
      "2016": {
        "male": 72.31,
        "unspecified": 73.44,
        "female": 74.6
      },
      "2017": {
        "male": 72.08,
        "unspecified": 73.38,
        "female": 74.69
      },
      "2018": {
        "female": 74.98,
        "male": 72.38,
        "unspecified": 73.67
      },
      "2019": {
        "female": 75.26,
        "unspecified": 73.95,
        "male": 72.64
      },
      "2020": {
        "unspecified": 73.3,
        "female": 74.97,
        "male": 71.67
      },
      "2021": {
        "unspecified": 73.1,
        "male": 71.65,
        "female": 74.56
      }
    }
  },
  "LKA": {
    "name": "Sri Lanka",
    "nameTh": "ศรีลังกา",
    "years": {
      "2000": {
        "female": 76.4,
        "unspecified": 71.51,
        "male": 67.15
      },
      "2001": {
        "male": 68.42,
        "unspecified": 72.65,
        "female": 77.34
      },
      "2002": {
        "unspecified": 73.34,
        "male": 69.4,
        "female": 77.61
      },
      "2003": {
        "female": 77.58,
        "male": 69.47,
        "unspecified": 73.37
      },
      "2004": {
        "unspecified": 69.12,
        "female": 71.79,
        "male": 66.56
      },
      "2005": {
        "female": 77.78,
        "male": 69.5,
        "unspecified": 73.48
      },
      "2006": {
        "unspecified": 73.36,
        "female": 77.65,
        "male": 69.34
      },
      "2007": {
        "female": 77.95,
        "unspecified": 73.82,
        "male": 69.9
      },
      "2008": {
        "unspecified": 73.14,
        "female": 77.79,
        "male": 68.76
      },
      "2009": {
        "unspecified": 72.42,
        "male": 68.42,
        "female": 76.57
      },
      "2010": {
        "female": 78.25,
        "unspecified": 74.14,
        "male": 70.15
      },
      "2011": {
        "unspecified": 74.96,
        "female": 78.55,
        "male": 71.42
      },
      "2012": {
        "unspecified": 75.63,
        "female": 79,
        "male": 72.28
      },
      "2013": {
        "male": 72.53,
        "female": 79.08,
        "unspecified": 75.82
      },
      "2014": {
        "unspecified": 76.18,
        "female": 79.27,
        "male": 72.99
      },
      "2015": {
        "unspecified": 76.45,
        "male": 73.24,
        "female": 79.52
      },
      "2016": {
        "female": 79.74,
        "male": 73.62,
        "unspecified": 76.77
      },
      "2017": {
        "unspecified": 76.91,
        "female": 79.86,
        "male": 73.76
      },
      "2018": {
        "female": 80.09,
        "unspecified": 77.18,
        "male": 74.02
      },
      "2019": {
        "unspecified": 77.45,
        "female": 80.33,
        "male": 74.32
      },
      "2020": {
        "male": 77.82,
        "unspecified": 80.66,
        "female": 83.15
      },
      "2021": {
        "female": 80.05,
        "unspecified": 77.23,
        "male": 74.16
      }
    }
  },
  "NPL": {
    "name": "Nepal",
    "nameTh": "เนปาล",
    "years": {
      "2000": {
        "female": 66.51,
        "unspecified": 65.37,
        "male": 64.22
      },
      "2001": {
        "unspecified": 66.17,
        "male": 65.02,
        "female": 67.32
      },
      "2002": {
        "unspecified": 66.45,
        "female": 67.84,
        "male": 65.08
      },
      "2003": {
        "unspecified": 67.36,
        "male": 66.16,
        "female": 68.56
      },
      "2004": {
        "female": 69.04,
        "unspecified": 67.7,
        "male": 66.36
      },
      "2005": {
        "female": 69.5,
        "unspecified": 68.19,
        "male": 66.87
      },
      "2006": {
        "male": 67.19,
        "female": 69.9,
        "unspecified": 68.55
      },
      "2007": {
        "unspecified": 68.81,
        "female": 70.17,
        "male": 67.43
      },
      "2008": {
        "male": 67.58,
        "female": 70.48,
        "unspecified": 69.03
      },
      "2009": {
        "male": 67.74,
        "female": 70.79,
        "unspecified": 69.27
      },
      "2010": {
        "female": 71.01,
        "male": 67.92,
        "unspecified": 69.47
      },
      "2011": {
        "female": 71.27,
        "male": 67.93,
        "unspecified": 69.61
      },
      "2012": {
        "female": 71.5,
        "unspecified": 69.79,
        "male": 68.06
      },
      "2013": {
        "female": 71.73,
        "unspecified": 69.98,
        "male": 68.21
      },
      "2014": {
        "female": 71.95,
        "male": 68.4,
        "unspecified": 70.19
      },
      "2015": {
        "female": 71.39,
        "male": 68.14,
        "unspecified": 69.78
      },
      "2016": {
        "unspecified": 70.59,
        "male": 68.78,
        "female": 72.36
      },
      "2017": {
        "unspecified": 70.84,
        "female": 72.61,
        "male": 69.02
      },
      "2018": {
        "female": 72.86,
        "unspecified": 71.1,
        "male": 69.28
      },
      "2019": {
        "female": 73.1,
        "male": 69.56,
        "unspecified": 71.36
      },
      "2020": {
        "female": 72.99,
        "male": 68.98,
        "unspecified": 70.99
      },
      "2021": {
        "unspecified": 70.05,
        "male": 68.27,
        "female": 71.79
      }
    }
  },
  "SWE": {
    "name": "Sweden",
    "nameTh": "สวีเดน",
    "years": {
      "2000": {
        "female": 81.79,
        "male": 77.28,
        "unspecified": 79.57
      },
      "2001": {
        "female": 81.82,
        "male": 77.44,
        "unspecified": 79.67
      },
      "2002": {
        "male": 77.62,
        "unspecified": 79.76,
        "female": 81.83
      },
      "2003": {
        "unspecified": 80.01,
        "male": 77.81,
        "female": 82.13
      },
      "2004": {
        "male": 78.25,
        "female": 82.37,
        "unspecified": 80.35
      },
      "2005": {
        "male": 78.31,
        "female": 82.46,
        "unspecified": 80.42
      },
      "2006": {
        "unspecified": 80.63,
        "male": 78.59,
        "female": 82.6
      },
      "2007": {
        "male": 78.82,
        "female": 82.66,
        "unspecified": 80.77
      },
      "2008": {
        "unspecified": 80.93,
        "female": 82.81,
        "male": 78.99
      },
      "2009": {
        "unspecified": 81.15,
        "male": 79.22,
        "female": 83.01
      },
      "2010": {
        "male": 79.41,
        "female": 83.15,
        "unspecified": 81.3
      },
      "2011": {
        "unspecified": 81.52,
        "female": 83.32,
        "male": 79.68
      },
      "2012": {
        "unspecified": 81.47,
        "male": 79.72,
        "female": 83.16
      },
      "2013": {
        "unspecified": 81.64,
        "female": 83.31,
        "male": 79.93
      },
      "2014": {
        "unspecified": 81.93,
        "male": 80.19,
        "female": 83.63
      },
      "2015": {
        "unspecified": 81.74,
        "female": 83.5,
        "male": 79.97
      },
      "2016": {
        "unspecified": 82.01,
        "male": 80.37,
        "female": 83.63
      },
      "2017": {
        "unspecified": 82.08,
        "female": 83.64,
        "male": 80.5
      },
      "2018": {
        "female": 83.78,
        "unspecified": 82.2,
        "male": 80.61
      },
      "2019": {
        "male": 81.17,
        "female": 84.24,
        "unspecified": 82.71
      },
      "2020": {
        "unspecified": 82.08,
        "female": 83.79,
        "male": 80.39
      },
      "2021": {
        "male": 81.02,
        "female": 84.31,
        "unspecified": 82.66
      }
    }
  },
  "CHE": {
    "name": "Switzerland",
    "nameTh": "สวิตเซอร์แลนด์",
    "years": {
      "2000": {
        "male": 76.9,
        "unspecified": 79.71,
        "female": 82.34
      },
      "2001": {
        "unspecified": 80.1,
        "male": 77.29,
        "female": 82.71
      },
      "2002": {
        "male": 77.81,
        "female": 82.81,
        "unspecified": 80.41
      },
      "2003": {
        "male": 77.86,
        "female": 82.76,
        "unspecified": 80.4
      },
      "2004": {
        "unspecified": 80.94,
        "female": 83.26,
        "male": 78.43
      },
      "2005": {
        "female": 83.47,
        "male": 78.57,
        "unspecified": 81.11
      },
      "2006": {
        "male": 79,
        "female": 83.62,
        "unspecified": 81.41
      },
      "2007": {
        "unspecified": 81.6,
        "male": 79.25,
        "female": 83.76
      },
      "2008": {
        "female": 83.97,
        "male": 79.57,
        "unspecified": 81.86
      },
      "2009": {
        "female": 83.99,
        "unspecified": 81.89,
        "male": 79.63
      },
      "2010": {
        "female": 84.18,
        "unspecified": 82.2,
        "male": 80.03
      },
      "2011": {
        "female": 84.36,
        "male": 80.21,
        "unspecified": 82.37
      },
      "2012": {
        "male": 80.37,
        "unspecified": 82.39,
        "female": 84.27
      },
      "2013": {
        "female": 84.4,
        "male": 80.42,
        "unspecified": 82.48
      },
      "2014": {
        "male": 80.84,
        "female": 84.73,
        "unspecified": 82.85
      },
      "2015": {
        "female": 84.5,
        "unspecified": 82.59,
        "male": 80.58
      },
      "2016": {
        "unspecified": 83.17,
        "male": 81.39,
        "female": 84.82
      },
      "2017": {
        "female": 84.95,
        "unspecified": 83.14,
        "male": 81.24
      },
      "2018": {
        "male": 81.53,
        "female": 84.96,
        "unspecified": 83.29
      },
      "2019": {
        "female": 85.12,
        "male": 81.76,
        "unspecified": 83.48
      },
      "2020": {
        "unspecified": 82.74,
        "female": 84.6,
        "male": 80.82
      },
      "2021": {
        "male": 81.48,
        "female": 85.11,
        "unspecified": 83.33
      }
    }
  },
  "NOR": {
    "name": "Norway",
    "nameTh": "นอร์เวย์",
    "years": {
      "2000": {
        "unspecified": 78.54,
        "female": 81.15,
        "male": 75.86
      },
      "2001": {
        "female": 81.3,
        "unspecified": 78.75,
        "male": 76.13
      },
      "2002": {
        "male": 76.32,
        "female": 81.33,
        "unspecified": 78.86
      },
      "2003": {
        "male": 76.97,
        "female": 81.74,
        "unspecified": 79.4
      },
      "2004": {
        "female": 82.13,
        "male": 77.41,
        "unspecified": 79.82
      },
      "2005": {
        "male": 77.7,
        "female": 82.29,
        "unspecified": 80.05
      },
      "2006": {
        "male": 78.08,
        "unspecified": 80.28,
        "female": 82.39
      },
      "2007": {
        "male": 78.16,
        "unspecified": 80.35,
        "female": 82.45
      },
      "2008": {
        "unspecified": 80.49,
        "male": 78.25,
        "female": 82.66
      },
      "2009": {
        "male": 78.62,
        "unspecified": 80.75,
        "female": 82.81
      },
      "2010": {
        "male": 78.82,
        "female": 82.85,
        "unspecified": 80.87
      },
      "2011": {
        "female": 83.02,
        "male": 78.87,
        "unspecified": 80.97
      },
      "2012": {
        "unspecified": 81.23,
        "female": 83.06,
        "male": 79.36
      },
      "2013": {
        "female": 83.3,
        "unspecified": 81.43,
        "male": 79.53
      },
      "2014": {
        "female": 83.67,
        "male": 79.94,
        "unspecified": 81.83
      },
      "2015": {
        "female": 83.67,
        "male": 80.27,
        "unspecified": 81.99
      },
      "2016": {
        "male": 80.48,
        "female": 83.7,
        "unspecified": 82.11
      },
      "2017": {
        "male": 80.78,
        "unspecified": 82.33,
        "female": 83.85
      },
      "2018": {
        "unspecified": 82.44,
        "male": 80.87,
        "female": 84
      },
      "2019": {
        "male": 81.12,
        "female": 84.16,
        "unspecified": 82.66
      },
      "2020": {
        "unspecified": 82.84,
        "male": 81.32,
        "female": 84.34
      },
      "2021": {
        "male": 81.5,
        "unspecified": 82.88,
        "female": 84.25
      }
    }
  },
  "NLD": {
    "name": "Netherlands",
    "nameTh": "เนเธอร์แลนด์",
    "years": {
      "2000": {
        "unspecified": 78.01,
        "male": 75.49,
        "female": 80.39
      },
      "2001": {
        "female": 80.52,
        "male": 75.77,
        "unspecified": 78.22
      },
      "2002": {
        "male": 75.94,
        "unspecified": 78.29,
        "female": 80.49
      },
      "2003": {
        "unspecified": 78.53,
        "male": 76.19,
        "female": 80.72
      },
      "2004": {
        "female": 81.22,
        "male": 76.82,
        "unspecified": 79.1
      },
      "2005": {
        "male": 77.15,
        "unspecified": 79.34,
        "female": 81.37
      },
      "2006": {
        "male": 77.59,
        "unspecified": 79.71,
        "female": 81.67
      },
      "2007": {
        "male": 77.99,
        "unspecified": 80.13,
        "female": 82.1
      },
      "2008": {
        "female": 82.06,
        "unspecified": 80.26,
        "male": 78.29
      },
      "2009": {
        "unspecified": 80.54,
        "female": 82.43,
        "male": 78.52
      },
      "2010": {
        "female": 82.5,
        "male": 78.74,
        "unspecified": 80.69
      },
      "2011": {
        "male": 79.16,
        "female": 82.62,
        "unspecified": 80.96
      },
      "2012": {
        "male": 79.1,
        "unspecified": 80.89,
        "female": 82.56
      },
      "2013": {
        "unspecified": 81.12,
        "female": 82.76,
        "male": 79.37
      },
      "2014": {
        "unspecified": 81.46,
        "male": 79.8,
        "female": 83.02
      },
      "2015": {
        "unspecified": 81.28,
        "male": 79.67,
        "female": 82.82
      },
      "2016": {
        "male": 79.8,
        "female": 82.8,
        "unspecified": 81.34
      },
      "2017": {
        "unspecified": 81.53,
        "male": 79.99,
        "female": 83.01
      },
      "2018": {
        "female": 83.3,
        "unspecified": 81.9,
        "male": 80.44
      },
      "2019": {
        "male": 80.85,
        "unspecified": 82.34,
        "female": 83.76
      },
      "2020": {
        "female": 82.93,
        "unspecified": 81.4,
        "male": 79.85
      },
      "2021": {
        "female": 82.65,
        "male": 79.58,
        "unspecified": 81.12
      }
    }
  }
};

/** Countries with baked WHO data, Thailand first, then Thai alphabetical order. */
export function listCountries(): { code: string; name: string; nameTh: string }[] {
  const codes = Object.keys(LIFE_EXPECTANCY_DATA);
  const rest = codes
    .filter((c) => c !== DEFAULT_COUNTRY)
    .sort((a, b) => LIFE_EXPECTANCY_DATA[a].nameTh.localeCompare(LIFE_EXPECTANCY_DATA[b].nameTh, "th"));
  const ordered = codes.includes(DEFAULT_COUNTRY) ? [DEFAULT_COUNTRY, ...rest] : rest;
  return ordered.map((code) => ({
    code,
    name: LIFE_EXPECTANCY_DATA[code].name,
    nameTh: LIFE_EXPECTANCY_DATA[code].nameTh,
  }));
}

/** Years with baked data for a country, newest first. Empty if the country is unknown. */
export function availableYears(country: string): number[] {
  const entry = LIFE_EXPECTANCY_DATA[country];
  if (!entry) return [];
  return Object.keys(entry.years)
    .map(Number)
    .sort((a, b) => b - a);
}
