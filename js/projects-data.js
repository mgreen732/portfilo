window.PROJECTS = [
  {
    "id": 1,
    "slug": "p1",
    "number": "01",
    "title": "AWS Account Setup & Security",
    "description": "Set up a secure AWS account from scratch \u2014 configuring root user credentials, enabling MFA via authenticator app, setting up billing alerts with CloudWatch and SNS, and activating Free Tier safeguards to prevent unexpected charges.",
    "category": "security",
    "featured": false,
    "icon": "\ud83d\udee1\ufe0f",
    "technologies": [
      "IAM",
      "CloudWatch",
      "SNS",
      "MFA",
      "Root Security"
    ],
    "pdf": "projects/Set_Up_an_AWS_Account.pdf",
    "challenge": "Applied hands-on AWS configuration and validation to understand how the service behaves in a working environment.",
    "result": "Completed the implementation and documented the configuration, validation steps, and technical takeaways."
  },
  {
    "id": 2,
    "slug": "p2",
    "number": "02",
    "title": "Host a Website on Amazon S3",
    "description": "Deployed a static website to Amazon S3, configuring bucket policies, ACLs, and public access settings. Troubleshot and resolved a 403 Forbidden error by correctly managing object-level permissions alongside bucket-level settings.",
    "category": "cloud",
    "featured": false,
    "icon": "\u2601\ufe0f",
    "technologies": [
      "S3",
      "Bucket Policies",
      "ACLs",
      "Static Hosting"
    ],
    "pdf": "projects/Host_a_Website_on_Amazon_S3.pdf",
    "challenge": "Diagnosed a 403 Forbidden response caused by S3 public-access and object permission settings.",
    "result": "Published the static site successfully after correcting bucket/object access configuration."
  },
  {
    "id": 3,
    "slug": "p3",
    "number": "03",
    "title": "Build a Virtual Private Cloud (VPC)",
    "description": "Built an Amazon VPC from scratch \u2014 defining CIDR blocks, creating public and private subnets, attaching an Internet Gateway, and configuring route tables. Also used AWS CloudShell and CLI to create resources programmatically.",
    "category": "networking",
    "featured": false,
    "icon": "\ud83c\udf10",
    "technologies": [
      "VPC",
      "Subnets",
      "Internet Gateway",
      "Route Tables",
      "AWS CLI"
    ],
    "pdf": "projects/Build_a_Virtual_Private_Cloud__VPC_.pdf",
    "challenge": "Applied hands-on AWS configuration and validation to understand how the service behaves in a working environment.",
    "result": "Completed the implementation and documented the configuration, validation steps, and technical takeaways."
  },
  {
    "id": 4,
    "slug": "p4",
    "number": "04",
    "title": "VPC Traffic Flow & Security",
    "description": "Configured Security Groups and Network ACLs to control inbound and outbound traffic. Implemented layered security at both resource and subnet levels, and deployed resources across multiple regions to explore EC2 Global View.",
    "category": "networking",
    "featured": false,
    "icon": "\ud83c\udf10",
    "technologies": [
      "Security Groups",
      "Network ACLs",
      "Multi-Region",
      "EC2 Global View"
    ],
    "pdf": "projects/VPC_Traffic_Flow_and_Security.pdf",
    "challenge": "Applied hands-on AWS configuration and validation to understand how the service behaves in a working environment.",
    "result": "Completed the implementation and documented the configuration, validation steps, and technical takeaways."
  },
  {
    "id": 5,
    "slug": "p5",
    "number": "05",
    "title": "Cloud Security with AWS IAM",
    "description": "Built a real-world IAM access control setup \u2014 creating users, user groups, and a multi-statement JSON policy restricting interns to development EC2 instances only. Verified using live testing and the IAM Policy Simulator. Configured account aliases for simpler sign-in URLs.",
    "category": "security",
    "featured": false,
    "icon": "\ud83d\udee1\ufe0f",
    "technologies": [
      "IAM",
      "EC2",
      "JSON Policies",
      "User Groups",
      "Policy Simulator",
      "Resource Tagging"
    ],
    "pdf": "projects/Cloud_Security_with_AWS_IAM.pdf",
    "challenge": "Applied hands-on AWS configuration and validation to understand how the service behaves in a working environment.",
    "result": "Completed the implementation and documented the configuration, validation steps, and technical takeaways."
  },
  {
    "id": 6,
    "slug": "p6",
    "number": "06",
    "title": "Creating a Private Subnet",
    "description": "Built a private subnet inside an Amazon VPC, configured a dedicated route table with no internet gateway route, and set up a custom Network ACL that denies all inbound and outbound traffic to fully isolate the subnet.",
    "category": "networking",
    "featured": false,
    "icon": "\ud83c\udf10",
    "technologies": [
      "VPC",
      "Private Subnet",
      "Route Tables",
      "Network ACLs"
    ],
    "pdf": "projects/Creating_a_Private_Subnet.pdf",
    "challenge": "Applied hands-on AWS configuration and validation to understand how the service behaves in a working environment.",
    "result": "Completed the implementation and documented the configuration, validation steps, and technical takeaways."
  },
  {
    "id": 7,
    "slug": "p7",
    "number": "07",
    "title": "Launching VPC Resources",
    "description": "Launched public and private EC2 instances inside a VPC, configured key pairs for secure SSH access, set up dedicated security groups for each server, and used the \"VPC and more\" option to rapidly deploy a full VPC infrastructure including subnets, route tables, and internet gateways.",
    "category": "networking",
    "featured": false,
    "icon": "\ud83c\udf10",
    "technologies": [
      "VPC",
      "EC2",
      "SSH",
      "Key Pairs",
      "Security Groups",
      "NAT Gateway"
    ],
    "pdf": "projects/Launching_VPC_Resources.pdf",
    "challenge": "Applied hands-on AWS configuration and validation to understand how the service behaves in a working environment.",
    "result": "Completed the implementation and documented the configuration, validation steps, and technical takeaways."
  },
  {
    "id": 8,
    "slug": "p8",
    "number": "08",
    "title": "Testing VPC Connectivity",
    "description": "Launched public and private EC2 instances, connected via EC2 Instance Connect, and tested connectivity using ping and curl. Troubleshot ICMP traffic issues by updating Network ACLs and security group rules to allow communication between servers.",
    "category": "networking",
    "featured": false,
    "icon": "\ud83c\udf10",
    "technologies": [
      "VPC",
      "EC2",
      "Ping",
      "Curl",
      "ICMP",
      "Network ACLs"
    ],
    "pdf": "projects/Testing_vpc_connectivity.pdf",
    "challenge": "Connectivity failed until ICMP and SSH rules were aligned across security groups and network ACLs.",
    "result": "Validated public-to-private EC2 communication with ping/curl after correcting network controls."
  },
  {
    "id": 9,
    "slug": "p9",
    "number": "09",
    "title": "VPC Peering",
    "description": "Built a multi-VPC architecture by creating two VPCs with unique CIDR blocks, establishing a peering connection, updating route tables on both sides, and validating connectivity using ping. Troubleshot EC2 Instance Connect errors by assigning Elastic IP addresses and resolved ping failures by enabling ICMP traffic in security groups.",
    "category": "networking",
    "featured": false,
    "icon": "\ud83c\udf10",
    "technologies": [
      "VPC Peering",
      "Elastic IP",
      "ICMP",
      "Route Tables",
      "EC2"
    ],
    "pdf": "projects/vpc_peering.pdf",
    "challenge": "Resolved EC2 Instance Connect and ping failures by correcting addressing, routing, and ICMP rules.",
    "result": "Established working cross-VPC communication through VPC peering."
  },
  {
    "id": 10,
    "slug": "p10",
    "number": "10",
    "title": "VPC Monitoring with Flow Logs",
    "description": "Set up VPC Flow Logs to monitor network traffic across two peered VPCs, configured IAM policies and roles to allow log delivery to CloudWatch, troubleshot connectivity issues using ping, and analyzed traffic data using CloudWatch Logs Insights queries.",
    "category": "monitoring",
    "featured": true,
    "icon": "\ud83d\udcca",
    "technologies": [
      "VPC Flow Logs",
      "CloudWatch",
      "IAM Roles",
      "Logs Insights",
      "VPC Peering"
    ],
    "pdf": "projects/vpc_monitoring_with_flow_logs.pdf",
    "challenge": "Needed visibility into traffic while diagnosing connectivity across peered VPCs.",
    "result": "Delivered VPC Flow Logs to CloudWatch and used Logs Insights to inspect network activity."
  },
  {
    "id": 11,
    "slug": "p11",
    "number": "11",
    "title": "Access S3 from a VPC",
    "description": "Launched a VPC with a public subnet and EC2 instance, configured AWS CLI access keys to authenticate the instance against AWS, and used CLI commands to list, upload, and verify objects in an S3 bucket \u2014 demonstrating how compute resources inside a VPC securely interact with storage outside it.",
    "category": "networking",
    "featured": false,
    "icon": "\ud83c\udf10",
    "technologies": [
      "VPC",
      "EC2",
      "S3",
      "AWS CLI",
      "Access Keys",
      "IAM Roles"
    ],
    "pdf": "projects/access_s3_from_a_vpc.pdf",
    "challenge": "Applied hands-on AWS configuration and validation to understand how the service behaves in a working environment.",
    "result": "Completed the implementation and documented the configuration, validation steps, and technical takeaways."
  },
  {
    "id": 12,
    "slug": "p12",
    "number": "12",
    "title": "VPC Endpoints",
    "description": "Created an S3 Gateway Endpoint to give an EC2 instance private access to an S3 bucket without routing through the internet gateway, then enforced that boundary with a bucket policy scoped to the endpoint's ID. Updated the route table to direct S3 traffic to the endpoint and validated enforcement by toggling the endpoint policy between Allow and Deny.",
    "category": "networking",
    "featured": false,
    "icon": "\ud83c\udf10",
    "technologies": [
      "VPC Endpoints",
      "Gateway Endpoint",
      "S3",
      "Bucket Policies",
      "Endpoint Policies",
      "Route Tables"
    ],
    "pdf": "projects/vpc_endpoints.pdf",
    "challenge": "Creating the endpoint alone did not reroute S3 traffic; the route table also required the endpoint route.",
    "result": "Kept EC2-to-S3 traffic on a private AWS path and restricted bucket access with endpoint policies."
  },
  {
    "id": 13,
    "slug": "p13",
    "number": "13",
    "title": "Website Delivery with CloudFront",
    "description": "Deployed a static website to S3 and distributed it globally using Amazon CloudFront. Configured a CloudFront distribution with an S3 origin, set up Origin Access Control (OAC) to keep the bucket private while allowing CloudFront access, and compared load times and security between direct S3 hosting and CloudFront delivery.",
    "category": "serverless",
    "featured": false,
    "icon": "\u26a1",
    "technologies": [
      "CloudFront",
      "S3",
      "CDN",
      "OAC",
      "Distributions",
      "Static Hosting"
    ],
    "pdf": "projects/website_delivery_with_cloudfront.pdf",
    "challenge": "Applied hands-on AWS configuration and validation to understand how the service behaves in a working environment.",
    "result": "Completed the implementation and documented the configuration, validation steps, and technical takeaways."
  },
  {
    "id": 14,
    "slug": "p14",
    "number": "14",
    "title": "APIs with Lambda + API Gateway",
    "description": "Built the logic tier of a three-tier architecture by writing a Lambda function to retrieve user data from DynamoDB, then exposed it via a REST API in Amazon API Gateway. Configured a GET method with Lambda proxy integration, deployed to a Prod stage, and wrote and published OpenAPI documentation for the API.",
    "category": "serverless",
    "featured": false,
    "icon": "\u26a1",
    "technologies": [
      "Lambda",
      "API Gateway",
      "REST API",
      "Serverless",
      "DynamoDB",
      "OpenAPI"
    ],
    "pdf": "projects/apis_with_lambda_api_gateway.pdf",
    "challenge": "Applied hands-on AWS configuration and validation to understand how the service behaves in a working environment.",
    "result": "Completed the implementation and documented the configuration, validation steps, and technical takeaways."
  },
  {
    "id": 15,
    "slug": "p15",
    "number": "15",
    "title": "Fetch Data with AWS Lambda",
    "description": "Set up a DynamoDB table as the data tier of a three-tier architecture, then wrote a Lambda function using the AWS SDK to query it by userId. Debugged an IAM Access Denied error by reading the error message to identify the missing permission, chose AmazonDynamoDBReadOnlyAccess over broader policies, and then hardened security further by writing a custom inline policy scoped to a single table.",
    "category": "serverless",
    "featured": false,
    "icon": "\u26a1",
    "technologies": [
      "DynamoDB",
      "Lambda",
      "IAM",
      "Inline Policies",
      "Execution Roles",
      "NoSQL"
    ],
    "pdf": "projects/fetch_data_with_aws_lambda.pdf",
    "challenge": "A Lambda execution role initially lacked permission to read the DynamoDB table.",
    "result": "Scoped IAM access to the required table and validated successful Lambda-to-DynamoDB retrieval."
  },
  {
    "id": 16,
    "slug": "p16",
    "number": "16",
    "title": "Build a Three-Tier Web App",
    "description": "Assembled all three tiers of a production-style architecture from scratch: CloudFront + S3 for the presentation tier, Lambda + API Gateway for the logic tier, and DynamoDB for the data tier. Debugged real-world issues including a script.js placeholder error and a CORS error caused by Lambda proxy integration, resolving it by scoping Access-Control-Allow-Origin to the CloudFront domain rather than using a wildcard.",
    "category": "serverless",
    "featured": true,
    "icon": "\u26a1",
    "technologies": [
      "Three-Tier Architecture",
      "CloudFront",
      "S3",
      "Lambda",
      "API Gateway",
      "DynamoDB",
      "CORS"
    ],
    "pdf": "projects/building_a_tier_three_webapp.pdf",
    "challenge": "Integrated three separate tiers and debugged CORS, S3 access, IAM, and CloudFront delivery issues.",
    "result": "Delivered a functioning serverless web application across presentation, logic, and data tiers."
  },
  {
    "id": 17,
    "slug": "p17",
    "number": "17",
    "title": "Connect a Web App to Amazon Aurora",
    "description": "Created an Amazon Aurora MySQL cluster and connected it to an EC2 instance acting as a web server. Learned how Aurora clusters use a primary instance and read replicas to ensure high availability, and how AWS automatically handles VPC, DB subnet group, and security group configuration when linking EC2 to RDS.",
    "category": "databases",
    "featured": false,
    "icon": "\ud83d\uddc4\ufe0f",
    "technologies": [
      "Aurora",
      "RDS",
      "EC2",
      "MySQL",
      "Relational Databases",
      "VPC"
    ],
    "pdf": "projects/connect_a_web_app_to_amazon_aurora.pdf",
    "challenge": "Applied hands-on AWS configuration and validation to understand how the service behaves in a working environment.",
    "result": "Completed the implementation and documented the configuration, validation steps, and technical takeaways."
  },
  {
    "id": 18,
    "slug": "p18",
    "number": "18",
    "title": "Aurora Web App with LAMP Stack",
    "description": "Built a dynamic database-driven web app on EC2 using a LAMP-style stack (Apache, PHP, php-mysqli, MariaDB), connected it to an Amazon Aurora MySQL cluster, and verified end-to-end data flow by submitting form data and querying it back via the MySQL CLI. Navigated real Linux CLI challenges including SSH key permissions with chmod 400, file ownership with chown, and editing config files in nano.",
    "category": "linux",
    "featured": true,
    "icon": "\ud83d\udc27",
    "technologies": [
      "Aurora",
      "EC2",
      "LAMP Stack",
      "MySQL CLI",
      "PHP",
      "Apache",
      "Linux"
    ],
    "pdf": "projects/connect_a_web_app_to_amazon_aurora_project2.pdf",
    "challenge": "Configured Linux key permissions, packages, web-server components, and database connectivity from the command line.",
    "result": "Ran a database-backed web application on EC2 connected to Aurora MySQL."
  },
  {
    "id": 19,
    "slug": "p19",
    "number": "19",
    "title": "Load Data into a DynamoDB Table",
    "description": "Created multiple DynamoDB tables using the AWS CLI in CloudShell, then bulk-loaded JSON data using batch-write-item. Explored DynamoDB's schema-less flexibility by observing items with different attribute sets in the same table, learned the difference between RCUs and WCUs, and compared DynamoDB's speed and flexibility advantages over relational databases.",
    "category": "databases",
    "featured": false,
    "icon": "\ud83d\uddc4\ufe0f",
    "technologies": [
      "DynamoDB",
      "AWS CLI",
      "CloudShell",
      "NoSQL",
      "batch-write-item",
      "RCU/WCU"
    ],
    "pdf": "projects/Load_Data_into_a_DynamoDB_Table.pdf",
    "challenge": "Applied hands-on AWS configuration and validation to understand how the service behaves in a working environment.",
    "result": "Completed the implementation and documented the configuration, validation steps, and technical takeaways."
  },
  {
    "id": 20,
    "slug": "p20",
    "number": "20",
    "title": "Query Data with DynamoDB",
    "description": "Ran advanced queries and scans on DynamoDB tables using both the AWS Console and CLI, using partition keys, sort keys, projection expressions, consistent reads, and return-consumed-capacity flags. Discovered the limits of querying non-key attributes and learned when a Global Secondary Index is needed. Executed a multi-table transaction to atomically add a comment and increment a forum's comment count in a single operation.",
    "category": "databases",
    "featured": true,
    "icon": "\ud83d\uddc4\ufe0f",
    "technologies": [
      "DynamoDB",
      "Queries & Scans",
      "Transactions",
      "AWS CLI",
      "Partition Keys",
      "Sort Keys"
    ],
    "pdf": "projects/query_data_with_dynamodb.pdf",
    "challenge": "A query against a non-key attribute failed, reinforcing DynamoDB access-pattern and key-design constraints.",
    "result": "Queried/scanned tables with CLI and console tools and used a transaction to keep related table updates consistent."
  }
];
