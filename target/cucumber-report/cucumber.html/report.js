$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LoginPage.feature");
formatter.feature({
  "line": 2,
  "name": "Login Test",
  "description": "As user I want to login into nop commerce website",
  "id": "login-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should besee the error message \"\u003cerrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "errorMessage"
      ],
      "line": 20,
      "id": "login-test;verify-the-error-message-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "qwerty123@gmail.com",
        "qazwsx12",
        "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found"
      ],
      "line": 21,
      "id": "login-test;verify-the-error-message-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "xyz890@gmail.com",
        "qazwsx",
        "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found"
      ],
      "line": 22,
      "id": "login-test;verify-the-error-message-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "qwerty@gmail.com",
        "qwerty123",
        "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found"
      ],
      "line": 23,
      "id": "login-test;verify-the-error-message-with-invalid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5511794800,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 11,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter email \"qwerty123@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter password \"qazwsx12\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should besee the error message \"Login was unsuccessful. Please correct the errors and try again.\nNo customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 143386300,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 825681000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qwerty123@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginPageSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 99069100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qazwsx12",
      "offset": 18
    }
  ],
  "location": "LoginPageSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 84393500,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 726993400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found",
      "offset": 34
    }
  ],
  "location": "LoginPageSteps.iShouldBeseeTheErrorMessage(String)"
});
formatter.result({
  "duration": 68432400,
  "status": "passed"
});
formatter.after({
  "duration": 778545800,
  "status": "passed"
});
formatter.before({
  "duration": 2502626500,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 11,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter email \"xyz890@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter password \"qazwsx\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should besee the error message \"Login was unsuccessful. Please correct the errors and try again.\nNo customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 45400,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 827321900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz890@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginPageSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 95605300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qazwsx",
      "offset": 18
    }
  ],
  "location": "LoginPageSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 82901800,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 721031500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found",
      "offset": 34
    }
  ],
  "location": "LoginPageSteps.iShouldBeseeTheErrorMessage(String)"
});
formatter.result({
  "duration": 47513500,
  "status": "passed"
});
formatter.after({
  "duration": 757042100,
  "status": "passed"
});
formatter.before({
  "duration": 2685905900,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 11,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter email \"qwerty@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter password \"qwerty123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should besee the error message \"Login was unsuccessful. Please correct the errors and try again.\nNo customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 45200,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 860179800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qwerty@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginPageSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 92333400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qwerty123",
      "offset": 18
    }
  ],
  "location": "LoginPageSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 88241800,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 322206900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found",
      "offset": 34
    }
  ],
  "location": "LoginPageSteps.iShouldBeseeTheErrorMessage(String)"
});
formatter.result({
  "duration": 41934000,
  "status": "passed"
});
formatter.after({
  "duration": 771946300,
  "status": "passed"
});
formatter.uri("RegisterPage.feature");
formatter.feature({
  "line": 2,
  "name": "Login Test",
  "description": "As user I want to login into nop commerce website",
  "id": "login-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 13,
  "name": "Verify that firstname lastname email password and confirm password fields are mandatory",
  "description": "",
  "id": "login-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see the error message \"\u003cerrorMessage\u003e\" for fieldName \"\u003cfieldName\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "login-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;",
  "rows": [
    {
      "cells": [
        "fieldName",
        "errorMessage"
      ],
      "line": 20,
      "id": "login-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;1"
    },
    {
      "cells": [
        "FirstName",
        "First name is required."
      ],
      "line": 21,
      "id": "login-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;2"
    },
    {
      "cells": [
        "LastName",
        "Last name is required."
      ],
      "line": 22,
      "id": "login-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;3"
    },
    {
      "cells": [
        "Email",
        "Email is required."
      ],
      "line": 23,
      "id": "login-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;4"
    },
    {
      "cells": [
        "Password",
        "Password is required."
      ],
      "line": 24,
      "id": "login-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;5"
    },
    {
      "cells": [
        "ConfirmPassword",
        "Password is required."
      ],
      "line": 25,
      "id": "login-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2221796100,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify that firstname lastname email password and confirm password fields are mandatory",
  "description": "",
  "id": "login-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 12,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see the error message \"First name is required.\" for fieldName \"FirstName\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 44500,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 857670900,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 78826400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First name is required.",
      "offset": 32
    },
    {
      "val": "FirstName",
      "offset": 72
    }
  ],
  "location": "RegistrationSteps.iShouldSeeTheErrorMessageForFieldName(String,String)"
});
formatter.result({
  "duration": 107046000,
  "error_message": "java.lang.AssertionError: error message is not displayed expected:\u003cnull\u003e but was:\u003cFirstName\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat com.nopcommerce.demo.cucumber.steps.RegistrationSteps.iShouldSeeTheErrorMessageForFieldName(RegistrationSteps.java:32)\r\n\tat ✽.Then I should see the error message \"First name is required.\" for fieldName \"FirstName\"(RegisterPage.feature:17)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 947744700,
  "status": "passed"
});
formatter.before({
  "duration": 2680968600,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify that firstname lastname email password and confirm password fields are mandatory",
  "description": "",
  "id": "login-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 12,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see the error message \"Last name is required.\" for fieldName \"LastName\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 83000,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 435431700,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 73535100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Last name is required.",
      "offset": 32
    },
    {
      "val": "LastName",
      "offset": 71
    }
  ],
  "location": "RegistrationSteps.iShouldSeeTheErrorMessageForFieldName(String,String)"
});
formatter.result({
  "duration": 90548300,
  "error_message": "java.lang.AssertionError: error message is not displayed expected:\u003cnull\u003e but was:\u003cLastName\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat com.nopcommerce.demo.cucumber.steps.RegistrationSteps.iShouldSeeTheErrorMessageForFieldName(RegistrationSteps.java:32)\r\n\tat ✽.Then I should see the error message \"Last name is required.\" for fieldName \"LastName\"(RegisterPage.feature:17)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 931133500,
  "status": "passed"
});
formatter.before({
  "duration": 2251511600,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Verify that firstname lastname email password and confirm password fields are mandatory",
  "description": "",
  "id": "login-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 12,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see the error message \"Email is required.\" for fieldName \"Email\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 41300,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 450943600,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 72174700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email is required.",
      "offset": 32
    },
    {
      "val": "Email",
      "offset": 67
    }
  ],
  "location": "RegistrationSteps.iShouldSeeTheErrorMessageForFieldName(String,String)"
});
formatter.result({
  "duration": 93732500,
  "error_message": "java.lang.AssertionError: error message is not displayed expected:\u003cnull\u003e but was:\u003cEmail\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat com.nopcommerce.demo.cucumber.steps.RegistrationSteps.iShouldSeeTheErrorMessageForFieldName(RegistrationSteps.java:32)\r\n\tat ✽.Then I should see the error message \"Email is required.\" for fieldName \"Email\"(RegisterPage.feature:17)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 905807600,
  "status": "passed"
});
formatter.before({
  "duration": 2808764800,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Verify that firstname lastname email password and confirm password fields are mandatory",
  "description": "",
  "id": "login-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 12,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see the error message \"Password is required.\" for fieldName \"Password\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 41900,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 912442700,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 80298000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 32
    },
    {
      "val": "Password",
      "offset": 70
    }
  ],
  "location": "RegistrationSteps.iShouldSeeTheErrorMessageForFieldName(String,String)"
});
formatter.result({
  "duration": 86881800,
  "error_message": "java.lang.AssertionError: error message is not displayed expected:\u003cnull\u003e but was:\u003cPassword\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat com.nopcommerce.demo.cucumber.steps.RegistrationSteps.iShouldSeeTheErrorMessageForFieldName(RegistrationSteps.java:32)\r\n\tat ✽.Then I should see the error message \"Password is required.\" for fieldName \"Password\"(RegisterPage.feature:17)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 913867700,
  "status": "passed"
});
formatter.before({
  "duration": 2599450300,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Verify that firstname lastname email password and confirm password fields are mandatory",
  "description": "",
  "id": "login-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 12,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see the error message \"Password is required.\" for fieldName \"ConfirmPassword\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 48900,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 859558700,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 74189100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 32
    },
    {
      "val": "ConfirmPassword",
      "offset": 70
    }
  ],
  "location": "RegistrationSteps.iShouldSeeTheErrorMessageForFieldName(String,String)"
});
formatter.result({
  "duration": 105411200,
  "error_message": "java.lang.AssertionError: error message is not displayed expected:\u003cnull\u003e but was:\u003cConfirmPassword\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat com.nopcommerce.demo.cucumber.steps.RegistrationSteps.iShouldSeeTheErrorMessageForFieldName(RegistrationSteps.java:32)\r\n\tat ✽.Then I should see the error message \"Password is required.\" for fieldName \"ConfirmPassword\"(RegisterPage.feature:17)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 916926200,
  "status": "passed"
});
});