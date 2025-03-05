/** this data is used for list devices page
 * /api/v1/devices
 */
export const deviceListJsonDemo = [
  {
      "id": "d83470a4-06e1-46fc-8f61-34b331d91a69",
      "lastDeploymentId": "e267b926-c9c1-446b-92cb-33bea9fccfec",
      "name": "RTIEdge-2b1",
      "deviceGroup": "US-EQ-XY-iTrack",
      "primaryConnector": {
          "moduleId": 'EdgeHubV1.0',
          "dataHubId": "c6ff017c-1e44-4fe1-a860-fd56d0d6aca2",
          "status": "Online",
          "statusUpdateTime": "2024-09-24T07:19:03.389Z",
          "statusReason": "",
          //"dataHubName": "Primary DataHub Name 0"
      },
      "secondaryConnector": {  // Optional
          "moduleId": 'EdgeAgentV1.0',
          "dataHubId": "3310507c-2645-43d6-a9d6-d08701fabf2d",
          "status": "Online",
          "statusUpdateTime": "2024-09-24T07:05:03.389Z",
          "statusReason": "",
          //"dataHubName": "Secondary DataHub Name 0"
      },
      "tags": [
          "Country : US",
          "Field : XY",
          "Operator : Equinor",
          "Well : Iceberg",
          "Wellbore : G121"
      ],
      "systemTags": [
          "Env : dev",
          "LastDeploymentId : e267b926-c9c1-446b-92cb-33bea9fccfec",
          "Owner : rti_support@bakerhuges.com",
          "Service : iTrack",
          "Business : WellConstruction"
      ],
      "createdBy": "creator0@bakerhughes.com",
      "createdAt": "2023-12-12T08:14:58.985Z",
      "updatedBy": "updater0@bakerhughes.com",
      "updatedAt": "2024-06-23T20:15:22.985Z"
  },
  {
      "id": "2f89e259-1137-4726-8c77-5b8058c56bb9",
      "lastDeploymentId": "e267b926-c9c1-446b-92cb-33bea9fccfec",
      "name": "PLEdge-test1",
      "deviceGroup": "GE-BP-2B-ProductionLink",
      "primaryConnector": {
          "moduleId": 'MQTTConnectorV1.0',
          "dataHubId": "32d25f271-aaed-4c74-bc59-3a6c97171856",
          "status": "Offline",
          "statusUpdateTime": "2024-09-27T07:19:03.389Z",
          "statusReason": "Unknown",
          //"dataHubName": "Primary DataHub Name 1"
      },
      "secondaryConnector": { // Optional
          "moduleId": 'MQTTConnectorV2.0',
          "dataHubId": "f15b3926-f272-41a5-8c9d-21c4192b1fda",
          "status": "Offline",
          "statusUpdateTime": "2024-09-23T07:05:03.389Z",
          "statusReason": "Certificate Error",
          //"dataHubName": "Secondary DataHub Name 1"
      },
      "tags": [
          "Country : GE",
          "Field : 2B",
          "Operator : BP",
          "Well : WX234",
          "Wellbore : WX234-12"
      ],
      "systemTags": [
          "Env : dev",
          "LastDeploymentId : a2df3f0a-358f-47df-8596-d4198d449362",
          "Owner : pl_support@bakerhuges.com",
          "Service : PLEdge",
          "Business : ProductionSolutions"
      ],
      "createdBy": "creator0@bakerhughes.com",
      "createdAt": "2023-04-02T08:14:58.985Z",
      "updatedBy": "updater0@bakerhughes.com",
      "updatedAt": "2023-09-23T19:15:22.985Z"
  },
  {
      "id": "7e29c96a-f86e-47e7-b36b-473c5319374b",
      "lastDeploymentId": "e267b926-c9c1-446b-92cb-33bea9fccfec",
      "name": "Flora-test1",
      "deviceGroup": "IN-IOC-BH-Flora",
      "primaryConnector": {
          "moduleId": "ModbusAdapterV1.0",
          "dataHubId": "c6ff017c-1e44-4fe1-a860-fd56d0d6aca2",
          "status": "Online",
          "statusUpdateTime": "2024-09-27T07:11:03.389Z",
          "statusReason": "",
          //"dataHubName": "Primary DataHub Name 2"
      },
      "secondaryConnector": { // Optional
          "moduleId": "OPCUAAdapterV1.0",
          "dataHubId": "3310507c-2645-43d6-a9d6-d08701fabf2d",
          "status": "Offline",
          "statusUpdateTime": "2024-09-20T17:05:03.389Z",
          "statusReason": "connection-lost",
          //"dataHubName": "Secondary DataHub Name 2"
      },
      "tags": [
          "Country : IN",
          "Field : High",
          "Operator : IOC",
          "Well : I222",
          "Wellbore : D-12-12"
      ],
      "systemTags": [
          "Env : dev",
          "LastDeploymentId : 036faf82-47fc-4e4a-83ad-33fab0f928b1",
          "Owner : flora_support@bakerhuges.com",
          "Service : Flora",
          "Business : CIM"
      ],
      "createdBy": "creator0@bakerhughes.com",
      "createdAt": "2024-09-02T08:14:58.985Z",
      "updatedBy": "updater0@bakerhughes.com",
      "updatedAt": "2024-09-23T19:15:22.985Z"
  }
];
