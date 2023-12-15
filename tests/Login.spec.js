import { test, expect,Locator } from '@playwright/test';


test('Written with Expleo Recorder', async ({ page }) => {
  // Load "http://192.168.99.145:8180/pc/PolicyCenter.do"
  await page.goto('http://192.168.99.145:8180/pc/PolicyCenter.do');

  // Resize window to 1920 x 963
  await page.setViewportSize({ width: 1920, height: 963 });

  // Click on <input> #Login\\:LoginScreen\\:LoginDV\\:username-inputEl
  await page.click('#Login\\:LoginScreen\\:LoginDV\\:username-inputEl');

  // Fill "exp_test" on <input> #Login\:LoginScreen\:LoginDV\:username-inputEl
  //await page.fill('#Login\\:LoginScreen\\:LoginDV\\:username-inputEl', "exp_test");
    await setText('#Login\\:LoginScreen\\:LoginDV\\:username-inputEl', 'exp_test');
  // Press Tab on input
  await page.press('#Login\\:LoginScreen\\:LoginDV\\:username-inputEl', 'Tab');

  // Fill "exp_test" on <input> #Login\\:LoginScreen\\:LoginDV\\:password-inputEl
  await page.fill('#Login\\:LoginScreen\\:LoginDV\\:password-inputEl', "exp_test");

  // Click on <span> "Log In"
  await page.click('#Login\\:LoginScreen\\:LoginDV\\:submit-btnInnerEl');

  // Click on <a> "Actions  "
  await page.click('#Desktop\\:DesktopMenuActions');

  // Click on <a> "New Account"
  await page.click('#Desktop\\:DesktopMenuActions\\:DesktopMenuActions_Create\\:DesktopMenuActions_NewAccount-itemEl');

  // Fill "rew" on <input> #NewAccount\\:NewAccountScreen\\:NewAccountSearchDV\\:GlobalContactNameInputSet\\:Name-inputEl
  await page.fill('#NewAccount\\:NewAccountScreen\\:NewAccountSearchDV\\:GlobalContactNameInputSet\\:Name-inputEl', "rew");

  // Click on <a> "Search"
  await page.click('#NewAccount\\:NewAccountScreen\\:NewAccountSearchDV\\:SearchAndResetInputSet\\:SearchLinksInputSet\\:Search');

  // Click on <span> "Create New Account"
  await page.click('#NewAccount\\:NewAccountScreen\\:NewAccountButton-btnInnerEl');

  // Click on <a> "Person"
  await page.click('#NewAccount\\:NewAccountScreen\\:NewAccountButton\\:NewAccount_Person-itemEl');

  // Click on <input> #CreateAccount\\:CreateAccountScreen\\:CreateAccountDV\\:CreateAccountContactInputSet\\:GlobalPersonNameInputSet\\:FirstName-inputEl
  await page.click('#CreateAccount\\:CreateAccountScreen\\:CreateAccountDV\\:CreateAccountContactInputSet\\:GlobalPersonNameInputSet\\:FirstName-inputEl');

  // Fill "asdfg" on <input> #CreateAccount\\:CreateAccountScreen\\:CreateAccountDV\\:CreateAccountContactInputSet\\:GlobalPersonNameInputSet\\:FirstName-inputEl
  await page.fill('#CreateAccount\\:CreateAccountScreen\\:CreateAccountDV\\:CreateAccountContactInputSet\\:GlobalPersonNameInputSet\\:FirstName-inputEl', "asdfg");

  // Click on <input> #CreateAccount\\:CreateAccountScreen\\:CreateAccountDV\\:CreateAccountContactInputSet\\:GlobalPersonNameInputSet\\:LastName-inputEl
  await page.click('#CreateAccount\\:CreateAccountScreen\\:CreateAccountDV\\:CreateAccountContactInputSet\\:GlobalPersonNameInputSet\\:LastName-inputEl');

  // Fill "asdfg" on <input> #CreateAccount\\:CreateAccountScreen\\:CreateAccountDV\\:CreateAccountContactInputSet\\:GlobalPersonNameInputSet\\:LastName-inputEl
  await page.fill('#CreateAccount\\:CreateAccountScreen\\:CreateAccountDV\\:CreateAccountContactInputSet\\:GlobalPersonNameInputSet\\:LastName-inputEl', "asdfg");

  // Click on <input> #CreateAccount\\:CreateAccountScreen\\:CreateAccountDV\\:AddressInputSet\\:globalAddressContainer\\:GlobalAddressInputSet\\:AddressLine1-inputEl
  await page.click('#CreateAccount\\:CreateAccountScreen\\:CreateAccountDV\\:AddressInputSet\\:globalAddressContainer\\:GlobalAddressInputSet\\:AddressLine1-inputEl');

  // Fill "1A" on <input> #CreateAccount\\:CreateAccountScreen\\:CreateAccountDV\\:AddressInputSet\\:globalAddressContainer\\:GlobalAddressInputSet\\:AddressLine1-inputEl
  await page.fill('#CreateAccount\\:CreateAccountScreen\\:CreateAccountDV\\:AddressInputSet\\:globalAddressContainer\\:GlobalAddressInputSet\\:AddressLine1-inputEl', "1A");

  // Click on <input> #CreateAccount\\:CreateAccountScreen\\:CreateAccountDV\\:AddressInputSet\\:globalAddressContainer\\:GlobalAddressInputSet\\:City-inputEl
  await page.click('#CreateAccount\\:CreateAccountScreen\\:CreateAccountDV\\:AddressInputSet\\:globalAddressContainer\\:GlobalAddressInputSet\\:City-inputEl');

  // Fill "Aly" on <input> #CreateAccount\\:CreateAccountScreen\\:CreateAccountDV\\:AddressInputSet\\:globalAddressContainer\\:GlobalAddressInputSet\\:City-inputEl
  await page.fill('#CreateAccount\\:CreateAccountScreen\\:CreateAccountDV\\:AddressInputSet\\:globalAddressContainer\\:GlobalAddressInputSet\\:City-inputEl', "Alys Beach");

  // Press Enter on input
  await page.press('#CreateAccount\\:CreateAccountScreen\\:CreateAccountDV\\:AddressInputSet\\:globalAddressContainer\\:GlobalAddressInputSet\\:City-inputEl', 'Enter');

  // Click on <input> #CreateAccount\\:CreateAccountScreen\\:CreateAccountDV\\:AddressType-inputEl
 // await page.click('#CreateAccount\\:CreateAccountScreen\\:CreateAccountDV\\:AddressType-inputEl');
  await dropDown('#CreateAccount\\:CreateAccountScreen\\:CreateAccountDV\\:AddressType-inputEl','Billing');

  // Click on <li> "Billing"
  //await page.click('#ext-element-101');

  // Click on <div> #CreateAccount\\:CreateAccountScreen\\:CreateAccountDV\\:ProducerSelectionInputSet\\:Producer\\:SelectOrganization
  await page.click('#CreateAccount\\:CreateAccountScreen\\:CreateAccountDV\\:ProducerSelectionInputSet\\:Producer\\:SelectOrganization');

  // Click on <input> #OrganizationSearchPopup\\:OrganizationSearchPopupScreen\\:OrganizationSearchDV\\:AddressOwnerAddressInputSet\\:globalAddressContainer\\:GlobalAddressInputSet\\:Country-inputEl
  await page.click('#OrganizationSearchPopup\\:OrganizationSearchPopupScreen\\:OrganizationSearchDV\\:AddressOwnerAddressInputSet\\:globalAddressContainer\\:GlobalAddressInputSet\\:Country-inputEl');

  // Click on <td> "Organization Type   "
  await page.click('#ext-element-110');

  // Click on <input> #OrganizationSearchPopup\\:OrganizationSearchPopupScreen\\:OrganizationSearchDV\\:Type-inputEl
  await page.click('#OrganizationSearchPopup\\:OrganizationSearchPopupScreen\\:OrganizationSearchDV\\:Type-inputEl');

  // Click on <li> "Insurer"
  await page.click('#ext-element-130');

  // Click on <a> "Search"
  await page.click('#OrganizationSearchPopup\\:OrganizationSearchPopupScreen\\:OrganizationSearchDV\\:SearchAndResetInputSet\\:SearchLinksInputSet\\:Search');

  // Click on <a> "Select"
  await page.click('#OrganizationSearchPopup\\:OrganizationSearchPopupScreen\\:OrganizationSearchResultsLV\\:0\\:_Select');

  // Click on <input> #CreateAccount\\:CreateAccountScreen\\:CreateAccountDV\\:ProducerSelectionInputSet\\:ProducerCode-inputEl
  await page.click('#CreateAccount\\:CreateAccountScreen\\:CreateAccountDV\\:ProducerSelectionInputSet\\:ProducerCode-inputEl');

  // Click on <li> "Standard Code Internal Pr..."
  await page.click('#ext-element-221');

  // Click on <span> "Update"
  await page.click('#CreateAccount\\:CreateAccountScreen\\:Update-btnInnerEl');

  // Click on <div> "2166541382"
  await page.click('#AccountFile_Summary\\:AccountFile_SummaryScreen\\:AccountFile_Summary_BasicInfoDV\\:AccountNumber-inputEl');
});