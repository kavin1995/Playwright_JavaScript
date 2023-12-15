exports.Account_Creation_PC =
class Account_Creation_PC {

constructor(page){
    this.page = page;
     this.actionBtn='#Desktop\\:DesktopMenuActions-btnEl';
	 this.accountCeation= '#Desktop\\:DesktopMenuActions\\:DesktopMenuActions_Create\\:DesktopMenuActions_NewAccount-textEl';
	 this.companyName= '#NewAccount\\:NewAccountScreen\\:NewAccountSearchDV\\:GlobalContactNameInputSet\\:Name-inputEl';
	 this.search= '#NewAccount\\:NewAccountScreen\\:NewAccountSearchDV\\:SearchAndResetInputSet\\:SearchLinksInputSet\\:Search';
	 this.newAccount= '#NewAccount\\:NewAccountScreen\\:NewAccountButton-btnInnerEl';
	 this.person= '#NewAccount\\:NewAccountScreen\\:NewAccountButton\\:NewAccount_Person-itemEl';
	 this.firstName= '#CreateAccount\\:CreateAccountScreen\\:CreateAccountDV\\:CreateAccountContactInputSet\\:GlobalPersonNameInputSet\\:FirstName-inputEl';
	 this.lastName= '#CreateAccount\\:CreateAccountScreen\\:CreateAccountDV\\:CreateAccountContactInputSet\\:GlobalPersonNameInputSet\\:LastName-inputEl';
	 this.address1= '#CreateAccount\\:CreateAccountScreen\\:CreateAccountDV\\:AddressInputSet\\:globalAddressContainer\\:GlobalAddressInputSet\\:AddressLine1-inputEl';
	 this.city= '#CreateAccount\\:CreateAccountScreen\\:CreateAccountDV\\:AddressInputSet\\:globalAddressContainer\\:GlobalAddressInputSet\\:City-inputEl';
	 this.postcode= '#CreateAccount\\:CreateAccountScreen\\:CreateAccountDV\\:AddressInputSet\\:globalAddressContainer\\:GlobalAddressInputSet\\:PostalCode-inputEl';
	 this.addressType= '#CreateAccount\\:CreateAccountScreen\\:CreateAccountDV\\:AddressType-inputEl';
	 this.origanization= '#CreateAccount\\:CreateAccountScreen\\:CreateAccountDV\\:ProducerSelectionInputSet\\:Producer\\:SelectOrganization';
	 this.origanizationType= '#OrganizationSearchPopup\\:OrganizationSearchPopupScreen\\:OrganizationSearchDV\\:Type-inputEl';
	 this.searchOriganization= '#OrganizationSearchPopup\\:OrganizationSearchPopupScreen\\:OrganizationSearchDV\\:SearchAndResetInputSet\\:SearchLinksInputSet\\:Search';
	 this.selectOriganization= '#OrganizationSearchPopup\\:OrganizationSearchPopupScreen\\:OrganizationSearchResultsLV\\:0\\:_Select';
	 this.producerCode= '#CreateAccount\\:CreateAccountScreen\\:CreateAccountDV\\:ProducerSelectionInputSet\\:ProducerCode-inputEl';
	 this.update= '#CreateAccount\\:CreateAccountScreen\\:Update-btnInnerEl';
	 this.accountName= '#AccountFile_Summary\\:AccountFile_SummaryScreen\\:AccountFile_Summary_BasicInfoDV\\:Name-inputEl';
	 this.accountNumber= '#AccountFile_Summary\\:AccountFile_SummaryScreen\\:AccountFile_Summary_BasicInfoDV\\:AccountNumber-inputEl';
	 this.accountStatus= '#AccountFile_Summary\\:AccountFile_SummaryScreen\\:AccountFile_Summary_BasicInfoDV\\:AccountStatus-inputEl';


}

async accountCreationPC(){

    await this.page.locator(this.actionBtn).click();
    await this.page.locator(this.accountCeation).click();
    await this.page.locator(this.companyName).fill('test');
    await this.page.locator(this.search).click();
    await this.page.locator(this.newAccount).click();
    await this.page.locator(this.person).click();
    await this.page.locator(this.firstName).fill('Test');
    await this.page.locator(this.lastName).fill('Automation');
    await this.page.locator(this.address1).fill('1A');
    await this.page.locator(this.city).fill('Alys Beach');
    await this.page.locator(this.city).press('Enter');
  //  await this.page.locator(this.postcode).fill('');
    await this.page.locator(this.addressType).fill('Billing');
    await this.page.locator(this.origanization).click();
    await this.page.locator(this.origanizationType).fill('Insurer');
    await this.page.locator(this.searchOriganization).click();
    await this.page.locator(this.selectOriganization).click();
	await this.page.locator(this.producerCode).fill('Standard Code Internal Producer Code - 1');
	await this.page.locator(this.update).click();
	await this.page.waitForTimeout(3000);
	await this.page.screenshot({ path: 'AccNo Page.png' });
	const accNo = await this.page.locator(this.accountNumber).textContent();
	const accStatus = await this.page.locator(this.accountStatus).textContent();
	console.log("Account Number is "+ accNo);
	console.log("Account Status is "+ accStatus);

}




}