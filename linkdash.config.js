module.exports = async () => {
  return {
    title: "VAI Linkdash",

    // a static list of urls to build the linkdash list from
    urls: [
      // Frontend / vai-spa
      {
        title: "[QA] vai-spa",
        href: "https://qa.vaitech.de/de",
        group: "Site",
        keywords: "frontend website",
        isBookmarked: false,
      },
      {
        title: "[PreProd] vai-spa",
        href: "https://preprod.vaitech.de/de",
        group: "Site",
        keywords: "frontend website",
        isBookmarked: false,
      },
      {
        title: "[Prod] vai-spa",
        href: "https://vaitrade.de",
        group: "Site",
        keywords: "frontend website live",
        isBookmarked: false,
      },
      // Backoffice
      {
        title: "[QA] backoffice",
        href: "http://backoffice.qa.vaitech.de/",
        group: "Site",
        keywords: "admin portal ap",
        isBookmarked: false,
      },
      {
        title: "[PreProd] backoffice",
        href: "http://backoffice.preprod.vaitech.de/",
        group: "Site",
        keywords: "admin portal ap",
        isBookmarked: false,
      },
      {
        title: "[Prod] backoffice",
        href: "http://backoffice.vaitech.de/",
        group: "Site",
        keywords: "live admin portal ap",
        isBookmarked: false,
      },
      // Designs
      {
        title: "Design Library",
        href: "https://projects.invisionapp.com/d/main#/projects/prototypes/19549596",
        group: "Designs",
        isBookmarked: false,
      },
      {
        title: "Dashboard Designs",
        href: "https://projects.invisionapp.com/d/main#/console/19691268/411798147/preview",
        group: "Designs",
        isBookmarked: false,
      },
      {
        title: "Onboarding Designs",
        href: "https://projects.invisionapp.com/d/main/#/console/19593390/409626655/inspect",
        group: "Designs",
        isBookmarked: false,
      },
      // Tooling
      {
        title: "Jira Sprint View",
        href: "https://vaitrade.atlassian.net/secure/RapidBoard.jspa?rapidView=9&projectKey=VAI",
        group: "Tools",
        isBookmarked: false,
      },
      {
        title: "Jira Backlog",
        href: "https://vaitrade.atlassian.net/secure/RapidBoard.jspa?rapidView=9&view=planning.nodetail&issueLimit=100",
        group: "Tools",
        isBookmarked: false,
      },
      {
        title: "Amplitude",
        href: "https://analytics.amplitude.com/vaitrade/activity",
        group: "Tools",
        isBookmarked: false,
      },
      {
        title: "Travis",
        href: "https://travis-ci.com/",
        group: "Tools",
        isBookmarked: false,
      },
      // AWS
      {
        title: "[QA] CloudWatch Dashboard",
        href: "https://eu-central-1.console.aws.amazon.com/cloudwatch/home?region=eu-central-1#dashboards:name=qa-api-gateway",
        group: "AWS",
        isBookmarked: false,
      },
      {
        title: "[PreProd] CloudWatch Dashboard",
        href: "https://eu-central-1.console.aws.amazon.com/cloudwatch/home?region=eu-central-1#dashboards:name=preprod-api-gateway",
        group: "AWS",
        isBookmarked: false,
      },
      {
        title: "[Prod] CloudWatch Dashboard",
        href: "https://eu-central-1.console.aws.amazon.com/cloudwatch/home?region=eu-central-1#dashboards:name=prod-api-gateway",
        group: "AWS",
        isBookmarked: false,
      },
      {
        title: "[Prod] DynamoDB Tables",
        href: "https://eu-central-1.console.aws.amazon.com/dynamodb/home?region=eu-central-1#tables:",
        group: "AWS",
        isBookmarked: false,
      },
      {
        title: "DynamoDB Tables",
        href: "https://eu-central-1.console.aws.amazon.com/dynamodb/home?region=eu-central-1#tables:",
        group: "AWS",
        isBookmarked: false,
      },
      // Github
      {
        title: "Organization",
        href: "https://github.com/vai-trade/",
        group: "GitHub",
        isBookmarked: false,
      },
      {
        title: "deal-service",
        href: "https://github.com/vai-trade/deal-service",
        group: "GitHub",
        isBookmarked: false,
      },
      {
        title: "supplier-service",
        href: "https://github.com/vai-trade/supplier-service",
        group: "GitHub",
        isBookmarked: false,
      },
      {
        title: "vai-spa",
        href: "https://github.com/vai-trade/vai-spa",
        group: "GitHub",
        isBookmarked: false,
      },
      {
        title: "vai-bff",
        href: "https://github.com/vai-trade/vai-bff",
        group: "GitHub",
        isBookmarked: false,
      },
      {
        title: "archive-service",
        href: "https://github.com/vai-trade/archive-service",
        group: "GitHub",
        isBookmarked: false,
      },
      {
        title: "billing-service",
        href: "https://github.com/vai-trade/billing-service",
        group: "GitHub",
        isBookmarked: false,
      },
      {
        title: "backoffice",
        href: "https://github.com/vai-trade/backoffice",
        group: "GitHub",
        isBookmarked: false,
      },
      {
        title: "company-service",
        href: "https://github.com/vai-trade/company-service",
        group: "GitHub",
        isBookmarked: false,
      },
      {
        title: "upload-service",
        href: "https://github.com/vai-trade/upload-service",
        group: "GitHub",
        isBookmarked: false,
      },
      {
        title: "bank-service",
        href: "https://github.com/vai-trade/bank-service",
        group: "GitHub",
        isBookmarked: false,
      },
      {
        title: "installment-monitoring-service",
        href: "https://github.com/vai-trade/installment-monitoring-service",
        group: "GitHub",
        isBookmarked: false,
      },
      {
        title: "user-service",
        href: "https://github.com/vai-trade/user-service",
        group: "GitHub",
        isBookmarked: false,
      },
      {
        title: "evaluation-service-v2",
        href: "https://github.com/vai-trade/evaluation-service-v2",
        group: "GitHub",
        isBookmarked: false,
      },
      {
        title: "crm-service-v2",
        href: "https://github.com/vai-trade/crm-service-v2",
        group: "GitHub",
        isBookmarked: false,
      },
      {
        title: "agreement-service",
        href: "https://github.com/vai-trade/agreement-service",
        group: "GitHub",
        isBookmarked: false,
      },
      {
        title: "email-service",
        href: "https://github.com/vai-trade/email-service",
        group: "GitHub",
        isBookmarked: false,
      },
      {
        title: "rossum-adaptor",
        href: "https://github.com/vai-trade/rossum-adaptor",
        group: "GitHub",
        isBookmarked: false,
      },
      {
        title: "vr-monitoring-service",
        href: "https://github.com/vai-trade/vr-monitoring-service",
        group: "GitHub",
        isBookmarked: false,
      },
      {
        title: "slack-service",
        href: "https://github.com/vai-trade/slack-service",
        group: "GitHub",
        isBookmarked: false,
      },
      {
        title: "poc-generator-mircroservice",
        href: "https://github.com/vai-trade/poc-generator-mircroservice",
        group: "GitHub",
        isBookmarked: false,
      },
      {
        title: "evaluation-service",
        href: "https://github.com/vai-trade/evaluation-service",
        group: "GitHub",
        isBookmarked: false,
      },
      {
        title: "accounting-service",
        href: "https://github.com/vai-trade/accounting-service",
        group: "GitHub",
        isBookmarked: false,
      },
      {
        title: "python-lambda-poc",
        href: "https://github.com/vai-trade/python-lambda-poc",
        group: "GitHub",
        isBookmarked: false,
      },
    ],

    disableOpen: false,
    output: "./index.html",
    htmlHead: `
    <meta name="robots" content="noindex" />
    `.trim(),
    // automatically opens the menu
    enableAutoMenu: false,
  };
};
