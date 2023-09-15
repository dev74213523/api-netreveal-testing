const express = require('express');
const app = express();
const PORT = 4444;

const jsonObject = {
  "test": "11111",
  "test1": "122222"
};

const crrJsonObj = {    
    "id": "string",
    "mainOrgunitCode": "str",
    "data": {
        "resultItems": [
            {
                "id": "string",
                "type": "string",
                "properties": {
                    "CDDResult": {
                        "ApplicationResponse": {
                            "RiskModel": {
                                "id": "string",
                                "RiskLevel": "string",
                                "RiskLevelId": "string",
                                "GenerateAlert": "string"
                            },
                            "IndAgg_score": "0.0",
                            "Contributions": [
                                {
                                    "Score": "0.0",
                                    "Dimension": "string",
                                    "Info": "string",
                                    "Name": "string"
                                },
                                {
                                    "Score": "1.0",
                                    "Dimension": "string",
                                    "Info": "string",
                                    "Name": "string"
                                }
                            ],
                            "CustomerId": "string"
                        }
                    }
                }
            }
        ]
    }
};

const wlmJsonObj = {
    "id": "1",
    "type": "AXA_GC_Realtime_JsonObjectGraph",
    "sequence": "WLM-Realtime-ScreenCustomer",
    "mainOrgunitCode": "061",
    "data": {
        "resultItems": [
            {
                "id": "0",
                "type": "result",
                "properties": {
                    "checks": "[Delta Individual Customer name and YOB against Full WC Minimum Sanctions 102, Delta Individual Customer name and DOB against Full WC Minimum PEP 102]",
                    "alertIdentifier": "WSR211109000000464113",
                    "wlmresult": "HIT"
                }
            }
        ]
    }
};

app.get('/', (req, res) => {
  res.json(jsonObject);
});

app.post('/netreveal/api/getCrr', (req, res) => {
    console.log(JSON.stringify(req.headers));
    res.json(crrJsonObj);
  });

app.post('/netreveal/api/getWlm', (req, res) => {
    console.log(JSON.stringify(req.headers));
    res.json(wlmJsonObj);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
